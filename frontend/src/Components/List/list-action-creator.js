import axios from "axios";



export const add_user_action_creator = (data)=>async(dispatch)=>{
    const response = await axios.post("https://contact-book-site.herokuapp.com/contactdetails",data)
    console.log("response",response.data);
    dispatch({
        type:"ADD_USER_CONTACT_DETAIL",
        payload:data
    })
}


export const get_all_user_action_creator = ()=>async(dispatch)=>{
    const response = await axios.get("https://contact-book-site.herokuapp.com/contactdetails")
    console.log("response",response.data);
    dispatch({
        type:"GET_ALL_USER_CONTACT_DETAIL",
        payload:response.data.data
    })
}

export const delete_single_user_action_creator = (id)=>async(dispatch)=>{
    const response = await axios.delete(`https://contact-book-site.herokuapp.com/contactdetails/${id}`)
    console.log("response",response);
    dispatch({
        type:"DELETE_SINGLE_USER_CONTACT_DETAIL",
        payload:id
    })
}

export const delete_all_user_action_creator = ()=>async(dispatch)=>{
    const response = await axios.delete("https://contact-book-site.herokuapp.com/contactdetails")
    console.log("response",response);
    dispatch({
        type:"DELETE_ALL_USER_CONTACT_DETAIL",
    })
}