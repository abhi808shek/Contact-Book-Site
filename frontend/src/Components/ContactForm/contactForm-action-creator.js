import axios from "axios";

export const singup_data_action_creator = (userInfo) => async (dispatch) => {
  try {
   const result = await axios.post("/contactdetails", userInfo);
   console.log(result.data);
  } catch (error) {
    console.log(error.message);
  }
  dispatch({
    type: "ADD_NEW_USER_CONTACT",
    payload: userInfo,
  });
};
