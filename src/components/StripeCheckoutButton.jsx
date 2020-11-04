import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const cents = price * 100;
  const publishableKey = "pk_test_51HjhKlEDbm7Qy7KEQNRdjxZnmXSVDjgvlyTOeZGMak3R0b9Ljtqal013e5lBsTQ6lvjYNrHdmEhC5A9MSZHdwqI900CV2zOU89"

  const onToken = token => {
    console.log(token)
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={cents}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;

