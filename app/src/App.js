import Nav from "./components/Nav";
import Homepage from "./views/Homepage";
import Login from "./views/Login";
import User from "./views/User";
import Footer from "./components/Footer";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

library.add(faUserCircle, faSignOutAlt);

// make nav dynamic depending on login state
// make greeting on profile page dynamic depending on user name
function App() {
  return (
    <Router>
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
          <User />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
