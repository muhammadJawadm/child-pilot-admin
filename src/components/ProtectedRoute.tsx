import { Navigate } from 'react-router-dom';
import { useRole } from '../context/RoleContext';
import RootLayout from '../layouts/RootLayout';

const ProtectedRoute = () => {
    const { user } = useRole();

    // If no user is logged in, redirect to login
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // If user is logged in, render the layout
    return <RootLayout />;
};

export default ProtectedRoute;
