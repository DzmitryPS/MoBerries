import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {MyContextProvider} from '../src/components/MyContext';

ReactDOM.render(
  <React.StrictMode>
     <MyContextProvider>
    <App />
    </MyContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
