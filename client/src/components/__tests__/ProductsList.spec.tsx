import React from 'react';
import { render } from '@testing-library/react'
import ProductsList from '../ProductsList'

const addItem = jest.fn()
const removeItem = jest.fn()

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
    <ProductsList
      products={products}
      handleAddItem={addItem}
      handleRemoveItem={removeItem}
    />
  )

  return {
    ...utils
  }
}

describe('<ProductsList>', () => {
  it('should return product', () => {
    const { asFragment } = setup()
    expect(asFragment).toMatchSnapshot();
  })
})