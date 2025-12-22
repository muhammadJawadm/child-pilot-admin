import React, { useState } from "react";
import { FiX, FiCalendar, FiClock } from "react-icons/fi";

interface AddEventModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddEvent: (event: any) => void;
}

const AddEventModal: React.FC<AddEventModalProps> = ({ isOpen, onClose, onAddEvent }) => {
    const [eventTitle, setEventTitle] = useState("");
    const [eventDate, setEventDate] = useState("12 - 09 - 2025");
    const [eventTime, setEventTime] = useState("10:30 AM");
    const [eventType, setEventType] = useState("Meeting");
    const [showEventTypeDropdown, setShowEventTypeDropdown] = useState(false);

    const eventTypes = ["Tour", "Meeting", "Consultation"];

    const handleSubmit = () => {
        if (!eventTitle.trim()) return;

        const newEvent = {
            id: Date.now(),
            title: eventTitle,
            date: eventDate,
            time: eventTime,
            type: eventType,
        };

        onAddEvent(newEvent);
        handleClose();
    };

    const handleClose = () => {
        setEventTitle("");
        setEventDate("12 - 09 - 2025");
        setEventTime("10:30 AM");
        setEventType("Meeting");
        setShowEventTypeDropdown(false);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative">
                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Add New Event</h2>
                </div>

                {/* Event Title */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Event Title
                    </label>
                    <input
                        type="text"
                        value={eventTitle}
                        onChange={(e) => setEventTitle(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter title here"
                    />
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    {/* Date */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Date
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                value={eventDate}
                                onChange={(e) => setEventDate(e.target.value)}
                                className="w-full px-4 py-2.5 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="DD - MM - YYYY"
                            />
                            <FiCalendar className="absolute right-3 top-3 text-gray-400" size={18} />
                        </div>
                    </div>

                    {/* Time */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Time
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                value={eventTime}
                                onChange={(e) => setEventTime(e.target.value)}
                                className="w-full px-4 py-2.5 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="HH:MM AM"
                            />
                            <FiClock className="absolute right-3 top-3 text-gray-400" size={18} />
                        </div>
                    </div>
                </div>

                {/* Event Type */}
                <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Event Type
                    </label>
                    <div className="relative">
                        <button
                            onClick={() => setShowEventTypeDropdown(!showEventTypeDropdown)}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-left flex items-center justify-between"
                        >
                            <span className="text-gray-700">{eventType}</span>
                            <svg
                                className={`w-5 h-5 text-gray-400 transition-transform ${showEventTypeDropdown ? "rotate-180" : ""
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Dropdown */}
                        {showEventTypeDropdown && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                {eventTypes.map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => {
                                            setEventType(type);
                                            setShowEventTypeDropdown(false);
                                        }}
                                        className="w-full px-4 py-2.5 text-left hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg transition-colors"
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
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
                        Add Event
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddEventModal;
