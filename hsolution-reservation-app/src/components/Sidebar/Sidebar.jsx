import React from "react";
import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltSharpIcon from "@mui/icons-material/PeopleAltSharp";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import NotificationImportantSharpIcon from "@mui/icons-material/NotificationImportantSharp";
import TimelineSharpIcon from "@mui/icons-material/TimelineSharp";
import EventAvailableSharpIcon from "@mui/icons-material/EventAvailableSharp";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import StoreSharpIcon from "@mui/icons-material/StoreSharp";
import LocalShippingSharpIcon from "@mui/icons-material/LocalShippingSharp";
import PsychologySharpIcon from "@mui/icons-material/PsychologySharp";
import CloudUploadSharpIcon from "@mui/icons-material/CloudUploadSharp";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">AdminApp</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <Link to="/home">
              <DashboardIcon />
              <span> Dashboard</span>{" "}
            </Link>
          </li>
          <p className="title">List</p>

          <li>
            <Link to="/home">
              <StoreSharpIcon />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link to="/home">
              <PeopleAltSharpIcon />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to="/home">
              <ShoppingCartSharpIcon />
              <span>Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/home">
              <EventAvailableSharpIcon />
              <span>Reservations</span>
            </Link>
          </li>
          <li>
            <Link to="/home">
              <LocalShippingSharpIcon />
              <span>Delivery</span>
            </Link>
          </li>
          <p className="title">Useful</p>

          <li>
            <Link to="/home">
              <TimelineSharpIcon />
              <span>Stats</span>
            </Link>
          </li>
          <li>
            <Link to="/home">
              <NotificationImportantSharpIcon />
              <span>Notifications</span>
            </Link>
          </li>
          <p className="title">Service</p>

          <li>
            <Link to="/home">
              <CloudUploadSharpIcon />
              <span>Systems Health</span>
            </Link>
          </li>
          <li>
            <Link to="/home">
              <PsychologySharpIcon />
              <span>Logs</span>
            </Link>
          </li>
          <li>
            <Link to="/home">
              <SettingsRoundedIcon />
              <span>Settings</span>
            </Link>
          </li>
          <p className="title">User</p>

          <li>
            <Link to="/home">
              <AccountCircleSharpIcon />
              <span>Profile </span>
            </Link>
          </li>
          <li>
            <Link to="/home">
              <ExitToAppRoundedIcon />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="color_options"></div>
        <div className="color_options"></div>
        <div className="color_options"></div>
      </div>
    </div>
  );
};

export default Sidebar;
