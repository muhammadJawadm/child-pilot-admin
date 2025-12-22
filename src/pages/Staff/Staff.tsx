import { FiSearch, FiCalendar, FiDownload, FiSend } from "react-icons/fi";
import Header from "../../layouts/partials/Header";
import { useState } from "react";
import { staffData } from "../../components/data";
import { FiEdit2, FiTrash2, FiEye } from "react-icons/fi";

// Classroom data
const classroomsData = [
  { id: 1, name: "Preschool A", totalStudents: 40, totalStaff: 7 },
  { id: 2, name: "Kindergarten B", totalStudents: 20, totalStaff: 4 },
  { id: 3, name: "First Grade C", totalStudents: 34, totalStaff: 3 },
  { id: 4, name: "Preschool D", totalStudents: 22, totalStaff: 5 },
  { id: 5, name: "Kindergarten E", totalStudents: 19, totalStaff: 4 },
  { id: 6, name: "First Grade F", totalStudents: 33, totalStaff: 6 },
  { id: 7, name: "Preschool G", totalStudents: 6, totalStaff: 2 },
];

// Dummy student data
const studentsData = Array.from({ length: 35 }, (_, i) => ({
  id: i + 1,
  name: "Emma",
}));

// Payroll data
const payrollData = [
  { id: 1, invoiceId: "ADMIN-2025-09", period: "Sep 2025", amount: "$240", paymentDate: "01 Oct 2025" },
  { id: 2, invoiceId: "ADMIN-2025-09", period: "Sep 2025", amount: "$240", paymentDate: "01 Oct 2025" },
  { id: 3, invoiceId: "ADMIN-2025-09", period: "Sep 2025", amount: "$240", paymentDate: "01 Oct 2025" },
  { id: 4, invoiceId: "ADMIN-2025-09", period: "Sep 2025", amount: "$240", paymentDate: "01 Oct 2025" },
  { id: 5, invoiceId: "ADMIN-2025-09", period: "Sep 2025", amount: "$240", paymentDate: "01 Oct 2025" },
];

const StaffManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [activeTab, setActiveTab] = useState<"staff" | "classrooms" | "students" | "payroll">("staff");
  const [selectedStudents, setSelectedStudents] = useState<number[]>([]);
  const [studentSearchTerm, setStudentSearchTerm] = useState("");
  const [studentEntriesPerPage, setStudentEntriesPerPage] = useState(25);
  const [payrollEntriesPerPage, setPayrollEntriesPerPage] = useState(25);
  const [dateFrom, setDateFrom] = useState("02-09-2025");
  const [dateTo, setDateTo] = useState("02-09-2025");
  const [markAsAbsent, setMarkAsAbsent] = useState(false);

  // Form state for add staff modal
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Teacher",
    classroom: "Preschool A"
  });

  const filteredStaff = staffData.filter((staff) =>
    staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredStudents = studentsData.filter((student) =>
    student.name.toLowerCase().includes(studentSearchTerm.toLowerCase())
  );

  // Stats
  const totalStaff = 30;
  const presentToday = 25;
  const onLeave = 3;
  const absent = 2;

  const handleSubmit = () => {
    console.log(formData);
    setShowModal(false);
    setFormData({
      name: "",
      email: "",
      role: "Teacher",
      classroom: "Preschool A"
    });
  };

  const toggleStudentSelection = (studentId: number) => {
    setSelectedStudents(prev =>
      prev.includes(studentId)
        ? prev.filter(id => id !== studentId)
        : [...prev, studentId]
    );
  };

  const handleExportPDF = () => {
    console.log("Exporting PDF...");
  };

  const handleSendCredentials = () => {
    console.log("Sending credentials...");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header header={"Staff Management & Attendance"} link='' />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6">

        {/* Show stats only on staff tab */}
        {activeTab === "staff" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-pink-50 rounded-xl p-6 border border-pink-100">
              <p className="text-sm text-gray-600 mb-1">Total Staff</p>
              <p className="text-4xl font-bold text-pink-600">{totalStaff}</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <p className="text-sm text-gray-600 mb-1">Present Today</p>
              <p className="text-4xl font-bold text-purple-600">{presentToday}</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <p className="text-sm text-gray-600 mb-1">On Leave</p>
              <p className="text-4xl font-bold text-blue-600">{onLeave}</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
              <p className="text-sm text-gray-600 mb-1">Absent</p>
              <p className="text-4xl font-bold text-orange-600">{absent}</p>
            </div>
          </div>
        )}

        {/* Personal Information - Show for students and payroll tabs */}
        {(activeTab === "students" || activeTab === "payroll") && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
            <div className="flex flex-wrap items-center gap-8">
              {/* Staff Info */}
              <div>
                <p className="text-2xl font-bold text-gray-900">John</p>
                <p className="text-sm text-gray-500">john@mail.com</p>
              </div>

              {/* Classroom */}
              <div>
                <p className="text-base font-semibold text-gray-900">Preschool 1</p>
                <p className="text-sm text-gray-500">23 Students</p>
              </div>

              {/* Clock In Time */}
              <div>
                <p className="text-sm text-gray-600">Clock In Time:</p>
                <p className="text-base font-medium text-gray-900">12:00 PM</p>
              </div>

              {/* Clock Out Time */}
              <div>
                <p className="text-sm text-gray-600">Clock Out Time:</p>
                <div className="flex items-center gap-2">
                  <p className="text-base font-medium text-gray-400">----------</p>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={markAsAbsent}
                      onChange={(e) => setMarkAsAbsent(e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-sm text-blue-600">Mark as Absent</span>
                  </label>
                </div>
              </div>

              {/* Parent ID and Send Button */}
              <div className="ml-auto flex items-center gap-4">
                <div>
                  <p className="text-sm text-gray-600">Parent321</p>
                  <p className="text-xs text-gray-400">Pass123401</p>
                </div>
                <button
                  onClick={handleSendCredentials}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-colors flex items-center gap-2"
                >
                  <FiSend size={16} />
                  Send Credentials
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("staff")}
              className={`pb-2 font-semibold transition-colors relative ${activeTab === "staff"
                ? "text-blue-600"
                : "text-gray-500 hover:text-gray-700"
                }`}
            >
              Staff List
              {activeTab === "staff" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab("classrooms")}
              className={`pb-2 font-semibold transition-colors relative ${activeTab === "classrooms"
                ? "text-blue-600"
                : "text-gray-500 hover:text-gray-700"
                }`}
            >
              Classrooms
              {activeTab === "classrooms" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab("students")}
              className={`pb-2 font-semibold transition-colors relative ${activeTab === "students"
                ? "text-blue-600"
                : "text-gray-500 hover:text-gray-700"
                }`}
            >
              Student List
              {activeTab === "students" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab("payroll")}
              className={`pb-2 font-semibold transition-colors relative ${activeTab === "payroll"
                ? "text-blue-600"
                : "text-gray-500 hover:text-gray-700"
                }`}
            >
              Payroll
              {activeTab === "payroll" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
              )}
            </button>
          </div>
        </div>

        {/* Staff List Tab */}
        {activeTab === "staff" && (
          <>
            {/* Top Bar with Search, Filter and Add Button */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-4">
                {/* Show Entries */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Show</span>
                  <select
                    value={entriesPerPage}
                    onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                    className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm"
                  >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                  </select>
                  <span className="text-sm text-gray-600">entries</span>
                </div>

                {/* Filter Dropdown */}
                <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
                  <option>All</option>
                  <option>Active</option>
                  <option>On Leave</option>
                </select>
              </div>

              <div className="flex items-center gap-4">
                {/* Search */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white"
                    placeholder="Search by staff name or role"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* Add Button */}
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-colors flex items-center gap-2 whitespace-nowrap"
                >
                  <span className="text-xl">+</span>
                  Add New Staff Member
                </button>
              </div>
            </div>

            {/* TABLE */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="text-xs font-semibold text-gray-600 bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4">Staff</th>
                    <th className="px-6 py-4">Classroom</th>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4 text-center">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {filteredStaff.slice(0, entriesPerPage).map((staff) => (
                    <tr key={staff.id} className="hover:bg-gray-50 transition-colors">
                      {/* Staff */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-600 font-semibold text-sm">
                              {staff.name.charAt(0)}
                            </span>
                          </div>
                          <span className="font-medium text-gray-800">{staff.name}</span>
                        </div>
                      </td>

                      {/* Classroom */}
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-gray-800">Preschool 1</p>
                          <button className="text-xs text-blue-500 hover:underline">
                            Assign Students
                          </button>
                        </div>
                      </td>

                      {/* Email */}
                      <td className="px-6 py-4">
                        <span className="text-gray-600">{staff.email}</span>
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-3">
                          <button className="text-blue-500 hover:text-blue-700">
                            <FiEdit2 size={18} />
                          </button>
                          <button className="text-red-500 hover:text-red-700">
                            <FiTrash2 size={18} />
                          </button>
                          <button className="text-gray-500 hover:text-gray-700">
                            <FiEye size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Classrooms Tab */}
        {activeTab === "classrooms" && (
          <>
            <div className="flex justify-end mb-6">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-colors flex items-center gap-2">
                <span className="text-xl">+</span>
                Add New Classroom
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="text-xs font-semibold text-gray-600 bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4">Classroom</th>
                    <th className="px-6 py-4 text-center">Total Students</th>
                    <th className="px-6 py-4 text-center">Total Staff</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {classroomsData.map((classroom) => (
                    <tr key={classroom.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="font-medium text-gray-800">{classroom.name}</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-gray-600">{classroom.totalStudents}</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-gray-600">{classroom.totalStaff}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Student List Tab */}
        {activeTab === "students" && (
          <>
            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Show</span>
                <select
                  value={studentEntriesPerPage}
                  onChange={(e) => setStudentEntriesPerPage(Number(e.target.value))}
                  className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm"
                >
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
                <span className="text-sm text-gray-600">entries</span>
              </div>

              {/* Search */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white"
                  placeholder="Search student"
                  value={studentSearchTerm}
                  onChange={(e) => setStudentSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Student Grid */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {filteredStudents.slice(0, studentEntriesPerPage).map((student) => (
                  <div
                    key={student.id}
                    className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={selectedStudents.includes(student.id)}
                      onChange={() => toggleStudentSelection(student.id)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center">
                      <span className="text-orange-700 font-semibold text-sm">
                        {student.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{student.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Payroll Tab */}
        {activeTab === "payroll" && (
          <>
            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Show</span>
                <select
                  value={payrollEntriesPerPage}
                  onChange={(e) => setPayrollEntriesPerPage(Number(e.target.value))}
                  className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm"
                >
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
                <span className="text-sm text-gray-600">entries</span>
              </div>

              <div className="flex items-center gap-4">
                {/* Date Filters */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">To</span>
                  <div className="relative">
                    <input
                      type="text"
                      value={dateTo}
                      onChange={(e) => setDateTo(e.target.value)}
                      className="w-32 px-3 py-2 pr-8 border border-gray-300 rounded-lg text-sm"
                      placeholder="DD-MM-YYYY"
                    />
                    <FiCalendar className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">From</span>
                  <div className="relative">
                    <input
                      type="text"
                      value={dateFrom}
                      onChange={(e) => setDateFrom(e.target.value)}
                      className="w-32 px-3 py-2 pr-8 border border-gray-300 rounded-lg text-sm"
                      placeholder="DD-MM-YYYY"
                    />
                    <FiCalendar className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  </div>
                </div>

                {/* Export PDF Button */}
                <button
                  onClick={handleExportPDF}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-colors flex items-center gap-2"
                >
                  <FiDownload size={16} />
                  Export PDF
                </button>
              </div>
            </div>

            {/* Payroll Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="text-xs font-semibold text-gray-600 bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4">Invoice ID</th>
                    <th className="px-6 py-4">Period</th>
                    <th className="px-6 py-4">Amount</th>
                    <th className="px-6 py-4">Payment date</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {payrollData.slice(0, payrollEntriesPerPage).map((payroll) => (
                    <tr key={payroll.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="font-medium text-gray-800">{payroll.invoiceId}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-600">{payroll.period}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-600">{payroll.amount}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-600">{payroll.paymentDate}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>

      {/* Add New Staff Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Add Staff Member</h2>

            <form className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter name here"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter email here"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Select Role */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Role
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option>Teacher</option>
                  <option>Lead Teacher</option>
                  <option>Assistant Teacher</option>
                  <option>Activities Coordinator</option>
                  <option>Nurse</option>
                  <option>Administrator</option>
                </select>
              </div>

              {/* Assign Classroom */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Assign Classroom
                </label>
                <select
                  value={formData.classroom}
                  onChange={(e) => setFormData({ ...formData, classroom: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option>Preschool A</option>
                  <option>Kindergarten B</option>
                  <option>First Grade C</option>
                  <option>Preschool D</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-6 py-2.5 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex-1 px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Add Staff Member
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default StaffManagement;
