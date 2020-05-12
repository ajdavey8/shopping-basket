
const checkoutUrl = 'http://localhost:5000/api/checkout'

export async function checkout(order: string[]) {
  const body = {
    products: order
  }
  const headers = { 'content-type': 'application/json' }
  try {
    const response = await fetch(checkoutUrl, { body: JSON.stringify(body), headers, method: 'POST' })
    const data = await response.json()

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return {
      ok: true,
      data
    }
  } catch (error) {
    return {
      ok: false,
      data: null,
      error: error.message
    }
  }

}