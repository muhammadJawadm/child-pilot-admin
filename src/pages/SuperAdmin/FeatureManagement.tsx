import React, { useState } from 'react';
import Header from '../../layouts/partials/Header';
import { FiToggleLeft, FiToggleRight } from 'react-icons/fi';

interface Feature {
    id: number;
    name: string;
    description: string;
    enabled: boolean;
    scope: 'Global' | 'Per Tenant';
}

const FeatureManagement: React.FC = () => {
    const [features, setFeatures] = useState<Feature[]>([
        { id: 1, name: 'Advanced Analytics', description: 'Access to advanced reporting and analytics', enabled: true, scope: 'Per Tenant' },
        { id: 2, name: 'Mobile App Access', description: 'Access to mobile applications', enabled: true, scope: 'Global' },
        { id: 3, name: 'AI-Powered Insights', description: 'AI-driven recommendations and insights', enabled: false, scope: 'Per Tenant' },
        { id: 4, name: 'Custom Branding', description: 'Custom branding and white-labeling', enabled: true, scope: 'Per Tenant' },
        { id: 5, name: 'API Access', description: 'Access to REST API', enabled: false, scope: 'Global' },
    ]);

    const toggleFeature = (id: number) => {
        setFeatures(features.map(f => f.id === id ? { ...f, enabled: !f.enabled } : f));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header header="Feature Management" link="/" />

            <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6">
                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                        <p className="text-sm text-gray-600 mb-1">Total Features</p>
                        <p className="text-4xl font-bold text-blue-600">{features.length}</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                        <p className="text-sm text-gray-600 mb-1">Enabled</p>
                        <p className="text-4xl font-bold text-green-600">{features.filter(f => f.enabled).length}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <p className="text-sm text-gray-600 mb-1">Disabled</p>
                        <p className="text-4xl font-bold text-gray-600">{features.filter(f => !f.enabled).length}</p>
                    </div>
                </div>

                {/* Feature List */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                    <div className="p-6 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800">Platform Features</h3>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {features.map(feature => (
                            <div key={feature.id} className="p-6 hover:bg-gray-50 transition-colors">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-900 mb-1">{feature.name}</h4>
                                        <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
                                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                                            {feature.scope}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => toggleFeature(feature.id)}
                                        className="ml-4 flex-shrink-0"
                                    >
                                        {feature.enabled ? (
                                            <FiToggleRight className="text-green-500" size={32} />
                                        ) : (
                                            <FiToggleLeft className="text-gray-400" size={32} />
                                        )}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureManagement;
