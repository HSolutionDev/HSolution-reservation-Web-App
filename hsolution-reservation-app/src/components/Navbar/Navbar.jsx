import React from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import "./Navbar.scss";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
import DarkModeSharpIcon from "@mui/icons-material/DarkModeSharp";
import NotificationsActiveSharpIcon from "@mui/icons-material/NotificationsActiveSharp";
import ChatBubbleOutlineSharpIcon from "@mui/icons-material/ChatBubbleOutlineSharp";
import FormatListBulletedSharpIcon from "@mui/icons-material/FormatListBulletedSharp";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="warpper">
        <div className="search">
          <input type="text" placeholder="Search" name="" value="" />
          <SearchSharpIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageSharpIcon />
          </div>
          <div className="item">
            <DarkModeSharpIcon />
          </div>

          <div className="item">
            <NotificationsActiveSharpIcon />
          </div>
          <div className="item">
            <ChatBubbleOutlineSharpIcon />
          </div>
          <div className="item">
            <FormatListBulletedSharpIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
