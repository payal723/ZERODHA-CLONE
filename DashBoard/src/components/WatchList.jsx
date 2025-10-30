import React, { useState, useEffect, useContext } from "react";
import axiosInstance from "../utils/axiosConfig"; // Import the configured axios
import GeneralContext from "./GeneralContext";
import { BarChart3, ChevronDown, ChevronUp, MoreHorizontal, RefreshCw } from "lucide-react";

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="relative inline-block" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      {children}
      {visible && (<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-md whitespace-nowrap z-50">{text}</span>)}
    </div>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);
  const handleBuyClick = () => generalContext.openBuyWindow(uid);
  const handleSellClick = () => generalContext.openSellWindow(uid);

  return (
    <div className="flex items-center gap-2">
      <Tooltip text="Buy (B)"><button onClick={handleBuyClick} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">Buy</button></Tooltip>
      <Tooltip text="Sell (S)"><button onClick={handleSellClick} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">Sell</button></Tooltip>
      <Tooltip text="Analytics (A)"><button className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg"><BarChart3 className="w-4 h-4 text-gray-700" /></button></Tooltip>
      <Tooltip text="More"><button className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg"><MoreHorizontal className="w-4 h-4 text-gray-700" /></button></Tooltip>
    </div>
  );
};

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);
  const changePercent = parseFloat(stock.changesPercentage) || 0;
  const price = parseFloat(stock.price) || 0;
  const isDown = changePercent < 0;
  
  return (
    <li className="p-3 border rounded-lg flex justify-between items-center hover:bg-gray-50 transition-colors duration-150" onMouseEnter={() => setShowWatchlistActions(true)} onMouseLeave={() => setShowWatchlistActions(false)}>
      <div className="flex flex-col">
        <p className={`font-semibold ${isDown ? "text-red-500" : "text-green-500"}`}>{stock.symbol.replace(".BSE", "").replace(".NS", "")}</p>
        <div className="flex items-center gap-2 text-sm">
          <span className={`${isDown ? "text-red-500" : "text-green-500"}`}>{changePercent.toFixed(2)}%</span>
          {isDown ? <ChevronDown className="w-4 h-4 text-red-500" /> : <ChevronUp className="w-4 h-4 text-green-500" />}
          <span className="font-bold text-gray-800">{price.toFixed(2)}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.symbol} />}
    </li>
  );
};

const WatchList = () => {
  const [watchlistData, setWatchlistData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      // Using axiosInstance which automatically adds token
      const response = await axiosInstance.get('/api/market-data');
      
      if (response.data && Array.isArray(response.data)) {
        setWatchlistData(response.data);
      } else {
        setError("No data received from the server.");
      }
    } catch (err) {
      console.error("Market data fetch error:", err);
      const errorMessage = err.response?.data?.message || "Could not fetch market data.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-full border-r border-gray-200 p-4 overflow-y-auto w-full max-w-xs">
      <div className="flex justify-between items-center mb-4">
        <input type="text" placeholder="Search eg: infy..." className="border rounded-lg px-3 py-2 w-full mr-2 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
        <Tooltip text="Refresh Data">
          <button onClick={fetchData} disabled={loading} className="p-2 hover:bg-gray-200 rounded-full disabled:opacity-50">
            <RefreshCw className={`w-5 h-5 text-gray-700 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </Tooltip>
      </div>
      {loading && <p className="text-center text-gray-500">Loading market data...</p>}
      {error && <p className="text-center text-red-500 font-semibold p-4">{error}</p>}
      {!loading && !error && watchlistData.length === 0 && <p className="text-center text-gray-500 p-4">Watchlist is empty or API limit reached.</p>}
      {!loading && !error && watchlistData.length > 0 && (
        <ul className="space-y-3">
          {watchlistData.map((stock) => (<WatchListItem stock={stock} key={stock.symbol} />))}
        </ul>
      )}
    </div>
  );
};

export default WatchList;