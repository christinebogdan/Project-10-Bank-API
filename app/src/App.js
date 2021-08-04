import Nav from "./components/Nav";
import Homepage from "./views/Homepage";
import Login from "./views/Login";
import User from "./views/User";
import Footer from "./components/Footer";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect, Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// what is the difference between createBrowserHistory and useRouterHistory
// https://medium.com/@ivantsov/using-react-router-and-history-38c021270829

import { customHistory } from "./helper/history";

//
library.add(faUserCircle, faSignOutAlt);

function App() {
  const state = useSelector((state) => state.authentication);
  return (
    <Router history={customHistory} basename={process.env.PUBLIC_URL}>
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
    </Router>
  );
}

export default App;

/* <Route exact path="/">
  {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
</Route> */
