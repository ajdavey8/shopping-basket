import { useContext } from 'react'
import { BasketStateContext, BasketDispatchContext } from '../contexts/basketContext';

export function useBasketState() {
  const context = useContext(BasketStateContext)
  if (context === undefined) {
    throw new Error('useBasketState must be used within a BasketProvider')
  }

  const getOrder = () => {
    let order: any = []
    context?.products?.map((product) => {
      for (let i = 0; i < product.quantity; i++) {
        order.push(product.id)
      }
    })
    return order
  }

  return {
    total: context.total,
    numberOfItems: context.numberOfItems,
    products: context.products,
    orderNumber: context.orderNumber,
    setOrderNumber: context.setOrderNumber,
    order: getOrder()
  }
}

export function useBasketDispatch() {
  const context = useContext(BasketDispatchContext)
  if (context === undefined) {
    throw new Error('useBasketDispatch must be used within a BasketProvider')
  }
  return context
}