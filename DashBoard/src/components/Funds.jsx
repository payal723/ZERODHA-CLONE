import React, { useState, useEffect } from "react";
import axios from "axios";

const Funds = () => {
  const [fundsData, setFundsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFunds = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError("User not authenticated.");
        return;
      }
      const config = { headers: { 'Authorization': `Bearer ${token}` } };
      const res = await axios.get("http://localhost:3002/api/funds", config);
      setFundsData(res.data);
    } catch (err) {
      setError("Failed to fetch funds data.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFunds();
  }, []);

  const handleAddFunds = async () => {
    const amount = prompt("Enter amount to add:", "1000");
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    try {
      const token = localStorage.getItem('token');
      const config = { headers: { 'Authorization': `Bearer ${token}` } };
      const res = await axios.post("http://localhost:3002/api/funds/add", { amount: parseFloat(amount) }, config);
      alert(res.data.message);
      fetchFunds();
    } catch (err) {
      alert("Failed to add funds.");
      console.error(err);
    }
  };

  if (loading) {
    return <div className="p-4">Loading funds...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  if (!fundsData) {
    return <div className="p-4">No funds data available.</div>;
  }

  return (
    <>
      <div className="flex justify-end items-center gap-4 mb-8">
        <p className="text-sm text-gray-500">Instant, zero-cost fund transfers with UPI</p>
        <button onClick={handleAddFunds} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">Add funds</button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Withdraw</button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h3 className="text-xl font-light mb-4 text-gray-700">Equity</h3>
          <div className="border rounded-lg bg-white">
            <div className="flex justify-between p-4 border-b">
              <p className="text-gray-600">Available margin</p>
              <p className="font-semibold text-blue-600">₹ {fundsData.equity.availableMargin.toFixed(2)}</p>
            </div>
            <div className="flex justify-between p-4 border-b">
              <p className="text-gray-600">Used margin</p>
              <p className="font-semibold">₹ {fundsData.equity.usedMargin.toFixed(2)}</p>
            </div>
            <div className="flex justify-between p-4">
              <p className="text-gray-600">Available cash</p>
              <p className="font-semibold">₹ {fundsData.equity.availableCash.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-light mb-4 text-gray-700">Commodity</h3>
          <div className="border rounded-lg p-6 bg-white text-center">
            <p className="text-gray-500 mb-4">You don't have a commodity account</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded">Open Account</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;