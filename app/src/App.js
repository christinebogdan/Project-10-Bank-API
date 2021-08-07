import Nav from "./components/Nav";
import Homepage from "./views/Homepage";
import Login from "./views/Login";
import User from "./views/User";
import Footer from "./components/Footer";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Redirect, BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { customHistory } from "./helper/history";

//
library.add(faUserCircle, faSignOutAlt);

function App() {
  const state = useSelector((state) => state.authentication);
  return (
    <BrowserRouter history={customHistory} basename={process.env.PUBLIC_URL}>
      <header>
        <Nav />
      </header>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/profile">
          {state.isAuthenticated ? <User /> : <Redirect to="/" />}
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
