import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const [isVerifying, setIsVerifying] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const verifyAndSetToken = async () => {
      try {
        // Check if token is in URL params
        const params = new URLSearchParams(location.search);
        const tokenFromUrl = params.get('token');

        if (tokenFromUrl) {
          localStorage.setItem('token', tokenFromUrl);
          // Clean URL without reloading
          window.history.replaceState({}, document.title, window.location.pathname);
        }

        // Get token from localStorage
        const token = localStorage.getItem('token');

        if (!token) {
          redirectToLogin();
          return;
        }

        // Verify token with backend
        const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3002';
        const response = await fetch(`${backendUrl}/verify-token`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const data = await response.json();
          if (data.valid) {
            setIsAuthenticated(true);
            setIsVerifying(false);
          } else {
            localStorage.removeItem('token');
            redirectToLogin();
          }
        } else {
          // Token invalid or expired
          localStorage.removeItem('token');
          redirectToLogin();
        }
      } catch (error) {
        console.error('Token verification failed:', error);
        localStorage.removeItem('token');
        redirectToLogin();
      }
    };

    const redirectToLogin = () => {
      const loginUrl = import.meta.env.VITE_LOGIN_URL || 'http://localhost:5173/login';
      window.location.href = loginUrl;
    };

    verifyAndSetToken();
  }, [location]);

  // Show loading state while verifying
  if (isVerifying) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Verifying authentication...</p>
        </div>
      </div>
    );
  }

  // Only render children if authenticated
  return isAuthenticated ? children : null;
};

export default ProtectedRoute;