import React, { useState } from 'react';
import { FiX, FiCheck } from 'react-icons/fi';

interface TenantOnboardingWizardProps {
    onClose: () => void;
    onComplete: (data: any) => void;
}

const TenantOnboardingWizard: React.FC<TenantOnboardingWizardProps> = ({ onClose, onComplete }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1: Basic Info
        tenantName: '',
        location: '',
        contactEmail: '',
        contactPhone: '',
        // Step 2: Subscription
        subscriptionTier: 'Basic',
        billingCycle: 'Monthly',
        // Step 3: Configuration
        expectedStaff: 0,
        expectedChildren: 0,
        timezone: 'EST',
    });

    const totalSteps = 3;

    const handleNext = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        } else {
            onComplete(formData);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900">Create New Daycare Center</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <FiX size={24} />
                    </button>
                </div>

                {/* Progress Steps */}
                <div className="px-6 pt-6">
                    <div className="flex items-center justify-between mb-8">
                        {[1, 2, 3].map((step) => (
                            <div key={step} className="flex items-center flex-1">
                                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step <= currentStep ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                                    }`}>
                                    {step < currentStep ? <FiCheck /> : step}
                                </div>
                                {step < 3 && (
                                    <div className={`flex-1 h-1 mx-2 ${step < currentStep ? 'bg-blue-500' : 'bg-gray-200'
                                        }`}></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form Content */}
                <div className="px-6 pb-6">
                    {currentStep === 1 && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Information</h3>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Daycare Name *</label>
                                <input
                                    type="text"
                                    value={formData.tenantName}
                                    onChange={(e) => setFormData({ ...formData, tenantName: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    placeholder="e.g., Sunshine Daycare"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                                <input
                                    type="text"
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    placeholder="e.g., New York, NY"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email *</label>
                                    <input
                                        type="email"
                                        value={formData.contactEmail}
                                        onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                        placeholder="contact@daycare.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Phone *</label>
                                    <input
                                        type="tel"
                                        value={formData.contactPhone}
                                        onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Subscription Details</h3>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Subscription Tier *</label>
                                <select
                                    value={formData.subscriptionTier}
                                    onChange={(e) => setFormData({ ...formData, subscriptionTier: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                >
                                    <option value="Free Trial">Free Trial (14 days)</option>
                                    <option value="Basic">Basic - $99/month</option>
                                    <option value="Pro">Pro - $199/month</option>
                                    <option value="Enterprise">Enterprise - Custom</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Billing Cycle</label>
                                <select
                                    value={formData.billingCycle}
                                    onChange={(e) => setFormData({ ...formData, billingCycle: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                >
                                    <option value="Monthly">Monthly</option>
                                    <option value="Annually">Annually (Save 20%)</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Initial Configuration</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Expected Staff</label>
                                    <input
                                        type="number"
                                        value={formData.expectedStaff}
                                        onChange={(e) => setFormData({ ...formData, expectedStaff: parseInt(e.target.value) })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                        min="0"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Expected Children</label>
                                    <input
                                        type="number"
                                        value={formData.expectedChildren}
                                        onChange={(e) => setFormData({ ...formData, expectedChildren: parseInt(e.target.value) })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                        min="0"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                                <select
                                    value={formData.timezone}
                                    onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                >
                                    <option value="EST">Eastern Time (EST)</option>
                                    <option value="CST">Central Time (CST)</option>
                                    <option value="MST">Mountain Time (MST)</option>
                                    <option value="PST">Pacific Time (PST)</option>
                                </select>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50 rounded-b-xl">
                    <button
                        onClick={handleBack}
                        disabled={currentStep === 1}
                        className="px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Back
                    </button>
                    <div className="text-sm text-gray-500">
                        Step {currentStep} of {totalSteps}
                    </div>
                    <button
                        onClick={handleNext}
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        {currentStep === totalSteps ? 'Create Tenant' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TenantOnboardingWizard;
