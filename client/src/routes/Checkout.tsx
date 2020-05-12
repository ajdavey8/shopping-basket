import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import { useBasketState } from '../hooks/useBasket';
import { checkout } from '../api/checkout';
import CheckoutList from '../components/CheckoutList';
import { Button } from '../components/styled-components';

const Checkout = () => {
  const { products, total, order } = useBasketState()
  const [hasError, setHasError] = useState<boolean>(false)
  const { setOrderNumber } = useBasketState()
  const history = useHistory();

  const handleConfirm = async () => {
    const res = await checkout(order)

    if (res.ok) {
      setOrderNumber(res.data.orderNumber)
      history.push('/success')
    } else {
      setHasError(true)
    }
  }

  return (
    <div>
      <h2>Checkout</h2>
      <CheckoutList products={products} />
      <p>Total to pay: £{total}</p>
      <Link to='/'>Continue shopping</Link>
      <Button onClick={handleConfirm}>Confirm</Button>
      {hasError && <p>Order Failed please try again</p>}
    </div>
  )
}

export default Checkout;