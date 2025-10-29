import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPositions = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError("User not authenticated.");
          return;
        }
        const config = { headers: { 'Authorization': `Bearer ${token}` } };
        const res = await axios.get("http://localhost:3002/api/positions", config);
        setPositions(res.data);
      } catch (err) {
        setError("Failed to fetch positions.");
      } finally {
        setLoading(false);
      }
    };
    fetchPositions();
  }, []);

  if (loading) return <div>Loading positions...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <>
      <h3 className="text-xl font-light mb-4">Positions ({positions.length})</h3>
      {positions.length > 0 ? (
        <div className="border rounded-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Instrument</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Qty.</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Avg.</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">LTP</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">P&L</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Chg.</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {positions.map((stock) => {
                const pnl = (stock.price - stock.avg) * stock.qty;
                const isProfit = pnl >= 0;
                return (
                  <tr key={stock._id}>
                    <td className="px-4 py-4">{stock.product}</td>
                    <td className="px-4 py-4 font-medium">{stock.name}</td>
                    <td className="px-4 py-4 text-right">{stock.qty}</td>
                    <td className="px-4 py-4 text-right">{stock.avg.toFixed(2)}</td>
                    <td className="px-4 py-4 text-right">{stock.price.toFixed(2)}</td>
                    <td className={`px-4 py-4 text-right font-semibold ${isProfit ? 'text-green-600' : 'text-red-600'}`}>
                      {pnl.toFixed(2)}
                    </td>
                    <td className={`px-4 py-4 text-right ${stock.isLoss ? 'text-red-600' : 'text-green-600'}`}>
                      {stock.day}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center p-10 border rounded-lg">
          <p className="text-gray-500">You have no open positions.</p>
        </div>
      )}
    </>
  );
};

export default Positions;