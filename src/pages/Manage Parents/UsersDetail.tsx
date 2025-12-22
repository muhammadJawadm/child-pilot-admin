import { useParams } from "react-router-dom";
import Header from "../../layouts/partials/Header";
import { parentsData } from "../../components/data";

const UsersDetail = () => {
  const { id } = useParams();

  // Find parent from dummy data
  const parent = parentsData.find(p => p.id === Number(id));

  if (!parent) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header header={"Parent Details"} link="" />
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <p className="text-gray-600">Parent not found</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header header={"Parent Details"} link="" />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 p-8">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center ring-4 ring-white/50">
                <span className="text-4xl font-bold text-primary">
                  {parent.name.charAt(0)}
                </span>
              </div>
              <div className="text-white">
                <h1 className="text-3xl font-bold mb-2">{parent.name}</h1>
                <p className="text-white/90">{parent.email}</p>
                <p className="text-white/90">{parent.phone}</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 md:p-8">
            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Parent Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="text-sm font-semibold text-gray-600">Name</label>
                  <p className="text-gray-800 mt-1">{parent.name}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="text-sm font-semibold text-gray-600">Email</label>
                  <p className="text-gray-800 mt-1">{parent.email}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="text-sm font-semibold text-gray-600">Phone</label>
                  <p className="text-gray-800 mt-1">{parent.phone}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="text-sm font-semibold text-gray-600">Status</label>
                  <p className="mt-1">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${parent.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-orange-100 text-orange-800"
                      }`}>
                      {parent.status}
                    </span>
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="text-sm font-semibold text-gray-600">Member Since</label>
                  <p className="text-gray-800 mt-1">
                    {new Date(parent.memberSince).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Children Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Children
              </h3>
              <div className="space-y-2">
                {parent.children.map((child, idx) => (
                  <div key={idx} className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-gray-800 font-medium">{child}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersDetail;
