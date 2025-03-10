import { useAuth } from '../Context/AuthContext';
import { router } from '@inertiajs/react';
import { useEffect } from 'react';

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();

    useEffect(() => {
        if (!user) {
            router.visit('/login');
        } else if (user.email !== 'kevinbreamon@gmail.com') {
            router.visit('/');
        }
    }, [user]);

    return user && user.email === 'kevinbreamon@gmail.com' ? children : null;
};

export default PrivateRoute;
