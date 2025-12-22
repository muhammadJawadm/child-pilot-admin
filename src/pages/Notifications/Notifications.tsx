import Header from "../../layouts/partials/Header";
import { useState } from "react";
import { calendarEvents } from "../../components/data";

const Notifications = () => {
  const [filterType, setFilterType] = useState<string>("all");

  const filteredEvents = calendarEvents.filter((event) =>
    filterType === "all" ? true : event.type === filterType
  );

  const eventTypeColors: Record<string, string> = {
    event: "bg-blue-100 text-blue-800 border-blue-200",
    staff: "bg-purple-100 text-purple-800 border-purple-200",
    holiday: "bg-red-100 text-red-800 border-red-200",
    meeting: "bg-green-100 text-green-800 border-green-200",
  };

  return (
    <div>
      <Header header={"Calendar & Scheduling"} link='' />
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6">

        {/* Filter */}
        <div className="mb-6 flex gap-4 flex-wrap">
          <button
            onClick={() => setFilterType("all")}
            className={`px-4 py-2 rounded-lg ${filterType === "all" ? "bg-primary text-white" : "bg-gray-200"}`}
          >
            All Events
          </button>
          <button
            onClick={() => setFilterType("event")}
            className={`px-4 py-2 rounded-lg ${filterType === "event" ? "bg-primary text-white" : "bg-gray-200"}`}
          >
            Events
          </button>
          <button
            onClick={() => setFilterType("staff")}
            className={`px-4 py-2 rounded-lg ${filterType === "staff" ? "bg-primary text-white" : "bg-gray-200"}`}
          >
            Staff
          </button>
          <button
            onClick={() => setFilterType("holiday")}
            className={`px-4 py-2 rounded-lg ${filterType === "holiday" ? "bg-primary text-white" : "bg-gray-200"}`}
          >
            Holidays
          </button>
          <button
            onClick={() => setFilterType("meeting")}
            className={`px-4 py-2 rounded-lg ${filterType === "meeting" ? "bg-primary text-white" : "bg-gray-200"}`}
          >
            Meetings
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className={`rounded-xl shadow-md p-6 border ${eventTypeColors[event.type]}`}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-gray-800">{event.title}</h3>
                <span className="text-xs px-3 py-1 rounded-full bg-white/50 font-semibold uppercase">
                  {event.type}
                </span>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">📅 Date:</span>
                  <span>{new Date(event.date).toLocaleDateString('en-US', {
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">⏰ Time:</span>
                  <span>{event.time}</span>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-300/50">
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
