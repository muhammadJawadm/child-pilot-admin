import React, { useEffect } from 'react';
import { FiCheckCircle, FiAlertCircle, FiInfo, FiX } from 'react-icons/fi';
import type { SimpleNotification } from '../../context/SimpleNotificationContext';

interface ToastProps {
    notification: SimpleNotification;
    onClose: () => void;
}


const Toast: React.FC<ToastProps> = ({ notification, onClose }) => {
    // Auto-dismiss toast after 60 seconds (notification stays in list)
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 60000); // 1 minute
        return () => clearTimeout(timer);
    }, [onClose]);
    const getIcon = () => {
        switch (notification.type) {
            case 'success':
                return <FiCheckCircle className="text-green-500" size={20} />;
            case 'error':
                return <FiAlertCircle className="text-red-500" size={20} />;
            case 'warning':
                return <FiAlertCircle className="text-orange-500" size={20} />;
            default:
                return <FiInfo className="text-blue-500" size={20} />;
        }
    };

    const getStyles = () => {
        switch (notification.type) {
            case 'success':
                return 'bg-green-50 border-green-200';
            case 'error':
                return 'bg-red-50 border-red-200';
            case 'warning':
                return 'bg-orange-50 border-orange-200';
            default:
                return 'bg-blue-50 border-blue-200';
        }
    };

    return (
        <div className={`flex items-center gap-3 p-4 rounded-lg border ${getStyles()} shadow-lg mb-3 animate-slide-in-right`}>
            {getIcon()}
            <p className="flex-1 text-sm font-medium text-gray-900">{notification.message}</p>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                <FiX size={18} />
            </button>
        </div>
    );
};

export default Toast;
