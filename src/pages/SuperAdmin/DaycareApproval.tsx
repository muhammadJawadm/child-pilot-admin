import React, { useState } from 'react';
import Header from '../../layouts/partials/Header';
import { FiSearch, FiEye, FiCheck, FiX } from 'react-icons/fi';

interface PendingDaycare {
    id: number;
    name: string;
    location: string;
    submittedDate: string;
    expectedStaff: number;
    expectedChildren: number;
    status: 'Pending' | 'Approved' | 'Rejected';
    contactEmail: string;
    contactPhone: string;
}

const DaycareApproval: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedDaycare, setSelectedDaycare] = useState<PendingDaycare | null>(null);
    const [filterStatus, setFilterStatus] = useState<'All' | 'Pending' | 'Approved' | 'Rejected'>('All');

    const pendingDaycares: PendingDaycare[] = [
        {
            id: 1,
            name: 'Sunshine Daycare',
            location: 'New York, NY',
            submittedDate: '2025-12-15',
            expectedStaff: 15,
            expectedChildren: 45,
            status: 'Pending',
            contactEmail: 'contact@sunshine.com',
            contactPhone: '(555) 123-4567'
        },
        {
            id: 2,
            name: 'Little Stars Academy',
            location: 'Los Angeles, CA',
            submittedDate: '2025-12-18',
            expectedStaff: 20,
            expectedChildren: 60,
            status: 'Pending',
            contactEmail: 'info@littlestars.com',
            contactPhone: '(555) 234-5678'
        },
        {
            id: 3,
            name: 'Happy Kids Center',
            location: 'Chicago, IL',
            submittedDate: '2025-12-20',
            expectedStaff: 12,
            expectedChildren: 35,
            status: 'Pending',
            contactEmail: 'admin@happykids.com',
            contactPhone: '(555) 345-6789'
        },
    ];

    const filteredDaycares = pendingDaycares.filter(daycare => {
        const matchesSearch = daycare.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            daycare.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterStatus === 'All' || daycare.status === filterStatus;
        return matchesSearch && matchesFilter;
    });

    const handleView = (daycare: PendingDaycare) => {
        setSelectedDaycare(daycare);
        setShowModal(true);
    };

    const handleApprove = (id: number) => {
        console.log('Approved daycare:', id);
        setShowModal(false);
    };

    const handleReject = (id: number) => {
        console.log('Rejected daycare:', id);
        setShowModal(false);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header header="Daycare Approval" link="" />

            <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6">
                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                    <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                        <p className="text-sm text-gray-600 mb-1">Pending</p>
                        <p className="text-4xl font-bold text-orange-600">12</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                        <p className="text-sm text-gray-600 mb-1">Approved This Month</p>
                        <p className="text-4xl font-bold text-green-600">8</p>
                    </div>
                    <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                        <p className="text-sm text-gray-600 mb-1">Rejected</p>
                        <p className="text-4xl font-bold text-red-600">3</p>
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
                            <option>Pending</option>
                            <option>Approved</option>
                            <option>Rejected</option>
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
                            placeholder="Search by daycare name or location"
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
                                <th className="px-6 py-4">Daycare Name</th>
                                <th className="px-6 py-4">Location</th>
                                <th className="px-6 py-4">Submitted</th>
                                <th className="px-6 py-4 text-center">Expected Staff</th>
                                <th className="px-6 py-4 text-center">Expected Children</th>
                                <th className="px-6 py-4 text-center">Status</th>
                                <th className="px-6 py-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredDaycares.map((daycare) => (
                                <tr key={daycare.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <span className="font-medium text-gray-800">{daycare.name}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-gray-600">{daycare.location}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-gray-600">{daycare.submittedDate}</span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="text-gray-600">{daycare.expectedStaff}</span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="text-gray-600">{daycare.expectedChildren}</span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${daycare.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
                                                daycare.status === 'Approved' ? 'bg-green-100 text-green-700' :
                                                    'bg-red-100 text-red-700'
                                            }`}>
                                            {daycare.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-3">
                                            <button
                                                onClick={() => handleView(daycare)}
                                                className="text-blue-500 hover:text-blue-700"
                                                title="View Details"
                                            >
                                                <FiEye size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleApprove(daycare.id)}
                                                className="text-green-500 hover:text-green-700"
                                                title="Approve"
                                            >
                                                <FiCheck size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleReject(daycare.id)}
                                                className="text-red-500 hover:text-red-700"
                                                title="Reject"
                                            >
                                                <FiX size={18} />
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
            {showModal && selectedDaycare && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-2xl">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Daycare Details</h2>

                        <div className="space-y-4 mb-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-600">Daycare Name</p>
                                    <p className="text-base font-semibold text-gray-900">{selectedDaycare.name}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Location</p>
                                    <p className="text-base font-semibold text-gray-900">{selectedDaycare.location}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Contact Email</p>
                                    <p className="text-base font-semibold text-gray-900">{selectedDaycare.contactEmail}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Contact Phone</p>
                                    <p className="text-base font-semibold text-gray-900">{selectedDaycare.contactPhone}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Expected Staff</p>
                                    <p className="text-base font-semibold text-gray-900">{selectedDaycare.expectedStaff}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Expected Children</p>
                                    <p className="text-base font-semibold text-gray-900">{selectedDaycare.expectedChildren}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={() => setShowModal(false)}
                                className="flex-1 px-6 py-2.5 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold rounded-lg transition-colors"
                            >
                                Close
                            </button>
                            <button
                                onClick={() => handleReject(selectedDaycare.id)}
                                className="flex-1 px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors"
                            >
                                Reject
                            </button>
                            <button
                                onClick={() => handleApprove(selectedDaycare.id)}
                                className="flex-1 px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
                            >
                                Approve
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DaycareApproval;
