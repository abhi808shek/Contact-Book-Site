import axios from "axios";

export const login_action_creator = (userInfo) => async (dispatch) => {
  try {
    const result = await axios.post("https://contact-book-site.herokuapp.com/login", userInfo);
    const {accessToken,name,userId} = result.data.obj
    localStorage.setItem('name', name);
    localStorage.setItem('accessToken', accessToken);
    dispatch({
      type: "SET_LOGIN_INFO",
      payload: userInfo,
      userId:userId
    });
  } catch (error) {
    console.log(error.message);
  }
}

export const logout_action_creator = (userInfo) => async (dispatch) => {
  try {
    dispatch({
      type: "REMOVE_LOGOUT_INFO",
    });
  } catch (error) {
    console.log(error.message);
  }
}
