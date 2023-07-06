import { combineReducers } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.payload
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - action.payload
      };
    default:
      return state;
  }
};

export default combineReducers({ reducer })