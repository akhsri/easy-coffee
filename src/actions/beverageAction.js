import {
  GET_BEVERAGES,
  SET_LOADING,
  BEVERAGES_ERROR,
  ADD_BEVERAGE,
  DELETE_BEVERAGE,
  UPDATE_BEVERAGE,
  SEARCH_BEVERAGES,
  SET_CURRENT,
  CLEAR_CURRENT
} from "./types";

// Get beverages from server
export const getBeverages = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch("http://localhost:3001/beverages");
    const data = await res.json();

    dispatch({
      type: GET_BEVERAGES,
      payload: data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: BEVERAGES_ERROR,
      payload: err.response.statusText
    });
  }
};

// Add new beverage
export const addBeverage = beverage => async dispatch => {
  try {
    setLoading();

    const res = await fetch("http://localhost:3001/beverages", {
      method: "POST",
      body: JSON.stringify(beverage),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_BEVERAGE,
      payload: data
    });



  } catch (err) {
    console.log(err);
    dispatch({
      type: BEVERAGES_ERROR,
      payload: err.response.statusText
    });
  }
};

// Delete beverage from server
export const deleteBeverage = id => async dispatch => {
  try {
    setLoading();

    await fetch(`http://localhost:3001/beverages/${id}`, {
      method: "Delete"
    });

    dispatch({
      type: DELETE_BEVERAGE,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: BEVERAGES_ERROR,
      payload: err.response.statusText
    });
  }
};

// Update beverage on server
export const updateBeverage = beverage => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`http://localhost:3001/beverages/${beverage.id}`, {
      method: "PUT",
      body: JSON.stringify(beverage),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_BEVERAGE,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: BEVERAGES_ERROR,
      payload: err.response.statusText
    });
  }
};

// Search server bevrages
export const searchBeverages = text => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`http://localhost:3001/beverages?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_BEVERAGES,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: BEVERAGES_ERROR,
      payload: err.response.statusText
    });
  }
};

// Set current bevrage
export const setCurrent = beverage => {
  return {
    type: SET_CURRENT,
    payload: beverage
  };
};

// Clear current beverage
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
