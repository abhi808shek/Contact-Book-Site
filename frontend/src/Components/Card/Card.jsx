import React, { useState, useEffect } from "react";
import "./styles/card.css";
import cardProfile from "./views/cardProfile.png";
import { NavLink } from "react-router-dom";
import { get_single_user_action_creator, } from "../List/list-action-creator";



const Card = ({
  contact,
  dispatch,
  deleteSingleUser,
  allChecked,
  setAllChecked,
}) => {
  const [singleChecked, setSingleChecked] = useState(false);
  useEffect(() => {
    if (allChecked) {
      setSingleChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [allChecked]);

  const onChangeHandler = () => {
    setSingleChecked(!singleChecked);
  };

  return (
    <>
      <div className="card">
        <div className="card-profile">
          <div className="card-profile-icon">
            <img src={cardProfile} alt="" />
          </div>
          <div className="card-username-text">
            <div>
              <label htmlFor="" className="card-text">
                Name
              </label>
              <input
                type="text"
                className="card-input-box"
                placeholder="Ex. Johnny Depp "
                style={{ marginLeft: "45px" }}
                value={contact.name}
                disabled
              />
              <br />
            </div>
            <div>
              <label htmlFor="" className="card-text">
                Phone No.
              </label>
              <input
                type="text"
                className="card-input-box "
                style={{ marginLeft: "15px" }}
                placeholder="+91 xxxxxxxxxx"
                value={contact.phone_no}
                disabled
              />
            </div>
          </div>
        </div>
        <div className="card-email">
          <div>
            <label htmlFor="" className="card-text">
              Email I’D
            </label>
            <input
              type="email"
              className="card-input-box card-input"
              placeholder="Ex. xxx@mail.com "
              value={contact.email}
              disabled
            />
            <br />
          </div>
          <div>
            <label htmlFor="" className="card-text">
              Address
            </label>
            <input
              type="text"
              className="card-input-box card-input"
              placeholder="Flat no., Area, City, State"
              value={contact.address}
              disabled
            />
          </div>
        </div>
        <div className="card-buttons">
          <div>
            <NavLink to={`/updateform/${contact._id}`}>
              <button className="card-btn"
               onClick={() => dispatch(get_single_user_action_creator(contact._id))}>Edit</button>
            </NavLink>
            <button
              className="card-btn"
              onClick={() => dispatch(deleteSingleUser(contact._id))}
            >
              Delete
            </button>
          </div>
          <div>
            <input
              className="card-checkbox"
              type="checkbox"
              name=""
              id=""
              checked={singleChecked}
              onClick={onChangeHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
