import React, { useState, useEffect } from "react";
import axios from "axios";

const Summary = ({ user }) => {
  const [summaryData, setSummaryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSummary = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError("User not authenticated.");
          return;
        }
        const config = { headers: { 'Authorization': `Bearer ${token}` } };
        const res = await axios.get("http://localhost:3002/api/summary", config);
        setSummaryData(res.data);
      } catch (err) {
        setError("Failed to fetch summary data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchSummary();
  }, []);

  if (loading) {
    return <div>Loading summary...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  if (!summaryData) {
    return <div>Could not load summary.</div>
  }
  
  const pnl = summaryData.currentValue - summaryData.totalInvestment;
  const pnlPercent = summaryData.totalInvestment > 0 ? (pnl / summaryData.totalInvestment) * 100 : 0;
  const isProfit = pnl >= 0;

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-light text-gray-800">Hi, {user.username}!</h1>
      </div>
      <div className="mb-10">
        <h2 className="text-lg font-normal text-gray-500 mb-4">Holdings ({summaryData.holdingsCount})</h2>
        <div className="flex items-end gap-10">
          <div>
            <h3 className={`text-4xl font-semibold ${isProfit ? 'text-green-600' : 'text-red-600'}`}>{pnl.toFixed(2)}</h3>
            <p className="text-sm text-gray-500">P&L</p>
          </div>
          <p className={`text-md ${isProfit ? 'text-green-500' : 'text-red-500'}`}>{isProfit ? '+' : ''}{pnlPercent.toFixed(2)}%</p>
        </div>
        <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between max-w-xs"><span className="text-gray-500">Current Value</span><span className="font-medium">₹ {summaryData.currentValue.toFixed(2)}</span></div>
            <div className="flex justify-between max-w-xs"><span className="text-gray-500">Total Investment</span><span className="font-medium">₹ {summaryData.totalInvestment.toFixed(2)}</span></div>
        </div>
      </div>
    </>
  );
};

export default Summary;