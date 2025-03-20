import { useState } from "react";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";
import axios from "axios";



const Chatbot = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Welcome to Brea's Style! What are you looking for?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    try {
        const response = await axios.post("http://localhost:8000/api/chatbot", { message: input });
      setMessages([...newMessages, { text: response.data.reply, sender: "bot" }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([...newMessages, { text: "Oops! Something went wrong.", sender: "bot" }]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-9">
      {/* Botón flotante */}
      {!isOpen && (
        <button
          className="w-14 h-14 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg"
          onClick={toggleChat}
        >
          <FaComments size={24} />
        </button>
      )}

      {/* Chatbox */}
      {isOpen && (
        <div className="w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col border border-gray-300">
          {/* Encabezado */}
          <div className="bg-gray-800 text-white p-4 flex justify-between items-center rounded-t-lg">
            <span className="font-semibold">Chat Support</span>
            <FaTimes className="cursor-pointer" onClick={toggleChat} />
          </div>

          {/* Mensajes */}
          <div className="flex-1 p-3 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`p-2 my-1 rounded-lg text-sm max-w-xs ${msg.sender === "bot" ? "bg-gray-200" : "bg-gray-800 text-white self-end"}`}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex">
            <input
              type="text"
              className="flex-1 p-2 border rounded-l-lg outline-none"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="bg-gray-800 text-white p-3 rounded-r-lg"
              onClick={sendMessage}
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
