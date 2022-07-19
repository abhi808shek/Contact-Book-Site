import React, { useState,useEffect } from "react";
import "./styles/loginPage.css";
import whatsappIcon from "./views/whatsappIcon.png";
import mailIcon from "./views/mailIcon.png";
import locationIcon from "./views/locationIcon.png";
import { NavLink,useNavigate } from "react-router-dom";
import { login_action_creator } from "./login-action-creator";
import { useDispatch } from "react-redux";


const LoginPage = ({isAuthenticated}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userInfo = { email, password };
  const navigate = useNavigate()

  useEffect(() => {
    isAuthenticated && navigate("/list")
    console.log(isAuthenticated);
  }, [isAuthenticated])
  
  return (
    <div className="background-img">
      <div className="login-container">
        <div className="login-icon-box">
          <div>
            <img src={whatsappIcon} alt="" />
          </div>
          <div>
            <img src={mailIcon} alt="" />
          </div>
          <div>
            <img src={locationIcon} alt="" />
          </div>
        </div>
        <div className="login-content-box">
          <div className="login-form">
            <h1 className="login-text">Login</h1>
            <input
              className="login-input-box"
              type="text"
              placeholder="Enter E-mail I'D"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <input
              className="login-input-box"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <button
              className="button-style"
              onClick={() => {
                dispatch(login_action_creator(userInfo));
                // setEmail("");
                // setPassword("");
                navigate("/list")
              }}
            >
              Login
            </button>
            <p className="create-an-account-text">Create an Account</p>
            <NavLink to="/signup">
              <button className="button-style">Signup</button>
            </NavLink>
          </div>
        </div>

        <div className="login-icon-box" style={{ alignItems: "flex-start" }}>
          <div>
            <img src={whatsappIcon} alt="" />
          </div>
          <div>
            <img src={mailIcon} alt="" />
          </div>
          <div>
            <img src={locationIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
