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
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });

    // GET User data
    if (data.token) {
      try {
        const res = await fetch(
          "https://team-logger-api.herokuapp.com/api/auth",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": localStorage.token,
            },
          }
        );
        const data = await res.json();
        dispatch({ type: USER_LOADED, payload: data });
      } catch (error) {
        dispatch({ type: AUTH_ERROR });
      }
    }
  } catch (err) {
    console.log("loginerror");
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.msg,
    });
  }
};

//Logout
export const logout = () => (dispatch) => dispatch({ type: LOGOUT });

//Clear Errors
export const clearErrors = () => (dispatch) =>
  dispatch({
    type: CLEAR_ERRORS,
  });
