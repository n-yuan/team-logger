import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  CONTACT_ERROR,
} from "./types";

//Load User

//Register User

//Login User
export const login = (formData) => async (dispatch) => {
  try {
    const res = await fetch("https://team-logger-api.herokuapp.com/api/auth", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
    // loadUser();
  } catch (err) {
    console.log("loginerror");
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.msg,
    });
  }
};
//Logout

//Clear Errors
