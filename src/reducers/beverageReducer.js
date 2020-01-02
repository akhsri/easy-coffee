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
} from "../actions/types";

const initialState = {
  beverages: null,
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BEVERAGES:
      return {
        ...state,
        beverages: action.payload,
        loading: false
      };
    case ADD_BEVERAGE: {
      return {
        ...state,
        beverages: [...state.beverages, action.payload],
        loading: false
      };
    }
    case DELETE_BEVERAGE: {
      return {
        ...state,
        beverages: state.beverages.filter(
          beverage => beverage.id !== action.payload
        ),
        loading: false
      };
    }
    case UPDATE_BEVERAGE: {
      return {
        ...state,
        beverages: state.beverages.map(beverage =>
          beverage.id === action.payload.id ? action.payload : beverage
        )
      };
    }
    case SEARCH_BEVERAGES: {
      return {
        ...state,
        beverages: action.payload
      };
    }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case BEVERAGES_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
