import React, {Component} from 'react';
import FormInput from "./FormInput"
import './SignIn.styles.scss';
import Button from "./Button"

class SignIn extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }


  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      email: '',
      password: ''
    })
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

          <Button type="submit" >
            SIGN IN
          </Button>
        </form>
      </div>
    );
  }
}

export default SignIn;