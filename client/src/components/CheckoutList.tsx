import React from 'react'

import CheckoutListItem from './CheckoutListItem';
import { List } from './styled-components'
import { Product } from '../types';


interface CheckoutList {
  products: Product[]
}

const CheckoutList = ({ products }: CheckoutList) => (
  <List>
    {products.map((product: Product) => (
      <CheckoutListItem
        key={product.id}
        {...product}
      />
    ))}
  </List>
)

export default CheckoutList