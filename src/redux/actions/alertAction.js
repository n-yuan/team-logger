import uuid from "react-uuid";
import { SET_ALERT, REMOVE_ALERT } from "../types";

//Set Alert
export const setAlert = (msg, type, timeout = 5000) => async (dispatch) => {
  const id = uuid();
  dispatch({
    type: SET_ALERT,
    payload: { msg, type, id },
  });
  //Remove Alert
  setTimeout(
    () =>
      dispatch({
        type: REMOVE_ALERT,
        payload: id,
      }),
    timeout
  );
};

export default AlertState;
