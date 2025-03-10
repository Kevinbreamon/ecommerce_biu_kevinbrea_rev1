import './bootstrap';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './Context/AuthContext';

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
        const Component = pages[`./Pages/${name}.jsx`]?.default || (() => null);

        if (name === 'Admin') {
            const PrivateRoute = require('./routes/PrivateRoute').default;
            return (props) => (
                <PrivateRoute>
                    <Component {...props} />
                </PrivateRoute>
            );
        }

        return Component;
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <AuthProvider>
                <App {...props} />
            </AuthProvider>
        );
    },
});
