import { useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";

function Login() {
  let authentication = useSelector((state) => state.auth);
  function loginUpdate() {
    if (authentication === true) {
      authentication = false;
    } else {
      authentication = true;
    }
    console.log(authentication);
  }

  return authentication ? (
    <Switch>
      <Redirect to="/" />
    </Switch>
  ) : (
    <div
      style={{
        width: "300px",
        padding: "1rem",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }}
    >
      <input placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button onClick={loginUpdate}>Click to Login</button>
    </div>
  );
}
export default Login;
