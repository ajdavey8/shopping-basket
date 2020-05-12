import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react'
import Basket from '../Basket';

const setup = () => {
  const utils = render(
    <Router>
      <Basket
        total={3}
        numberOfItems={2}
      />
    </Router>
  )

  return {
    ...utils
  }
}

describe('<Basket>', () => {
  it('renders with the correct props', () => {
    const { asFragment } = setup()
    expect(asFragment).toMatchSnapshot();
  })
})