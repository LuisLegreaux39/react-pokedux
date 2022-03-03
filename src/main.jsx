import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from "./containers/App";
import { MasterState } from "./state";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter basename='react-pokedux/'>
    <MasterState>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MasterState>
  </BrowserRouter>,
  document.getElementById('root')
)
