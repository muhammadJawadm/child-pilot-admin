import React, { useState, useEffect } from 'react';
import { useNotifications } from '../../context/SimpleNotificationContext';
import Toast from './Toast';

const ToastContainer: React.FC = () => {
    const { notifications } = useNotifications();
    const [dismissedToastIds, setDismissedToastIds] = useState<Set<string>>(new Set());

    // Reset dismissed toasts when notifications change (new notification added)
    useEffect(() => {
        const currentNotificationIds = new Set(notifications.map(n => n.id));
        setDismissedToastIds(prev => {
            const newSet = new Set(prev);
            // Remove dismissed IDs that are no longer in notifications
            newSet.forEach(id => {
                if (!currentNotificationIds.has(id)) {
                    newSet.delete(id);
                }
            });
            return newSet;
        });
    }, [notifications]);

    const handleToastClose = (id: string) => {
        // Just hide the toast, don't remove from notifications
        setDismissedToastIds(prev => new Set(prev).add(id));
    };

    // Filter out dismissed toasts and show only the first 3
    const visibleToasts = notifications
        .filter(n => !dismissedToastIds.has(n.id))
        .slice(0, 3);

    return (
        <div className="fixed top-4 right-4 z-50 w-96">
            {visibleToasts.map(notification => (
                <Toast
                    key={notification.id}
                    notification={notification}
                    onClose={() => handleToastClose(notification.id)}
                />
            ))}
        </div>
    );
};

export default ToastContainer;
