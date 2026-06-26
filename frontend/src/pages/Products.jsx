import '../styles/products.css'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import { useState } from 'react'
import api from '../api/AxiosConfig'

import {
  useQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query'

function Products() {

  const queryClient = useQueryClient()

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const {
    data: products = [],
    isLoading
  } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await api.get('/products')
      return response.data
    }
  })

  const deleteMutation = useMutation({
    mutationFn: (id) => api.delete(`/products/${id}`),

    onSuccess: () => {

      queryClient.invalidateQueries({
        queryKey: ['products']
      })

      alert('Product Deleted Successfully')
    },

    onError: () => {

      alert('Failed to Delete Product')
    }
  })

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

  if (isLoading) {

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

          {filteredProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
              onDelete={() => deleteMutation.mutate(product.id)}
            />

          ))}

        </div>

      </div>

    </>
  )
}

export default Products