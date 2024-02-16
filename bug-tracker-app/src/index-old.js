import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* 
import * as calc from './calculator'
console.log(calc.add(100,200))
console.log(calc.subtract(100,200)) 
*/

/* 
import * as calc from './calculator'
const { add, subtract} = calc 
*/
/* 
import { add, subtract} from './calculator'
console.log(add(100,200))
console.log(subtract(100,200)) 
*/

// importing the default exported object
/* 
import calc from './calculator'
console.log(calc) 
*/



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
