import React,{useEffect} from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import LoginPage from "./Components/LoginPage/LoginPage";
import SignupPage from "./Components/SignupPage/SignupPage";
import { Routes, Route } from "react-router-dom";
import ContactForm from "./Components/ContactForm/ContactForm";
import UpdateForm from "./Components/UpdateForm/UpdateForm";
import List from "./Components/List/List";
import PrivateRoutes from "./Components/Private/PrivateRoutes";
import { useDispatch, useSelector } from "react-redux";
import {setUserId_action_creator} from "./Components/LoginPage/login-action-creator"


const App = () => {
  const accessTokenObj = localStorage.getItem("accessToken");
  const userName = localStorage.getItem("name");
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserId_action_creator(localStorage.getItem("userId")))
  }, [])
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/login"
          element={<LoginPage isAuthenticated={accessTokenObj} />}
        />
        <Route
          exact
          path="/signup"
          element={<SignupPage isAuthenticated={accessTokenObj} />}
        />

        <Route
          exact
          path="/contactform"
          element={
            <PrivateRoutes isAuthenticated={accessTokenObj}>
              <ContactForm />
            </PrivateRoutes>
          }
        />
        <Route
          exact
          path="/updateform/:id"
          element={
            <PrivateRoutes isAuthenticated={accessTokenObj}>
              <UpdateForm />
            </PrivateRoutes>
          }
        />
        <Route
          exact
          path="/list"
          element={
            <PrivateRoutes isAuthenticated={accessTokenObj}>
              <List name={userName} />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
};
export default App;
