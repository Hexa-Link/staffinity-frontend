import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

// Pages
import Home from './pages/index'
import Dashboard from './pages/dashboard'
import Employees from './pages/employees'
import Inventory from './pages/inventory'
import Vacancies from './pages/vacancies'
import AdminDashboard from './pages/admin-dashboard'
import Notifications from './pages/notifications'
import Login from './pages/login'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/notifications" element={<Notifications />} />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}
