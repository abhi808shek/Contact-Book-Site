import axios from "axios";

export const login_action_creator = (userInfo) => async (dispatch) => {
  try {
    console.log("action",userInfo);
    const result = await axios.post("http://localhost:8000/login", userInfo);
    console.log("result",result);
    const {accessToken,name,userId} = result.data.obj
    localStorage.setItem('name', name);
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('userId', userId);

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

export const setUserId_action_creator = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "SET_USER_ID",
      payload:id
    });
  } catch (error) {
    console.log(error.message);
  }
}