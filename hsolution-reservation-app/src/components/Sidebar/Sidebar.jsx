import React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
// import ColorThemes from "../ColorThemes/ColorThemes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faScissors,
  faTruck,
  faUsers,
  faHandshake,
  faChartPie,
  faHouse,
  faFileExport,
  faFileInvoice,
  faCalendarDay,
  faBox,
  faPercent,
  faGift,
  faShop,
  faUserClock,
  faClipboardList,
  faChevronRight,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Header/Navbar/Navbar";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <div className="top">
          <Link to="/">
            <span className="logo">AdminApp</span>
          </Link>
        </div>
      </nav>

      <div className="center">
        <div className="toggle">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <div className="content">
          <div className="icon-menu">
            <ul>
              <li className="title">Dashboard</li>
              <li className="title">Service</li>
              <li>
                <Link>
                  <FontAwesomeIcon classname="icon" icon={faScissors} />
                  <span>Prestations</span>
                </Link>
              </li>
              <li>
                <Link>
                  <FontAwesomeIcon classname="icon" icon={faClipboardList} />
                  <span>Forfait</span>
                </Link>
              </li>
              <li>
                <Link>
                  <FontAwesomeIcon classname="icon" icon={faShop} />
                  <span>Shop</span>
                </Link>
              </li>
              <li className="title">Orders</li>
              <li>
                <Link>
                  <FontAwesomeIcon classname="icon" icon={faBox} />
                  <span>Orders</span>
                </Link>
              </li>
              <li>
                <Link>
                  <FontAwesomeIcon classname="icon" icon={faTruck} />
                  <span>Deliveries</span>
                </Link>
              </li>
              <li>
                <Link>
                  <FontAwesomeIcon classname="icon" icon={faFileInvoice} />
                  <span>Factures</span>
                </Link>
              </li>
              <li className="title">Administration</li>
              <li>
                <Link>
                  <FontAwesomeIcon classname="icon" icon={faCalendarDay} />
                  <span>Agenda</span>
                </Link>
              </li>
              <li>
                <Link>
                  <FontAwesomeIcon classname="icon" icon={faUsers} />
                  <span>Clients </span>
                </Link>
              </li>
              <li>
                <Link to="/Contact">
                  <FontAwesomeIcon classname="icon" icon={faEnvelope} />
                  <span>Messageries</span>
                </Link>
              </li>
              <li>
                <Link>
                  <FontAwesomeIcon classname="icon" icon={faHandshake} />
                  <span>Collaborateurs</span>
                </Link>
              </li>
              <li>
                <Link>
                  <FontAwesomeIcon classname="icon" icon={faChartPie} />
                  <span>Graphique</span>
                </Link>
              </li>
              <li>
                <Link>
                  <FontAwesomeIcon classname="icon" icon={faHouse} />
                  <span>Stocks</span>
                </Link>
              </li>
              <li className="title">Loyalty</li>
              <li>
                <Link>
                  <FontAwesomeIcon classname="icon" icon={faGift} />
                  <span>Special offer </span>
                </Link>
              </li>
              <li>
                <Link>
                  <FontAwesomeIcon classname="icon" icon={faPercent} />
                  <span>promo code </span>
                </Link>
              </li>
              <li className="title">System</li>
              <li>
                <Link>
                  <FontAwesomeIcon classname="icon" icon={faFileExport} />
                  <span>Export logs</span>
                </Link>
              </li>
              <li>
                <Link>
                  <FontAwesomeIcon classname="icon" icon={faUserClock} />
                  <span>Activity logs</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-menu"></div>
        </div>
        {/* <div className="bottom">
          <li className="mode">
            <div className="moon-sun">
              <FontAwesomeIcon classname="icon bx-moon" icon={faMoon} />
              <FontAwesomeIcon classname="icon bx-sun" icon={faSun} />

              <span className="mode-text">Dark Mode</span>
            </div>
            <div className="toggle-switch">
              <span className="switch"></span>
            </div>
          </li>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
