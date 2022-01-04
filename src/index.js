import React from 'react';
import ReactDOM from 'react-dom';
import App from './config/routes/App';
import reportWebVitals from './reportWebVitals';
// import './assets/styles/tailwind.css';
import './assets/styles/output.css';

import 'index.css';
import 'assets/Fonts/Mulish/Mulish UI.ttf';
import 'assets/Fonts/Mulish/Mulish UI Bold.ttf';
import 'assets/Fonts/Mulish/Mulish UI ExtraLight.ttf';
import 'assets/Fonts/Mulish/Mulish UI SemiBold.ttf';
import { BrowserRouter } from 'react-router-dom';

// import "./assets/styles/output.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
