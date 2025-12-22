import React, { useState } from "react";

interface ChangePasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
    onChangePassword: (oldPassword: string, newPassword: string) => void;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
    isOpen,
    onClose,
    onChangePassword,
}) => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = () => {
        if (!oldPassword || !newPassword || !confirmPassword) {
            alert("Please fill in all fields");
            return;
        }

        if (newPassword !== confirmPassword) {
            alert("New passwords do not match");
            return;
        }

        if (newPassword.length < 8) {
            alert("Password must be at least 8 characters");
            return;
        }

        onChangePassword(oldPassword, newPassword);
        handleClose();
    };

    const handleClose = () => {
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative">
                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Change Password</h2>
                </div>

                {/* Old Password */}
                <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Old Password
                    </label>
                    <input
                        type="password"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Write old password"
                    />
                </div>

                {/* New Password */}
                <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        New Password
                    </label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Write new password"
                    />
                </div>

                {/* Confirm New Password */}
                <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm New Password
                    </label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Rewrite new password"
                    />
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                    <button
                        onClick={handleClose}
                        className="flex-1 px-6 py-3 bg-gray-400 hover:bg-gray-500 text-white rounded-lg font-medium transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="flex-1 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
                    >
                        Change
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChangePasswordModal;
