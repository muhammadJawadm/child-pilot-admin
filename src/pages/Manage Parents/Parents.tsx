import { FiSearch } from "react-icons/fi";
import Header from "../../layouts/partials/Header";
import { useState } from "react";
import { parentsData } from "../../components/data";
import { FiEdit2, FiTrash2, FiSend } from "react-icons/fi";

const Parents: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const filteredParents = parentsData.filter((parent) => {
    if (!searchTerm) return true;
    const search = searchTerm.toLowerCase();
    return (
      parent.name.toLowerCase().includes(search) ||
      parent.email.toLowerCase().includes(search) ||
      parent.phone.includes(search)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header header={"Manage Parents"} link='' />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6">

        {/* Top Bar with Search and Add Button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          {/* Search */}
          <div className="relative w-full sm:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search by name, role, or email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Add New Parent Button */}
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-lg shadow-md transition-colors flex items-center gap-2"
          >
            <span className="text-xl">+</span>
            Add new Parent
          </button>
        </div>

        {/* Show Entries Dropdown */}
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

        {/* TABLE */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="text-xs font-semibold text-gray-600 bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4">Profile</th>
                <th className="px-6 py-4">Parent Name</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filteredParents.slice(0, entriesPerPage).map((parent) => (
                <tr
                  key={parent.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  {/* Profile Picture */}
                  <td className="px-6 py-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-600 font-semibold text-sm">
                        {parent.name.charAt(0)}
                      </span>
                    </div>
                  </td>

                  {/* Name */}
                  <td className="px-6 py-4">
                    <span className="font-medium text-gray-800">{parent.name}</span>
                  </td>

                  {/* Role */}
                  <td className="px-6 py-4">
                    <span className="text-gray-600">Parent</span>
                  </td>

                  {/* Email */}
                  <td className="px-6 py-4">
                    <span className="text-gray-600">{parent.email}</span>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${parent.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                        }`}
                    >
                      {parent.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-3">
                      <button className="text-blue-500 hover:text-blue-700 transition-colors">
                        <FiEdit2 size={18} />
                      </button>
                      <button className="text-red-500 hover:text-red-700 transition-colors">
                        <FiTrash2 size={18} />
                      </button>
                      <button className="text-gray-500 hover:text-gray-700 transition-colors">
                        <FiSend size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add New Parent Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Parent</h2>

            <form className="space-y-4">
              {/* Parent Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Parent Name
                </label>
                <input
                  type="text"
                  placeholder="Enter name here"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Select Role */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Role
                </label>
                <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                  <option>Parent</option>
                  <option>Guardian</option>
                </select>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter email here"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
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
                  onClick={() => {
                    // Handle add parent logic here
                    setShowModal(false);
                  }}
                  className="flex-1 px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Add Parent
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Parents;
