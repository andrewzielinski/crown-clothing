import React, {Component} from 'react';
import FormInput from "./FormInput"
import './SignIn.styles.scss';
import Button from "./Button"
import {auth, signInWithGoogle} from "../firebase/firebase.util"

class SignIn extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }


  handleSubmit = async (e) => {
    e.preventDefault();

    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({
        email: '',
        password: ''
      })

    } catch (error) {
      console.log(error);
    }

  }

  handleChange = (e) => {
    const {value, name} = e.target;

    this.setState({[name]: value})
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>

          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="Password"
            required
          />

          <div className="buttons">
            <Button type="submit"> SIGN IN </Button>
            <Button onClick={signInWithGoogle} isGoogleSign>Sign in with Google</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;