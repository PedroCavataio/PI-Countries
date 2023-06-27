import { GET_COUNTRIES, GET_COUNTRY_BY_NAME, GET_COUNTRY_BY_ID } from "../actions/index.js";
import actions from "../actions/index.js";

let initialState = { allCountries: [], selectedCountry: {} };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
      };
    case GET_COUNTRY_BY_NAME:
      return {
        ...state,
        allCountries: action.payload,
      };
    case GET_COUNTRY_BY_ID:
      return { ...state, selectedCountry: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
