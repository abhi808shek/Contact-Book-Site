import axios from "axios";

export const singup_data_action_creator = (userInfo) => async (dispatch) => {
  try {
    const result = await axios.post(
      "http://localhost:8000/contactdetails",
      userInfo,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    console.log(result.data);
  } catch (error) {
    console.log(error.message);
  }
  dispatch({
    type: "ADD_NEW_USER_CONTACT",
    payload: userInfo,
  });
};
