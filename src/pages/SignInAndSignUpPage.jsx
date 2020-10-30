import React from 'react';
import './SignInAndSignUpPage.styles.scss';
import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp"


const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up-page">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;

