import React from 'react';
import Header from '../../layouts/partials/Header';
import { FiServer, FiDatabase, FiCpu, FiActivity, FiHardDrive, FiShield } from 'react-icons/fi';

const SystemHealth: React.FC = () => {
    const systemMetrics = {
        serverUptime: '99.9%',
        cpu: 45,
        memory: 62,
        database: 'Healthy',
        apiCalls: '1.2M',
        errorRate: '0.02%',
        backupStatus: 'Success',
        lastBackup: '2 hours ago'
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header header="System Health" link="/" />

            <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6">
                {/* Overall Status */}
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-8 mb-6 border border-green-200">
                    <div className="flex items-center gap-4">
                        <div className="bg-green-500 rounded-full p-4">
                            <FiActivity className="text-white" size={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">All Systems Operational</h2>
                            <p className="text-gray-600 mt-1">System is running smoothly with no critical issues</p>
                        </div>
                    </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {/* Server Performance */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <FiServer className="text-blue-600" size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Server Uptime</h3>
                                <p className="text-2xl font-bold text-blue-600">{systemMetrics.serverUptime}</p>
                            </div>
                        </div>
                    </div>

                    {/* Database Status */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-green-100 p-3 rounded-lg">
                                <FiDatabase className="text-green-600" size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Database Status</h3>
                                <p className="text-2xl font-bold text-green-600">{systemMetrics.database}</p>
                            </div>
                        </div>
                    </div>

                    {/* API Calls */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-purple-100 p-3 rounded-lg">
                                <FiActivity className="text-purple-600" size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">API Calls (24h)</h3>
                                <p className="text-2xl font-bold text-purple-600">{systemMetrics.apiCalls}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Resource Usage */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Resource Usage</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <FiCpu className="text-blue-500" />
                                        <span className="text-sm text-gray-600">CPU Usage</span>
                                    </div>
                                    <span className="text-sm font-semibold text-gray-900">{systemMetrics.cpu}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${systemMetrics.cpu}%` }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <FiHardDrive className="text-green-500" />
                                        <span className="text-sm text-gray-600">Memory Usage</span>
                                    </div>
                                    <span className="text-sm font-semibold text-gray-900">{systemMetrics.memory}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: `${systemMetrics.memory}%` }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Backup & Security</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Backup Status</span>
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                    {systemMetrics.backupStatus}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Last Backup</span>
                                <span className="text-sm font-semibold text-gray-900">{systemMetrics.lastBackup}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Error Rate</span>
                                <span className="text-sm font-semibold text-green-600">{systemMetrics.errorRate}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Security Alerts */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <FiShield className="text-green-500" size={24} />
                        <h3 className="text-lg font-semibold text-gray-800">Security Status</h3>
                    </div>
                    <p className="text-sm text-gray-600">No security alerts. All systems secure.</p>
                </div>
            </div>
        </div>
    );
};

export default SystemHealth;
