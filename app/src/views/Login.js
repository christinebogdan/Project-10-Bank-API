import "../styles/login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { username, password, rememberme } from "../store/form/actions";

function Login(props) {
  const login = useSelector((state) => state.form);
  console.log(login);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const handleChange = (e) => {
    if (e.target.id === "username") {
      dispatch(username(e.target.value));
    } else if (e.target.id === "password") {
      dispatch(password(e.target.value));
    } else if (e.target.id === "remember-me") {
      dispatch(rememberme(e.target.checked ? true : false));
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon="user-circle" />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label for="username">Username</label>
            <input type="text" id="username" onChange={handleChange} />
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label>
            <input type="password" id="password" onChange={handleChange} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" onChange={handleChange} />
            <label for="remember-me">Remember me</label>
          </div>
          <input type="submit" value="Sign In" />
          {/* <submit className="sign-in-button">Sign In</submit> */}
          {/* <a href="./user.html" class="sign-in-button">
            Sign In
          </a> */}
        </form>
      </section>
    </main>
  );
}

export default Login;
