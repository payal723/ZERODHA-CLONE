import React, { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import Header from "./Header";

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      const token = localStorage.getItem('token');
      if (!token) {
        window.location.href = 'http://localhost:5173/login';
        return;
      }
      try {
        const config = { headers: { 'Authorization': `Bearer ${token}` } };
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        const res = await axios.get(`${backendUrl}/api/me`, config);
        setUser(res.data);
      } catch (err) {
        if (err.response && (err.response.status === 401 || err.response.status === 403)) {
          localStorage.removeItem('token');
          window.location.href = 'http://localhost:5173/login';
        } else {
          setError("Could not fetch user profile. Please try refreshing.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading Profile...</div>;
  }
  
  if (error) {
    return <div className="p-4 text-red-500 font-semibold text-center">{error}</div>;
  }
  
  if (!user) {
    return <div className="flex items-center justify-center h-screen">Could not load user data.</div>;
  }

  return (
    <div className="flex flex-col h-screen">
      <Header user={user} />
      <Dashboard user={user} />
    </div>
  );
};

export default Home;