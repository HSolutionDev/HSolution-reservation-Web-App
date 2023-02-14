import React from "react";
import DashboardNavbar from "./Navbar/DashboardNavbar";
import Navbar from "./Navbar/Navbar";

export default function Header() {
  return (
    <header className="header_row">
      {/* <Navbar /> */}
      <DashboardNavbar />
    </header>
  );
}
