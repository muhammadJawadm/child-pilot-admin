import React, { useState } from 'react';
import { FiX, FiClock, FiUser, FiEye } from 'react-icons/fi';

interface AuditTrail {
    id: number;
    timestamp: string;
    admin: string;
    action: string;
    tenant: string;
    details: string;
}

interface AuditTrailViewerProps {
    onClose: () => void;
}

const AuditTrailViewer: React.FC<AuditTrailViewerProps> = ({ onClose }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const auditLogs: AuditTrail[] = [
        { id: 1, timestamp: '2025-12-23 10:30 AM', admin: 'Robert Fox', action: 'Viewed Tenant Data', tenant: 'Sunshine Daycare', details: 'Accessed billing information' },
        { id: 2, timestamp: '2025-12-23 09:15 AM', admin: 'Robert Fox', action: 'Modified Settings', tenant: 'Little Stars', details: 'Changed subscription tier to Pro' },
        { id: 3, timestamp: '2025-12-22 04:45 PM', admin: 'Robert Fox', action: 'Suspended Tenant', tenant: 'Happy Kids', details: 'Payment overdue by 30 days' },
    ];

    const filteredLogs = auditLogs.filter(log =>
        log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.tenant.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900">Audit Trail</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <FiX size={24} />
                    </button>
                </div>

                <div className="p-6 border-b border-gray-200">
                    <input
                        type="text"
                        placeholder="Search audit logs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                </div>

                <div className="flex-1 overflow-y-auto">
                    {filteredLogs.map(log => (
                        <div key={log.id} className="p-6 border-b border-gray-100 hover:bg-gray-50">
                            <div className="flex items-start gap-4">
                                <FiEye className="text-blue-500 mt-1" size={20} />
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{log.action}</h4>
                                            <p className="text-sm text-gray-600 mt-1">{log.details}</p>
                                        </div>
                                        <span className="text-xs text-gray-500 whitespace-nowrap ml-4">
                                            <FiClock className="inline mr-1" />
                                            {log.timestamp}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <span><FiUser className="inline mr-1" />{log.admin}</span>
                                        <span>•</span>
                                        <span className="font-medium text-gray-700">{log.tenant}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-6 border-t border-gray-200 bg-gray-50">
                    <button
                        onClick={onClose}
                        className="w-full px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuditTrailViewer;
