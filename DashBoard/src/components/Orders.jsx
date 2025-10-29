import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError("User not authenticated.");
          return;
        }
        const config = { headers: { 'Authorization': `Bearer ${token}` } };
        const res = await axios.get("http://localhost:3002/api/orders", config);
        setOrders(res.data);
      } catch (err) {
        setError("Failed to fetch orders.");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) return <div>Loading orders...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  if (orders.length === 0) {
    return (
      <div className="text-center p-10">
        <p className="text-gray-500">You haven't placed any orders today.</p>
        <Link to="/" className="mt-4 inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
          Get started
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-xl font-light mb-4">Orders ({orders.length})</h3>
      <div className="border rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Instrument</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Qty.</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Price</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Mode</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{order.name.replace('.NS','')}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{order.qty}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{order.price.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    order.mode === 'BUY' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {order.mode}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;