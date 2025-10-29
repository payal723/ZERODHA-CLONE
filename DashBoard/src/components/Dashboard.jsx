import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = ({ user }) => {
  return (
    <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
      <GeneralContextProvider>
        <div className="w-full md:w-80 border-r border-gray-200 overflow-y-auto">
          <WatchList />
        </div>
        
        <main className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Summary user={user} />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </main>
      </GeneralContextProvider>
    </div>
  );
};

export default Dashboard;