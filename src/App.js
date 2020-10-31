import {HomePage} from "./pages/HomePage"
import React from "react"
import './App.css'
import {Switch, Route} from "react-router-dom"
import ShopPage from "./pages/ShopPage"
import Header from "./components/Header"
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage"
import {auth, createUserProfileDocument} from './firebase/firebase.util'
import { connect} from 'react-redux';
import {setCurrentUser} from "./redux/user/User.actions"

class App extends React.Component {


  constructor(props) {
    super(props);

    this.unsubscribeFromAuth = null
  }


  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })

      }

      setCurrentUser(userAuth)
    })
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
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
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
