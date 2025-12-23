import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

interface RefundModalProps {
    onClose: () => void;
    tenant: { id: number; name: string; amount: number };
}

const RefundModal: React.FC<RefundModalProps> = ({ onClose, tenant }) => {
    const [refundAmount, setRefundAmount] = useState(tenant.amount);
    const [reason, setReason] = useState('');

    const handleRefund = () => {
        console.log('Processing refund:', { tenant: tenant.name, amount: refundAmount, reason });
        alert(`Refund of $${refundAmount} processed for ${tenant.name}`);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg">
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900">Process Refund</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <FiX size={24} />
                    </button>
                </div>

                <div className="p-6 space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Tenant</p>
                        <p className="font-semibold text-gray-900">{tenant.name}</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Refund Amount *</label>
                        <input
                            type="number"
                            value={refundAmount}
                            onChange={(e) => setRefundAmount(parseFloat(e.target.value))}
                            max={tenant.amount}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                        <p className="text-xs text-gray-500 mt-1">Max refundable: ${tenant.amount}</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Reason *</label>
                        <textarea
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            rows={3}
                            placeholder="Explain reason for refund"
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
                        onClick={handleRefund}
                        className="flex-1 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                        Process Refund
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RefundModal;
