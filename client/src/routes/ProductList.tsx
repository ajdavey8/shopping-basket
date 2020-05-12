import React, { useEffect, useState } from 'react'

import { useBasketDispatch, useBasketState } from '../hooks/useBasket';
import { AddItem, RemoveItem, Product } from '../types';
import { fetchProducts } from '../api/products';
import Header from '../components/Header'
import ProductsList from '../components/ProductsList'
import Basket from '../components/Basket';


const ProductList = () => {
  const { total, numberOfItems } = useBasketState()
  const dispatch = useBasketDispatch()
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetchProducts()

      if (response.ok) {
        setProducts(response.data.products)
        setIsLoading(false)
      } else {
        setIsError(true)
      }
    }
    getProducts()
  }, [])

  const handleAddItem = (item: AddItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item })
  }

  const handleRemoveItem = (item: RemoveItem) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item })
  }
  return (
    <>
      <Header heading='Product List' />
      {isError && <div>Unable to fetch products</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
          <ProductsList
            products={products}
            handleAddItem={handleAddItem}
            handleRemoveItem={handleRemoveItem}
          />
        )}
      <Basket total={total} numberOfItems={numberOfItems} />
    </>
  )
}

export default ProductList;