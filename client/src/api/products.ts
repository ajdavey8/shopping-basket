
const productsUrl = 'http://localhost:5000/api/products'

export async function fetchProducts() {
  try {
    const response = await fetch(productsUrl)
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