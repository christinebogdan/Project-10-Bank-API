import logo from "../designs/img/argentBankLogo.png";
import "../styles/nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../store/actions";

function Nav(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.authentication);
  const firstName = state.userInfo.firstName;

  const isAuthenticated = (firstName) => {
    return (
      <>
        <div>
          <FontAwesomeIcon icon="user-circle" />
          <Link to="/profile" className="main-nav-item">
            {state.userInfo.firstName}
          </Link>
        </div>
        <div>
          <FontAwesomeIcon icon="sign-out-alt" />
          <Link
            to="/"
            className="main-nav-item"
            onClick={() => dispatch(actionCreators.loggingOut())}
          >
            Sign Out
          </Link>
        </div>
      </>
    );
  };

  const notAuthenticated = () => {
    return (
      <div>
        <FontAwesomeIcon icon="user-circle" />
        <Link to="/login" className="main-nav-item">
          Sign In
        </Link>
      </div>
    );
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {state.isAuthenticated
          ? isAuthenticated(firstName)
          : notAuthenticated()}
      </div>
    </nav>
  );
}

export default Nav;
