import {HomePage} from "./pages/HomePage"
import React from "react"
import './App.css'
import {Switch, Route} from "react-router-dom"
import ShopPage from "./pages/ShopPage"

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
