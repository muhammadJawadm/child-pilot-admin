import React, { useState } from 'react';
import Header from '../../layouts/partials/Header';
import { FiSave } from 'react-icons/fi';

const PlatformSettings: React.FC = () => {
    const [pricing, setPricing] = useState({
        pricePerStaff: 50,
        pricePerChild: 20,
    });

    const subscriptionTiers = [
        {
            id: 1,
            name: 'Basic',
            price: 99,
            features: ['Up to 50 children', 'Up to 10 staff', 'Basic reporting', 'Email support']
        },
        {
            id: 2,
            name: 'Premium',
            price: 199,
            features: ['Up to 150 children', 'Up to 30 staff', 'Advanced reporting', 'Priority support', 'Custom branding']
        },
        {
            id: 3,
            name: 'Enterprise',
            price: 399,
            features: ['Unlimited children', 'Unlimited staff', 'Advanced analytics', '24/7 support', 'API access', 'Dedicated account manager']
        },
    ];

    const [paymentSettings, setPaymentSettings] = useState({
        billingCycle: 'monthly',
        gracePeriod: 7,
        paymentMethods: ['credit_card', 'bank_transfer']
    });

    const handleSavePricing = () => {
        console.log('Saving pricing:', pricing);
        alert('Pricing updated successfully!');
    };

    const handleSavePaymentSettings = () => {
        console.log('Saving payment settings:', paymentSettings);
        alert('Payment settings updated successfully!');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header header="Platform Settings" link="" />

            <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6 space-y-6">
                {/* Pricing Settings */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-6">Pricing Model</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Price per Staff Member (per month)
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                <input
                                    type="number"
                                    value={pricing.pricePerStaff}
                                    onChange={(e) => setPricing({ ...pricing, pricePerStaff: Number(e.target.value) })}
                                    className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Price per Child (per month)
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                <input
                                    type="number"
                                    value={pricing.pricePerChild}
                                    onChange={(e) => setPricing({ ...pricing, pricePerChild: Number(e.target.value) })}
                                    className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleSavePricing}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-lg shadow-md transition-colors flex items-center gap-2"
                    >
                        <FiSave size={18} />
                        Save Pricing
                    </button>
                </div>

                {/* Subscription Tiers */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-6">Subscription Tiers</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {subscriptionTiers.map((tier) => (
                            <div key={tier.id} className={`border-2 rounded-xl p-6 ${tier.name === 'Premium' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                                }`}>
                                <div className="text-center mb-6">
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h4>
                                    <div className="flex items-baseline justify-center">
                                        <span className="text-4xl font-bold text-gray-900">${tier.price}</span>
                                        <span className="text-gray-500 ml-2">/month</span>
                                    </div>
                                </div>

                                <ul className="space-y-3">
                                    {tier.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors">
                                    Edit Tier
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Payment Settings */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-6">Payment Settings</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Billing Cycle */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Billing Cycle
                            </label>
                            <select
                                value={paymentSettings.billingCycle}
                                onChange={(e) => setPaymentSettings({ ...paymentSettings, billingCycle: e.target.value })}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                            >
                                <option value="monthly">Monthly</option>
                                <option value="quarterly">Quarterly</option>
                                <option value="annually">Annually</option>
                            </select>
                        </div>

                        {/* Grace Period */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Grace Period (days)
                            </label>
                            <input
                                type="number"
                                value={paymentSettings.gracePeriod}
                                onChange={(e) => setPaymentSettings({ ...paymentSettings, gracePeriod: Number(e.target.value) })}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                            Accepted Payment Methods
                        </label>
                        <div className="space-y-2">
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={paymentSettings.paymentMethods.includes('credit_card')}
                                    className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                                    readOnly
                                />
                                <span className="text-sm text-gray-700">Credit/Debit Card</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={paymentSettings.paymentMethods.includes('bank_transfer')}
                                    className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                                    readOnly
                                />
                                <span className="text-sm text-gray-700">Bank Transfer</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                                />
                                <span className="text-sm text-gray-700">PayPal</span>
                            </label>
                        </div>
                    </div>

                    <button
                        onClick={handleSavePaymentSettings}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-lg shadow-md transition-colors flex items-center gap-2"
                    >
                        <FiSave size={18} />
                        Save Payment Settings
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlatformSettings;
