import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import ProductsListItem from '../ProductsListItem';

const addItem = jest.fn()
const removeItem = jest.fn()

const setup = () => {
  const utils = render(
    <ProductsListItem
      name='product'
      description='describe'
      id={1}
      price={2}
      image='imageURL'
      addItem={addItem}
      removeItem={removeItem}
    />
  )

  return {
    ...utils
  }
}

describe('<ProductsListItem>', () => {
  it('renders with the passed props', () => {
    const { asFragment } = setup()
    expect(asFragment).toMatchSnapshot();
  })

  it('calls the onClick function to add item', () => {
    const { getByText } = setup()

    fireEvent.click(getByText('Add'))
    expect(addItem).toHaveBeenCalledWith({ id: 1, price: 2, name: 'product', image: 'imageURL' })
  })

  it('calls the onClick function to remove item', () => {
    const { getByText } = setup()

    fireEvent.click(getByText('Remove'))
    expect(removeItem).toHaveBeenCalledWith({ id: 1, price: 2 })
  })
})