import React, { useState } from 'react';
import Header from '../../layouts/partials/Header';
import { FiDownload, FiCalendar } from 'react-icons/fi';

const ReportsCompliance: React.FC = () => {
    const [dateFrom, setDateFrom] = useState('2025-01-01');
    const [dateTo, setDateTo] = useState('2025-12-31');
    const [reportType, setReportType] = useState('attendance');

    const handleExport = (format: 'pdf' | 'excel') => {
        console.log(`Exporting ${reportType} report as ${format}`);
        console.log('Date range:', dateFrom, 'to', dateTo);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header header="Reports & Compliance" link="" />

            <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6">
                {/* Summary Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-6">
                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                        <p className="text-sm text-gray-600 mb-1">Overall Attendance</p>
                        <p className="text-4xl font-bold text-blue-600">92%</p>
                        <p className="text-xs text-gray-500 mt-1">Across all daycares</p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                        <p className="text-sm text-gray-600 mb-1">Staff-Child Ratio</p>
                        <p className="text-4xl font-bold text-purple-600">1:2.8</p>
                        <p className="text-xs text-gray-500 mt-1">Platform average</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                        <p className="text-sm text-gray-600 mb-1">Total Payroll</p>
                        <p className="text-4xl font-bold text-green-600">$456K</p>
                        <p className="text-xs text-gray-500 mt-1">This month</p>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                        <p className="text-sm text-gray-600 mb-1">Compliance Rate</p>
                        <p className="text-4xl font-bold text-orange-600">98%</p>
                        <p className="text-xs text-gray-500 mt-1">All daycares</p>
                    </div>
                </div>

                {/* Report Generation */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-6">Generate Report</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Report Type */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Report Type
                            </label>
                            <select
                                value={reportType}
                                onChange={(e) => setReportType(e.target.value)}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                            >
                                <option value="attendance">Overall Attendance Summary</option>
                                <option value="payroll">Payroll Summaries</option>
                                <option value="staff-ratio">Staff-to-Children Ratios</option>
                                <option value="compliance">Compliance Metrics</option>
                                <option value="revenue">Revenue Report</option>
                            </select>
                        </div>

                        {/* Date Range */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    From Date
                                </label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        value={dateFrom}
                                        onChange={(e) => setDateFrom(e.target.value)}
                                        className="w-full px-4 py-2.5 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <FiCalendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    To Date
                                </label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        value={dateTo}
                                        onChange={(e) => setDateTo(e.target.value)}
                                        className="w-full px-4 py-2.5 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <FiCalendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Export Buttons */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => handleExport('pdf')}
                            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2"
                        >
                            <FiDownload size={18} />
                            Export as PDF
                        </button>
                        <button
                            onClick={() => handleExport('excel')}
                            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2"
                        >
                            <FiDownload size={18} />
                            Export as Excel
                        </button>
                    </div>
                </div>

                {/* Recent Reports */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Reports</h3>
                    <div className="space-y-3">
                        {[
                            { name: 'Attendance Summary - November 2025', date: '2025-12-01', type: 'PDF' },
                            { name: 'Payroll Report - Q4 2025', date: '2025-11-28', type: 'Excel' },
                            { name: 'Compliance Metrics - Annual 2025', date: '2025-11-15', type: 'PDF' },
                        ].map((report, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                                <div>
                                    <p className="font-medium text-gray-800">{report.name}</p>
                                    <p className="text-sm text-gray-500">Generated on {report.date}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                                        {report.type}
                                    </span>
                                    <button className="text-blue-600 hover:text-blue-700">
                                        <FiDownload size={18} />
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

export default ReportsCompliance;
