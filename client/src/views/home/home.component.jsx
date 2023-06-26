import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";
import React from "react";

import NavBar from "../../components/navBar/navBar.component.jsx";
import Card from "../../components/card/card.component.jsx";
import styles from "./home.styles.css";

function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <div className={styles.home}>
      <NavBar className={styles.nav} />
      <h2 className="home-title">Home</h2>
      <div className="countries">
        {allCountries &&
          allCountries.map((country) => (
            <Card
              id={country.id}
              name={country.name}
              flag={country.flag}
              continent={country.continent}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
