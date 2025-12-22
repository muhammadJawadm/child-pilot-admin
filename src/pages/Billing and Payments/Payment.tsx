import { useState } from "react";
import { FiCalendar, FiEdit2, FiTrash2 } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import StatCard from "../../components/BillingComponents/StatCard";
import CreatePlanModal from "../../components/BillingComponents/CreatePlanModal";
import PaySubscriptionModal from "../../components/BillingComponents/PaySubscriptionModal";

const Payment: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'billing' | 'invoices' | 'subscription'>('billing');
  const [showCreatePlanModal, setShowCreatePlanModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [dateFrom, setDateFrom] = useState('02-09-2025');
  const [dateTo, setDateTo] = useState('02-09-2025');
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  // Mock data for Billing Plans
  const billingPlans = [
    { id: 1, planName: 'Infant Plan', type: 'Full time', fee: '800$', billingCycle: 'Monthly', enrolledChildren: 12 },
    { id: 2, planName: 'Toddler Plan', type: 'Part time', fee: '600$', billingCycle: 'Monthly', enrolledChildren: 12 },
    { id: 3, planName: 'Preschool Plan', type: 'Full time', fee: '650$', billingCycle: 'Monthly', enrolledChildren: 12 },
    { id: 4, planName: 'After School Care', type: 'Part time', fee: '800$', billingCycle: 'Monthly', enrolledChildren: 12 },
  ];

  // Mock data for Invoices
  const invoices = [
    { id: 'INV-0923', parent: 'Sarah', child: 'Ava', classroom: 'Preschool 1', plan: 'Full-time', amount: '$800', status: 'Paid', paymentDate: '01 Oct 2025' },
    { id: 'INV-0924', parent: 'John', child: 'Doe', classroom: 'Preschool 2', plan: 'Part-time', amount: '$500', status: 'Paid', paymentDate: '05 Oct 2025' },
    { id: 'INV-0927', parent: 'Jessica', child: 'Taylor', classroom: 'Preschool 5', plan: 'Part-time', amount: '$600', status: 'Paid', paymentDate: '25 Oct 2025' },
    { id: 'INV-0923', parent: 'Sarah', child: 'Ava', classroom: 'Preschool 1', plan: 'Full-time', amount: '$800', status: 'Paid', paymentDate: '01 Oct 2025' },
    { id: 'INV-0925', parent: 'Emily', child: 'Smith', classroom: 'Preschool 3', plan: 'Full-time', amount: '$950', status: 'Paid', paymentDate: '15 Oct 2025' },
    { id: 'INV-0928', parent: 'David', child: 'Lee', classroom: 'Preschool 6', plan: 'Full-time', amount: '$920', status: 'Paid', paymentDate: '30 Oct 2025' },
    { id: 'INV-0929', parent: 'Laura', child: 'Wilson', classroom: 'Preschool 7', plan: 'Part-time', amount: '$450', status: 'Paid', paymentDate: '02 Nov 2025' },
    { id: 'INV-0926', parent: 'Michael', child: 'Brown', classroom: 'Preschool 4', plan: 'Full-time', amount: '$870', status: 'Paid', paymentDate: '20 Oct 2025' },
  ];

  // Mock data for Admin Subscription
  const subscriptionData = [
    { id: 'ADMIN-2025-10', period: 'Oct 2025', amount: '$120', status: 'Paid', paymentDate: '01 Oct 2025' },
    { id: 'ADMIN-2025-11', period: 'Nov 2025', amount: '$150', status: 'Pending', paymentDate: '15 Nov 2025' },
    { id: 'ADMIN-2025-11', period: 'Nov 2025', amount: '$150', status: 'Paid', paymentDate: '01 Dec 2025' },
    { id: 'ADMIN-2025-12', period: 'Dec 2025', amount: '$450', status: 'Pending', paymentDate: '01 Jan 2026' },
    { id: 'ADMIN-2026-01', period: 'Jan 2026', amount: '$200', status: 'Paid', paymentDate: '05 Feb 2026' },
  ];

  const handleCreatePlan = (planData: any) => {
    console.log('Creating plan:', planData);
    // Add API call here
  };

  const handlePayment = (paymentData: any) => {
    console.log('Processing payment:', paymentData);
    // Add API call here
  };

  const getStatusBadge = (status: string) => {
    if (status === 'Paid') {
      return <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">Paid</span>;
    }
    return <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">Pending</span>;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Billing & Payments</h1>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
                <BsBell size={20} className="text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/150?img=12"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-gray-200"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Robert Fox</p>
                  <p className="text-xs text-gray-500">Admin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6">
        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <StatCard title="Total Revenue (This Month)" value="$12,800" valueColor="text-blue-600" />
          <StatCard title="Pending Invoices" value="14" valueColor="text-blue-600" />
          <StatCard title="Active Billing Plans" value="45" valueColor="text-blue-600" />
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-t-xl border-b border-gray-200">
          <div className="flex gap-8 px-8">
            <button
              onClick={() => setActiveTab('billing')}
              className={`py-4 px-2 font-semibold text-sm border-b-2 transition-colors ${activeTab === 'billing'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
            >
              Billing Plans
            </button>
            <button
              onClick={() => setActiveTab('invoices')}
              className={`py-4 px-2 font-semibold text-sm border-b-2 transition-colors ${activeTab === 'invoices'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
            >
              Invoices & Transactions
            </button>
            <button
              onClick={() => setActiveTab('subscription')}
              className={`py-4 px-2 font-semibold text-sm border-b-2 transition-colors ${activeTab === 'subscription'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
            >
              Admin Subscription
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-b-xl shadow-sm border border-gray-200 border-t-0 p-6">
          {/* Billing Plans Tab */}
          {activeTab === 'billing' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-700">To</label>
                    <div className="relative">
                      <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                      <input
                        type="text"
                        value={dateFrom}
                        onChange={(e) => setDateFrom(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-700">From</label>
                    <div className="relative">
                      <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                      <input
                        type="text"
                        value={dateTo}
                        onChange={(e) => setDateTo(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-colors">
                    <IoDocumentTextOutline size={18} />
                    Export PDF
                  </button>
                </div>
                <button
                  onClick={() => setShowCreatePlanModal(true)}
                  className="flex items-center gap-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
                >
                  <span className="text-xl">+</span>
                  Create New Plan
                </button>
              </div>

              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">Billing Plans</p>
                <p className="text-sm text-gray-600">Create and manage parent fee structures</p>
              </div>

              <div className="mb-4 flex items-center gap-2">
                <span className="text-sm text-gray-600">Show</span>
                <select
                  value={entriesPerPage}
                  onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                  className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
                <span className="text-sm text-gray-600">entries</span>
              </div>

              {/* Billing Plans Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs font-semibold text-gray-700 bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3">Plan Name</th>
                      <th className="px-6 py-3">Type</th>
                      <th className="px-6 py-3">Fee</th>
                      <th className="px-6 py-3">Billing Cycle</th>
                      <th className="px-6 py-3">Enrolled Children</th>
                      <th className="px-6 py-3 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {billingPlans.map((plan) => (
                      <tr key={plan.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-medium text-gray-800">{plan.planName}</td>
                        <td className="px-6 py-4 text-gray-600">{plan.type}</td>
                        <td className="px-6 py-4 font-semibold text-gray-800">{plan.fee}</td>
                        <td className="px-6 py-4 text-gray-600">{plan.billingCycle}</td>
                        <td className="px-6 py-4 text-gray-600">{plan.enrolledChildren}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center gap-3">
                            <button className="text-blue-500 hover:text-blue-700 transition-colors p-1">
                              <FiEdit2 size={18} />
                            </button>
                            <button className="text-red-500 hover:text-red-700 transition-colors p-1">
                              <FiTrash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Invoices & Transactions Tab */}
          {activeTab === 'invoices' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-700">To</label>
                    <div className="relative">
                      <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                      <input
                        type="text"
                        value={dateFrom}
                        onChange={(e) => setDateFrom(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-700">From</label>
                    <div className="relative">
                      <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                      <input
                        type="text"
                        value={dateTo}
                        onChange={(e) => setDateTo(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-colors">
                    <IoDocumentTextOutline size={18} />
                    Export PDF
                  </button>
                </div>
                <button className="flex items-center gap-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors">
                  <span className="text-xl">+</span>
                  Create New Invoice
                </button>
              </div>

              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">Invoices & Transactions</p>
                <p className="text-sm text-gray-600">Create and manage parent fee structures</p>
              </div>

              <div className="mb-4 flex items-center gap-2">
                <span className="text-sm text-gray-600">Show</span>
                <select
                  value={entriesPerPage}
                  onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                  className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
                <span className="text-sm text-gray-600">entries</span>
              </div>

              {/* Invoices Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs font-semibold text-gray-700 bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3">Invoice ID</th>
                      <th className="px-6 py-3">Parent</th>
                      <th className="px-6 py-3">Child</th>
                      <th className="px-6 py-3">Classroom</th>
                      <th className="px-6 py-3">Plan</th>
                      <th className="px-6 py-3">Amount</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Payment date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {invoices.slice(0, entriesPerPage).map((invoice, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-gray-600">{invoice.id}</td>
                        <td className="px-6 py-4 text-gray-600">{invoice.parent}</td>
                        <td className="px-6 py-4 text-gray-600">{invoice.child}</td>
                        <td className="px-6 py-4 text-gray-600">{invoice.classroom}</td>
                        <td className="px-6 py-4 text-gray-600">{invoice.plan}</td>
                        <td className="px-6 py-4 font-semibold text-gray-800">{invoice.amount}</td>
                        <td className="px-6 py-4">{getStatusBadge(invoice.status)}</td>
                        <td className="px-6 py-4 text-gray-600">{invoice.paymentDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Admin Subscription Tab */}
          {activeTab === 'subscription' && (
            <div>
              <div className="mb-6">
                <p className="text-lg font-semibold text-gray-700 mb-2">Admin Subscription</p>
                <p className="text-sm text-gray-600">Payment to Super Admin to use SolaraCare</p>
              </div>

              {/* Subscription Pricing */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Total Staff</p>
                  <p className="text-2xl font-bold text-gray-800">12 × $5</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Total Children</p>
                  <p className="text-2xl font-bold text-gray-800">45 × 25</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <p className="text-sm text-gray-600 mb-1">Total Due This Month</p>
                  <p className="text-2xl font-bold text-red-500">$320</p>
                </div>
              </div>

              <div className="mb-4 flex items-center gap-2">
                <span className="text-sm text-gray-600">Show</span>
                <select
                  value={entriesPerPage}
                  onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                  className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
                <span className="text-sm text-gray-600">entries</span>
              </div>

              {/* Subscription History Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs font-semibold text-gray-700 bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3">Invoice ID</th>
                      <th className="px-6 py-3">Period</th>
                      <th className="px-6 py-3">Amount</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Payment date</th>
                      <th className="px-6 py-3 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {subscriptionData.map((sub, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-gray-600">{sub.id}</td>
                        <td className="px-6 py-4 text-gray-600">{sub.period}</td>
                        <td className="px-6 py-4 font-semibold text-gray-800">{sub.amount}</td>
                        <td className="px-6 py-4">{getStatusBadge(sub.status)}</td>
                        <td className="px-6 py-4 text-gray-600">{sub.paymentDate}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center">
                            {sub.status === 'Pending' ? (
                              <button
                                onClick={() => setShowPaymentModal(true)}
                                className="px-4 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-colors"
                              >
                                Pay Now
                              </button>
                            ) : (
                              <span className="text-gray-400 text-sm">—</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      <CreatePlanModal
        isOpen={showCreatePlanModal}
        onClose={() => setShowCreatePlanModal(false)}
        onSubmit={handleCreatePlan}
      />
      <PaySubscriptionModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        onSubmit={handlePayment}
        amount="$320"
        subscriptionPeriod="October 2025 Subscription"
      />
    </div>
  );
};

export default Payment;
