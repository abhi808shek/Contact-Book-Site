import React, { useEffect, useState } from "react";
import "./styles/updateform.css";
import { useDispatch, useSelector } from "react-redux";
import Profile_Photo from "./views/profile.png";

const UpdateForm = () => {
  const { allContacts,updateContacts } = useSelector((state) => state.all_contacts_reducer);
  const [name, setName] = useState("");
  const [phone_no, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  console.log("update",updateContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    setName(updateContacts.name);
    // setPhoneNo(updateContacts.phone_no);
    // setEmail(updateContacts.email);
    // setAddress(updateContacts.address);
  }, [updateContacts]);
  return (
    <div>
      <div className="update-form-background-img">
        <div className="update-form-container">
          <div className="update-form-content-box">
            <h1 className="update-form-title">Update the Contact Details</h1>
            <div className="update-container">
              <div className="update-form">
                <div className="update-form-inner-box">
                  <label htmlFor="" className="update-form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="update-form-input-box"
                    placeholder="Ex. Johnny Depp "
                    value={name}
                  />
                </div>

                <div className="update-form-inner-box">
                  <label htmlFor="" className="update-form-label">
                    Phone No
                  </label>
                  <input
                    type="text"
                    className="update-form-input-box"
                    placeholder="Phone Number"
                    value={phone_no}
                  />
                </div>

                <div className="update-form-inner-box">
                  <label htmlFor="" className="update-form-label">
                    Email I’D
                  </label>
                  <input
                    type="email"
                    className="update-form-input-box"
                    placeholder="Ex. xxx@mail.com "
                    value={email}
                  />
                </div>

                <div className="update-form-inner-box ">
                  <label htmlFor="" className="update-form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="update-form-input-box"
                    placeholder="Enter Address"
                    value={address}
                  />
                </div>
                <button className="update-form-submit-btn">Update</button>
              </div>
              <div className="update-form-image-box">
                <h1 className="update-form-profile-text">Profile Photo</h1>
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

export default UpdateForm;
