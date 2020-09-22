import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCH_LOGS,
  CLEAR_SEARCH_LOGS,
} from "./types";

// Get logs from server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("https://team-logger-api.herokuapp.com/api/logs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.token,
      },
    });
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Add new log
export const addLog = (log) => async (dispatch) => {
  try {
    console.log("add logs action");
    setLoading();
    const res = await fetch("https://team-logger-api.herokuapp.com/api/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.token,
      },
    });

    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Delete log from server
export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(
      `https://team-logger-api.herokuapp.com/api/logs/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.token,
        },
      }
    );

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Set current log
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

//Clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// Update log on server
export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(
      `https://team-logger-api.herokuapp.com/api/logs/${log._id}`,
      {
        method: "PUT",
        body: JSON.stringify(log),
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.token,
        },
      }
    );

    const data = await res.json();
    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

//Search logs
export const searchLogs = (text) => (dispatch) => {
  dispatch({ type: SEARCH_LOGS, payload: text });
};

//Clear Search logs
export const clearSearchLogs = () => (dispatch) => {
  dispatch({ type: CLEAR_SEARCH_LOGS });
};

//Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
