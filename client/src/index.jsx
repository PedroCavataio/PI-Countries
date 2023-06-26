import React from 'react';
import ReactDOM from 'react-dom/client';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import App from './App.jsx';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>  
       <Provider store={store}>    
          <App />     
       </Provider> 
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

