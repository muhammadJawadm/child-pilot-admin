import React, { useState } from "react";
import Header from "../../layouts/partials/Header";
import ChartOne from "../../components/ChartOne";
import PieChartBox from "../../components/PieChartBox";
import AddEventModal from "../../components/CalendarComponents/AddEventModal";
import { FaUserTie, FaChild, FaCheckCircle, FaFileInvoiceDollar } from "react-icons/fa";

interface MonthlyBookingData {
  users: number[];
  earnings: number[];
  premiumUsers?: number[];
}

const Home: React.FC = () => {
  // State for Add Event Modal
  const [showAddEventModal, setShowAddEventModal] = useState<boolean>(false);
  const [events, setEvents] = useState<any[]>([]);

  // Monthly revenue data with curved variations
  const monthlyData: MonthlyBookingData = {
    users: [15, 18, 22, 25, 30, 28, 28, 32, 30, 40, 35, 42],
    earnings: [28000, 30000, 32000, 31000, 35000, 34000, 37500, 36000, 35000, 33000, 32000, 31000],
    premiumUsers: [5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
  };

  // Attendance pie chart data (85% present, 15% absent)
  const attendanceData = {
    labels: ["Present", "Absent"],
    values: [85, 15],
  };

  // Calculate total revenue
  const totalRevenue = 37500;

  // Handle add event
  const handleAddEvent = (event: any) => {
    setEvents([...events, event]);
    console.log("New event added:", event);
    console.log("All events:", [...events, event]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header header={"Dashboard"} link="" />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Add New Event Button */}
        <div>
          <button
            onClick={() => setShowAddEventModal(true)}
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors flex items-center gap-2"
          >
            <span className="text-xl">+</span>
            Add new Event
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Active Staff - Pink */}
          <StatCard
            bgColor="bg-pink-50"
            iconBgColor="bg-pink-200"
            iconColor="text-pink-600"
            icon={FaUserTie}
            count="30"
            title="Active Staff"
            subtitle="Quick count of teachers/staff"
          />

          {/* Card 2: Children - Orange/Yellow */}
          <StatCard
            bgColor="bg-orange-50"
            iconBgColor="bg-orange-200"
            iconColor="text-orange-600"
            icon={FaChild}
            count="58"
            title="Children"
            subtitle="Total children enrolled"
          />

          {/* Card 3: Present - Green */}
          <StatCard
            bgColor="bg-green-50"
            iconBgColor="bg-green-200"
            iconColor="text-green-600"
            icon={FaCheckCircle}
            count="58"
            title="Present"
            subtitle="Summary of attendance today"
          />

          {/* Card 4: Due - Purple */}
          <StatCard
            bgColor="bg-purple-50"
            iconBgColor="bg-purple-200"
            iconColor="text-purple-600"
            icon={FaFileInvoiceDollar}
            count="30k"
            title="Due"
            subtitle="Outstanding parent invoices"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Chart - Takes 2 columns */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <span className="px-3 py-1 bg-gray-100 rounded-md">Yearly</span>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">${(totalRevenue / 1000).toFixed(1)}K</div>
                <div className="text-sm text-gray-500">Total Revenue</div>
              </div>
            </div>
            <ChartOne monthlyData={monthlyData} />
          </div>

          {/* Attendance Pie Chart */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <PieChartBox title="Attendance" chartData={attendanceData} />
            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-gray-600">Present</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">85%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-300"></div>
                  <span className="text-sm text-gray-600">Absent</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">15%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Event Modal */}
      <AddEventModal
        isOpen={showAddEventModal}
        onClose={() => setShowAddEventModal(false)}
        onAddEvent={handleAddEvent}
      />
    </div>
  );
};

export default Home;

// Stat Card Component
interface StatCardProps {
  bgColor: string;
  iconBgColor: string;
  iconColor: string;
  icon: React.ElementType;
  count: string;
  title: string;
  subtitle: string;
}

const StatCard = ({ bgColor, iconBgColor, iconColor, icon: Icon, count, title, subtitle }: StatCardProps) => (
  <div className={`${bgColor} rounded-xl p-6 border border-gray-200`}>
    <div className="flex items-start justify-between mb-4">
      <div className={`${iconBgColor} ${iconColor} p-3 rounded-full`}>
        <Icon className="w-5 h-5" />
      </div>
    </div>
    <div>
      <h3 className="text-3xl font-bold text-gray-900 mb-1">{count}</h3>
      <p className="text-sm font-semibold text-gray-700 mb-1">{title}</p>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  </div>
);