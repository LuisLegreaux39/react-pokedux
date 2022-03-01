import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from "./containers/App";
import { MasterState } from "./state"

ReactDOM.render(
  <MasterState>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MasterState>,
  document.getElementById('root')
)
