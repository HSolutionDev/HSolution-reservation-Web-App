import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
// import Sidebar from "./components/Sidebar/Sidebar";

import Header from "./components/Header/Header.jsx";
import RegisterScreen from "./Pages/RegisterScreen/RegisterScreen";
import Sidebar from "./components/Sidebar/Sidebar";
import SigninScreen from "./Pages/SigninScreen/SigninScreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <div className="App">
          <Home />
          <Sidebar />
          <RegisterScreen />
          <SigninScreen />
          <Contact />
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
