import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header/Header";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <main>
        <div className="App">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              {/* Dashboard */}

              {/* Pages */}

              {/* Client */}

              {/* Admin */}

              {/* <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
          </Route> */}
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
