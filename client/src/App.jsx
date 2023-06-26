import React, { useState } from 'react';
import { Route,Routes,useNavigate } from "react-router-dom";
import Create from './views/create/create.component';
import CountryDetails from './views/detail/countryDetails.component.jsx';
import Home from './views/home/home.component';
import Form from './views/form/form';
import Landing from './views/landingPage/landingPage';
import axios from 'axios';

function App() {
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();



 
  async function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3000/login/';
    try {
      const { data } = await axios.get(URL + `?email=${email}&password=${password}`);
      const { access } = data;
      setAccess(access);
      if (access) {
        navigate('/home');
  } 
    }catch (error) {
    console.error(error);
  }
}

  return (       
      <div className='App'>
        
          <Routes>
            <Route path="/" element={<Landing/>}/> 
            <Route path="/form" element={<Form onLogin={login} access={access} />} /> 
            <Route path="/home" element={<Home/>}/>
            <Route path="/home/:id" element={<CountryDetails/>}/>
          </Routes> 
        
      </div>  
     
  )
}

export default App;
