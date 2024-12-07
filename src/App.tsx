import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import GymList from './pages/GymList';
import GymDetails from './pages/GymDetails';
import QRScanner from './pages/QRScanner';
import Profile from './pages/Profile';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import MembershipPlans from './pages/membership/MembershipPlans';
import { useAuthStore } from './store/authStore';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="gyms" element={<GymList />} />
          <Route path="gyms/:id" element={<GymDetails />} />
          <Route
            path="scan"
            element={
              <PrivateRoute>
                <QRScanner />
              </PrivateRoute>
            }
          />
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="membership/*"
            element={
              <PrivateRoute>
                <MembershipPlans />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}