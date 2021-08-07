import Nav from "./components/Nav";
import Homepage from "./views/Homepage";
import Login from "./views/Login";
import User from "./views/User";
import Footer from "./components/Footer";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Redirect, Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { customHistory, BASENAME } from "./helper/history";

//
library.add(faUserCircle, faSignOutAlt);

function App() {
  const state = useSelector((state) => state.authentication);
  return (
    <Router history={customHistory}>
      <header>
        <Nav />
      </header>
      <Switch>
        <Route exact path={`/${BASENAME}/`}>
          <Homepage />
        </Route>
        <Route path={`/${BASENAME}/login`}>
          <Login />
        </Route>
        <Route path={`/${BASENAME}/profile`}>
          {state.isAuthenticated ? <User /> : <Redirect to={`/${BASENAME}/`} />}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
