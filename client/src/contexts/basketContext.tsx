import React, { createContext, useState } from 'react';
import basketReducer from '../reducers/basket';
import { Actions, Product } from '../types';

type BasketProviderProps = { children?: React.ReactNode }
type Dispatch = (action: Actions) => void
type State = {
  products: Product[]
  total: number
  numberOfItems: number
  orderNumber: string;
  setOrderNumber: React.Dispatch<React.SetStateAction<string>>;
}

const BasketStateContext = createContext<State | undefined>(undefined)
const BasketDispatchContext = createContext<Dispatch | undefined>(undefined)


function BasketProvider({ children }: BasketProviderProps) {
  const [state, dispatch] = React.useReducer(basketReducer, { products: [], total: 0, numberOfItems: 0 })
  const [orderNumber, setOrderNumber] = useState<string>('')
  return (
    <BasketStateContext.Provider value={{ ...state, orderNumber, setOrderNumber }}>
      <BasketDispatchContext.Provider value={dispatch}>
        {children}
      </BasketDispatchContext.Provider>
    </BasketStateContext.Provider>
  )
}
export { BasketProvider, BasketStateContext, BasketDispatchContext }