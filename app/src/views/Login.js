import "../styles/login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login(props) {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon="user-circle" />
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <submit className="sign-in-button">Sign In</submit>
          {/* <a href="./user.html" class="sign-in-button">
            Sign In
          </a> */}
        </form>
      </section>
    </main>
  );
}

export default Login;
