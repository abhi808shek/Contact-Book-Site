import axios from "axios";

export const login_action_creator = (userInfo) => async (dispatch) => {
  try {
    const result = await axios.post("http://localhost:8000/login", userInfo);
    console.log("result", result);

    dispatch({
      type: "SET_LOGIN_INFO",
      payload: userInfo,
    });
  } catch (error) {
    console.log(error.message);
  }
};
