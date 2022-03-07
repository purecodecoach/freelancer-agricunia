import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/tailwindcss/dist/tailwind.css";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import '../node_modules/react-datepicker/dist/react-datepicker.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
