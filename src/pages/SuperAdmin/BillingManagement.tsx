import React, { useState } from 'react';
import Header from '../../layouts/partials/Header';
import { FiSearch, FiDownload } from 'react-icons/fi';

interface BillingRecord {
    id: number;
    daycareeName: string;
    location: string;
    staffCount: number;
    childrenCount: number;
    pricePerStaff: number;
    pricePerChild: number;
    totalMonthlyBill: number;
    paymentStatus: 'Paid' | 'Pending' | 'Overdue';
    lastPaymentDate: string;
}

const BillingManagement: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState<'All' | 'Paid' | 'Pending' | 'Overdue'>('All');

    const billingRecords: BillingRecord[] = [
        {
            id: 1,
            daycareeName: 'Sunshine Daycare',
            location: 'New York, NY',
            staffCount: 15,
            childrenCount: 45,
            pricePerStaff: 50,
            pricePerChild: 20,
            totalMonthlyBill: 1650,
            paymentStatus: 'Paid',
            lastPaymentDate: '2025-12-01'
        },
        {
            id: 2,
            daycareeName: 'Little Stars Academy',
            location: 'Los Angeles, CA',
            staffCount: 20,
            childrenCount: 60,
            pricePerStaff: 50,
            pricePerChild: 20,
            totalMonthlyBill: 2200,
            paymentStatus: 'Pending',
            lastPaymentDate: '2025-11-28'
        },
        {
            id: 3,
            daycareeName: 'Happy Kids Center',
            location: 'Chicago, IL',
            staffCount: 12,
            childrenCount: 35,
            pricePerStaff: 50,
            pricePerChild: 20,
            totalMonthlyBill: 1300,
            paymentStatus: 'Overdue',
            lastPaymentDate: '2025-10-30'
        },
    ];

    const filteredRecords = billingRecords.filter(record => {
        const matchesSearch = record.daycareeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            record.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterStatus === 'All' || record.paymentStatus === filterStatus;
        return matchesSearch && matchesFilter;
    });

    const totalRevenue = billingRecords.reduce((sum, record) => sum + record.totalMonthlyBill, 0);
    const paidCount = billingRecords.filter(r => r.paymentStatus === 'Paid').length;
    const overdueCount = billingRecords.filter(r => r.paymentStatus === 'Overdue').length;

    return (
        <div className="min-h-screen bg-gray-50">
            <Header header="Billing Management" link="" />

            <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6">
                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-6">
                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                        <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
                        <p className="text-3xl font-bold text-blue-600">${totalRevenue.toLocaleString()}</p>
                        <p className="text-xs text-gray-500 mt-1">Per month</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                        <p className="text-sm text-gray-600 mb-1">Paid This Month</p>
                        <p className="text-3xl font-bold text-green-600">{paidCount}</p>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                        <p className="text-sm text-gray-600 mb-1">Pending</p>
                        <p className="text-3xl font-bold text-orange-600">{billingRecords.length - paidCount - overdueCount}</p>
                    </div>
                    <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                        <p className="text-sm text-gray-600 mb-1">Overdue</p>
                        <p className="text-3xl font-bold text-red-600">{overdueCount}</p>
                    </div>
                </div>

                {/* Pricing Info */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Current Pricing Model</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-gray-600">Price per Staff Member</p>
                            <p className="text-2xl font-bold text-gray-900">$50<span className="text-sm text-gray-500">/month</span></p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Price per Child</p>
                            <p className="text-2xl font-bold text-gray-900">$20<span className="text-sm text-gray-500">/month</span></p>
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div className="flex items-center gap-4">
                        {/* Filter */}
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value as any)}
                            className="px-4 py-2 border border-gray-300 rounded-lg text-sm"
                        >
                            <option>All</option>
                            <option>Paid</option>
                            <option>Pending</option>
                            <option>Overdue</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Search */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiSearch className="text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white"
                                placeholder="Search daycare"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {/* Export Button */}
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-colors flex items-center gap-2">
                            <FiDownload size={16} />
                            Export
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <table className="w-full text-sm text-left text-gray-600">
                        <thead className="text-xs font-semibold text-gray-600 bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4">Daycare Name</th>
                                <th className="px-6 py-4">Location</th>
                                <th className="px-6 py-4 text-center">Staff Count</th>
                                <th className="px-6 py-4 text-center">Children Count</th>
                                <th className="px-6 py-4 text-right">Monthly Bill</th>
                                <th className="px-6 py-4 text-center">Status</th>
                                <th className="px-6 py-4">Last Payment</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredRecords.map((record) => (
                                <tr key={record.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <span className="font-medium text-gray-800">{record.daycareeName}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-gray-600">{record.location}</span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="text-gray-600">{record.staffCount}</span>
                                        <p className="text-xs text-gray-400">× ${record.pricePerStaff}</p>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="text-gray-600">{record.childrenCount}</span>
                                        <p className="text-xs text-gray-400">× ${record.pricePerChild}</p>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <span className="font-semibold text-gray-900">${record.totalMonthlyBill.toLocaleString()}</span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${record.paymentStatus === 'Paid' ? 'bg-green-100 text-green-700' :
                                                record.paymentStatus === 'Pending' ? 'bg-orange-100 text-orange-700' :
                                                    'bg-red-100 text-red-700'
                                            }`}>
                                            {record.paymentStatus}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-gray-600">{record.lastPaymentDate}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BillingManagement;
