import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHoldings = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError("User not authenticated.");
          return;
        }
        const config = { headers: { 'Authorization': `Bearer ${token}` } };
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        const res = await axios.get(`${backendUrl}/allHoldings`, config);
        setAllHoldings(res.data);
      } catch (err) {
        setError("Failed to fetch holdings data.");
      } finally {
        setLoading(false);
      }
    };
    fetchHoldings();
  }, []);

  if (loading) return <div>Loading holdings...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  const chartData = {
    labels: allHoldings.map(stock => stock.name.replace('.NS','')),
    datasets: [
      {
        label: 'Investment Value (₹)',
        data: allHoldings.map(stock => stock.avg * stock.qty),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <>
      <h3 className="text-xl font-light mb-4">Holdings ({allHoldings.length})</h3>
      <div className="border rounded-lg overflow-x-auto mb-8">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Instrument</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Qty.</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Avg. cost</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">LTP</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Cur. val</th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">P&L</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {allHoldings.length > 0 ? (
              allHoldings.map((stock) => {
                const curValue = stock.price * stock.qty;
                const pnl = curValue - (stock.avg * stock.qty);
                const isProfit = pnl >= 0;
                return (
                  <tr key={stock._id}>
                    <td className="px-4 py-4 font-medium">{stock.name.replace('.NS','')}</td>
                    <td className="px-4 py-4 text-right">{stock.qty}</td>
                    <td className="px-4 py-4 text-right">{stock.avg.toFixed(2)}</td>
                    <td className="px-4 py-4 text-right">{stock.price.toFixed(2)}</td>
                    <td className="px-4 py-4 text-right">{curValue.toFixed(2)}</td>
                    <td className={`px-4 py-4 text-right font-semibold ${isProfit ? 'text-green-600' : 'text-red-600'}`}>
                      {pnl.toFixed(2)}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr><td colSpan="6" className="text-center p-10 text-gray-500">You have no holdings yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>
      {allHoldings.length > 0 && (
        <div className="p-4 border rounded-lg bg-white">
          <VerticalGraph chartData={chartData} />
        </div>
      )}
    </>
  );
};

export default Holdings;