import axios from "axios";

export const login_action_creator = (userInfo) => async (dispatch) => {
  try {
    const result = await axios.post("http://localhost:8000/login", userInfo);
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

export const setUserId_action_creator = () => async (dispatch) => {
  try {
    dispatch({
      type: "SET_USER_ID",
    });
  } catch (error) {
    console.log(error.message);
  }
}