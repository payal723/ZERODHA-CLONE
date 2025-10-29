
import React from "react";
import Menu from "./Menu";

const TopBar = ({ user }) => {
  if (!user) {
    return null; 
  }

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">100.2</p>
          <p className="percent"></p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">100.2</p>
          <p className="percent"></p>
        </div>
      </div>
      <Menu user={user} />
    </div>
  );
};

export default TopBar;