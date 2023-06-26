import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";

export function getCountries() {
  return async function (dispatch) {
    const response = await axios("http://localhost:3001/countries");
    return dispatch({
      type: "GET_COUNTRIES",
      payload: response.data,
    });
  };
}

export function getCountryByName(name) {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/countries/?name=${name}`);

    if (response.status !== 404) {
      return dispatch({
        type: "GET_COUNTRY_BY_NAME",
        payload: response.data,
      });
    }
  };
}
