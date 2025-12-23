import React, { useState, useRef, useEffect } from "react";
import { PiBellLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { FiCheckCircle, FiAlertCircle, FiInfo, FiX } from "react-icons/fi";
import { useRole } from "../../context/RoleContext";
import { useNotifications } from "../../context/SimpleNotificationContext";
import type { SimpleNotification } from "../../context/SimpleNotificationContext";

interface Headerprops {
  header: string,
  link: string,
  arrow?: boolean
}
const Header: React.FC<Headerprops> = ({ header, link, arrow }) => {
  const { user, isSuperAdmin } = useRole();
  const { notifications, removeNotification } = useNotifications();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  const getIcon = (type: SimpleNotification['type']) => {
    switch (type) {
      case 'success':
        return <FiCheckCircle className="text-green-500" size={18} />;
      case 'error':
        return <FiAlertCircle className="text-red-500" size={18} />;
      case 'warning':
        return <FiAlertCircle className="text-orange-500" size={18} />;
      default:
        return <FiInfo className="text-blue-500" size={18} />;
    }
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diffInMs = now.getTime() - new Date(date).getTime();
    const diffInMins = Math.floor(diffInMs / 60000);

    if (diffInMins < 1) return 'Just now';
    if (diffInMins < 60) return `${diffInMins}m ago`;

    const diffInHours = Math.floor(diffInMins / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;

    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  return (
    <div>
      <div className="bg-white">
        <nav className="text-gray-350">
          <div className=" flex flex-wrap items-center justify-between px-4 py-9 sm:p-8">
            <div className="flex items-center drop-shadow-lg">

              <Link to={link}>
                <div className="flex items-center gap-1">
                  {arrow && <IoArrowBack className="w-5 h-5" />}
                  <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap capitalize ">
                    {header}
                  </span>
                </div>
              </Link>

            </div>
            <div className="relative" id="navbar-default">
              <div className="flex flex-row items-center gap-4">
                {/* Notification Bell with Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="rounded-full drop-shadow-lg flex justify-center items-center w-9 h-9 relative hover:bg-gray-50 transition-colors"
                  >
                    <PiBellLight className="w-6 h-6 text-gray-400" />
                    {notifications.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {notifications.length > 9 ? '9+' : notifications.length}
                      </span>
                    )}
                  </button>

                  {/* Notification Dropdown */}
                  {showDropdown && (
                    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-96 overflow-hidden flex flex-col">
                      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">Notifications</h3>
                        <span className="text-xs text-gray-500">{notifications.length} new</span>
                      </div>

                      <div className="overflow-y-auto max-h-80">
                        {notifications.length === 0 ? (
                          <div className="px-4 py-8 text-center text-gray-500">
                            <PiBellLight className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                            <p className="text-sm">No notifications</p>
                          </div>
                        ) : (
                          notifications.map((notification) => (
                            <div
                              key={notification.id}
                              className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                            >
                              <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 mt-0.5">
                                  {getIcon(notification.type)}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm text-gray-900 break-words">
                                    {notification.message}
                                  </p>
                                  <p className="text-xs text-gray-500 mt-1">
                                    {formatTime(notification.timestamp)}
                                  </p>
                                </div>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeNotification(notification.id);
                                  }}
                                  className="flex-shrink-0 text-gray-400 hover:text-gray-600"
                                >
                                  <FiX size={16} />
                                </button>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Profile Display */}
                <div className="flex items-center gap-2">
                  <img
                    className="rounded-full w-9 h-9 object-cover"
                    loading="lazy"
                    src={user?.avatar || "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=1600"}
                    alt="profile"
                  />
                  <div className="hidden sm:flex flex-col items-start">
                    <span className="font-medium text-gray-900">{user?.name || 'User'}</span>
                    <span className="text-xs text-gray-500">
                      {isSuperAdmin ? 'Super Admin' : 'Daycare Admin'}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header