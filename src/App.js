import {HomePage} from "./pages/HomePage"
import React from "react"
import './App.css'
import {Switch, Route} from "react-router-dom"
import ShopPage from "./pages/ShopPage"
import Header from "./components/Header"
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage"

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
