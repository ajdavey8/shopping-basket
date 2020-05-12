import React from 'react';
import { Link } from 'react-router-dom';

interface Basket {
  total: number
  numberOfItems: number
}

const Basket = ({ total, numberOfItems }: Basket) => (
  <section>
    <h4>Your Basket</h4>
    <h2>£{total}</h2>
    <p>{numberOfItems} item{numberOfItems !== 1 && 's'}</p>
    <Link to='/checkout'>Checkout </Link>
  </section>
)

export default Basket