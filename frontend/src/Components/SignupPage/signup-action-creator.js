import axios from "axios";

export const singup_data_action_creator = (userInfo) => async (dispatch) => {
  try {
   const data = await axios.post("http://localhost:8000/signup", userInfo);
   console.log(data);
  } catch (error) {
    console.log(error.message);
  }
  dispatch({
    type: "ADD_NEW_USER",
    payload: userInfo,
  });
};
