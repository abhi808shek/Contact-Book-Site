import React, { useState,useEffect} from "react";
import "./styles/signup.css";
import { useDispatch } from "react-redux";
import { singup_data_action_creator } from "./signup-action-creator";
import {useNavigate} from "react-router-dom"

const SignupPage = ({isAuthenticated}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("");
  const navigate = useNavigate()
  const userInfo = { name, email, password, Cpassword };

  useEffect(() => {
    isAuthenticated && navigate("/list")
  }, [])

  return (
    <div className="signup-background-img">
      <div className="signup-container">
        <div className="signup-content-box">
          <h1 className="signup-title">Sign-up</h1>
          <div className="signup-form">
            <div className="signup-form-inner-box">
              <label htmlFor="" className="signup-label">
                Name
              </label>
              <input
                type="text"
                className="signup-input-box"
                placeholder="Ex. Johnny Depp "
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>

            <div className="signup-form-inner-box">
              <label htmlFor="" className="signup-label">
                Email I’D
              </label>
              <input
                type="email"
                className="signup-input-box"
                placeholder="Ex. xxx@mail.com "
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>

            <div className="signup-form-inner-box">
              <label htmlFor="" className="signup-label">
                Choose Password
              </label>
              <input
                type="password"
                className="signup-input-box"
                placeholder="Choose a strong password "
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>

            <div className="signup-form-inner-box ">
              <label htmlFor="" className="signup-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="signup-input-box"
                placeholder="Choose a strong password "
                value={Cpassword}
                onChange={(event) => {
                  setCPassword(event.target.value);
                }}
              />
            </div>
          </div>
          <button
            className="signup-submit-btn"
            onClick={() => {
              dispatch(singup_data_action_creator(userInfo));
              setName("");
              setEmail("");
              setPassword("");
              setCPassword("");
              navigate("/list")
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
