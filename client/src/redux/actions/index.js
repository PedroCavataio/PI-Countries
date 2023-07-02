import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const GET_COUNTRY_BY_ID = "GET_COUNTRY_BY_ID";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const SORT_BY_NAME = "SORT_BY_NAME";
export const SORT_BY_POPULATION = "SORT_BY_POPULATION";
export const SET_CONTINENT_FILTER = "SET_CONTINENT_FILTER";
export const SET_ACTIVITY_FILTER = "SET_ACTIVITY_FILTER";


export function getCountries() {
  return async function (dispatch) {
    const response = await axios("http://localhost:3001/countries");
    return dispatch({
      type: "GET_COUNTRIES",
      payload: response.data,
    });
  };
}

export function getCountryById(id) {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/countries/${id}`);
    return dispatch({
      type: "GET_COUNTRY_BY_ID",
      payload: response.data,
    });
  };
}

export function getCountryByName(name) {
  return async function (dispatch) {
    try {
      const response = await axios(
        `http://localhost:3001/countries/?name=${name}`
      );

      if (response.status === 200) {
        return dispatch({
          type: "GET_COUNTRY_BY_NAME",
          payload: response.data,
        });
      } else {
        throw new Error(
          "Ha ocurrido un error en la consulta. Por favor, intenta nuevamente."
        );
      }
    } catch (error) {
      // Manejo de errores
      console.error(error);
      // Mostrar mensaje de error al usuario
      // Ejemplo:
      alert(
        "Ha ocurrido un error en la consulta. Por favor, intenta nuevamente."
      );
    }
  };
}

export function getActivities() {
  return async function (dispatch) {
    try {
      const response = await axios(`http://localhost:3001/activities`);
      return dispatch({
        type: "GET_ACTIVITIES",
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function createActivity(activity) {
  return async function (dispatch) {
    const response = await axios.post(
      `http://localhost:3001/activity`,
      activity
    );
    return dispatch({
      type: "CREATE_ACTIVITY",
      payload: response.data,
    });
  };
}


export function sortByName() {
  return {
    type: SORT_BY_NAME,
  };
}

export function sortByPopulation() {
  return {
    type: SORT_BY_POPULATION,
  };
}

export function setContinentFilter(continentFilter) {
  return {
    type: SET_CONTINENT_FILTER,
    payload: continentFilter,
  };
}

export function setActivityFilter(activityFilter) {
  return {
    type: SET_ACTIVITY_FILTER,
    payload: activityFilter,
  };
}