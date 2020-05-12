import { renderHook } from '@testing-library/react-hooks';

import { BasketProvider } from '../../contexts/basketContext';
import { useBasketState, useBasketDispatch } from '../useBasket';

describe('useBasket with context', () => {
  it('renders with initial values', () => {
    const { result: { current } } = renderHook(() => useBasketState(), { wrapper: BasketProvider })
    expect(current.products).toEqual([])
    expect(current.total).toEqual(0)
    expect(current.numberOfItems).toEqual(0)
    expect(current.order).toEqual([])
  })

  it('should error for state if used outside of context', () => {
    const { result } = renderHook(() => useBasketState())
    expect(result.error).toBeDefined()
  })

  it('should error for dispatch if used outside of context', () => {
    const { result } = renderHook(() => useBasketDispatch())
    expect(result.error).toBeDefined()
  })
})