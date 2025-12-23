import React, { useState } from 'react';
import Header from '../../layouts/partials/Header';
import { FiSearch, FiCheck, FiX } from 'react-icons/fi';

interface DaycareAdmin {
    id: number;
    name: string;
    email: string;
    daycareAssigned: string;
    status: 'Pending' | 'Active' | 'Inactive';
    createdDate: string;
}

const UserManagement: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState<'All' | 'Pending' | 'Active' | 'Inactive'>('All');

    const adminUsers: DaycareAdmin[] = [
        {
            id: 1,
            name: 'John Smith',
            email: 'john@sunshine.com',
            daycareAssigned: 'Sunshine Daycare',
            status: 'Pending',
            createdDate: '2025-12-20'
        },
        {
            id: 2,
            name: 'Sarah Johnson',
            email: 'sarah@littlestars.com',
            daycareAssigned: 'Little Stars Academy',
            status: 'Active',
            createdDate: '2025-11-15'
        },
        {
            id: 3,
            name: 'Mike Davis',
            email: 'mike@happykids.com',
            daycareAssigned: 'Happy Kids Center',
            status: 'Active',
            createdDate: '2025-10-10'
        },
    ];

    const filteredUsers = adminUsers.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.daycareAssigned.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterStatus === 'All' || user.status === filterStatus;
        return matchesSearch && matchesFilter;
    });

    const pendingCount = adminUsers.filter(u => u.status === 'Pending').length;
    const activeCount = adminUsers.filter(u => u.status === 'Active').length;

    const handleApprove = (id: number) => {
        console.log('Approved user:', id);
    };

    const handleReject = (id: number) => {
        console.log('Rejected user:', id);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header header="User Management" link="" />

            <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6">
                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-6">
                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                        <p className="text-sm text-gray-600 mb-1">Total Admins</p>
                        <p className="text-4xl font-bold text-blue-600">{adminUsers.length}</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                        <p className="text-sm text-gray-600 mb-1">Active</p>
                        <p className="text-4xl font-bold text-green-600">{activeCount}</p>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                        <p className="text-sm text-gray-600 mb-1">Pending Approval</p>
                        <p className="text-4xl font-bold text-orange-600">{pendingCount}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <p className="text-sm text-gray-600 mb-1">Inactive</p>
                        <p className="text-4xl font-bold text-gray-600">0</p>
                    </div>
                </div>

                {/* Info Note */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <p className="text-sm text-blue-800">
                        <strong>Note:</strong> Super Admin can only manage daycare admin accounts. Individual staff and children profiles are managed by daycare admins.
                    </p>
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
                            <option>Pending</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>

                    {/* Search */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiSearch className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white"
                            placeholder="Search by name, email, or daycare"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <table className="w-full text-sm text-left text-gray-600">
                        <thead className="text-xs font-semibold text-gray-600 bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4">Admin Name</th>
                                <th className="px-6 py-4">Email</th>
                                <th className="px-6 py-4">Daycare Assigned</th>
                                <th className="px-6 py-4 text-center">Status</th>
                                <th className="px-6 py-4">Created Date</th>
                                <th className="px-6 py-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredUsers.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center">
                                                <span className="text-blue-700 font-semibold text-sm">
                                                    {user.name.charAt(0)}
                                                </span>
                                            </div>
                                            <span className="font-medium text-gray-800">{user.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-gray-600">{user.email}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-gray-600">{user.daycareAssigned}</span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${user.status === 'Active' ? 'bg-green-100 text-green-700' :
                                                user.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
                                                    'bg-gray-100 text-gray-700'
                                            }`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-gray-600">{user.createdDate}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.status === 'Pending' && (
                                            <div className="flex items-center justify-center gap-3">
                                                <button
                                                    onClick={() => handleApprove(user.id)}
                                                    className="text-green-500 hover:text-green-700"
                                                    title="Approve"
                                                >
                                                    <FiCheck size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleReject(user.id)}
                                                    className="text-red-500 hover:text-red-700"
                                                    title="Reject"
                                                >
                                                    <FiX size={18} />
                                                </button>
                                            </div>
                                        )}
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

export default UserManagement;
