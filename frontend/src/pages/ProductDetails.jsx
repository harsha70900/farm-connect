import Navbar from '../components/Navbar'

import { useEffect, useState } from 'react'
import api from '../api/AxiosConfig'

import '../styles/productdetails.css'

import { useParams } from 'react-router-dom'

function ProductDetails() {

  const { id } = useParams()

  const [product, setProduct] = useState(null)

useEffect(() => {
  fetchProduct()
}, [])

const fetchProduct = async () => {
  try {

    const response =
      await api.get('/products')

    const foundProduct =
      response.data.find(
        p => p.id === Number(id)
      )

    setProduct(foundProduct)

  } catch (error) {

    console.error(error)
  }
}

if (!product) {
  return (
    <>
      <Navbar />
      <h1>Product Not Found</h1>
    </>
  )
}

  return (
    <>
      <Navbar />

      <div className='product-details-page'>

        <div className='product-details-container container'>

          <div className='product-image-section'>

            <img
              src={product.imageUrl}
              alt={product.name}
            />

          </div>

          <div className='product-info-section'>

            <span className='details-category'>
              {product.category}
            </span>

            <h1>{product.name}</h1>

            <p className='details-price'>
              ₹{product.price} / kg
            </p>

            <p className='details-description'>
              Fresh agricultural product directly sourced from farmers.
            </p>

            <div className='details-extra'>

              <p>
                <strong>Seller:</strong> Farm-Connect
              </p>

              <p>
                <strong>Location:</strong> Bangalore
              </p>

            </div>

            <button className='buy-btn'>
              Contact Seller
            </button>

          </div>

        </div>

      </div>
    </>
  )
}

export default ProductDetails