import styles from "./navBar.styles.module.css";
import { NavLink } from "react-router-dom";  
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryByName, getCountries } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

import {
  sortByName,
  sortByPopulation,
  setContinentFilter,
  setActivityFilter,
  getActivities,
} from "../../redux/actions";
  
function NavBar() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const [continents, setContinents] = useState([]);
  const [activitiesSelected, setActivitiesSelected] = useState([]);

  const navigate = useNavigate();

  const activities = useSelector((state) => state.activities);  

  useEffect(() => {
    if (searchText.length > 0) {
      dispatch(getCountryByName(searchText));
    } else {
      dispatch(getCountries());
    }
  }, [searchText]);

  useEffect(() => {
    dispatch(getActivities());
  }, []);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleContinentFilter = async (event) => {
    const selectedContinents = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);
      
    await dispatch(getCountries());

    setContinents(selectedContinents);
    dispatch(setContinentFilter(selectedContinents));
  };


 const handleActivityFilter = async (event) => {
    const selectedActivities = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);

      console.log(selectedActivities)
    await dispatch(getCountries());

    setActivitiesSelected(expandArray(selectedActivities));
    dispatch(setActivityFilter(expandArray(selectedActivities)));
    };

  function expandArray(array) {
    const expandedArray = [];

    array.forEach((item) => {
      if (item.includes(",")) {
        const subItems = item.split(",");
        expandedArray.push(...subItems);
      } else {
        expandedArray.push(item);
      }
    });

    return expandedArray;
  }

  const handleGoBack = () => {
    navigate(0); 
  }; 

  return (
    <div className={styles.navBarContainer}>

     <div className={styles.navBar}>

        <NavLink
          to="/home"
          className={styles.navLink}
          onClick={handleGoBack}
        >
          HOME
        </NavLink>

         <input
          placeholder="Search"
          value={searchText}
          onChange={handleInputChange}
          className={styles.searchInput}
        />

        <NavLink
          to="/home"
          className={styles.navLink}
          onClick={() => dispatch(sortByName())}
        >
          SORT BY NAME
        </NavLink>

        <NavLink
          to="/home"
          className={styles.navLink}
          onClick={() => dispatch(sortByPopulation())}
        >
          SORT BY POPULATION
        </NavLink>

        <NavLink to="/activities" className={styles.navLink}>
          CREATE AN ACTIVITY
        </NavLink>

<div className={styles.filterSelectors}>
        <label htmlFor="continents" className={styles.labelClass}>
          <div className={styles.label}>FILTER BY CONTINENTS:</div>
          <select
            multiple
            id="continents"
            value={continents}
            onChange={handleContinentFilter}
            className={styles.selectClass}
          >
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctica">Antarctica</option>
          </select>
        </label>
        {activities.length > 0 && (
          <label htmlFor="activities" className={styles.labelClass}>
            <div className={styles.label}>FILTER BY ACTIVITIES:</div>
            <select
              multiple
              id="activities"
              value={activitiesSelected}
              onChange={handleActivityFilter}
              className={styles.selectClass}
            >
              {activities.map((activity) => {
                return (
                  <option key={activity.id} value={activity.countryIds}>
                    {activity.name}
                  </option>
                );
              })}
            </select>
          </label>
        )}
</div>

        <div className={styles.logAbout}>

        <NavLink to="/" className={styles.navLinkLog}>
            LOG OUT
        </NavLink>

        <NavLink to="/about" className={styles.navLinkAbout}>
            ABOUT
        </NavLink>

          
        </div>
      </div>
    </div>
  );
}

export default NavBar;
