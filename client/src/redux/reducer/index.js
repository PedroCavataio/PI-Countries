import {
  GET_COUNTRIES,
  GET_COUNTRY_BY_NAME,
  GET_COUNTRY_BY_ID,
  GET_ACTIVITIES,
  SORT_BY_NAME,
  SORT_BY_POPULATION,
  SET_CONTINENT_FILTER,
  SET_ACTIVITY_FILTER,
} from "../actions/index.js";

let initialState = { 
  allCountries: [], 
  selectedCountry: {}, 
  activities: [], 
  sortByNameOrder: false, 
  sortByPopulationOrder: false,
  continentFilter: [],
  activityFilter: [],
};

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

    case GET_ACTIVITIES:
      return { ...state, activities: action.payload };

    case SORT_BY_NAME:
      const countriesByName = [...state.allCountries];

      countriesByName.sort(function (a, b) {
        if (state.sortByNameOrder) {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });

      return {
        ...state,
        allCountries: countriesByName,
        sortByNameOrder: !state.sortByNameOrder
      };

    case SORT_BY_POPULATION:
      const countriesByPopulation = [...state.allCountries];

      countriesByPopulation.sort(function (a, b) {
        const poblacionA = a.population
          ? parseFloat(a.population.replace(/\./g, ""))
          : (a.population = 0);
        const poblacionB = b.population
          ? parseFloat(b.population.replace(/\./g, ""))
          : (b.population = 0);
        if (state.sortByPopulationOrder) {
          return poblacionA - poblacionB;
        } else {
          return poblacionB - poblacionA;
        }
      });

      return {
        ...state,
        allCountries: countriesByPopulation,
        sortByPopulationOrder: !state.sortByPopulationOrder
      };

    case SET_CONTINENT_FILTER:
      return {
        ...state,
        allCountries: state.allCountries.filter(country =>
          action.payload.includes(country.continent)
        ),
        continentFilter: action.payload
      };
      
    case SET_ACTIVITY_FILTER:
      let filter = [] 
      let response = [] 
      for (const country of action.payload) {
          filter = state.allCountries.filter(element => element.id === country)
          if (filter.length > 0) response.push(filter[0])
        }
        console.log(response)

      return {
        ...state,
        allCountries: response, 
          
         // allCountries: state.allCountries.filter(country =>
          //country.activities.map(activity => action.payload.includes(activity.id))
       
        activityFilter: action.payload
      };

    default:
      return state;
  }
}

export default rootReducer;


