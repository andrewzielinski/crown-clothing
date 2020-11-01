import React from 'react';
import './CartDropdown.styles.scss'
import Button from "./Button"

const CartDropdown = () => {
  return (
    <div className="card-dropdown">
      <div className="cart-items">
        <Button>GO TO CHECKOUT</Button>
      </div>
    </div>
  );
};

export default CartDropdown;

