import React from 'react';
import './Button.styles.scss'

const Button = ({ children, isGoogleSign, inverted, ...otherProps}) => {
  return (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSign ? 'google-sign-in' : ''} button`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;

