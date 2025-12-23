
import {
  RiLogoutCircleLine,
  RiCloseFill,
} from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from '../../assets/logo.png';
import { useState } from "react";
import { useRole } from "../../context/RoleContext";
import { FaBuilding, FaCheckCircle, FaUserCheck, FaFileAlt, FaCog, FaBell, FaChartBar, FaLifeRing, FaToggleOn, FaServer, FaShieldAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FiUsers, FiClipboard } from "react-icons/fi";

// Super Admin sidebar links
const superAdminLinks = [
  { name: "Dashboard", path: "/", icon: <MdDashboard className="text-lg" /> },
  { name: "Tenant Management", path: "/tenant-management", icon: <FiUsers className="text-lg" /> },
  { name: "Daycare Approval", path: "/daycare-approval", icon: <FaCheckCircle className="text-lg" /> },
  { name: "Billing", path: "/billing", icon: <FaBuilding className="text-lg" /> },
  { name: "User Management", path: "/users", icon: <FaUserCheck className="text-lg" /> },
  { name: "Analytics", path: "/analytics", icon: <FaChartBar className="text-lg" /> },
  { name: "Onboarding", path: "/onboarding", icon: <FiClipboard className="text-lg" /> },
  { name: "Support", path: "/support", icon: <FaLifeRing className="text-lg" /> },
  { name: "Features", path: "/features", icon: <FaToggleOn className="text-lg" /> },
  { name: "System Health", path: "/system-health", icon: <FaServer className="text-lg" /> },
  { name: "Compliance", path: "/compliance", icon: <FaShieldAlt className="text-lg" /> },
  { name: "Reports", path: "/reports", icon: <FaFileAlt className="text-lg" /> },
  { name: "Settings", path: "/settings", icon: <FaCog className="text-lg" /> },
  { name: "Notifications", path: "/notifications", icon: <FaBell className="text-lg" /> },
];

const Sidebar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { logout } = useRole();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <div className="px-4 sm:px-8 pt-2 lg:hidden">
        <button
          onClick={() => setShowMenu(true)}
          className="flex items-center gap-2 p-2 my-4 text-sm bg-primary rounded-lg cursor-pointer"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            fill="white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-white border-r transform duration-300 ease-in-out ${showMenu ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:block`}
        aria-label="Sidebar"
      >
        <div className="flex flex-col justify-between h-full px-4 py-5 overflow-y-auto scrollbar-hide">
          {/* Close button (mobile only) */}
          <div>
            <div className="flex justify-end lg:hidden mb-4">
              <button
                className="text-black text-2xl cursor-pointer"
                onClick={() => setShowMenu(false)}
              >
                <RiCloseFill />
              </button>
            </div>

            {/* Logo */}
            <div className="flex justify-center mb-6">
              <Link to="/">
                <img src={Logo} alt="Kinnected Logo" className="h-14 mb-4 " />
              </Link>
            </div>



            {/* Sidebar Links */}
            <ul className="space-y-3 text-sm">
              {superAdminLinks?.map((link) => (
                <li key={link.name}>
                  <SidebarLink
                    name={link.name}
                    path={link.path}
                    icon={link.icon}
                    onClick={() => setShowMenu(false)}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Logout */}
          <div className="mt-6">
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-4 py-2 rounded-lg bg-primary/10 text-gray-700 hover:bg-primary/20 transition-colors"
            >
              <RiLogoutCircleLine className="text-lg" />
              <span className="ml-2">Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>

  )
}
interface SidebarLinkProps {
  name: string,
  path: string,
  icon: React.ReactNode,
  onClick: () => void
}
const SidebarLink: React.FC<SidebarLinkProps> = ({ name, path, icon, onClick }) => {
  return (
    <li onClick={onClick}>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? "flex items-center py-2 px-5 rounded-lg bg-primary drop-shadow text-gray-50 font-semibold"
            : "flex items-center py-2 px-5 text-gray-600 rounded-lg hover:bg-primary/10 drop-shadow hover:text-primary hover:font-medium outline-none"
        }
      >
        {icon}
        <span className="flex-1 ml-3 whitespace-nowrap">{name}</span>
      </NavLink>
    </li>
  );
}
export default Sidebar