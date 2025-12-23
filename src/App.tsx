
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Auth/Login'
import ToastContainer from './components/Notifications/ToastContainer'

// Super Admin Pages
import SuperAdminDashboard from './pages/SuperAdmin/SuperAdminDashboard'
import DaycareApproval from './pages/SuperAdmin/DaycareApproval'
import BillingManagement from './pages/SuperAdmin/BillingManagement'
import UserManagement from './pages/SuperAdmin/UserManagement'
import ReportsCompliance from './pages/SuperAdmin/ReportsCompliance'
import PlatformSettings from './pages/SuperAdmin/PlatformSettings'
import TenantManagement from './pages/SuperAdmin/TenantManagement'
import PlatformAnalytics from './pages/SuperAdmin/PlatformAnalytics'
import OnboardingDashboard from './pages/SuperAdmin/OnboardingDashboard'
import SupportDashboard from './pages/SuperAdmin/SupportDashboard'
import FeatureManagement from './pages/SuperAdmin/FeatureManagement'
import SystemHealth from './pages/SuperAdmin/SystemHealth'
import ComplianceDashboard from './pages/SuperAdmin/ComplianceDashboard'
import SimpleNotifications from './pages/SuperAdmin/SimpleNotifications'

function App() {

  return (
    <>
      <ToastContainer />
      <Routes>
        {/* Public route - Login */}
        <Route path="/login" element={<Login />} />

        {/* Protected routes - require authentication */}
        <Route path="/" element={<ProtectedRoute />}>
          {/* Super Admin Routes */}
          <Route index element={<SuperAdminDashboard />} />
          <Route path="daycare-approval" element={<DaycareApproval />} />
          <Route path="billing" element={<BillingManagement />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="reports" element={<ReportsCompliance />} />
          <Route path="settings" element={<PlatformSettings />} />
          <Route path="notifications" element={<SimpleNotifications />} />
          {/* New Feature Routes */}
          <Route path="tenant-management" element={<TenantManagement />} />
          <Route path="analytics" element={<PlatformAnalytics />} />
          <Route path="onboarding" element={<OnboardingDashboard />} />
          <Route path="support" element={<SupportDashboard />} />
          <Route path="features" element={<FeatureManagement />} />
          <Route path="system-health" element={<SystemHealth />} />
          <Route path="compliance" element={<ComplianceDashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
