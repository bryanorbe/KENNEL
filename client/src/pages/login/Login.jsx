import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import logo from "../../assets/LogoDogo.png";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">


            <div className="col-md-3 col-sm-12 d-flex align-items-center justify-content-center">
              <div>
                <img src={logo} className="d-flex profile-img" alt=" LogoDogo " />
              </div>
            </div>


            <h3 className="loginLogo">KENNEL</h3>
            <span className="loginDesc">
              Find your pack with the premier canine social media!
            </span>
          </div>
          <div className="loginRight">
            <form className="loginBox" onSubmit={handleClick}>
              <input
                placeholder="Email"
                type="email"
                required
                className="loginInput"
                ref={email}
              />
              <input
                placeholder="Password"
                type="password"
                required
                minLength="5"
                className="loginInput"
                ref={password}
              />
              <button className="loginButton" type="submit" disabled={isFetching}>
                {isFetching ? (
                  <CircularProgress color="white" size="20px" />
                ) : (
                  "Log In"
                )}
              </button>
              <span className="loginForgot">Forgot Password?</span>
              <button className="loginRegisterButton">
                {isFetching ? (
                  <CircularProgress color="white" size="20px" />
                ) : (
                  "Create a New Account"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      );
}
