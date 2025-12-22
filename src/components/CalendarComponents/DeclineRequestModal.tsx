import React, { useState } from "react";

interface DeclineRequestModalProps {
    isOpen: boolean;
    onClose: () => void;
    onDecline: (reason: string) => void;
}

const DeclineRequestModal: React.FC<DeclineRequestModalProps> = ({
    isOpen,
    onClose,
    onDecline,
}) => {
    const [reason, setReason] = useState("");

    const handleSubmit = () => {
        if (!reason.trim()) return;
        onDecline(reason);
        setReason("");
        onClose();
    };

    const handleClose = () => {
        setReason("");
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative">
                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Declining Request</h2>
                </div>

                {/* Reason */}
                <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Reason
                    </label>
                    <textarea
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        rows={6}
                        placeholder="Write a reason here of declining the request...."
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
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeclineRequestModal;
