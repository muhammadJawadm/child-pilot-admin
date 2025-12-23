import React from 'react';
import Header from '../../layouts/partials/Header';
import { FiCheckCircle, FiClock, FiAlertCircle } from 'react-icons/fi';

const OnboardingDashboard: React.FC = () => {
    const onboardingStats = {
        active: 8,
        completed: 45,
        stuck: 3,
        completionRate: 85
    };

    const recentOnboarding = [
        { id: 1, name: 'Tiny Tots Daycare', progress: 75, status: 'Active', step: 'Adding Staff Members' },
        { id: 2, name: 'Bright Beginnings', progress: 30, status: 'Stuck', step: 'Document Upload' },
        { id: 3, name: 'Learning Tree', progress: 100, status: 'Completed', step: 'All Steps Complete' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Header header="Customer Onboarding" link="/" />

            <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6">
                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-6">
                    <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                        <p className="text-sm text-gray-600 mb-1">Active Onboardings</p>
                        <p className="text-4xl font-bold text-orange-600">{onboardingStats.active}</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                        <p className="text-sm text-gray-600 mb-1">Completed</p>
                        <p className="text-4xl font-bold text-green-600">{onboardingStats.completed}</p>
                    </div>
                    <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                        <p className="text-sm text-gray-600 mb-1">Stuck/Incomplete</p>
                        <p className="text-4xl font-bold text-red-600">{onboardingStats.stuck}</p>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                        <p className="text-sm text-gray-600 mb-1">Completion Rate</p>
                        <p className="text-4xl font-bold text-blue-600">{onboardingStats.completionRate}%</p>
                    </div>
                </div>

                {/* Recent Onboarding */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800">Recent Onboarding Sessions</h3>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {recentOnboarding.map((item) => (
                            <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors">
                                <div className="flex items-center justify-between mb-3">
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{item.name}</h4>
                                        <p className="text-sm text-gray-600 mt-1">Current Step: {item.step}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {item.status === 'Completed' && <FiCheckCircle className="text-green-500" />}
                                        {item.status === 'Active' && <FiClock className="text-orange-500" />}
                                        {item.status === 'Stuck' && <FiAlertCircle className="text-red-500" />}
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                                item.status === 'Active' ? 'bg-orange-100 text-orange-700' :
                                                    'bg-red-100 text-red-700'
                                            }`}>
                                            {item.status}
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className={`h-2 rounded-full ${item.status === 'Completed' ? 'bg-green-500' : item.status === 'Stuck' ? 'bg-red-500' : 'bg-orange-500'}`}
                                        style={{ width: `${item.progress}%` }}
                                    ></div>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">{item.progress}% Complete</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnboardingDashboard;
