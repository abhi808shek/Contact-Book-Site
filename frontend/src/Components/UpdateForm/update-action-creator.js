import axios from "axios";

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
