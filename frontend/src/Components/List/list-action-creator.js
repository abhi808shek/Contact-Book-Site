import axios from "axios";



export const add_user_action_creator = (data)=>async(dispatch)=>{
    const response = await axios.post("https://contact-book-site.herokuapp.com/contactdetails",data,{
        headers: {
            authorization:`Bearer ${localStorage.getItem("accessToken")}`
        }
    })
    console.log("response",response.data);
    dispatch({
        type:"ADD_USER_CONTACT_DETAIL",
        payload:data
    })
}


export const get_all_user_action_creator = (userId)=>async(dispatch)=>{
    console.log(userId);
    const response = await axios.get(`http://localhost:8000/contactdetails/${userId}`
    ,{
        headers: {
            authorization:`Bearer ${localStorage.getItem("accessToken")}`
        }
    })
    dispatch({
        type:"GET_ALL_USER_CONTACT_DETAIL",
        payload:response.data.data
    })
}

export const get_single_user_action_creator = (id)=>async(dispatch)=>{
    const response = await axios.get(`http://localhost:8000/contactdetails/${id}`
    ,{
        headers: {
            authorization:`Bearer ${localStorage.getItem("accessToken")}`
        }
    })
    console.log("response",response.data.data[0]);
    dispatch({
        type:"GET_SINGLE_USER_CONTACT_DETAIL",
        payload:response.data.data[0]
    })
}

export const delete_single_user_action_creator = (id)=>async(dispatch)=>{
    const response = await axios.delete(`http://localhost:8000/contactdetails/${id}`,{
        headers: {
            authorization:`Bearer ${localStorage.getItem("accessToken")}`
        }
    })
    console.log("response",response);
    dispatch({
        type:"DELETE_SINGLE_USER_CONTACT_DETAIL",
        payload:id
    })
}

export const delete_all_user_action_creator = ()=>async(dispatch)=>{
    const response = await axios.delete("http://localhost:8000/contactdetails",{
        headers: {
            authorization:`Bearer ${localStorage.getItem("accessToken")}`
        }
    })
    console.log("response",response);
    dispatch({
        type:"DELETE_ALL_USER_CONTACT_DETAIL",
    })
}


export const update_data_action_creator = (userInfo,id) => async (dispatch) => {
    try {
     const data = await axios.put(`http://localhost:8000/contactdetails/${id}`, userInfo,{
      headers: {
          authorization:`Bearer ${localStorage.getItem("accessToken")}`
      }
     });
     console.log(data);
    } catch (error) {
      console.log(error.message);
    }
    dispatch({
      type: "UPDATE_USER",
      payload: userInfo,
    });
  };