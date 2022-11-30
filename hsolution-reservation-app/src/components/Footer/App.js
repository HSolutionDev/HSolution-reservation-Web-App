import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";

import ProjectsScreen from "./screens/ProjectsScreen";
import ConditionGenerale from "./screens/ConditionGenerale";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ProjectScreen from "./Components/ProjectScreen/ProjectScreen";
import Error from "./Components/Error/Error";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/projects" component={ProjectsScreen} />
          <Route path="/project/:id" component={ProjectScreen} exact />
          <Route path="/contact" component={ContactScreen} />
          <Route path="/conditions-générales" component={ConditionGenerale} />
          <Route path="/404" component={Error} />
          <Redirect to="/404" />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
