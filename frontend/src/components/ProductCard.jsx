import { FaStar } from 'react-icons/fa'

import '../styles/productcard.css'

import { useContext } from 'react'

import { ProductContext }
from '../context/ProductContext'

import {
  useNavigate,
  Link,
} from 'react-router-dom'

import { AuthContext }
from '../context/AuthContext'

function ProductCard({ product }) {

  const {
    products,
    setProducts,
    setEditProduct,
  } = useContext(ProductContext)

  const { isLoggedIn } =
  useContext(AuthContext)

  const navigate = useNavigate()

  const handleDelete = (id) => {

  if (!isLoggedIn) {

    alert('Please login first')

    navigate('/login')

    return
  }
  }

  const handleEdit = () => {

  if (!isLoggedIn) {

    alert('Please login first')

    navigate('/login')

    return
  }

  setEditProduct(product)

  navigate('/add-product')
}

  return (

    <div className='product-card'>

      <Link
        to={`/product/${product.id}`}
        className='product-link'
      >

        <img
      src={product.imageUrl}
      alt={product.name}
    />

        <div className='product-info'>

          <h3>{product.name}</h3>

          <p className='price'>
            ₹{product.price} / kg
          </p>

        </div>

      </Link>

      <div className='rating-section'>

        <div className='stars'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar className='inactive-star' />
        </div>

        <p className='rating-text'>
          4.0 Rating (120 Reviews)
        </p>

        <button
          type='button'
          className='edit-btn'
          onClick={handleEdit}
        >
          Edit Product
        </button>

        <button
          type='button'
          className='delete-btn'
          onClick={() =>
            handleDelete(product.id)
          }
        >
          Delete Product
        </button>

      </div>

    </div>
  )
}

export default ProductCard