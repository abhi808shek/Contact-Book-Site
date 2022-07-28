// import { set } from "mongoose";
import React, { useState } from "react";
import "./styles/contactForm.css";
import Profile_Photo from "./views/profile.png";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { singup_data_action_creator } from "./contactForm-action-creator";


const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone_no, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useSelector((state) => state.login_reducer);

  const onSubmitData = () => {

    const userInfo = {
      userId,
      name,
      phone_no,
      email,
      address,
    };
    dispatch(singup_data_action_creator(userInfo));
    navigate("/list");
  };
  return (
    <div>
      <div className="contact-form-background-img">
        <div className="contact-form-container">
          <div className="contact-form-content-box">
            <h1 className="contact-form-title">Fill the Contact Details</h1>
            <div className="contact-container">
              <div className="contact-form">
                <div className="contact-form-inner-box">
                  <label htmlFor="" className="contact-form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="contact-form-input-box"
                    placeholder="Ex. Johnny Depp "
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>

                <div className="contact-form-inner-box">
                  <label htmlFor="" className="contact-form-label">
                    PhoneNo
                  </label>
                  <input
                    type="text"
                    className="contact-form-input-box"
                    placeholder="Phone Number"
                    value={phone_no}
                    onChange={(event) => setPhoneNo(event.target.value)}
                  />
                </div>
                <div className="contact-form-inner-box">
                  <label htmlFor="" className="contact-form-label">
                    Email I’D
                  </label>
                  <input
                    type="email"
                    className="contact-form-input-box"
                    placeholder="Ex. xxx@mail.com "
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="contact-form-inner-box ">
                  <label htmlFor="" className="contact-form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="contact-form-input-box"
                    placeholder="Enter Address"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                  />
                </div>
                <button
                  className="contact-form-submit-btn"
                  onClick={onSubmitData}
                >
                  Save
                </button>
              </div>
              <div className="contact-form-image-box">
                <h1 className="contact-form-profile-text">Profile Photo</h1>
                <div>
                  <img src={Profile_Photo} alt="" className="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
