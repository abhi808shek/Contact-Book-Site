import React from "react";
import "./styles/contactForm.css";
import Profile_Photo from "./views/profile.png";

const ContactForm = () => {
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
                  />
                </div>

                <div className="contact-form-inner-box">
                  <label htmlFor="" className="contact-form-label">
                    Choose Password
                  </label>
                  <input
                    type="password"
                    className="contact-form-input-box"
                    placeholder="Choose a strong password "
                  />
                </div>

                <div className="contact-form-inner-box ">
                  <label htmlFor="" className="contact-form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="contact-form-input-box"
                    placeholder="Choose a strong password "
                  />
                </div>
                <button className="contact-form-submit-btn">Save</button>
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
