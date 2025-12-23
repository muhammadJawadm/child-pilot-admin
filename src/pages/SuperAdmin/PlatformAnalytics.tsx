import React, { useState } from 'react';
import Header from '../../layouts/partials/Header';
import { FiUsers, FiTrendingUp, FiActivity } from 'react-icons/fi';

const PlatformAnalytics: React.FC = () => {
    const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '1y'>('30d');

    const stats = {
        totalUsers: 25678,
        directors: 145,
        staff: 1234,
        parents: 3456,
        children: 20843,
        activeTenants: 125,
        inactiveTenants: 20,
        growthRate: 15.3,
        churnRate: 2.1
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header header="Platform Analytics" link="/" />

            <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6">
                {/* Time Range Selector */}
                <div className="flex justify-end mb-6">
                    <select
                        value={timeRange}
                        onChange={(e) => setTimeRange(e.target.value as any)}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-sm"
                    >
                        <option value="7d">Last 7 Days</option>
                        <option value="30d">Last 30 Days</option>
                        <option value="90d">Last 90 Days</option>
                        <option value="1y">Last  Year</option>
                    </select>
                </div>

                {/* User Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                        <div className="flex items-center justify-between mb-2">
                            <FiUsers className="text-blue-500" size={24} />
                        </div>
                        <p className="text-3xl font-bold text-gray-900">{stats.totalUsers.toLocaleString()}</p>
                        <p className="text-sm text-gray-600 mt-1">Total Users</p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                        <p className="text-3xl font-bold text-gray-900">{stats.directors}</p>
                        <p className="text-sm text-gray-600 mt-1">Directors</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                        <p className="text-3xl font-bold text-gray-900">{stats.staff.toLocaleString()}</p>
                        <p className="text-sm text-gray-600 mt-1">Staff Members</p>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                        <p className="text-3xl font-bold text-gray-900">{stats.parents.toLocaleString()}</p>
                        <p className="text-sm text-gray-600 mt-1">Parents</p>
                    </div>
                </div>

                {/* Tenant Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Tenant Status</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-gray-600">Active Tenants</span>
                                    <span className="text-sm font-semibold text-green-600">{stats.activeTenants}</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: `${(stats.activeTenants / (stats.activeTenants + stats.inactiveTenants)) * 100}%` }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-gray-600">Inactive Tenants</span>
                                    <span className="text-sm font-semibold text-red-600">{stats.inactiveTenants}</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-red-500 h-2 rounded-full" style={{ width: `${(stats.inactiveTenants / (stats.activeTenants + stats.inactiveTenants)) * 100}%` }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Growth Metrics</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <FiTrendingUp className="text-green-500" />
                                    <span className="text-sm text-gray-600">Growth Rate</span>
                                </div>
                                <span className="text-lg font-bold text-green-600">+{stats.growthRate}%</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <FiActivity className="text-red-500" />
                                    <span className="text-sm text-gray-600">Churn Rate</span>
                                </div>
                                <span className="text-lg font-bold text-red-600">{stats.churnRate}%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* System-Wide Statistics */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-6">System-Wide Statistics</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="text-center">
                            <p className="text-4xl font-bold text-blue-600">{stats.children.toLocaleString()}</p>
                            <p className="text-sm text-gray-600 mt-2">Total Children Enrolled</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold text-purple-600">$2.4M</p>
                            <p className="text-sm text-gray-600 mt-2">Total Revenue (Annual)</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold text-green-600">98.5%</p>
                            <p className="text-sm text-gray-600 mt-2">Platform Uptime</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlatformAnalytics;
