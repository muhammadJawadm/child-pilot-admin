import React, { useState } from 'react';

interface PaySubscriptionModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (paymentData: any) => void;
    amount: string;
    subscriptionPeriod: string;
}

const PaySubscriptionModal: React.FC<PaySubscriptionModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    amount,
    subscriptionPeriod
}) => {
    const [formData, setFormData] = useState({
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    const handleSubmit = () => {
        onSubmit(formData);
        setFormData({
            cardNumber: '',
            expiry: '',
            cvv: ''
        });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Pay Subscription</h2>

                {/* Amount Display */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                    <p className="text-sm text-gray-600 mb-2 text-center">Amount Due</p>
                    <p className="text-4xl font-bold text-gray-800 text-center">{amount}</p>
                    <p className="text-sm text-gray-600 mt-2 text-center">{subscriptionPeriod}</p>
                </div>

                {/* Card Number */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Card Number
                    </label>
                    <input
                        type="text"
                        placeholder="1234 5678 9876 5432"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        maxLength={19}
                    />
                </div>

                {/* Expiry and CVV */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Expiry
                        </label>
                        <input
                            type="text"
                            placeholder="MM/YY"
                            value={formData.expiry}
                            onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            maxLength={5}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            CVV
                        </label>
                        <input
                            type="text"
                            placeholder="123"
                            value={formData.cvv}
                            onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            maxLength={3}
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
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
                        Pay Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaySubscriptionModal;
