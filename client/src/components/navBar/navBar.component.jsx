import styles from './navBar.styles.module.css';
import { NavLink } from "react-router-dom";
import React, { useState }  from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryByName, getCountries } from '../../redux/actions';

function NavBar() {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if(searchText.length > 0) {
      dispatch(getCountryByName(searchText));
    } else {
      dispatch(getCountries())
    }
  }, [searchText])


  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  }

  return (
    <div className={styles.navBarContainer}>
      <div className={styles.navBar}>
        
        <NavLink to="/" className={styles.navLink}>
          Log out
        </NavLink>

        <NavLink to="/home" className={styles.navLink}>
          Home
        </NavLink>   

        <NavLink to="/activities" className={styles.navLink}>
          Activities
        </NavLink>

        <NavLink to="/about" className={styles.navLink}>
          About
        </NavLink>

        <input
          placeholder="Search"
          value={searchText}
          onChange={handleInputChange}
          className={styles.searchInput}
        />
      </div>
    </div>
  );
}

export default NavBar; 


