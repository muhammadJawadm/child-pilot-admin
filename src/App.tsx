
import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Auth/Login'
import Home from './pages/Dashboard/Dashboard'
import Childrens from './pages/Childrens Profile/Childrens'
import StaffManagement from './pages/Staff/Staff'
import Parents from './pages/Manage Parents/Parents'
import ChildrenDetail from './pages/Childrens Profile/ChildrenDetail'
import Communication from './pages/Communication/Communication'
import Payment from './pages/Billing and Payments/Payment'
import Nutrition from './pages/Nutrition & Activity Logs/Nutrition'
import Calendar from './pages/Calender & Scheduling/Calendar'
import Setting from './pages/settings/Setting'
import Notifications from './pages/Notifications/Notifications'

// Super Admin Pages
import SuperAdminDashboard from './pages/SuperAdmin/SuperAdminDashboard'
import DaycareApproval from './pages/SuperAdmin/DaycareApproval'
import BillingManagement from './pages/SuperAdmin/BillingManagement'
import UserManagement from './pages/SuperAdmin/UserManagement'
import ReportsCompliance from './pages/SuperAdmin/ReportsCompliance'
import PlatformSettings from './pages/SuperAdmin/PlatformSettings'

import { useRole } from './context/RoleContext'

function App() {
  const { isSuperAdmin, user } = useRole();

  return (
    <Routes>
      {/* Public route - Login */}
      <Route path="/login" element={<Login />} />

      {/* Protected routes - require authentication */}
      <Route path="/" element={<ProtectedRoute />}>
        {/* Redirect root based on role */}
        <Route index element={
          user ? (
            isSuperAdmin ? <Navigate to="/super-admin" replace /> : <Home />
          ) : (
            <Navigate to="/login" replace />
          )
        } />

        {/* Daycare Admin Routes */}
        <Route path="StaffManagment" element={<StaffManagement />} />
        <Route path="parents" element={<Parents />} />
        <Route path="Childrens" element={<Childrens />} />
        <Route path="ChildrenDetail/:id" element={<ChildrenDetail />} />
        <Route path="Communication" element={<Communication />} />
        <Route path="Payments" element={<Payment />} />
        <Route path="Nutrition" element={<Nutrition />} />
        <Route path="Calendar" element={<Calendar />} />
        <Route path="Settings" element={<Setting />} />
        <Route path="Notifications" element={<Notifications />} />

        {/* Super Admin Routes */}
        <Route path="super-admin" element={<SuperAdminDashboard />} />
        <Route path="super-admin/daycare-approval" element={<DaycareApproval />} />
        <Route path="super-admin/billing" element={<BillingManagement />} />
        <Route path="super-admin/users" element={<UserManagement />} />
        <Route path="super-admin/reports" element={<ReportsCompliance />} />
        <Route path="super-admin/settings" element={<PlatformSettings />} />
      </Route>
    </Routes>
  )
}

export default App
