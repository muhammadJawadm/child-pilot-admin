import { FiSearch } from "react-icons/fi";
import Header from "../../layouts/partials/Header";
import { useState } from "react";
import { messagesData } from "../../components/data";

const Communication: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedConversation, setSelectedConversation] = useState(messagesData[0]);

    const filteredMessages = messagesData.filter((msg) => {
        if (!searchTerm) return true;
        const search = searchTerm.toLowerCase();
        return msg.name.toLowerCase().includes(search);
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <Header header={"Communication"} link="" />

            <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-6">
                {/* Search Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div className="relative w-full sm:w-96">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiSearch className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Search by Parent or Staff Name"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Main Communication Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Messages List Sidebar */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        {/* Header */}
                        <div className="bg-white border-b border-gray-200 px-4 py-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-bold text-gray-800">Messages</h3>
                                <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">
                                    {filteredMessages.length}
                                </span>
                            </div>
                        </div>

                        {/* Messages List */}
                        <div className="overflow-y-auto max-h-[600px]">
                            {filteredMessages.map((msg) => (
                                <div
                                    key={msg.id}
                                    onClick={() => setSelectedConversation(msg)}
                                    className={`flex items-center gap-3 px-4 py-4 border-b border-gray-100 cursor-pointer transition-colors ${selectedConversation.id === msg.id
                                            ? "bg-blue-50 border-l-4 border-l-blue-500"
                                            : "hover:bg-gray-50"
                                        }`}
                                >
                                    {/* Profile Picture */}
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xl">
                                            {msg.photo}
                                        </div>
                                        {msg.online && (
                                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                        )}
                                    </div>

                                    {/* Message Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-1">
                                            <h4 className="text-sm font-semibold text-gray-800 truncate">
                                                {msg.name}
                                            </h4>
                                            <span className="text-xs text-gray-500">{msg.time}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 truncate">
                                            {msg.lastMessage}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Conversation Panel */}
                    <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-[600px]">
                        {/* Conversation Header */}
                        <div className="bg-white border-b border-gray-200 px-6 py-4">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xl">
                                        {selectedConversation.photo}
                                    </div>
                                    {selectedConversation.online && (
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">
                                        {selectedConversation.name}
                                    </h3>
                                    <p className="text-sm text-green-600">
                                        {selectedConversation.online ? "Online" : "Offline"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-gray-50">
                            {selectedConversation.messages.map((message, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${message.sender === "admin" ? "justify-end" : "justify-start"
                                        }`}
                                >
                                    <div
                                        className={`max-w-md ${message.sender === "admin" ? "items-end" : "items-start"
                                            } flex flex-col gap-1`}
                                    >
                                        {message.sender === "parent" && (
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white text-sm">
                                                    {selectedConversation.photo}
                                                </div>
                                            </div>
                                        )}
                                        <div
                                            className={`px-4 py-3 rounded-2xl ${message.sender === "admin"
                                                    ? "bg-blue-500 text-white rounded-tr-none"
                                                    : "bg-white border border-gray-200 text-gray-800 rounded-tl-none"
                                                }`}
                                        >
                                            <p className="text-sm">{message.text}</p>
                                        </div>
                                        {message.sender === "admin" && (
                                            <div className="flex items-center gap-2 justify-end">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-sm">
                                                    👨‍💼
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Message Input (Optional - can be added later) */}
                        <div className="bg-white border-t border-gray-200 px-6 py-4">
                            <div className="flex items-center gap-3">
                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Communication;
