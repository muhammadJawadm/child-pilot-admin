import React, { useState } from 'react';
import { FiX, FiDollarSign, FiDownload } from 'react-icons/fi';

interface InvoiceGeneratorProps {
    onClose: () => void;
    tenant?: { id: number; name: string };
}

const InvoiceGenerator: React.FC<InvoiceGeneratorProps> = ({ onClose, tenant }) => {
    const [formData, setFormData] = useState({
        tenant: tenant?.name || '',
        amount: 0,
        description: '',
        dueDate: '',
    });

    const handleGenerate = () => {
        console.log('Generating invoice:', formData);
        alert(`Invoice generated for ${formData.tenant}`);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                        <FiDollarSign className="text-blue-500" size={24} />
                        <h2 className="text-2xl font-bold text-gray-900">Generate Invoice</h2>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <FiX size={24} />
                    </button>
                </div>

                <div className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Tenant *</label>
                        <input
                            type="text"
                            value={formData.tenant}
                            onChange={(e) => setFormData({ ...formData, tenant: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            placeholder="Select or enter tenant name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Amount *</label>
                        <input
                            type="number"
                            value={formData.amount}
                            onChange={(e) => setFormData({ ...formData, amount: parseFloat(e.target.value) })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            placeholder="0.00"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            rows={3}
                            placeholder="Invoice description"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Due Date *</label>
                        <input
                            type="date"
                            value={formData.dueDate}
                            onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                </div>

                <div className="flex gap-4 p-6 border-t border-gray-200 bg-gray-50 rounded-b-xl">
                    <button
                        onClick={onClose}
                        className="flex-1 px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleGenerate}
                        className="flex-1 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2"
                    >
                        <FiDownload size={18} />
                        Generate Invoice
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InvoiceGenerator;
