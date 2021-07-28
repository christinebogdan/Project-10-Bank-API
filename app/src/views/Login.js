import "../styles/login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../store/actions";

function Login(props) {
  const form = useSelector((state) => state.formInput);
  const dispatch = useDispatch();

  // dispatch(actionCreators.loggingOut);
  // why does this render every time I type in the form input field?
  // console.log("hello");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: form.username,
      password: form.password,
    };
    dispatch(actionCreators.auth(data));
    // why did the dispatch of submit action not work here?
  };

  const handleChange = (e) => {
    if (e.target.id === "username") {
      dispatch(actionCreators.username(e.target.value));
    } else if (e.target.id === "password") {
      dispatch(actionCreators.password(e.target.value));
    } else if (e.target.id === "remember-me") {
      dispatch(actionCreators.rememberme(e.target.checked ? true : false));
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon="user-circle" />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={handleChange} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={handleChange} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" onChange={handleChange} />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <input type="submit" value="Sign In" className="sign-in-button" />
        </form>
      </section>
    </main>
  );
}

export default Login;

/**
 * Client stores that token in local storage or session storage.
From next time, the client for making any request supplies the JWT token in request headers like this. Authorization: Bearer <jwt_token>
Server upon receiving the JWT validates it and sends the successful response else error.
 */
