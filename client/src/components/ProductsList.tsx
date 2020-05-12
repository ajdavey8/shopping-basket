import React from 'react'

import { AddItem, RemoveItem, Product } from '../types';
import { List } from './styled-components'
import ProductsListItem from './ProductsListItem';

interface ProductsList {
  products: Product[]
  handleAddItem: (item: AddItem) => void
  handleRemoveItem: (item: RemoveItem) => void
}

const ProductsList = ({ products, handleAddItem, handleRemoveItem }: ProductsList) => (
  <List>
    {products.map((product: any) => (
      <ProductsListItem
        key={product.id}
        addItem={handleAddItem}
        removeItem={handleRemoveItem}
        {...product}
      />
    ))}
  </List>
)

export default ProductsList

