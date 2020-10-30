import React from 'react';
import './Button.styles.scss'

const Button = ({ children, isGoogleSign, ...otherProps}) => {
  return (
    <button className={`${isGoogleSign ? 'google-sign-in' : ''} button`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;

