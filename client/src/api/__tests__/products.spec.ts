// @ts-ignore
import fetchMock from 'fetch-mock-jest';
import { fetchProducts } from '../products';

afterEach(fetchMock.reset);

test('calls the checkout endpoint and returns an order number', async () => {
  const mockResponseBody = {
    products: [{
      id: "1",
      image: "https://via.placeholder.com/200",
      name: "Teapot",
      description: "Short and stout",
      color: "Green",
      price: 1.99
    },
    {
      id: "2",
      image: "https://via.placeholder.com/200",
      name: "Pillowcase",
      description: "Sweet dreams",
      color: "Yellow",
      price: 4.99
    }]
  }

  fetchMock.get(
    'http://localhost:5000/api/products',
    mockResponseBody
  );
  expect(await fetchProducts()).toEqual({ ok: true, data: mockResponseBody })
})

test('calls the fetchProducts endpoint and returns not ok if no orderNumber', async () => {
  fetchMock.get(
    'http://localhost:5000/api/products',
    { throws: new Error('error') }
  );
  expect(await fetchProducts()).toEqual({ ok: false, data: null, error: 'error' })
})