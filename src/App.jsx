import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

// 🟢 The Magic Fix: A component that checks auth every time you navigate
const ProtectedRoute = ({ element }) => {
  const isAuthenticated = !!localStorage.getItem('token');
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Route - Uses our dynamic check */}
        <Route 
          path="/home" 
          element={<ProtectedRoute element={<Home />} />} 
        />

        {/* Catch-all: If logged in, go home. If not, go login. */}
        <Route 
          path="*" 
          element={
            localStorage.getItem('token') 
              ? <Navigate to="/home" replace /> 
              : <Navigate to="/login" replace />
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;