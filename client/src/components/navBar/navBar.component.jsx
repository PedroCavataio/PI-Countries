import styles from './navBar.styles.css';
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
      <div className={styles.searchNavBox}>
        <form>
          <NavLink to="/form">
            <button className={styles.navInfoBoton}>Log out</button>
          </NavLink>

          <NavLink to="/home">
            <button className={styles.navInfoBoton}>Home</button>
          </NavLink>

          <NavLink to="/about">
            <button className={styles.navInfoBoton}>About</button>
          </NavLink>

          <NavLink to="/activities">
            <button className={styles.navInfoBoton}>Activities</button>
          </NavLink>
          
          <input placeholder="Search" value={searchText} onChange={handleInputChange}/>
        </form>
      </div>
    </div>
  );
}

export default NavBar;
