import React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import ColorThemes from "../ColorThemes/ColorThemes";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">AdminApp</span>
      </div>
      <hr />
      <div className="center">
        <div className="icon-menu">
          <ul>
            <li>Prestations</li>
            <li>Forfait</li>
            <li>FashionShop</li>
            <li>Orders</li>
            <li>Deliveries</li>
            <li>Factures</li>
            <li>Agenda</li>
            <li>Clients </li>
            <li>Messageries</li>
            <li>Collaborateurs</li>
            <li>Graphique</li>
            <li>Stocks</li>
            <li>Special offer </li>
            <li>promo code </li>
            <li>Customer promo code</li>
            <li>Export logs</li>
            <li>Activity logs</li>
          </ul>
          <ColorThemes />
        </div>
        <div className="text-menu">
          <ul>
            <li>Prestations</li>
            <li>Forfait</li>
            <li>FashionShop</li>
            <li>Orders</li>
            <li>Deliveries</li>
            <li>Factures</li>
            <li>Agenda</li>
            <li>Clients </li>
            <li>Messageries</li>
            <li>Collaborateurs</li>
            <li>Graphique</li>
            <li>Stocks</li>
            <li>Special offer </li>
            <li>promo code </li>
            <li>Customer promo code</li>
            <li>Export logs</li>
            <li>Activity logs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
