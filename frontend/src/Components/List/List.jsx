import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import "./styles/list.css";
import {get_all_user_action_creator,delete_single_user_action_creator} from "./list-action-creator"


const List = () => {
  const dispatch = useDispatch()
  const items = [1,2,3,4,5,6,7,8,9,10,11,12]
  const {allContacts} = useSelector((state)=>state.all_contacts_reducer)

  useEffect(() => {
    dispatch(get_all_user_action_creator())
  }, [allContacts])
  

  return (
    <div className="list-background-img">
      <div className="list-container">
        <div className="list-content-box">
          <h1 className="list-title">Contacts List</h1>
          <div className="list-head-box">
            <button className="list-select-all-btn list-btn-username">Select All</button>
            <span className="list-username list-btn-username">User Name</span>
          </div>
          <div className="list-card">
           {allContacts.map((contact)=><Card key={contact._id} contact={contact} dispatch={dispatch} deleteSingleUser={delete_single_user_action_creator}/>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
