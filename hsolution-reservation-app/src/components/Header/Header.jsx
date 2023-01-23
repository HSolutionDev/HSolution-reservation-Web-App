import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";

export default function Header() {
  return (
    <header className="header_row">
      <Navbar />
      {/* <Sidebar /> */}
    </header>
  );
}
