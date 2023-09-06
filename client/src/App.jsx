import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import CountryDetails from "./views/detail/countryDetails.component.jsx";
import Home from "./views/home/home.jsx";
import Nav from "./views/navResponsive/nav.jsx";
import Login from "./views/login/login.jsx";
import About from "./views/about/about.jsx";
import Landing from "./views/landingPage/landingPage";
import axios from "axios";
import NavBar from "./components/navBar/navBar.component.jsx";
import Activities from "./views/activities/activities.component.jsx";

function App() {
  const [access, setAccess] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  async function login(userData) {
    const { nombre, estacion } = userData;
    const URL = "http://localhost:3001/login/";
    try {
      const { data } = await axios.get(
        URL + `?nombre=${nombre}&estacion=${estacion}`
      );
      const { access } = data;
      setAccess(access);
      setUserName(nombre);
      
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      {window.location.pathname == "/landing" && <NavBar className="styles-nav" />}
     
      <Routes>
        <Route path="/" element={<Login onLogin={login} access={access} />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/landing/:estacion" element={<Landing userName={userName} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<CountryDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </div>
  );
}

export default App;



