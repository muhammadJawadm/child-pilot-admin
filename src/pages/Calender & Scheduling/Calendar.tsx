import React, { useState } from "react";
import Header from "../../layouts/partials/Header";
import { FiCalendar, FiPlus } from "react-icons/fi";
import { upcomingEventsData, lessonPlansData, tourRequestsData } from "../../components/data";
import AddEventModal from "../../components/CalendarComponents/AddEventModal";
import DeclineRequestModal from "../../components/CalendarComponents/DeclineRequestModal";

const Calendar: React.FC = () => {
    const [activeView, setActiveView] = useState<"monthly" | "weekly">("monthly");
    const [showAddEventModal, setShowAddEventModal] = useState(false);
    const [showDeclineModal, setShowDeclineModal] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState<number | null>(null);
    const [upcomingEvents, setUpcomingEvents] = useState(upcomingEventsData);
    const [tourRequests, setTourRequests] = useState(tourRequestsData);

    // Calendar days for October 2025
    const calendarDays = [
        { day: 1, hasEvent: false },
        { day: 2, hasEvent: false },
        { day: 3, hasEvent: true, eventType: "yellow" },
        { day: 4, hasEvent: false },
        { day: 5, hasEvent: false },
        { day: 6, hasEvent: false },
        { day: 7, hasEvent: false },
        { day: 8, hasEvent: false },
        { day: 9, hasEvent: false },
        { day: 10, hasEvent: false },
        { day: 11, hasEvent: false },
        { day: 12, hasEvent: false },
        { day: 13, hasEvent: false },
        { day: 14, hasEvent: false },
        { day: 15, hasEvent: false },
        { day: 16, hasEvent: false },
        { day: 17, hasEvent: false },
        { day: 18, hasEvent: false },
        { day: 19, hasEvent: false },
        { day: 20, hasEvent: false },
        { day: 21, hasEvent: false },
        { day: 22, hasEvent: false },
        { day: 23, hasEvent: false },
        { day: 24, hasEvent: false },
        { day: 25, hasEvent: false },
        { day: 26, hasEvent: false },
        { day: 27, hasEvent: true, eventType: "yellow" },
        { day: 28, hasEvent: false },
        { day: 29, hasEvent: false },
        { day: 30, hasEvent: false },
        { day: 31, hasEvent: false },
    ];

    const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    const handleAddEvent = (event: any) => {
        const newEvent = {
            id: Date.now(),
            title: event.title,
            type: event.type,
            time: event.time,
            date: event.date,
            badge: event.type,
            badgeColor: event.type === "Meeting" ? "blue" : event.type === "Tour" ? "purple" : "green",
        };
        setUpcomingEvents([...upcomingEvents, newEvent]);
    };

    const handleAcceptRequest = (requestId: number) => {
        setTourRequests(tourRequests.filter((req) => req.id !== requestId));
    };

    const handleDeclineRequest = (_reason: string) => {
        if (selectedRequest !== null) {
            setTourRequests(tourRequests.filter((req) => req.id !== selectedRequest));
            setSelectedRequest(null);
        }
    };

    const openDeclineModal = (requestId: number) => {
        setSelectedRequest(requestId);
        setShowDeclineModal(true);
    };

    const getBadgeClasses = (color: string) => {
        switch (color) {
            case "red":
                return "bg-red-100 text-red-600";
            case "blue":
                return "bg-blue-100 text-blue-600";
            case "green":
                return "bg-green-100 text-green-600";
            case "purple":
                return "bg-purple-100 text-purple-600";
            default:
                return "bg-gray-100 text-gray-600";
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header header="Calendar & Scheduling" link="" />

            <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6">
                {/* Add Events Button */}
                <div className="mb-6">
                    <button
                        onClick={() => setShowAddEventModal(true)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 shadow-md"
                    >
                        <FiPlus size={20} />
                        Add Events
                    </button>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Section - Calendar */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Calendar Widget */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-gray-800">October 2025</h3>
                            </div>

                            {/* Days of Week */}
                            <div className="grid grid-cols-7 gap-2 mb-2">
                                {daysOfWeek.map((day) => (
                                    <div
                                        key={day}
                                        className="text-center text-sm font-medium text-gray-600 py-2"
                                    >
                                        {day}
                                    </div>
                                ))}
                            </div>

                            {/* Calendar Grid */}
                            <div className="grid grid-cols-7 gap-2">
                                {calendarDays.map((dayObj, index) => (
                                    <div
                                        key={index}
                                        className={`aspect-square flex items-center justify-center rounded-lg border text-sm font-medium relative cursor-pointer transition-all ${dayObj.hasEvent && dayObj.eventType === "yellow"
                                            ? "border-yellow-400 border-2 bg-yellow-50 text-gray-800"
                                            : dayObj.day === 3
                                                ? "border-blue-500 border-2 bg-blue-50 text-gray-800"
                                                : "border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700"
                                            }`}
                                    >
                                        {dayObj.day}
                                    </div>
                                ))}
                            </div>

                            {/* Legend */}
                            <div className="flex flex-wrap items-center gap-4 mt-6 text-xs">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <span className="text-gray-600">Holidays</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                    <span className="text-gray-600">Meetings</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="text-gray-600">Field Trip</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <span className="text-gray-600">Lesson Plans</span>
                                </div>
                            </div>
                        </div>

                        {/* Lesson Plans Section */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-semibold text-gray-800">Lesson Plans</h3>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setActiveView("monthly")}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeView === "monthly"
                                            ? "bg-blue-100 text-blue-600 border border-blue-300"
                                            : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
                                            }`}
                                    >
                                        Monthly
                                    </button>
                                    <button
                                        onClick={() => setActiveView("weekly")}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeView === "weekly"
                                            ? "bg-blue-100 text-blue-600 border border-blue-300"
                                            : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
                                            }`}
                                    >
                                        Weekly
                                    </button>
                                </div>
                            </div>

                            {/* Lesson Plans Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {lessonPlansData.map((plan) => (
                                    <div
                                        key={plan.id}
                                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <h4 className="font-semibold text-gray-800">{plan.title}</h4>
                                            <div className="flex flex-col items-end gap-1">
                                                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
                                                    {plan.week}
                                                </span>
                                                <span className="text-xs text-gray-500">{plan.classroom}</span>
                                            </div>
                                        </div>
                                        <ul className="space-y-1 mb-3">
                                            {plan.activities.map((activity, idx) => (
                                                <li key={idx} className="text-sm text-gray-600 flex items-start">
                                                    <span className="mr-2">•</span>
                                                    {activity}
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="text-xs text-blue-600">Created by {plan.createdBy}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Upcoming Events & Tour Requests */}
                    <div className="space-y-6">
                        {/* Upcoming Events */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Events</h3>
                            <div className="space-y-4">
                                {upcomingEvents.map((event) => (
                                    <div
                                        key={event.id}
                                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <h4 className="font-semibold text-gray-800">{event.title}</h4>
                                            <span
                                                className={`text-xs px-2 py-1 rounded ${getBadgeClasses(
                                                    event.badgeColor
                                                )}`}
                                            >
                                                {event.badge}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-1">{event.time}</p>
                                        <p className="text-xs text-gray-500 flex items-center gap-1">
                                            <FiCalendar size={12} />
                                            {event.date}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tour Requests */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Tour Request</h3>
                            <div className="space-y-4">
                                {tourRequests.map((request) => (
                                    <div
                                        key={request.id}
                                        className="border border-gray-200 rounded-lg p-4"
                                    >
                                        <div className="flex items-start gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-semibold text-sm">
                                                {request.initials}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-gray-800">{request.name}</h4>
                                                <p className="text-xs text-gray-500">{request.age}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm text-gray-600">{request.time}</p>
                                                <p className="text-xs text-gray-500 flex items-center gap-1 justify-end">
                                                    <FiCalendar size={12} />
                                                    {request.date}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => openDeclineModal(request.id)}
                                                className="flex-1 px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-lg text-sm font-medium transition-colors"
                                            >
                                                Decline
                                            </button>
                                            <button
                                                onClick={() => handleAcceptRequest(request.id)}
                                                className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors"
                                            >
                                                Accept
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals */}
            <AddEventModal
                isOpen={showAddEventModal}
                onClose={() => setShowAddEventModal(false)}
                onAddEvent={handleAddEvent}
            />
            <DeclineRequestModal
                isOpen={showDeclineModal}
                onClose={() => setShowDeclineModal(false)}
                onDecline={handleDeclineRequest}
            />
        </div>
    );
};

export default Calendar;
