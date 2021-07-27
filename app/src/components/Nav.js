import logo from "../designs/img/argentBankLogo.png";
import "../styles/nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Nav(props) {
  const state = useSelector((state) => state.authentication);
  console.log(state);
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        {state.isAuthenticated ? (
          <>
            <div>
              <FontAwesomeIcon icon="user-circle" />
              <Link className="main-nav-item">{state.userInfo.firstName}</Link>
            </div>
            <div>
              <FontAwesomeIcon icon="sign-out-alt" />
              <Link to="/login" className="main-nav-item" href="./sign-in.html">
                Sign Out
              </Link>
            </div>
          </>
        ) : (
          <div>
            <FontAwesomeIcon icon="user-circle" />
            <Link to="/login" className="main-nav-item" href="./sign-in.html">
              Sign In
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
