<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;


/*Route::post('/chatbot', function (Request $request) {
    // Verifica que la clave API esté definida correctamente
    $apiKey = config('services.openai.key');

    if (!$apiKey) {
        Log::error('Clave API de OpenAI no encontrada');
        return response()->json(['error' => 'API key is missing'], 500);
    }

    Log::info('Usando clave API de OpenAI: ' . substr($apiKey, 0, 5) . '...'); // Solo muestra una parte por seguridad

    $userMessage = $request->input('message');

    try {
        // Llamada a OpenAI API
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $apiKey,
            'Content-Type' => 'application/json',
        ])->post('https://api.openai.com/v1/chat/completions', [
            'model' => 'gpt-3.5-turbo',
            'messages' => [
                ['role' => 'system', 'content' => 'You are a helpful assistant.'],
                ['role' => 'user', 'content' => $userMessage]
            ],
            'max_tokens' => 150,
        ]);

        // Verifica si la respuesta fue exitosa
        if (!$response->successful()) {
            Log::error('Error en la respuesta de OpenAI: ' . $response->body());
            return response()->json(['reply' => 'Error connecting to OpenAI.'], 500);
        }

        return response()->json([
            'reply' => $response->json('choices.0.message.content') ?? 'No se pudo generar una respuesta.'
        ]);

    } catch (\Exception $e) {
        Log::error('Excepción al conectar con OpenAI: ' . $e->getMessage());
        return response()->json(['reply' => 'Error en la conexión con OpenAI.'], 500);
    }
});*/

Route::post('/chatbot', function (Request $request) {
    $apiKey = env('OPENAI_API_KEY');
    $assistantId = env('OPENAI_ASSISTANT_ID');

    if (!$apiKey || !$assistantId) {
        Log::error('API Key o Assistant ID no configurados.');
        return response()->json(['error' => 'API key o Assistant ID faltantes'], 500);
    }

    $userMessage = $request->input('message');

    try {
        // 1️⃣ Crear un nuevo thread
        $threadResponse = Http::withHeaders([
            'Authorization' => 'Bearer ' . $apiKey,
            'OpenAI-Beta' => 'assistants=v2',
            'Content-Type' => 'application/json',
        ])->timeout(30)
        ->post('https://api.openai.com/v1/threads', []);

        if (!$threadResponse->successful()) {
            Log::error('Error al crear thread: ' . $threadResponse->body());
            return response()->json(['reply' => 'Error al crear el thread.'], 500);
        }

        $threadId = $threadResponse->json('id');

        // 2️⃣ Enviar el mensaje del usuario al thread
        $messageResponse = Http::withHeaders([
            'Authorization' => 'Bearer ' . $apiKey,
            'OpenAI-Beta' => 'assistants=v2',
            'Content-Type' => 'application/json',
        ])->timeout(30)
        ->post("https://api.openai.com/v1/threads/$threadId/messages", [
            'role' => 'user',
            'content' => $userMessage
        ]);

        if (!$messageResponse->successful()) {
            Log::error('Error al enviar mensaje. Respuesta completa: ', $messageResponse->json());
            return response()->json(['reply' => 'Error al enviar el mensaje.'], 500);
        }

        // 3️⃣ Ejecutar el Assistant en el thread
        $runResponse = Http::withHeaders([
            'Authorization' => 'Bearer ' . $apiKey,
            'OpenAI-Beta' => 'assistants=v2',
            'Content-Type' => 'application/json',
        ])->timeout(30)
        ->post("https://api.openai.com/v1/threads/$threadId/runs", [
            'assistant_id' => $assistantId
        ]);

        if (!$runResponse->successful()) {
            Log::error('Error al ejecutar el Assistant: ' . $runResponse->body());
            return response()->json(['reply' => 'Error al ejecutar el Assistant.'], 500);
        }

        $runId = $runResponse->json('id');

        // 4️⃣ Esperar a que la ejecución termine (Polling)
        $maxAttempts = 10;
        $attempt = 0;
        $status = 'queued';

        while ($attempt < $maxAttempts && in_array($status, ['queued', 'in_progress'])) {
            sleep(2);

            $runStatusResponse = Http::withHeaders([
                'Authorization' => 'Bearer ' . $apiKey,
                'OpenAI-Beta' => 'assistants=v2',
                'Content-Type' => 'application/json',
            ])->timeout(30)
            ->get("https://api.openai.com/v1/threads/$threadId/runs/$runId");

            if (!$runStatusResponse->successful()) {
                Log::error('Error al verificar el estado del run: ' . $runStatusResponse->body());
                return response()->json(['reply' => 'Error al verificar el estado del Assistant.'], 500);
            }

            $status = $runStatusResponse->json('status');
            if ($status === 'completed') {
                break;
            }
            $attempt++;
        }

        if ($status !== 'completed') {
            Log::error('El Assistant tardó demasiado en responder.');
            return response()->json(['reply' => 'Tiempo de espera agotado.'], 500);
        }

        // 5️⃣ Obtener los mensajes de respuesta del Assistant
        $messagesResponse = Http::withHeaders([
            'Authorization' => 'Bearer ' . $apiKey,
            'OpenAI-Beta' => 'assistants=v2',
            'Content-Type' => 'application/json',
        ])->timeout(30)
        ->get("https://api.openai.com/v1/threads/$threadId/messages");

        if (!$messagesResponse->successful()) {
            Log::error('Error al obtener mensajes: ' . $messagesResponse->body());
            return response()->json(['reply' => 'Error al obtener la respuesta del Assistant.'], 500);
        }

        // 🔍 LOG para depuración de respuesta de OpenAI
        Log::error('Datos devueltos: ', ['data' => $messagesResponse->json()]);

        // Obtener el último mensaje del Assistant
        $messages = $messagesResponse->json('data');
        $assistantReply = '';

        foreach (array_reverse($messages) as $msg) {
            if ($msg['role'] === 'assistant') {
                if (is_array($msg['content'])) {
                    // Extraer el texto correctamente
                    $assistantReply = implode("\n", array_map(fn($c) => $c['text']['value'] ?? '', $msg['content']));
                }
                break;
            }
        }

        return response()->json(['reply' => $assistantReply ?: 'No se obtuvo respuesta.']);

    } catch (\Exception $e) {
        Log::error('Excepción al conectar con OpenAI: ' . $e->getMessage());
        return response()->json(['reply' => 'Error en la conexión con OpenAI.'], 500);
    }
});

Route::get('/products/export', [ProductController::class, 'exportCSV'])->name('products.export');
Route::get('/products/export-json', [ProductController::class, 'exportJSON']);