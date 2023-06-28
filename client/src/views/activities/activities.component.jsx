import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createActivity } from "../../redux/actions";
import styles from   "./activities.styles.module.css";

const Activities = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [duration, setDuration] = useState("");
  const [season, setSeason] = useState([]);
  const [countries, setCountries] = useState([]);

  const allCountries = useSelector((state) => state.allCountries);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleSeasonChange = (event) => {
    const selectedSeason = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setSeason(selectedSeason);
  };

  const handlePaisChange = (event) => {
    const selectedCountries = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setCountries(selectedCountries);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const activityForm = {
      name: name,
      difficulty: difficulty,
      duration: duration,
      season: season,
      countryIds: countries,
    };
    dispatch(createActivity(activityForm));

    // Reiniciar los campos después de enviar el formulario
    setName("");
    setDifficulty("");
    setDuration("");
    setSeason("");
    setCountries([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Difficulty:
        <input
          type="text"
          value={difficulty}
          onChange={handleDifficultyChange}
        />
      </label>
      <br />
      <label>
        Duration:
        <input type="text" value={duration} onChange={handleDurationChange} />
      </label>
      <br />
      <label>
        Season:
        <select multiple value={season} onChange={handleSeasonChange}>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Fall">Fall</option>
          <option value="Winter">Winter</option>
        </select>
      </label>
      <br />
      <label>
        Countries:
        <select multiple value={countries} onChange={handlePaisChange}>
          {allCountries.map((country) => {
            return <option value={country.id}>{country.name}</option>;
          })}
        </select>
      </label>
      <br />
      <button className={styles["create-activity"]} type="submit">
        Create activity
      </button>
    </form>
  );
};

export default Activities;
