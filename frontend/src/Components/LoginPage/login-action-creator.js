import axios from "axios";

export const login_action_creator = (userInfo) => async (dispatch) => {
  try {
    const result = await axios.post("https://contact-book-site.herokuapp.com/login", userInfo);
    console.log("result", result.data);

    dispatch({
      type: "SET_LOGIN_INFO",
      payload: userInfo,
    });
  } catch (error) {
    console.log(error.message);
  }
}

