import React from 'react'
import styled from 'styled-components';
import { AddItem, RemoveItem } from '../types';

import { Button, ItemContainer } from './styled-components'

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

interface ProductsListItem {
  id: number
  name: string
  description: string
  price: number
  image: string
  addItem: (item: AddItem) => void
  removeItem: (item: RemoveItem) => void
}

const ProductsListItem = ({ id, name, description, price, image, addItem, removeItem }: ProductsListItem) => {
  const onAddItem = () => {
    const item = {
      id,
      image,
      name,
      price
    }
    addItem(item)
  }

  const onRemoveItem = () => {
    const item = {
      id,
      price
    }
    removeItem(item)
  }

  return (
    <ItemContainer key={id}>
      <img src={image} alt={`${name} image`} />
      <TextWrapper>
        <h2>{name}</h2>
        <p>{description}</p>
      </TextWrapper>
      <ButtonsWrapper>
        <Button onClick={onAddItem}>Add</Button>
        <Button onClick={onRemoveItem}>Remove</Button>
      </ButtonsWrapper>
    </ItemContainer>
  )
}

export default ProductsListItem