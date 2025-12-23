import React, { useState } from 'react';
import Header from '../../layouts/partials/Header';
import { FiSearch, FiEye, FiSettings, FiPower, FiUserCheck, FiPlus } from 'react-icons/fi';

interface Tenant {
    id: number;
    name: string;
    location: string;
    status: 'Active' | 'Trial' | 'Suspended' | 'Inactive';
    staffCount: number;
    childrenCount: number;
    joinedDate: string;
    subscriptionTier: 'Free Trial' | 'Basic' | 'Pro' | 'Enterprise';
    contactEmail: string;
    contactPhone: string;
    lastActivity: string;
}

const TenantManagement: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState<'All' | 'Active' | 'Trial' | 'Suspended' | 'Inactive'>('All');
    const [selectedTenant, setSelectedTenant] = useState<Tenant | null>(null);
    const [showModal, setShowModal] = useState(false);

    const tenants: Tenant[] = [
        {
            id: 1,
            name: 'Sunshine Daycare',
            location: 'New York, NY',
            status: 'Active',
            staffCount: 15,
            childrenCount: 45,
            joinedDate: '2024-01-15',
            subscriptionTier: 'Pro',
            contactEmail: 'contact@sunshine.com',
            contactPhone: '(555) 123-4567',
            lastActivity: '2 hours ago'
        },
        {
            id: 2,
            name: 'Little Stars Academy',
            location: 'Los Angeles, CA',
            status: 'Active',
            staffCount: 20,
            childrenCount: 60,
            joinedDate: '2024-03-20',
            subscriptionTier: 'Enterprise',
            contactEmail: 'info@littlestars.com',
            contactPhone: '(555) 234-5678',
            lastActivity: '1 day ago'
        },
        {
            id: 3,
            name: 'Happy Kids Center',
            location: 'Chicago, IL',
            status: 'Trial',
            staffCount: 12,
            childrenCount: 35,
            joinedDate: '2025-12-01',
            subscriptionTier: 'Free Trial',
            contactEmail: 'admin@happykids.com',
            contactPhone: '(555) 345-6789',
            lastActivity: '3 hours ago'
        },
        {
            id: 4,
            name: 'Rainbow Learning',
            location: 'Houston, TX',
            status: 'Suspended',
            staffCount: 8,
            childrenCount: 25,
            joinedDate: '2024-06-10',
            subscriptionTier: 'Basic',
            contactEmail: 'contact@rainbow.com',
            contactPhone: '(555) 456-7890',
            lastActivity: '1 week ago'
        },
    ];

    const filteredTenants = tenants.filter(tenant => {
        const matchesSearch = tenant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tenant.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterStatus === 'All' || tenant.status === filterStatus;
        return matchesSearch && matchesFilter;
    });

    const statusCounts = {
        active: tenants.filter(t => t.status === 'Active').length,
        trial: tenants.filter(t => t.status === 'Trial').length,
        suspended: tenants.filter(t => t.status === 'Suspended').length,
        total: tenants.length
    };

    const handleViewDetails = (tenant: Tenant) => {
        setSelectedTenant(tenant);
        setShowModal(true);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header header="Tenant Management" link="/" />

            <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6">
                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-6">
                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                        <p className="text-sm text-gray-600 mb-1">Total Tenants</p>
                        <p className="text-4xl font-bold text-blue-600">{statusCounts.total}</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                        <p className="text-sm text-gray-600 mb-1">Active</p>
                        <p className="text-4xl font-bold text-green-600">{statusCounts.active}</p>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                        <p className="text-sm text-gray-600 mb-1">On Trial</p>
                        <p className="text-4xl font-bold text-orange-600">{statusCounts.trial}</p>
                    </div>
                    <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                        <p className="text-sm text-gray-600 mb-1">Suspended</p>
                        <p className="text-4xl font-bold text-red-600">{statusCounts.suspended}</p>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
                    <div className="flex items-center gap-4">
                        {/* Filter */}
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value as any)}
                            className="px-4 py-2 border border-gray-300 rounded-lg text-sm"
                        >
                            <option>All</option>
                            <option>Active</option>
                            <option>Trial</option>
                            <option>Suspended</option>
                            <option>Inactive</option>
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
                                placeholder="Search tenants"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {/* Add Tenant Button */}
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-colors flex items-center gap-2">
                            <FiPlus size={16} />
                            Add Tenant
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <table className="w-full text-sm text-left text-gray-600">
                        <thead className="text-xs font-semibold text-gray-600 bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4">Tenant Name</th>
                                <th className="px-6 py-4">Location</th>
                                <th className="px-6 py-4 text-center">Staff</th>
                                <th className="px-6 py-4 text-center">Children</th>
                                <th className="px-6 py-4">Subscription</th>
                                <th className="px-6 py-4 text-center">Status</th>
                                <th className="px-6 py-4">Last Activity</th>
                                <th className="px-6 py-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredTenants.map((tenant) => (
                                <tr key={tenant.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <span className="font-medium text-gray-800">{tenant.name}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-gray-600">{tenant.location}</span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="text-gray-600">{tenant.staffCount}</span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="text-gray-600">{tenant.childrenCount}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${tenant.subscriptionTier === 'Enterprise' ? 'bg-purple-100 text-purple-700' :
                                                tenant.subscriptionTier === 'Pro' ? 'bg-blue-100 text-blue-700' :
                                                    tenant.subscriptionTier === 'Basic' ? 'bg-green-100 text-green-700' :
                                                        'bg-gray-100 text-gray-700'
                                            }`}>
                                            {tenant.subscriptionTier}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${tenant.status === 'Active' ? 'bg-green-100 text-green-700' :
                                                tenant.status === 'Trial' ? 'bg-orange-100 text-orange-700' :
                                                    tenant.status === 'Suspended' ? 'bg-red-100 text-red-700' :
                                                        'bg-gray-100 text-gray-700'
                                            }`}>
                                            {tenant.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs text-gray-500">{tenant.lastActivity}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-3">
                                            <button
                                                onClick={() => handleViewDetails(tenant)}
                                                className="text-blue-500 hover:text-blue-700"
                                                title="View Details"
                                            >
                                                <FiEye size={18} />
                                            </button>
                                            <button
                                                className="text-gray-500 hover:text-gray-700"
                                                title="Settings"
                                            >
                                                <FiSettings size={18} />
                                            </button>
                                            <button
                                                className="text-purple-500 hover:text-purple-700"
                                                title="Impersonate"
                                            >
                                                <FiUserCheck size={18} />
                                            </button>
                                            <button
                                                className="text-red-500 hover:text-red-700"
                                                title="Suspend/Activate"
                                            >
                                                <FiPower size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* View Details Modal */}
            {showModal && selectedTenant && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Tenant Details</h2>

                        <div className="grid grid-cols-2 gap-6 mb-6">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Tenant Name</p>
                                <p className="text-base font-semibold text-gray-900">{selectedTenant.name}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Location</p>
                                <p className="text-base font-semibold text-gray-900">{selectedTenant.location}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Status</p>
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${selectedTenant.status === 'Active' ? 'bg-green-100 text-green-700' :
                                        selectedTenant.status === 'Trial' ? 'bg-orange-100 text-orange-700' :
                                            'bg-red-100 text-red-700'
                                    }`}>
                                    {selectedTenant.status}
                                </span>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Subscription Tier</p>
                                <p className="text-base font-semibold text-gray-900">{selectedTenant.subscriptionTier}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Contact Email</p>
                                <p className="text-base font-semibold text-gray-900">{selectedTenant.contactEmail}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Contact Phone</p>
                                <p className="text-base font-semibold text-gray-900">{selectedTenant.contactPhone}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Staff Count</p>
                                <p className="text-base font-semibold text-gray-900">{selectedTenant.staffCount}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Children Count</p>
                                <p className="text-base font-semibold text-gray-900">{selectedTenant.childrenCount}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Joined Date</p>
                                <p className="text-base font-semibold text-gray-900">{selectedTenant.joinedDate}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Last Activity</p>
                                <p className="text-base font-semibold text-gray-900">{selectedTenant.lastActivity}</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={() => setShowModal(false)}
                                className="flex-1 px-6 py-2.5 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold rounded-lg transition-colors"
                            >
                                Close
                            </button>
                            <button className="flex-1 px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors">
                                Edit Settings
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TenantManagement;
