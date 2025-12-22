

import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './layouts/RootLayout'
import './App.css'
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
function App() {

  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path={"/StaffManagment"} element={<StaffManagement />} />\
        <Route path={"/parents"} element={<Parents />} />
        <Route path={"/Childrens"} element={<Childrens />} />
        <Route path={"/ChildrenDetail/:id"} element={<ChildrenDetail />} />
        <Route path={"/Communication"} element={<Communication />} />
        <Route path={"/Payments"} element={<Payment />} />
        <Route path={"/Nutrition"} element={<Nutrition />} />
        <Route path={"/Calendar"} element={<Calendar />} />
        <Route path={"/Settings"} element={<Setting />} />

      </Route>
      <Route path={"/login"} element={<Login />} />
    </Routes>
  )
}

export default App
