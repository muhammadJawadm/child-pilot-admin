import { useParams, useNavigate } from "react-router-dom";
import Header from "../../layouts/partials/Header";
import { childrenData } from "../../components/data";
import { FiArrowLeft, FiCalendar } from "react-icons/fi";
import { useState } from "react";

const ChildrenDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  // Find child from data
  const child = childrenData.find((c) => c.id === Number(id));

  if (!child) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header header={"Children's Profile"} link="" />
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <p className="text-gray-600">Child not found</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header header={"Children's Profile"} link="" />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6">
        {/* Back Button and Header */}
        <div className="mb-6">
          <button
            onClick={() => navigate("/Childrens")}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium transition-colors"
          >
            <FiArrowLeft size={20} />
            Back
          </button>
        </div>

        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-4xl">
              {child.photo}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{child.name}</h1>
              <p className="text-gray-600">{child.age} years old</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Personal Information</h2>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 w-32">Full Name</span>
                <span className="text-sm text-gray-800 font-medium">{child.fullName}</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 w-32 flex items-center gap-2">
                  <FiCalendar size={14} />
                  DOB
                </span>
                <span className="text-sm text-gray-800 font-medium">{child.dob}</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 w-32">Classroom</span>
                <span className="text-sm text-gray-800 font-medium">{child.classroom}</span>
              </div>
            </div>
          </div>

          {/* Medical Records */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 bg-cyan-50">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Medical Records</h2>

            <div className="space-y-3">
              <div>
                <span className="text-sm text-gray-600">Allergies:</span>
                <span className="text-sm text-gray-800 font-medium ml-2">{child.allergies}</span>
              </div>

              <div>
                <span className="text-sm text-gray-600">Medication:</span>
                <span className="text-sm text-gray-800 font-medium ml-2">{child.medication}</span>
              </div>

              <div>
                <span className="text-sm text-gray-600">Doctor's Name:</span>
                <span className="text-sm text-gray-800 font-medium ml-2">{child.doctorName}</span>
              </div>

              <div>
                <span className="text-sm text-gray-600">Emergency Contact:</span>
                <span className="text-sm text-gray-800 font-medium ml-2">{child.emergencyContact}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Parent / Guardian Details */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Parent / Guardian Details</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-purple-100 border-b border-purple-200">
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Relation</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Name</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Duration</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Observation</th>
                </tr>
              </thead>
              <tbody>
                {child.guardians && child.guardians.map((guardian, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-600">{guardian.relation}</td>
                    <td className="px-4 py-3 text-gray-800 font-medium">{guardian.name}</td>
                    <td className="px-4 py-3 text-gray-600">{guardian.phone}</td>
                    <td className="px-4 py-3 text-gray-600">{guardian.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Documents */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">Documents</h2>

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

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-cyan-100 border-b border-cyan-200">
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Document</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Type</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Status</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Signed By</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Date</th>
                </tr>
              </thead>
              <tbody>
                {child.documents && child.documents.slice(0, entriesPerPage).map((doc, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-800 font-medium">{doc.name}</td>
                    <td className="px-4 py-3 text-gray-600">{doc.type}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${doc.status === "E-signed" ? "bg-green-100 text-green-700" :
                          doc.status === "Paid" ? "bg-blue-100 text-blue-700" :
                            "bg-gray-100 text-gray-700"
                        }`}>
                        {doc.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{doc.signedBy}</td>
                    <td className="px-4 py-3 text-gray-600">{doc.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildrenDetail;
