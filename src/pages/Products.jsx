import '../styles/products.css'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'


function Products() {
  const { products } = useContext(ProductContext)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

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