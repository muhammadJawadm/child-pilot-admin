import { FiSearch, FiCalendar } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import Header from "../../layouts/partials/Header";
import { useState } from "react";
import { mealLogsData, activityNotesData, incidentReportsData } from "../../components/data";

const Nutrition: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedClassroom, setSelectedClassroom] = useState("Preschool 2");
    const [activeTab, setActiveTab] = useState<"meals" | "activity" | "incidents">("meals");
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [dateFrom, setDateFrom] = useState("02-09-2025");
    const [dateTo, setDateTo] = useState("02-09-2025");

    const classrooms = ["Preschool 1", "Preschool 2", "Kindergarten", "Toddlers", "All Classes"];

    // Filter data based on search term
    const filteredMealLogs = mealLogsData.filter((log) => {
        if (!searchTerm) return true;
        const search = searchTerm.toLowerCase();
        return (
            log.childName.toLowerCase().includes(search) ||
            log.classroom.toLowerCase().includes(search)
        );
    });

    const filteredActivityNotes = activityNotesData.filter((note) => {
        if (!searchTerm) return true;
        const search = searchTerm.toLowerCase();
        return note.childName.toLowerCase().includes(search);
    });

    const filteredIncidentReports = incidentReportsData.filter((report) => {
        if (!searchTerm) return true;
        const search = searchTerm.toLowerCase();
        return report.childName.toLowerCase().includes(search);
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <Header header={"Nutrition & Activity Logs"} link="" />

            <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6">
                {/* Top Controls */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    {/* Search */}
                    <div className="relative w-full sm:w-96">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiSearch className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Search Child / Class"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* Classroom Dropdown */}
                    <div className="w-full sm:w-auto">
                        <select
                            value={selectedClassroom}
                            onChange={(e) => setSelectedClassroom(e.target.value)}
                            className="w-full sm:w-48 px-4 py-2.5 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                        >
                            {classrooms.map((classroom) => (
                                <option key={classroom} value={classroom}>
                                    {classroom}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Tabs */}
                <div className="bg-white rounded-t-xl shadow-sm border border-gray-200 border-b-0">
                    <div className="flex border-b border-gray-200">
                        <button
                            onClick={() => setActiveTab("meals")}
                            className={`px-6 py-3 font-medium text-sm transition-colors ${activeTab === "meals"
                                    ? "text-blue-600 border-b-2 border-blue-600"
                                    : "text-gray-600 hover:text-gray-800"
                                }`}
                        >
                            Meal Logs
                        </button>
                        <button
                            onClick={() => setActiveTab("activity")}
                            className={`px-6 py-3 font-medium text-sm transition-colors ${activeTab === "activity"
                                    ? "text-blue-600 border-b-2 border-blue-600"
                                    : "text-gray-600 hover:text-gray-800"
                                }`}
                        >
                            Activity & Behavior Notes
                        </button>
                        <button
                            onClick={() => setActiveTab("incidents")}
                            className={`px-6 py-3 font-medium text-sm transition-colors ${activeTab === "incidents"
                                    ? "text-blue-600 border-b-2 border-blue-600"
                                    : "text-gray-600 hover:text-gray-800"
                                }`}
                        >
                            Incident Reports
                        </button>
                    </div>
                </div>

                {/* Table Controls */}
                <div className="bg-white shadow-sm border border-gray-200 border-t-0 px-6 py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        {/* Date Range */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-600">To</span>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={dateTo}
                                        onChange={(e) => setDateTo(e.target.value)}
                                        className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm w-32 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <FiCalendar className="absolute right-2 top-2 text-gray-400" size={16} />
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-600">From</span>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={dateFrom}
                                        onChange={(e) => setDateFrom(e.target.value)}
                                        className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm w-32 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <FiCalendar className="absolute right-2 top-2 text-gray-400" size={16} />
                                </div>
                            </div>

                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                                <FiDownload size={16} />
                                Export PDF
                            </button>
                        </div>

                        {/* Entries Dropdown */}
                        <div className="flex items-center gap-2">
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
                    </div>
                </div>

                {/* Tables */}
                <div className="bg-white rounded-b-xl shadow-sm border border-gray-200 border-t-0 overflow-hidden">
                    {/* Meal Logs Table */}
                    {activeTab === "meals" && (
                        <table className="w-full text-sm text-left text-gray-600">
                            <thead className="text-xs font-semibold text-gray-600 bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4">Classroom</th>
                                    <th className="px-6 py-4">Child Name</th>
                                    <th className="px-6 py-4">Meal Type</th>
                                    <th className="px-6 py-4">Logged By</th>
                                    <th className="px-6 py-4">Date</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredMealLogs.slice(0, entriesPerPage).map((log, idx) => (
                                    <tr
                                        key={log.id}
                                        className={`hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? "bg-white" : "bg-green-50"
                                            }`}
                                    >
                                        <td className="px-6 py-4 text-gray-800 font-medium">{log.classroom}</td>
                                        <td className="px-6 py-4 text-gray-800">{log.childName}</td>
                                        <td className="px-6 py-4 text-gray-600">{log.mealType}</td>
                                        <td className="px-6 py-4 text-gray-600">{log.loggedBy}</td>
                                        <td className="px-6 py-4 text-gray-600">{log.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    {/* Activity & Behavior Notes Table */}
                    {activeTab === "activity" && (
                        <table className="w-full text-sm text-left text-gray-600">
                            <thead className="text-xs font-semibold text-gray-600 bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4">Activity</th>
                                    <th className="px-6 py-4">Child Name</th>
                                    <th className="px-6 py-4">Note Summary</th>
                                    <th className="px-6 py-4">Logged By</th>
                                    <th className="px-6 py-4">Behaviour</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredActivityNotes.slice(0, entriesPerPage).map((note, idx) => (
                                    <tr
                                        key={note.id}
                                        className={`hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? "bg-white" : "bg-purple-50"
                                            }`}
                                    >
                                        <td className="px-6 py-4 text-gray-800 font-medium">{note.activity}</td>
                                        <td className="px-6 py-4 text-gray-800">{note.childName}</td>
                                        <td className="px-6 py-4 text-gray-600">{note.noteSummary}</td>
                                        <td className="px-6 py-4 text-gray-600">{note.loggedBy}</td>
                                        <td className="px-6 py-4 text-gray-600">{note.behaviour}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    {/* Incident Reports Table */}
                    {activeTab === "incidents" && (
                        <table className="w-full text-sm text-left text-gray-600">
                            <thead className="text-xs font-semibold text-gray-600 bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4">Child Name</th>
                                    <th className="px-6 py-4">Reported By</th>
                                    <th className="px-6 py-4">Description</th>
                                    <th className="px-6 py-4">Actions Taken</th>
                                    <th className="px-6 py-4">Date</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredIncidentReports.slice(0, entriesPerPage).map((report, idx) => (
                                    <tr
                                        key={report.id}
                                        className={`hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? "bg-white" : "bg-pink-50"
                                            }`}
                                    >
                                        <td className="px-6 py-4 text-gray-800 font-medium">{report.childName}</td>
                                        <td className="px-6 py-4 text-gray-600">{report.reportedBy}</td>
                                        <td className="px-6 py-4 text-gray-600">{report.description}</td>
                                        <td className="px-6 py-4 text-gray-600">{report.actionsTaken}</td>
                                        <td className="px-6 py-4 text-gray-600">{report.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Nutrition;
