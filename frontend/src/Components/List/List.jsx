import React,{useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import "./styles/list.css";
import {get_all_user_action_creator,
  delete_single_user_action_creator,
  delete_all_user_action_creator} from "./list-action-creator"


const List = () => {
  const dispatch = useDispatch()
  const {allContacts} = useSelector((state)=>state.all_contacts_reducer)
  const [selectAllBtn, setSelectAllBtn] = useState(false)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    dispatch(get_all_user_action_creator())
  }, [])
  
const onDeletingAllContacts = () => {
  dispatch(delete_all_user_action_creator())
  setSelectAllBtn(false)
}
  return (
    <div className="list-background-img">
      <div className="list-container">
        <div className="list-content-box">
          <h1 className="list-title">Contacts List</h1>
          <div className="list-head-box">
            {selectAllBtn ?
             <button className="list-select-all-btn list-btn-username" onClick={onDeletingAllContacts}>Delete All</button>
              :
               <button className="list-select-all-btn list-btn-username" onClick={()=>{setSelectAllBtn(true)
                setChecked(true)
               }}>Select All</button>}
           
            <span className="list-username list-btn-username">User Name</span>
          </div>
          <div className="list-card">
           {allContacts == 0 ? (<h4 style={{ position: "absolute", left: "40%" }}>No Data Found</h4>) :
           allContacts.map((contact)=>
           <Card 
           key={contact._id} 
           contact={contact}
          dispatch={dispatch} 
          deleteSingleUser={delete_single_user_action_creator}
          checked={checked}
          setChecked={setChecked}
          />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
