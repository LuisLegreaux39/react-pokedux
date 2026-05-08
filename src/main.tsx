import './styles.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./pages/App";
import { MasterState } from "./state";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container!);

root.render(
  <BrowserRouter basename='react-pokedux/'>
    <MasterState>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MasterState>
  </BrowserRouter>
)
