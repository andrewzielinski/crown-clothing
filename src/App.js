import {HomePage} from "./pages/HomePage"
import React from "react"
import './App.css'
import {Switch, Route} from "react-router-dom"
import ShopPage from "./pages/ShopPage"
import Header from "./components/Header"
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage"
import {auth, createUserProfileDocument} from './firebase/firebase.util'


class App extends React.Component {


  constructor(props) {
    super(props);

    this.unsubscribeFromAuth = null
    this.state = {
      currentUser: null
    }
  }


  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })

      }

      this.setState({currentUser: userAuth})
    })
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="container">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
