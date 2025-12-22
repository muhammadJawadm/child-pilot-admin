import React, { useState } from "react";
import Header from "../../layouts/partials/Header";

const Content = () => {
  const [selectedType, setSelectedType] = useState<"privacyPolicy" | "termsConditions">("privacyPolicy");
  const [content, setContent] = useState({
    privacyPolicy: "Privacy Policy content goes here. This is a placeholder for SolaraCare's privacy policy.",
    termsConditions: "Terms and Conditions content goes here. This is a placeholder for SolaraCare's terms and conditions."
  });

  const handleContentTypeChange = (type: "privacyPolicy" | "termsConditions") => {
    setSelectedType(type);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header header="Content Management" link="" />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          {/* Content Type Selector */}
          <div className="mb-6 flex gap-4">
            <button
              onClick={() => handleContentTypeChange("privacyPolicy")}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${selectedType === "privacyPolicy"
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleContentTypeChange("termsConditions")}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${selectedType === "termsConditions"
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              Terms & Conditions
            </button>
          </div>

          {/* Content Display */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 min-h-[400px]">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {selectedType === "privacyPolicy" ? "Privacy Policy" : "Terms & Conditions"}
            </h2>
            <div className="text-gray-700 leading-relaxed">
              {content[selectedType]}
            </div>
          </div>

          {/* Note */}
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> Content editing has been simplified. In a production environment, you would use a rich text editor to modify this content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;