import '../styles/products.css'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import { useState, useEffect } from 'react'
import api from '../api/AxiosConfig'

function Products() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {

  try {

    console.log("Base URL:", api.defaults.baseURL);

    const response = await api.get("/products");

    console.log("Response:", response);

    console.log("Products:", response.data);

    setProducts(response.data);

  } catch (error) {

    console.log("ERROR:", error);

    console.log("STATUS:", error.response?.status);

    console.log("DATA:", error.response?.data);

  } finally {

    setLoading(false);

  }
}

  const handleDeleteProduct = async (id) => {

    try {

      await api.delete(`/products/${id}`)

      setProducts(
        products.filter(
          (product) => product.id !== id
        )
      )

      alert('Product Deleted Successfully')

    } catch (error) {

      console.error(error)

      alert('Failed to Delete Product')
    }
  }

  const filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())

    const matchesCategory =
      category === 'All' ||
      product.category === category

    return matchesSearch && matchesCategory

  })

  if (loading) {

    return (
      <>
        <Navbar />

        <div className="products-page container">

          <h2
            style={{
              textAlign: "center",
              marginTop: "120px"
            }}
          >
            Loading products...
          </h2>

        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />

      <div className='products-page container'>

        <h1 className='products-title'>
          Explore Fresh Products
        </h1>

        <div className='products-controls'>

          <input
            type='text'
            placeholder='Search products...'
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <div className='filter-buttons'>

            <button onClick={() => setCategory('All')}>
              All
            </button>

            <button onClick={() => setCategory('Vegetables')}>
              Vegetables
            </button>

            <button onClick={() => setCategory('Fruits')}>
              Fruits
            </button>

            <button onClick={() => setCategory('Grains')}>
              Grains
            </button>

          </div>

        </div>

        <div className='products-grid'>

          {
            filteredProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
                onDelete={handleDeleteProduct}
              />

            ))
          }

        </div>

      </div>

    </>
  )
}

export default Products