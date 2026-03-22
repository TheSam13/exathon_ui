import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleFakeLogin = () => {
    // 1. Fake a login token
    localStorage.setItem('token', 'fake_test_token');
    // 2. Redirect to the Home page
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-900 p-10 rounded-2xl border border-gray-800 text-center space-y-6">
        <h1 className="text-3xl font-bold text-red-500">Login Page</h1>
        <p className="text-gray-400">Waiting for senior's backend code...</p>
        
        <button 
          onClick={handleFakeLogin}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold transition"
        >
          Bypass Login (Test Route)
        </button>
      </div>
    </div>
  );
};

export default Login;