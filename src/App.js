import {HomePage} from "./pages/HomePage"
import React from "react"
import './App.css'
import { Route } from "react-router-dom"

function App() {
  return (
    <div className="container">
      <Route exact path='/' component={HomePage}/>
    </div>
  );
}

export default App;
