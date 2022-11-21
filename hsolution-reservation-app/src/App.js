import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Error from "./components/Error/Error";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          {/* <Route index element={<Home />} /> */}
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
  );
}
export default App;
