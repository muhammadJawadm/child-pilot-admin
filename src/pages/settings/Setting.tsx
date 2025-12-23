import React, { useState } from "react";
import Header from "../../layouts/partials/Header";
import { FiEdit2 } from "react-icons/fi";
import ChangePasswordModal from "../../components/SettingsComponents/ChangePasswordModal";

interface ProfileData {
    fullName: string;
    email: string;
    phoneNumber: string;
    emergencyContact: string;
    password: string;
}

const Setting: React.FC = () => {
    const [showPasswordModal, setShowPasswordModal] = useState<boolean>(false);
    const [profileData, setProfileData] = useState<ProfileData>({
        fullName: "Albert Flores",
        email: "Albertjones321@gmail.com",
        phoneNumber: "11 22 3345464",
        emergencyContact: "11 22 3345464",
        password: "••••••••••",
    });

    const [profileImage, setProfileImage] = useState<string | null>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (field: keyof ProfileData, value: string): void => {
        setProfileData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleUpdateProfile = (): void => {
        console.log("Updating profile:", profileData);
        alert("Profile updated successfully!");
    };

    const handleChangePassword = (_oldPassword: string, _newPassword: string): void => {
        console.log("Changing password");
        alert("Password changed successfully!");
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header header="Setting" link="" />

            <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8">
                {/* Profile Photo */}
                <div className="mb-8 flex justify-start">
                    <div className="relative">
                        <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200 border-4 border-white shadow-lg">
                            {profileImage ? (
                                <img
                                    src={profileImage}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400 text-3xl font-semibold">
                                    AF
                                </div>
                            )}
                        </div>
                        <label
                            htmlFor="profile-upload"
                            className="absolute bottom-0 right-0 w-8 h-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center cursor-pointer shadow-md transition-colors"
                        >
                            <span className="text-xl font-bold">+</span>
                        </label>
                        <input
                            id="profile-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                        />
                    </div>
                </div>

                {/* Form Fields */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                value={profileData.fullName}
                                onChange={(e) => handleInputChange("fullName", e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Albert Flores"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                value={profileData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Albertjones321@gmail.com"
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                value={profileData.phoneNumber}
                                onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="11 22 3345464"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    value={profileData.password}
                                    readOnly
                                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed"
                                    placeholder="••••••••••"
                                />
                                <button
                                    onClick={() => setShowPasswordModal(true)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 transition-colors"
                                >
                                    <FiEdit2 size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Emergency Contact Number */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Emergency Contact Number
                            </label>
                            <input
                                type="text"
                                value={profileData.emergencyContact}
                                onChange={(e) =>
                                    handleInputChange("emergencyContact", e.target.value)
                                }
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="11 22 3345464"
                            />
                        </div>
                    </div>

                    {/* Update Profile Button */}
                    <div className="mt-8">
                        <button
                            onClick={handleUpdateProfile}
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3.5 rounded-lg font-medium text-base transition-colors shadow-md"
                        >
                            Update Profile
                        </button>
                    </div>
                </div>
            </div>

            {/* Change Password Modal */}
            <ChangePasswordModal
                isOpen={showPasswordModal}
                onClose={() => setShowPasswordModal(false)}
                onChangePassword={handleChangePassword}
            />
        </div>
    );
};

export default Setting;
