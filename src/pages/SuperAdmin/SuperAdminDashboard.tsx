import React from 'react';
import Header from '../../layouts/partials/Header';
import { FaBuilding, FaUserTie, FaChild, FaCheckCircle } from 'react-icons/fa';

interface DaycareStats {
    totalDaycares: number;
    totalStaff: number;
    totalChildren: number;
    pendingApprovals: number;
}

const SuperAdminDashboard: React.FC = () => {
    // Sample stats data
    const stats: DaycareStats = {
        totalDaycares: 145,
        totalStaff: 1234,
        totalChildren: 3456,
        pendingApprovals: 12,
    };

    // Monthly data for charts
    const monthlyRevenue = [28000, 32000, 35000, 38000, 42000, 45000, 48000, 52000, 55000, 58000, 62000, 65000];
    const daycareGrowth = [120, 125, 128, 132, 135, 138, 140, 142, 143, 145, 145, 145];

    return (
        <div className="min-h-screen bg-gray-50">
            <Header header="Super Admin Dashboard" link="" />

            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-6 space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Total Daycares */}
                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                        <div className="flex items-start justify-between mb-4">
                            <div className="bg-blue-200 text-blue-600 p-3 rounded-full">
                                <FaBuilding className="w-5 h-5" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stats.totalDaycares}</h3>
                            <p className="text-sm font-semibold text-gray-700 mb-1">Total Daycares</p>
                            <p className="text-xs text-gray-500">Registered on platform</p>
                        </div>
                    </div>

                    {/* Total Staff */}
                    <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                        <div className="flex items-start justify-between mb-4">
                            <div className="bg-purple-200 text-purple-600 p-3 rounded-full">
                                <FaUserTie className="w-5 h-5" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stats.totalStaff.toLocaleString()}</h3>
                            <p className="text-sm font-semibold text-gray-700 mb-1">Total Staff</p>
                            <p className="text-xs text-gray-500">Across all daycares</p>
                        </div>
                    </div>

                    {/* Total Children */}
                    <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                        <div className="flex items-start justify-between mb-4">
                            <div className="bg-green-200 text-green-600 p-3 rounded-full">
                                <FaChild className="w-5 h-5" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stats.totalChildren.toLocaleString()}</h3>
                            <p className="text-sm font-semibold text-gray-700 mb-1">Total Children</p>
                            <p className="text-xs text-gray-500">Enrolled across platform</p>
                        </div>
                    </div>

                    {/* Pending Approvals */}
                    <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                        <div className="flex items-start justify-between mb-4">
                            <div className="bg-orange-200 text-orange-600 p-3 rounded-full">
                                <FaCheckCircle className="w-5 h-5" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-1">{stats.pendingApprovals}</h3>
                            <p className="text-sm font-semibold text-gray-700 mb-1">Pending Approvals</p>
                            <p className="text-xs text-gray-500">New daycare registrations</p>
                        </div>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Monthly Revenue Chart */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Revenue Trend</h3>
                        <div className="h-64 flex items-end justify-between gap-2">
                            {monthlyRevenue.map((revenue, index) => (
                                <div key={index} className="flex-1 flex flex-col items-center">
                                    <div
                                        className="w-full bg-blue-500 rounded-t-lg hover:bg-blue-600 transition-colors"
                                        style={{ height: `${(revenue / Math.max(...monthlyRevenue)) * 100}%` }}
                                    ></div>
                                    <span className="text-xs text-gray-500 mt-2">
                                        {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][index]}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 text-center">
                            <p className="text-sm text-gray-600">Total Revenue: <span className="font-bold text-gray-900">${(monthlyRevenue.reduce((a, b) => a + b, 0) / 1000).toFixed(0)}K</span></p>
                        </div>
                    </div>

                    {/* Daycare Growth Chart */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Daycare Growth</h3>
                        <div className="h-64 flex items-end justify-between gap-2">
                            {daycareGrowth.map((count, index) => (
                                <div key={index} className="flex-1 flex flex-col items-center">
                                    <div
                                        className="w-full bg-green-500 rounded-t-lg hover:bg-green-600 transition-colors"
                                        style={{ height: `${(count / Math.max(...daycareGrowth)) * 100}%` }}
                                    ></div>
                                    <span className="text-xs text-gray-500 mt-2">
                                        {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][index]}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 text-center">
                            <p className="text-sm text-gray-600">Current Total: <span className="font-bold text-gray-900">{stats.totalDaycares} Daycares</span></p>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Pending Approvals</h4>
                        <p className="text-3xl font-bold text-orange-600 mb-3">{stats.pendingApprovals}</p>
                        <a href="/super-admin/daycare-approval" className="text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline">
                            Review Now →
                        </a>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Billing Alerts</h4>
                        <p className="text-3xl font-bold text-red-600 mb-3">8</p>
                        <a href="/super-admin/billing" className="text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline">
                            View Details →
                        </a>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">System Health</h4>
                        <p className="text-2xl font-bold text-green-600 mb-3">Active</p>
                        <p className="text-sm text-gray-500">All systems operational</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuperAdminDashboard;
