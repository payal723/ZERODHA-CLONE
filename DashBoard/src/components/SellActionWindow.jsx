import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { useNavigate } from 'react-router-dom';

const SellActionWindow = ({ uid }) => {
  const GeneralContextValue = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const navigate = useNavigate();

  const handleSellClick = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert("You are not logged in.");
      return;
    }
    const config = { headers: { 'Authorization': `Bearer ${token}` } };
    const orderData = { name: uid, qty: stockQuantity, price: stockPrice };

    axios.post("http://localhost:3002/sellOrder", orderData, config)
      .then(response => {
        alert(response.data.message);
        if (GeneralContextValue && GeneralContextValue.closeSellWindow) {
          GeneralContextValue.closeSellWindow();
          navigate('/holdings');
          window.location.reload(); 
        }
      })
      .catch(error => {
        alert(error.response?.data?.message || "Failed to place sell order.");
      });
  };

  const handleCancelClick = () => {
    if (GeneralContextValue && GeneralContextValue.closeSellWindow) {
      GeneralContextValue.closeSellWindow();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 z-40 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-sm border">
        <div className="bg-red-600 text-white p-3 rounded-t-lg">
          <h3 className="font-semibold">{uid} <span className="font-normal text-sm">SELL</span></h3>
        </div>
        <div className="p-4">
          <div className="flex gap-4 mb-4">
            <fieldset className="border rounded p-2 flex-1">
              <legend className="text-xs px-1">Qty.</legend>
              <input type="number" name="qty" onChange={(e) => setStockQuantity(e.target.value)} value={stockQuantity} className="w-full text-lg border-none focus:ring-0 p-0 m-0 bg-transparent" min="1"/>
            </fieldset>
            <fieldset className="border rounded p-2 flex-1">
              <legend className="text-xs px-1">Price</legend>
              <input type="number" name="price" step="0.05" onChange={(e) => setStockPrice(e.target.value)} value={stockPrice} className="w-full text-lg border-none focus:ring-0 p-0 m-0 bg-transparent"/>
            </fieldset>
          </div>
          <div className="flex justify-between items-center pt-3 border-t">
            <span className="text-sm text-gray-600 font-medium">Available shares: X</span>
            <div className="flex space-x-2">
              <button onClick={handleSellClick} className="px-5 py-2 bg-red-600 text-white font-semibold rounded shadow-md hover:bg-red-700">Sell</button>
              <button onClick={handleCancelClick} className="px-5 py-2 bg-gray-200 text-gray-800 rounded">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;