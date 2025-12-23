import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export interface SimpleNotification {
    id: string;
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
    timestamp: Date;
}

interface NotificationContextType {
    notifications: SimpleNotification[];
    addNotification: (message: string, type: SimpleNotification['type']) => void;
    removeNotification: (id: string) => void;
    clearAll: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [notifications, setNotifications] = useState<SimpleNotification[]>([]);

    const addNotification = (message: string, type: SimpleNotification['type']) => {
        const newNotification: SimpleNotification = {
            id: Date.now().toString(),
            message,
            type,
            timestamp: new Date()
        };
        setNotifications(prev => [newNotification, ...prev]);
    };

    const removeNotification = (id: string) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    };

    const clearAll = () => {
        setNotifications([]);
    };

    return (
        <NotificationContext.Provider value={{ notifications, addNotification, removeNotification, clearAll }}>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotifications = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotifications must be used within NotificationProvider');
    }
    return context;
};
