import React, { useState } from 'react';

interface CreatePlanModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (planData: any) => void;
}

const CreatePlanModal: React.FC<CreatePlanModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        planName: '',
        planType: 'Full Time',
        feeAmount: '',
        billingCycle: 'Yearly',
        startDate: '',
        status: 'Active'
    });

    const handleSubmit = () => {
        onSubmit(formData);
        setFormData({
            planName: '',
            planType: 'Full Time',
            feeAmount: '',
            billingCycle: 'Yearly',
            startDate: '',
            status: 'Active'
        });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-2xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Plan</h2>

                <div className="grid grid-cols-2 gap-6">
                    {/* Plan Name */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Plan Name
                        </label>
                        <input
                            type="text"
                            placeholder="Infant Care Plan"
                            value={formData.planName}
                            onChange={(e) => setFormData({ ...formData, planName: e.target.value })}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* Plan Type */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Plan Type
                        </label>
                        <select
                            value={formData.planType}
                            onChange={(e) => setFormData({ ...formData, planType: e.target.value })}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="Full Time">Full Time</option>
                            <option value="Part Time">Part Time</option>
                        </select>
                    </div>

                    {/* Fee Amount */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Fee Amount
                        </label>
                        <input
                            type="text"
                            placeholder="800$"
                            value={formData.feeAmount}
                            onChange={(e) => setFormData({ ...formData, feeAmount: e.target.value })}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* Billing Cycle */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Billing Cycle
                        </label>
                        <select
                            value={formData.billingCycle}
                            onChange={(e) => setFormData({ ...formData, billingCycle: e.target.value })}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                    </div>

                    {/* Start Date */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Start Date
                        </label>
                        <input
                            type="date"
                            value={formData.startDate}
                            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* Status */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Status
                        </label>
                        <select
                            value={formData.status}
                            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-8">
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="flex-1 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
                    >
                        Create New Plan
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreatePlanModal;
