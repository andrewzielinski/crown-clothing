import React from 'react';
import './CartDropdown.styles.scss'
import Button from "./Button"
import {connect} from "react-redux"
import CartItem from "./CartItem"
import {selectCartItems} from "../redux/cart/cart.selectors"
import {createStructuredSelector} from "reselect"
import { withRouter } from "react-router-dom";
import {toggleCartHidden} from "../redux/cart/Cart.actions"

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length ? (
            cartItems.map(item => <CartItem key={item.id} item={item} />)
          ) : (
            <span className="empty-message">Your cart is empty</span>
          )
        }
      </div>
      <Button onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden())
      }}>GO TO CHECKOUT</Button>
    </div>
  );
};


const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})


export default withRouter(connect(mapStateToProps)(CartDropdown));

