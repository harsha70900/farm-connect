import '../styles/products.css'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Products() {
 const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  useEffect(() => {

  fetchProducts()

}, [])

const fetchProducts = async () => {

  try {

    const response =
      await axios.get(
        'http://localhost:8080/products'
      )

    console.log(response.data)

    setProducts(response.data)

  } catch (error) {

    console.error(error)
  }
}

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      category === 'All' || product.category === category

    return matchesSearch && matchesCategory
  })

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
            onChange={(e) => setSearch(e.target.value)}
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
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </>
  )
}

export default Products