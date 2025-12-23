import React, { useState } from 'react';
import Header from '../../layouts/partials/Header';
import { useNotifications } from '../../context/SimpleNotificationContext';
import type { SimpleNotification } from '../../context/SimpleNotificationContext';
import { FiCheckCircle, FiAlertCircle, FiInfo, FiTrash2, FiBell, FiChevronDown } from 'react-icons/fi';

// Notification templates
const notificationTemplates = [
    { id: 'custom', label: 'Custom Message', message: '', type: 'info' as const },
    { id: 'tenant_success', label: 'Tenant Onboarded Successfully', message: 'New tenant onboarded successfully', type: 'success' as const },
    { id: 'payment_failed', label: 'Payment Failed', message: 'Payment failed for Sunshine Daycare', type: 'error' as const },
    { id: 'server_warning', label: 'Server Resources Low', message: 'Server resources running low', type: 'warning' as const },
    { id: 'update_available', label: 'System Update Available', message: 'System update available', type: 'info' as const },
    { id: 'new_user', label: 'New User Registered', message: 'A new user has registered', type: 'success' as const },
    { id: 'backup_complete', label: 'Backup Completed', message: 'System backup completed successfully', type: 'success' as const },
    { id: 'license_expiring', label: 'License Expiring Soon', message: 'Your license will expire in 7 days', type: 'warning' as const },
    { id: 'maintenance', label: 'Scheduled Maintenance', message: 'Scheduled maintenance tonight at 2 AM', type: 'info' as const },
    { id: 'security_alert', label: 'Security Alert', message: 'Unusual login activity detected', type: 'error' as const },
];

const NotificationsPage: React.FC = () => {
    const { notifications, removeNotification, clearAll, addNotification } = useNotifications();
    const [selectedTemplate, setSelectedTemplate] = useState(notificationTemplates[0]);
    const [customMessage, setCustomMessage] = useState('');
    const [selectedType, setSelectedType] = useState<SimpleNotification['type']>('info');
    const [showTemplateDropdown, setShowTemplateDropdown] = useState(false);

    const getIcon = (type: string) => {
        switch (type) {
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

    const formatTime = (date: Date) => {
        return new Date(date).toLocaleString();
    };

    const handleTemplateSelect = (template: typeof notificationTemplates[0]) => {
        setSelectedTemplate(template);
        setShowTemplateDropdown(false);
        if (template.id !== 'custom') {
            setCustomMessage(template.message);
            setSelectedType(template.type);
        } else {
            setCustomMessage('');
        }
    };

    const handleAddNotification = () => {
        const message = selectedTemplate.id === 'custom' ? customMessage : selectedTemplate.message;
        if (message.trim()) {
            addNotification(message, selectedType);
            // Reset form
            setSelectedTemplate(notificationTemplates[0]);
            setCustomMessage('');
            setSelectedType('info');
        }
    };

    const getTypeButtonClass = (type: SimpleNotification['type']) => {
        const baseClass = "px-4 py-2 rounded-lg font-medium transition-all";
        if (selectedType === type) {
            switch (type) {
                case 'success':
                    return `${baseClass} bg-green-500 text-white`;
                case 'error':
                    return `${baseClass} bg-red-500 text-white`;
                case 'warning':
                    return `${baseClass} bg-orange-500 text-white`;
                case 'info':
                    return `${baseClass} bg-blue-500 text-white`;
            }
        }
        return `${baseClass} bg-gray-100 text-gray-600 hover:bg-gray-200`;
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header header="Notifications" link="/" />

            <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6">
                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                        <p className="text-sm text-gray-600 mb-1">Total Notifications</p>
                        <p className="text-4xl font-bold text-blue-600">{notifications.length}</p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                        <p className="text-sm text-gray-600 mb-1">Recent (24h)</p>
                        <p className="text-4xl font-bold text-purple-600">{notifications.filter(n => {
                            const hoursDiff = (new Date().getTime() - new Date(n.timestamp).getTime()) / (1000 * 60 * 60);
                            return hoursDiff < 24;
                        }).length}</p>
                    </div>
                </div>

                {/* Add Custom Notification Form */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Add Notification</h2>

                    {/* Template Dropdown */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Select Template or Custom
                        </label>
                        <div className="relative">
                            <button
                                onClick={() => setShowTemplateDropdown(!showTemplateDropdown)}
                                className="w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-gray-900">{selectedTemplate.label}</span>
                                <FiChevronDown className={`transition-transform ${showTemplateDropdown ? 'rotate-180' : ''}`} />
                            </button>

                            {showTemplateDropdown && (
                                <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto">
                                    {notificationTemplates.map((template) => (
                                        <button
                                            key={template.id}
                                            onClick={() => handleTemplateSelect(template)}
                                            className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                                        >
                                            <div className="font-medium text-gray-900">{template.label}</div>
                                            {template.message && (
                                                <div className="text-sm text-gray-500 mt-1">{template.message}</div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Custom Message Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            {selectedTemplate.id === 'custom' ? 'Custom Message' : 'Message (Edit if needed)'}
                        </label>
                        <textarea
                            value={customMessage}
                            onChange={(e) => setCustomMessage(e.target.value)}
                            placeholder="Type your custom notification message here..."
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            rows={3}
                        />
                    </div>

                    {/* Notification Type */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Notification Type
                        </label>
                        <div className="flex flex-wrap gap-3">
                            <button
                                onClick={() => setSelectedType('success')}
                                className={getTypeButtonClass('success')}
                            >
                                <div className="flex items-center gap-2">
                                    <FiCheckCircle size={18} />
                                    Success
                                </div>
                            </button>
                            <button
                                onClick={() => setSelectedType('error')}
                                className={getTypeButtonClass('error')}
                            >
                                <div className="flex items-center gap-2">
                                    <FiAlertCircle size={18} />
                                    Error
                                </div>
                            </button>
                            <button
                                onClick={() => setSelectedType('warning')}
                                className={getTypeButtonClass('warning')}
                            >
                                <div className="flex items-center gap-2">
                                    <FiAlertCircle size={18} />
                                    Warning
                                </div>
                            </button>
                            <button
                                onClick={() => setSelectedType('info')}
                                className={getTypeButtonClass('info')}
                            >
                                <div className="flex items-center gap-2">
                                    <FiInfo size={18} />
                                    Info
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Add Button */}
                    <button
                        onClick={handleAddNotification}
                        disabled={!customMessage.trim()}
                        className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors"
                    >
                        Add Notification
                    </button>
                </div>

                {/* Actions */}
                <div className="flex justify-end items-center mb-6">
                    {notifications.length > 0 && (
                        <button
                            onClick={clearAll}
                            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-colors flex items-center gap-2"
                        >
                            <FiTrash2 size={16} />
                            Clear All Notifications
                        </button>
                    )}
                </div>

                {/* Notifications List */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    {notifications.length === 0 ? (
                        <div className="p-12 text-center text-gray-500">
                            <FiBell className="mx-auto mb-4 text-gray-300" size={60} />
                            <p className="text-lg font-medium">No notifications</p>
                            <p className="text-sm mt-1">Add a notification using the form above!</p>
                        </div>
                    ) : (
                        <div className="divide-y divide-gray-100">
                            {notifications.map((notification) => (
                                <div key={notification.id} className="p-6 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            {getIcon(notification.type)}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-base text-gray-900 mb-1">{notification.message}</p>
                                            <p className="text-xs text-gray-400">{formatTime(notification.timestamp)}</p>
                                        </div>
                                        <button
                                            onClick={() => removeNotification(notification.id)}
                                            className="text-gray-400 hover:text-red-500 transition-colors"
                                        >
                                            <FiTrash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NotificationsPage;
