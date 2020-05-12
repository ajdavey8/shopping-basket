import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Header from '../Header';

const setup = () => {
  const utils = render(
    <Header
      heading='New Title'
    />
  )

  return {
    ...utils
  }
}

describe('<Header>', () => {
  it('renders with the correct header', () => {
    const { asFragment } = setup()
    expect(asFragment).toMatchSnapshot();
  })
})