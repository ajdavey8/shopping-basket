// @ts-ignore
import fetchMock from 'fetch-mock-jest';
import { checkout } from '../checkout';

afterEach(fetchMock.reset);

test('calls the checkout endpoint and returns an order number', async () => {
  const mockResponseBody = {
    orderNumber: 1
  }

  fetchMock.mock(
    'http://localhost:5000/api/checkout',
    mockResponseBody
  );
  expect(await checkout(['1', '2'])).toEqual({ ok: true, data: mockResponseBody })
})

test('calls the checkout endpoint and returns not ok if no orderNumber', async () => {
  fetchMock.mock(
    'http://localhost:5000/api/checkout',
    { throws: new Error('error') }
  );
  expect(await checkout(['1', '2'])).toEqual({ ok: false, data: null, error: 'error' })
})