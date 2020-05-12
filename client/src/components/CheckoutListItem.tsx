import React from 'react'
import styled from 'styled-components';

import { ItemContainer } from './styled-components';

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 450px;
    margin: 0 16px;
`


interface CheckoutListItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

const CheckoutListItem = ({ id, name, price, image, quantity }: CheckoutListItem) => (
  <ItemContainer key={id}>
    <img src={image} alt={`${name} image`} />
    <InfoWrapper>
      <h2>{name}</h2>
      <p>£{price}</p>
      <p>{quantity} item{quantity !== 1 && 's'}</p>
      <p>£{price * quantity}</p>
    </InfoWrapper>
  </ItemContainer>
)

export default CheckoutListItem