import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { router } from '@inertiajs/react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('/user')
            .then(response => setUser(response.data))
            .catch(() => setUser(null));
    }, []);

    const login = async (credentials) => {
        await axios.post('/login', credentials);
        const { data } = await axios.get('/user');
        setUser(data);
        router.visit('/admin'); // Redirigir al dashboard tras iniciar sesión
    };

    const logout = async () => {
        await axios.post('/logout');
        setUser(null);
        router.visit('/login'); // Redirigir al login tras cerrar sesión
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
