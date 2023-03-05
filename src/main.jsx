import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";
//import WelcomeComponent from './welcome/App'; //default
/* import { App } from "./class/week-2/sesion-a/App" */
/* import { App } from "./class/week-2/sesion-b/App" */
/* import  App  from "./class/week-3/sesion-2/App"; */
import  App  from "../src/class/week-3/sesion-1/App";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
