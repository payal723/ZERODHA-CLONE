// DashBoard/src/components/BuyActionWindow.js

import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { useNavigate } from 'react-router-dom'; // useNavigate ko import karein

const BuyActionWindow = ({ uid }) => {
  const GeneralContextValue = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const navigate = useNavigate(); // navigate hook ko initialize karein

  const handleBuyClick = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert("You are not logged in. Please log in again.");
      return;
    }
    const config = { headers: { 'Authorization': `Bearer ${token}` } };
    const orderData = { name: uid, qty: stockQuantity, price: stockPrice, mode: "BUY" };

    axios.post("http://localhost:3002/newOrder", orderData, config)
      .then(response => {
        alert("Order placed successfully!");
        if (GeneralContextValue && GeneralContextValue.closeBuyWindow) {
          GeneralContextValue.closeBuyWindow();
          
          // ⭐⭐ YAHAN PAR SABSE ZAROORI BADLAV KIYA GAYA HAI ⭐⭐
          // Order place hone ke baad, Holdings page par jaao aur page ko reload karo
          navigate('/holdings');
          window.location.reload(); 
        }
      })
      .catch(error => {
        console.error("Error placing order:", error);
        alert(error.response?.data?.message || "Failed to place order. Check console for details.");
      });
  };

  const handleCancelClick = () => {
    if (GeneralContextValue && GeneralContextValue.closeBuyWindow) {
      GeneralContextValue.closeBuyWindow();
    }
  };

  return (
    <div id="buy-window" draggable="true" className="bg-white p-4 rounded-lg shadow-xl w-80 max-w-sm border">
      <div className="mb-4">
        <div className="flex space-x-4">
          <fieldset className="border rounded p-2 flex-1">
            <legend className="text-xs px-1">Qty.</legend>
            <input type="number" name="qty" id="qty" onChange={(e) => setStockQuantity(e.target.value)} value={stockQuantity} className="w-full text-lg border-none focus:ring-0 p-0 m-0" min="1"/>
          </fieldset>
          <fieldset className="border rounded p-2 flex-1">
            <legend className="text-xs px-1">Price</legend>
            <input type="number" name="price" id="price" step="0.05" onChange={(e) => setStockPrice(e.target.value)} value={stockPrice} className="w-full text-lg border-none focus:ring-0 p-0 m-0"/>
          </fieldset>
        </div>
      </div>
      <div className="flex justify-between items-center pt-2 border-t">
        <span className="text-sm">Margin required ₹140.65</span>
        <div className="flex space-x-2">
          <button onClick={handleBuyClick} className="px-4 py-2 bg-blue-600 text-white rounded shadow-md hover:bg-blue-700">Buy</button>
          <button onClick={handleCancelClick} className="px-4 py-2 bg-gray-200 rounded shadow-md hover:bg-gray-300">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;