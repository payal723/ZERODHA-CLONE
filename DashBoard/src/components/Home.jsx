import React, { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import Header from "./Header"; 

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const token = localStorage.getItem('token');
      if (!token) {
        window.location.href = 'http://localhost:5173/login';
        return;
      }
      try {
        const config = { headers: { 'Authorization': `Bearer ${token}` } };
        const res = await axios.get('http://localhost:3002/api/me', config);
        setUser(res.data);
      } catch (err) {
        if (err.response && (err.response.status === 401 || err.response.status === 403)) {
          localStorage.removeItem('token');
          window.location.href = 'http://localhost:5173/login';
        }
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading || !user) {
    return <div className="flex items-center justify-center h-screen">Loading Profile...</div>;
  }

  return (
    <div className="flex flex-col h-screen">
      <Header user={user} />
      <Dashboard user={user} />
    </div>
  );
};

export default Home;