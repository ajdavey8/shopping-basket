import React from 'react';
import { render } from '@testing-library/react'
import CheckoutList from '../CheckoutList'

const products = [
  {
    id: 1,
    name: 'soap',
    price: 2,
    image: 'pictureOfSoap',
    quantity: 1
  }
]

const setup = () => {
  const utils = render(
    <CheckoutList
      products={products}
    />
  )

  return {
    ...utils
  }
}

describe('<CheckoutList>', () => {
  it('should return product', () => {
    const { asFragment } = setup()
    expect(asFragment).toMatchSnapshot();
  })
})