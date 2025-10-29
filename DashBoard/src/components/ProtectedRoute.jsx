import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tokenFromUrl = params.get('token');

    if (tokenFromUrl) {
      localStorage.setItem('token', tokenFromUrl);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [location]);

  const token = localStorage.getItem('token');

  if (!token) {
    const loginUrl = import.meta.env.VITE_LOGIN_URL || 'http://localhost:5173/login';
    window.location.href = loginUrl;
    return null;
  }

  return children;
};

export default ProtectedRoute;