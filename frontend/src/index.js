import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Home.css'
import './styles/About.css'
import './styles/Buttons.css'
import './styles/Charts.css'
import './styles/Old.css'
import './styles/Proposals.css'
import App from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
