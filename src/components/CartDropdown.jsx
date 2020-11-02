import React from 'react';
import './CartDropdown.styles.scss'
import Button from "./Button"
import {connect} from "react-redux"
import CartItem from "./CartItem"
import {selectCartItems} from "../redux/cart/cart.selectors"
import {createStructuredSelector} from "reselect"

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        }
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};


const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);

