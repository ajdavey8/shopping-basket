import basket from '../basket'
import { AddItemAction, ResetAction, RemoveItemAction } from '../../types'



describe('basket reducer', () => {
  it('should ADD a new product', () => {
    const initialState = {
      products: [],
      total: 0,
      numberOfItems: 0
    }

    const action: AddItemAction = {
      type: 'ADD_ITEM',
      payload: {
        id: 1,
        name: 'soap',
        price: 2,
        image: 'pictureOfSoap'
      }
    }
    const newState = basket(initialState, action)
    expect(newState).toEqual({
      numberOfItems: 1,
      total: 2,
      products: [{
        id: 1,
        name: 'soap',
        price: 2,
        image: 'pictureOfSoap',
        quantity: 1
      }
      ]
    })
  })

  it('should ADD an item by increasing the quantity', () => {
    const initialState = {
      numberOfItems: 1,
      total: 2,
      products: [{
        id: 1,
        name: 'soap',
        price: 2,
        image: 'pictureOfSoap',
        quantity: 1
      }
      ]
    }

    const action: AddItemAction = {
      type: 'ADD_ITEM',
      payload: {
        id: 1,
        name: 'soap',
        price: 2,
        image: 'pictureOfSoap'
      }
    }
    const newState = basket(initialState, action)
    expect(newState).toEqual({
      numberOfItems: 2,
      total: 4,
      products: [{
        id: 1,
        name: 'soap',
        price: 2,
        image: 'pictureOfSoap',
        quantity: 2
      }
      ]
    })
  })

  it('should REMOVE a product with a quantity of 1', () => {
    const initialState = {
      numberOfItems: 1,
      total: 2,
      products: [{
        id: 1,
        name: 'soap',
        price: 2,
        image: 'pictureOfSoap',
        quantity: 1
      }
      ]
    }

    const action: RemoveItemAction = {
      type: 'REMOVE_ITEM',
      payload: {
        id: 1,
        price: 2,
      }
    }
    const newState = basket(initialState, action)
    expect(newState).toEqual({
      products: [],
      total: 0,
      numberOfItems: 0
    })
  })

  it('should REMOVE an item by decreasing the quantity', () => {
    const initialState = {
      numberOfItems: 2,
      total: 4,
      products: [{
        id: 1,
        name: 'soap',
        price: 2,
        image: 'pictureOfSoap',
        quantity: 2
      }
      ]
    }

    const action: RemoveItemAction = {
      type: 'REMOVE_ITEM',
      payload: {
        id: 1,
        price: 2,
      }
    }
    const newState = basket(initialState, action)
    expect(newState).toEqual({
      numberOfItems: 1,
      total: 2,
      products: [{
        id: 1,
        name: 'soap',
        price: 2,
        image: 'pictureOfSoap',
        quantity: 1
      }
      ]
    })
  })


  it('should RESET the basket', () => {
    const initialState = {
      numberOfItems: 1,
      total: 2,
      products: [{
        id: 1,
        name: 'soap',
        price: 2,
        image: 'pictureOfSoap',
        quantity: 1
      }
      ]
    }
    const action: ResetAction = { type: 'RESET' }

    const newState = basket(initialState, action)
    expect(newState).toEqual({
      products: [],
      total: 0,
      numberOfItems: 0
    })
  })
})