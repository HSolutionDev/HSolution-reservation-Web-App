import React from "react";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="warpper">
        <div className="search">
          <input type="text" placeholder="Search" name="" value="" />
        </div>
        <div className="items">
          <div className="item"></div>
          <div className="item"></div>

          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
