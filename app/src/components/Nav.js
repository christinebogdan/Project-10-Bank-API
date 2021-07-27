import logo from "../designs/img/argentBankLogo.png";
import "../styles/nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <FontAwesomeIcon icon="user-circle" />
        <Link to="/login" className="main-nav-item" href="./sign-in.html">
          Sign In
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
