import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createActivity } from "../../redux/actions";
import styles from "./activities.styles.module.css";
import { useNavigate } from "react-router-dom";
import FotoActivities from "../../assets/activitiesFondoDelfi.jpg";
import { getCountries } from "../../redux/actions";

const Activities = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [duration, setDuration] = useState("");
  const [season, setSeason] = useState("");
  const [countries, setCountries] = useState([]);

  const allCountries = useSelector((state) => state.allCountries);
  const [continents, setContinents] = useState([]);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const handleNameChange = (event) => {
    const selectedname = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setName(selectedname);
  };

  const handleDifficultyChange = (event) => {
    const selectedDifficuly = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setDifficulty(selectedDifficuly);
  };

  const handleDurationChange = (event) => {
    const selectedDuration = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setDuration(selectedDuration);
  };

  const handleSeasonChange = (event) => {
    const selectedSeason = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setSeason(selectedSeason);
  };

  const handleCountriesChange = (event) => {
    const selectedCountries = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setCountries(selectedCountries);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar que se haya seleccionado al menos una opción en cada campo obligatorio
    if (
      name === "" ||
      difficulty === "" ||
      duration === "" ||
      countries.length === 0
    ) {
      alert("Por favor, rellene todos los campos obligatorios");
      return;
    }

    const activityForm = {
      name: name[0],
      difficulty: Number(difficulty),
      duration: Number(duration),
      season: season,
      countryIds: countries,
    };
    dispatch(createActivity(activityForm));

    // Reiniciar los campos después de enviar el formulario
    setName("");
    setSeason("");
    setDuration("");
    setDifficulty("");
    setCountries([]);

    navigate("/home");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.containerformActividades}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="Name">Name:</label>
          <select id="Name" value={name} onChange={handleNameChange}>
            <option value="">select option</option>
            <option value="Museo">Museo</option>
            <option value="Theater">Theater</option>
            <option value="Bike Ride">Bike Ride</option>
            <option value="City Tour">City Tour</option>
            <option value="Box">Box</option>
            <option value="Skydiving">Skydiving</option>
            <option value="Trekking">Trekking</option>
            <option value="Mountaineering">Mountaineering</option>
            <option value="Business tourism">Business tourism</option>
            <option value="Wine Tourism">Wine Tourism</option>
            <option value="Rural Tourism">Rural Tourism/</option>
            <option value="Craft Fair">Craft Fair</option>
            <option value="Pools">Pools</option>
            <option value="Sustainable Tourism">Sustainable Tourism</option>
            <option value="Sun and beach">Sun and beach</option>
            <option value="Health Tourism">Health Tourism</option>
            <option value="Cruise">Cruise</option>
            <option value="Solidarity Tourism">Solidarity Tourism</option>
            <option value="Accessible Tourism">Accessible Tourism</option>
            <option value="Religious Tourism">Religious Tourism</option>
            <option value="Shopping Tourism">Shopping Tourism</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="difficulty">Difficulty:</label>
          <select
            id="difficulty"
            value={difficulty}
            onChange={handleDifficultyChange}
          >
            <option value="">select option</option>
            <option value="1">1 - Very Easy</option>
            <option value="2">2 - Easy</option>
            <option value="3">3 - Normal</option>
            <option value="4">4 - Difficult</option>
            <option value="5">5 - Very Difficult</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="duration">Duration:</label>
          <select
            id="duration"
            value={duration}
            onChange={handleDurationChange}
          >
            <option value="">select option</option>
            <option value="1"> 1 hs - Very Short</option>
            <option value="2">2 hs - Short</option>
            <option value="4">4 hs - Normal</option>
            <option value="6">6 hs - Long</option>
            <option value="8">8 hs - Very Long</option>
            <option value="12">12 hs - Full Time</option>
            <option value="24">24 hs - Complete Day</option>
            <option value="48">48 hs - 2 Days</option>
            <option value="72">72 hs - 3 Days</option>
            <option value="168">168 hs - 1 Week</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="season">Season:</label>
          <select id="season" value={season} onChange={handleSeasonChange}>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Fall">Fall</option>
            <option value="Winter">Winter</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="countries">Countries:</label>
          <select
            multiple
            id="countries"
            value={countries}
            onChange={handleCountriesChange}
          >
            {/* <option value="">select options</option> */}
            {allCountries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formActions}>
          <button className={styles.createActivityBtn} type="submit">
            Create Activity
          </button>
          <button
            className={styles["closeButton-Activities"]}
            onClick={handleGoBack}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default Activities;
