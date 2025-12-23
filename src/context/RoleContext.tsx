import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export type UserRole = 'super-admin';

export interface User {
    id: number;
    email: string;
    name: string;
    role: UserRole;
    avatar: string;
}

interface RoleContextType {
    user: User | null;
    role: UserRole | null;
    login: (user: User) => void;
    logout: () => void;
    isSuperAdmin: boolean;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

interface RoleProviderProps {
    children: ReactNode;
}

export const RoleProvider: React.FC<RoleProviderProps> = ({ children }) => {
    // Check localStorage for saved user
    const [user, setUser] = useState<User | null>(() => {
        const savedUser = localStorage.getItem('currentUser');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    // Persist user to localStorage
    useEffect(() => {
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
        } else {
            localStorage.removeItem('currentUser');
        }
    }, [user]);

    const login = (userData: User) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('currentUser');
    };

    const value: RoleContextType = {
        user,
        role: user?.role || null,
        login,
        logout,
        isSuperAdmin: user?.role === 'super-admin',
    };

    return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
};

export const useRole = (): RoleContextType => {
    const context = useContext(RoleContext);
    if (context === undefined) {
        throw new Error('useRole must be used within a RoleProvider');
    }
    return context;
};
