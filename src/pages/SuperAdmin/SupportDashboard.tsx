import React, { useState } from 'react';
import Header from '../../layouts/partials/Header';
import { FiSearch, FiAlertTriangle } from 'react-icons/fi';

const SupportDashboard: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const supportTickets = [
        { id: 1, tenant: 'Sunshine Daycare', issue: 'Login Issues', priority: 'High', status: 'Open', created: '2 hours ago' },
        { id: 2, tenant: 'Little Stars', issue: 'Billing Question', priority: 'Medium', status: 'In Progress', created: '1 day ago' },
        { id: 3, tenant: 'Happy Kids', issue: 'Feature Request', priority: 'Low', status: 'Resolved', created: '3 days ago' },
    ];

    const errorLogs = [
        { id: 1, tenant: 'Rainbow Learning', error: 'Payment processing failed', time: '10 min ago', severity: 'High' },
        { id: 2, tenant: 'Bright Futures', error: 'Email delivery timeout', time: '1 hour ago', severity: 'Medium' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Header header="Support Dashboard" link="/" />

            <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6">
                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-6">
                    <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                        <p className="text-sm text-gray-600 mb-1">Open Tickets</p>
                        <p className="text-4xl font-bold text-red-600">12</p>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                        <p className="text-sm text-gray-600 mb-1">In Progress</p>
                        <p className="text-4xl font-bold text-orange-600">8</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                        <p className="text-sm text-gray-600 mb-1">Resolved Today</p>
                        <p className="text-4xl font-bold text-green-600">15</p>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                        <p className="text-sm text-gray-600 mb-1">Avg Response Time</p>
                        <p className="text-4xl font-bold text-blue-600">2.5h</p>
                    </div>
                </div>

                {/* Active Tickets */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
                    <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-800">Active Support Tickets</h3>
                        <div className="relative">
                            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search tickets"
                                className="pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">Tenant</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">Issue</th>
                                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600">Priority</th>
                                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">Created</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {supportTickets.map(ticket => (
                                <tr key={ticket.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900">{ticket.tenant}</td>
                                    <td className="px-6 py-4 text-gray-600">{ticket.issue}</td>
                                    <td className="px-6 py-4 text-center">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${ticket.priority === 'High' ? 'bg-red-100 text-red-700' :
                                            ticket.priority === 'Medium' ? 'bg-orange-100 text-orange-700' :
                                                'bg-blue-100 text-blue-700'
                                            }`}>
                                            {ticket.priority}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${ticket.status === 'Resolved' ? 'bg-green-100 text-green-700' :
                                            ticket.status === 'In Progress' ? 'bg-orange-100 text-orange-700' :
                                                'bg-red-100 text-red-700'
                                            }`}>
                                            {ticket.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500 text-xs">{ticket.created}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Error Logs */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                    <div className="p-6 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800">Recent Error Logs</h3>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {errorLogs.map(log => (
                            <div key={log.id} className="p-6 hover:bg-gray-50 flex items-start gap-4">
                                <FiAlertTriangle className={log.severity === 'High' ? 'text-red-500' : 'text-orange-500'} size={20} />
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <h4 className="font-semibold text-gray-900">{log.tenant}</h4>
                                        <span className="text-xs text-gray-500">{log.time}</span>
                                    </div>
                                    <p className="text-sm text-gray-600">{log.error}</p>
                                    <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${log.severity === 'High' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                                        }`}>
                                        {log.severity} Severity
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportDashboard;
