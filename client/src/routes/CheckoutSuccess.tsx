import React from 'react'
import { useHistory } from "react-router-dom";

import { useBasketState, useBasketDispatch } from '../hooks/useBasket';
import { Button } from '../components/styled-components';

const CheckoutSuccess = () => {
  const { orderNumber } = useBasketState();
  const dispatch = useBasketDispatch();
  const history = useHistory();

  const handleClick = () => {
    dispatch({ type: 'RESET' })
    history.push('/')
  }

  return (
    <div>
      <h2>Checkout - Success</h2>
      <p>Order complete! Your order number is {orderNumber}</p>
      <Button onClick={handleClick}>Shop again</Button>
    </div>
  )
}

export default CheckoutSuccess;