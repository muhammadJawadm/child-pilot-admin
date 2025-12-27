import React, { useState } from 'react';
import Header from '../../layouts/partials/Header';
import { FiSave, FiPlus, FiTrash2 } from 'react-icons/fi';

interface Daycare {
    id: number;
    name: string;
    location: string;
}

interface CustomPrice {
    id: number;
    name: string;
    daycareId: number | null;
    pricePerChild: number;
    pricePerStaff: number;
    pricePerAdmin: number;
}

const PlatformSettings: React.FC = () => {
    // Dummy daycare data
    const daycares: Daycare[] = [
        { id: 1, name: 'Sunshine Daycare', location: 'New York, NY' },
        { id: 2, name: 'Little Stars Academy', location: 'Los Angeles, CA' },
        { id: 3, name: 'Happy Kids Center', location: 'Chicago, IL' },
        { id: 4, name: 'Rainbow Learning Center', location: 'Houston, TX' },
        { id: 5, name: 'Bright Futures Daycare', location: 'Phoenix, AZ' },
    ];

    const [pricing, setPricing] = useState({
        pricePerStaff: 50,
        pricePerChild: 20,
        pricePerAdmin: 75,
    });

    const [customPrices, setCustomPrices] = useState<CustomPrice[]>([]);
    const [nextId, setNextId] = useState(1);

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

    const addCustomPrice = () => {
        const newCustomPrice: CustomPrice = {
            id: nextId,
            name: `Custom Price ${nextId}`,
            daycareId: null,
            pricePerChild: 0,
            pricePerStaff: 0,
            pricePerAdmin: 0,
        };
        setCustomPrices([...customPrices, newCustomPrice]);
        setNextId(nextId + 1);
    };

    const removeCustomPrice = (id: number) => {
        setCustomPrices(customPrices.filter(price => price.id !== id));
    };

    const updateCustomPrice = (id: number, field: keyof Omit<CustomPrice, 'id'>, value: string | number | null) => {
        setCustomPrices(customPrices.map(price =>
            price.id === id ? { ...price, [field]: value } : price
        ));
    };

    const calculateTotal = (childCount: number, staffCount: number, adminCount: number, daycareId: number) => {
        const baseTotal = (pricing.pricePerChild * childCount) +
            (pricing.pricePerStaff * staffCount) +
            (pricing.pricePerAdmin * adminCount);

        // Only apply custom prices that are assigned to this specific daycare
        const customTotal = customPrices
            .filter(custom => custom.daycareId === daycareId)
            .reduce((sum, custom) => {
                return sum + (custom.pricePerChild * childCount) +
                    (custom.pricePerStaff * staffCount) +
                    (custom.pricePerAdmin * adminCount);
            }, 0);

        return baseTotal + customTotal;
    };

    const handleSavePricing = () => {
        console.log('Saving pricing:', { pricing, customPrices });
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
                    <h3 className="text-lg font-semibold text-gray-800 mb-6">Base Pricing Model</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
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

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Price per Admin (per month)
                            </label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                <input
                                    type="number"
                                    value={pricing.pricePerAdmin}
                                    onChange={(e) => setPricing({ ...pricing, pricePerAdmin: Number(e.target.value) })}
                                    className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Custom Pricing Options */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold text-gray-800">Custom Pricing Options</h3>
                        <button
                            onClick={addCustomPrice}
                            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-colors flex items-center gap-2"
                        >
                            <FiPlus size={18} />
                            Add Custom Price
                        </button>
                    </div>

                    {customPrices.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                            <p>No custom pricing options added yet.</p>
                            <p className="text-sm mt-2">Click "Add Custom Price" to create custom pricing categories.</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {customPrices.map((customPrice) => (
                                <div key={customPrice.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                    <div className="flex items-center justify-between mb-4">
                                        <input
                                            type="text"
                                            value={customPrice.name}
                                            onChange={(e) => updateCustomPrice(customPrice.id, 'name', e.target.value)}
                                            className="text-lg font-semibold bg-white border border-gray-300 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Custom Price Name"
                                        />
                                        <button
                                            onClick={() => removeCustomPrice(customPrice.id)}
                                            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-colors"
                                        >
                                            <FiTrash2 size={18} />
                                        </button>
                                    </div>

                                    {/* Daycare Selection */}
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Select Daycare *
                                        </label>
                                        <select
                                            value={customPrice.daycareId || ''}
                                            onChange={(e) => updateCustomPrice(customPrice.id, 'daycareId', e.target.value ? Number(e.target.value) : null)}
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="">-- Select a Daycare --</option>
                                            {daycares.map((daycare) => (
                                                <option key={daycare.id} value={daycare.id}>
                                                    {daycare.name} - {daycare.location}
                                                </option>
                                            ))}
                                        </select>
                                        {customPrice.daycareId && (
                                            <p className="text-xs text-green-600 mt-1">
                                                ✓ This custom price will only apply to: {daycares.find(d => d.id === customPrice.daycareId)?.name}
                                            </p>
                                        )}
                                        {!customPrice.daycareId && (
                                            <p className="text-xs text-orange-600 mt-1">
                                                ⚠ Please select a daycare for this custom price
                                            </p>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Price per Child
                                            </label>
                                            <div className="relative">
                                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                                <input
                                                    type="number"
                                                    value={customPrice.pricePerChild}
                                                    onChange={(e) => updateCustomPrice(customPrice.id, 'pricePerChild', Number(e.target.value))}
                                                    className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Price per Staff
                                            </label>
                                            <div className="relative">
                                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                                <input
                                                    type="number"
                                                    value={customPrice.pricePerStaff}
                                                    onChange={(e) => updateCustomPrice(customPrice.id, 'pricePerStaff', Number(e.target.value))}
                                                    className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Price per Admin
                                            </label>
                                            <div className="relative">
                                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                                <input
                                                    type="number"
                                                    value={customPrice.pricePerAdmin}
                                                    onChange={(e) => updateCustomPrice(customPrice.id, 'pricePerAdmin', Number(e.target.value))}
                                                    className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Pricing Calculator Preview */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-sm border border-blue-200 p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Pricing Calculator Preview</h3>
                    <p className="text-sm text-gray-600 mb-2">See how pricing is calculated with sample data</p>
                    <p className="text-xs text-blue-600 mb-4">Showing calculation for: <strong>Sunshine Daycare</strong></p>

                    <div className="bg-white rounded-lg p-4 space-y-3">
                        <div className="grid grid-cols-3 gap-4 text-sm">
                            <div className="text-center">
                                <p className="text-gray-600 mb-1">Sample Children</p>
                                <p className="text-2xl font-bold text-blue-600">45</p>
                            </div>
                            <div className="text-center">
                                <p className="text-gray-600 mb-1">Sample Staff</p>
                                <p className="text-2xl font-bold text-green-600">15</p>
                            </div>
                            <div className="text-center">
                                <p className="text-gray-600 mb-1">Sample Admins</p>
                                <p className="text-2xl font-bold text-purple-600">3</p>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 pt-3 space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Base Price (Children: 45 × ${pricing.pricePerChild})</span>
                                <span className="font-semibold">${(45 * pricing.pricePerChild).toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Base Price (Staff: 15 × ${pricing.pricePerStaff})</span>
                                <span className="font-semibold">${(15 * pricing.pricePerStaff).toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Base Price (Admin: 3 × ${pricing.pricePerAdmin})</span>
                                <span className="font-semibold">${(3 * pricing.pricePerAdmin).toFixed(2)}</span>
                            </div>

                            {customPrices.filter(custom => custom.daycareId === 1).map((custom) => {
                                const customTotal = (custom.pricePerChild * 45) + (custom.pricePerStaff * 15) + (custom.pricePerAdmin * 3);
                                if (customTotal > 0) {
                                    return (
                                        <div key={custom.id} className="flex justify-between text-sm text-blue-600">
                                            <span>{custom.name}</span>
                                            <span className="font-semibold">${customTotal.toFixed(2)}</span>
                                        </div>
                                    );
                                }
                                return null;
                            })}

                            <div className="border-t border-gray-300 pt-2 flex justify-between">
                                <span className="font-bold text-gray-800">Total Monthly Bill:</span>
                                <span className="font-bold text-xl text-green-600">${calculateTotal(45, 15, 3, 1).toFixed(2)}</span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleSavePricing}
                        className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2"
                    >
                        <FiSave size={18} />
                        Save All Pricing Settings
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
