import React, { useState } from "react";
import { PiBellLight } from "react-icons/pi";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useRole } from "../../context/RoleContext";

interface Headerprops {
  header: string,
  link: string,
  arrow?: boolean
}
const Header: React.FC<Headerprops> = ({ header, link, arrow }) => {
  const [showMenue, setShowMenue] = useState(false);
  const { user, isSuperAdmin } = useRole();

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
                <div
                  onClick={() => setShowMenue(true)}
                  className="rounded-full drop-shadow-lg  flex justify-center items-center w-9 h-9 cursor-pointer"
                >
                  <PiBellLight className="w-6 h-6" />
                </div>

                {/* Profile Display (No Dropdown) */}
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

      <aside
        className={`fixed top-0 right-0 z-40 w-96 text-black bg-gradient-to-b from-gray-50 to-gray-100 h-screen ${showMenue ? "block" : `hidden`
          }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto space-y-3">
          {showMenue && (
            <button
              className="float-right text-xl text-black"
              onClick={() => setShowMenue(false)}
            >
              <RiCloseFill />
            </button>
          )}
          <div className="pt-5">
            <div className="rounded-md border px-4 py-1.5 space-y-1 bg-white shadow-md">
              <h1 className="font-semibold">Notifications</h1>
              <p className="text-xs font-medium text-gray-400">
                You have no new notifications
              </p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default Header