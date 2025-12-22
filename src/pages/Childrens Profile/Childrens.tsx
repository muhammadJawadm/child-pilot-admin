import { FiSearch } from "react-icons/fi";
import Header from "../../layouts/partials/Header";
import { useState } from "react";
import { childrenData } from "../../components/data";
import { FaChild, FaUserGraduate } from "react-icons/fa";
import { MdHealthAndSafety, MdDescription } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Childrens: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Calculate statistics
  const totalChildren = childrenData.length;
  const activeStudents = childrenData.filter(child => child.status === "Active").length;
  const medicalAlerts = childrenData.filter(child => child.allergies !== "None" && child.allergies).length;
  const signedDocuments = childrenData.reduce((sum, child) => sum + (child.documents?.length || 0), 0);

  const filteredChildren = childrenData.filter((child) => {
    if (!searchTerm) return true;
    const search = searchTerm.toLowerCase();
    return (
      child.name.toLowerCase().includes(search) ||
      child.parent.toLowerCase().includes(search)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header header={"Children's Profile"} link="" />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6">
        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="relative w-full sm:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search by Child or Parent Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Total Children */}
          <div className="bg-white rounded-xl border-2 border-pink-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                <FaChild className="text-pink-500 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Total Children</p>
                <p className="text-2xl font-bold text-gray-800">{totalChildren}</p>
              </div>
            </div>
          </div>

          {/* Active Students */}
          <div className="bg-white rounded-xl border-2 border-green-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <FaUserGraduate className="text-green-500 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Active Students</p>
                <p className="text-2xl font-bold text-gray-800">{activeStudents}</p>
              </div>
            </div>
          </div>

          {/* Medical Alerts */}
          <div className="bg-white rounded-xl border-2 border-red-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <MdHealthAndSafety className="text-red-500 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Medical Alerts</p>
                <p className="text-2xl font-bold text-gray-800">{medicalAlerts}</p>
              </div>
            </div>
          </div>

          {/* Signed Documents */}
          <div className="bg-white rounded-xl border-2 border-blue-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <MdDescription className="text-blue-500 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Signed Documents</p>
                <p className="text-2xl font-bold text-gray-800">{signedDocuments}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Children Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredChildren.map((child) => (
            <div
              key={child.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200"
            >
              {/* Card Content */}
              <div className="p-5">
                {/* Profile Picture and Name */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xl">
                    {child.photo}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 text-base">{child.name}</h3>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700 mt-1">
                      {child.status}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Enrolled Date</span>
                    <span className="text-gray-800 font-medium">{child.enrollmentDate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Parent</span>
                    <span className="text-gray-800 font-medium">{child.parent}</span>
                  </div>
                </div>

                {/* View Profile Button */}
                <button
                  onClick={() => navigate(`/ChildrenDetail/${child.id}`)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition-colors"
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredChildren.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
            <p className="text-gray-600">No children found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Childrens;
