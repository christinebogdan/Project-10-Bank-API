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

  // why does this not work in LINK
  // const loggingOut = (e) => {
  //   console.log("Hello");
  //   dispatch(actionCreators.loggingOut);
  //   console.log(state);
  // };

  // why does it not work to link sign out to /login and have login dispatch loggingout ?
  const isAuthenticated = (firstName) => {
    return (
      <>
        <div>
          <FontAwesomeIcon icon="user-circle" />
          <Link to="/" className="main-nav-item">
            {state.userInfo.firstName}
          </Link>
        </div>
        <div>
          <FontAwesomeIcon icon="sign-out-alt" />
          {/* <Link to="/login" className="main-nav-item">
            Sign Out
          </Link> */}
          {/* <Link
            to={(location) => {
              dispatch(actionCreators.loggingOut);
              return { ...location, pathname: "/" };
            }}
            className="main-nav-item"
          >
            Sign Out
          </Link> */}

          {/* shows errors in console on click */}
          <a
            href="./"
            onClick={dispatch(actionCreators.loggingOut)}
            className="main-nav-item"
          >
            Sign Out
          </a>
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
      {/* why does click on logo log user out */}
      <a className="main-nav-logo" href="./">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        {state.isAuthenticated
          ? isAuthenticated(firstName)
          : notAuthenticated()}
      </div>
    </nav>
  );
}

export default Nav;
