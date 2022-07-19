import axios from "axios";

export const singup_data_action_creator = (userInfo) => async (dispatch) => {
  try {
    await axios.post("/signup", userInfo);
  } catch (error) {
    console.log(error.message);
  }
  dispatch({
    type: "ADD_NEW_USER",
    payload: userInfo,
  });
};
