import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
// import Sidebar from "./components/Sidebar/Sidebar";

import Header from "./components/Header/Header.jsx";
import RegisterScreen from "./Pages/RegisterScreen/RegisterScreen";
import Sidebar from "./components/Sidebar/Sidebar";
import SigninScreen from "./Pages/SigninScreen/SigninScreen";
import { useState, useMemo, useEffect } from "react";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Soft UI Dashboard PRO React themes
import themeRTL from "assets/theme/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";

// @emotion components
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import DashboardNavbar from "components/Header/Navbar/DashboardNavbar";
import Signin from "layouts/authentication/sign-up/basic";
import Basic from "layouts/authentication/sign-in/basic";

export default function App() {
  const { pathname } = useLocation();
  const [rtlCache, setRtlCache] = useState(null);

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", "rtl");
  }, []);
  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  return (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={themeRTL}>
        <CssBaseline />
        <>
          <Header />

          <Sidebar />
          <main>
            <div className="App">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/authentication/sign-in" element={<Signin />} />
                <Route path="/authentication/sign-up" element={<Basic />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </div>
          </main>
          <Footer />
        </>
      </ThemeProvider>
    </CacheProvider>
  );
}
