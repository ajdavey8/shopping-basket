import { Actions, Product, AddItem } from "../types";

function increaseQuantity(products: Product[], id: number) {
  return {
    products: products.map(
      (product: Product) => product.id === id ?
        { ...product, quantity: product.quantity + 1 }
        : product),
  }
}

function decreaseQuantity(products: Product[], id: number) {
  return {
    products: products.map(
      (product: Product) => product.id === id ?
        { ...product, quantity: product.quantity - 1 }
        : product),
  }
}

function addNewProduct(products: Product[], newProduct: AddItem) {
  return {
    products: [
      ...products,
      {
        id: newProduct.id,
        image: newProduct.image,
        name: newProduct.name,
        price: newProduct.price,
        quantity: 1
      }
    ],
  }
}

function removeProduct(products: Product[], id: number) {
  return {
    products: products.filter((product: Product) => product.id !== id)
  }
}

type State = {
  products: Product[]
  total: number
  numberOfItems: number
}

const intialState: State = {
  products: [],
  total: 0,
  numberOfItems: 0
}

function basketReducer(state = intialState, action: Actions) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const itemAlreadyAdded = state.products.find(product => product.id === action.payload.id)
      const updatedProducts = itemAlreadyAdded ?
        increaseQuantity(state.products, action.payload.id)
        :
        addNewProduct(state.products, action.payload)

      return {
        ...state,
        ...updatedProducts,
        total: Math.round((state.total + action.payload.price) * 100) / 100,
        numberOfItems: state.numberOfItems + 1
      }
    }

    case 'REMOVE_ITEM': {
      const quantityOfItem = state.products.find(product => product.id === action.payload.id)?.quantity
      const updatedProducts = quantityOfItem && quantityOfItem > 1 ?
        decreaseQuantity(state.products, action.payload.id)
        :
        removeProduct(state.products, action.payload.id)
      return {
        ...state,
        ...updatedProducts,
        total: Math.round((state.total - action.payload.price) * 100) / 100,
        numberOfItems: state.numberOfItems - 1
      }
    }
    case 'RESET': {
      return {
        products: [],
        total: 0,
        numberOfItems: 0
      }
    }

    default:
      return state;
  }
}

export default basketReducer;