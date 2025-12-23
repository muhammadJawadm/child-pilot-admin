import React from 'react';
import Header from '../../layouts/partials/Header';
import { FiShield, FiCheckCircle, FiAlertTriangle, FiLock } from 'react-icons/fi';

const ComplianceDashboard: React.FC = () => {
    // const [selectedTenant, setSelectedTenant] = useState('all');

    const complianceStats = {
        hipaaCompliant: 120,
        coppaCompliant: 135,
        pendingReview: 10,
        violations: 2
    };

    const tenantCompliance = [
        { id: 1, name: 'Sunshine Daycare', hipaa: true, coppa: true, lastAudit: '2 weeks ago' },
        { id: 2, name: 'Little Stars', hipaa: true, coppa: false, lastAudit: '1 month ago' },
        { id: 3, name: 'Happy Kids', hipaa: false, coppa: true, lastAudit: '3 days ago' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Header header="Compliance & Security" link="/" />

            <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6">
                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-6">
                    <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                        <div className="flex items-center gap-2 mb-2">
                            <FiShield className="text-green-500" />
                            <p className="text-sm text-gray-600">HIPAA Compliant</p>
                        </div>
                        <p className="text-4xl font-bold text-green-600">{complianceStats.hipaaCompliant}</p>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                        <div className="flex items-center gap-2 mb-2">
                            <FiShield className="text-blue-500" />
                            <p className="text-sm text-gray-600">COPPA Compliant</p>
                        </div>
                        <p className="text-4xl font-bold text-blue-600">{complianceStats.coppaCompliant}</p>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                        <p className="text-sm text-gray-600 mb-2">Pending Review</p>
                        <p className="text-4xl font-bold text-orange-600">{complianceStats.pendingReview}</p>
                    </div>
                    <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                        <p className="text-sm text-gray-600 mb-2">Violations</p>
                        <p className="text-4xl font-bold text-red-600">{complianceStats.violations}</p>
                    </div>
                </div>

                {/* Tenant Compliance */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
                    <div className="p-6 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800">Tenant Compliance Status</h3>
                    </div>
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">Tenant</th>
                                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600">HIPAA</th>
                                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600">COPPA</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">Last Audit</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {tenantCompliance.map(tenant => (
                                <tr key={tenant.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900">{tenant.name}</td>
                                    <td className="px-6 py-4 text-center">
                                        {tenant.hipaa ? (
                                            <FiCheckCircle className="inline text-green-500" size={20} />
                                        ) : (
                                            <FiAlertTriangle className="inline text-red-500" size={20} />
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        {tenant.coppa ? (
                                            <FiCheckCircle className="inline text-green-500" size={20} />
                                        ) : (
                                            <FiAlertTriangle className="inline text-red-500" size={20} />
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">{tenant.lastAudit}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Security Audit Logs */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                    <div className="p-6 border-b border-gray-200 flex items-center gap-3">
                        <FiLock className="text-purple-500" />
                        <h3 className="text-lg font-semibold text-gray-800">Recent Security Audit Logs</h3>
                    </div>
                    <div className="divide-y divide-gray-100">
                        <div className="p-6">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Admin Access to Tenant Data</h4>
                                    <p className="text-sm text-gray-600">Super Admin viewed Sunshine Daycare data</p>
                                    <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                                </div>
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                                    Info
                                </span>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Failed Login Attempt</h4>
                                    <p className="text-sm text-gray-600">Multiple failed login attempts detected</p>
                                    <p className="text-xs text-gray-400 mt-1">5 hours ago</p>
                                </div>
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700">
                                    Warning
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComplianceDashboard;
