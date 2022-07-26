import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import "./styles/list.css";
import {get_single_user_action_creator,
  get_all_user_action_creator,
  delete_single_user_action_creator,
  delete_all_user_action_creator,
} from "./list-action-creator";
import { NavLink } from "react-router-dom";
import nodata from "./views/nodata.png";
import { useNavigate } from "react-router-dom";
import {logout_action_creator} from "../LoginPage/login-action-creator"


const List = ({ name }) => {
  const dispatch = useDispatch();
const navigate = useNavigate();
  const deleteLocalStorage = () =>{
    localStorage.removeItem("name")
    localStorage.removeItem("accessToken")
    dispatch(logout_action_creator())
    console.log("logged out");
    navigate("/login")
  }
  const { allContacts } = useSelector((state) => state.all_contacts_reducer);
  const [selectAllBtn, setSelectAllBtn] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [searchBox, setSearchBox] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    dispatch(get_all_user_action_creator());
  }, [filteredData]);
  const filteringData = (event) => {
    setSearchBox(event.target.value);
    const resultedContact = allContacts.filter((contact) => {
      return (
        contact.name.includes(event.target.value) ||
        contact.email.includes(event.target.value) ||
        contact.phone_no.toString().includes(event.target.value) ||
        contact.address.includes(event.target.value)
      );
    });
    setFilteredData(resultedContact);
  };

  const onDeletingAllContacts = () => {
    dispatch(delete_all_user_action_creator());
    setSelectAllBtn(false);
  };
  return (
    <div className="list-background-img">
      <div className="list-container">
        <div className="list-content-box">
          <h1 className="list-title">Contacts List</h1>
          <div className="list-head-box">
            {selectAllBtn ? (
              <button
                className="list-select-all-btn list-btn-username"
                onClick={onDeletingAllContacts}
              >
                Delete All
              </button>
            ) : (
              <button
                className="list-select-all-btn list-btn-username"
                onClick={() => {
                  setSelectAllBtn(true);
                  setAllChecked(!allChecked);
                }}
              >
                Select All
              </button>
            )}
            <input
              className="list-search"
              type="text"
              value={searchBox}
              placeholder="Search Contacts"
              onChange={filteringData}
            />
            <button className="list-select-all-btn list-btn-username">
              <NavLink
                to="/contactform"
                style={{ textDecoration: "none", color: "#757171" }}
              >
                Add Contact
              </NavLink>
            </button>
            <button className="list-select-all-btn list-btn-username"
            onClick={
              deleteLocalStorage
            }>Logout</button>
            <span className="list-username list-btn-username">{name}</span>
          </div>
          <div className="list-card">
            {searchBox === "" ? allContacts.map((contact)=>(
              <Card
              key={contact._id}
              contact={contact}
              dispatch={dispatch}
              deleteSingleUser={delete_single_user_action_creator}
              allChecked={allChecked}
              setAllChecked={setAllChecked}
              getSingleUser={get_all_user_action_creator}
            />))
            :
            filteredData.length === 0 ? (
              <div className="no-data-found">
                <img src={nodata} alt="" />
                <h4 className="no-data-list">No Data Found</h4>
              </div>
            ) : (
              filteredData.map((contact) => (
                <Card
                  key={contact._id}
                  contact={contact}
                  dispatch={dispatch}
                  deleteSingleUser={delete_single_user_action_creator}
                  allChecked={allChecked}
                  setAllChecked={setAllChecked}
                  getSingleUser={get_all_user_action_creator}
                />
              ))
            )}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
