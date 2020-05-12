import React from 'react';
import { render } from '@testing-library/react'
import CheckoutListItem from '../CheckoutListItem';

const setup = () => {
  const utils = render(
    <CheckoutListItem
      name='product'
      id={1}
      quantity={1}
      price={2}
      image='imageURL'
    />
  )

  return {
    ...utils
  }
}

describe('<CheckoutListItem>', () => {
  it('renders with the passed props', () => {
    const { asFragment } = setup()
    expect(asFragment).toMatchSnapshot();
  })
})