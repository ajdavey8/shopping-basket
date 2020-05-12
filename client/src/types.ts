export type Product = {
  id: number
  name: string
  image: string
  price: number
  quantity: number
}

export type AddItem = Omit<Product, 'quantity'>

export type RemoveItem = Omit<Product, 'quantity' | 'name' | 'description' | 'image'>

export type AddItemAction = {
  type: 'ADD_ITEM'
  payload: AddItem
}


export type RemoveItemAction = {
  type: "REMOVE_ITEM"
  payload: RemoveItem
}

export type ResetAction = {
  type: 'RESET'
}

export type Actions = AddItemAction | RemoveItemAction | ResetAction