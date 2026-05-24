import { FaStar } from 'react-icons/fa'
import '../styles/productcard.css'

import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

import { useNavigate } from 'react-router-dom'

function ProductCard({ product }) {

  const {
    products,
    setProducts,
    editProduct,
    setEditProduct,
  } = useContext(ProductContext)

  const navigate = useNavigate()

  const handleDelete = (id) => {

    const updatedProducts =
      products.filter(
        (product) => product.id !== id
      )

    setProducts(updatedProducts)
  }

  const handleEdit = () => {

    setEditProduct(product)

    navigate('/add-product')
  }

  return (
    <div className='product-card'>

      <img
        src={product.image}
        alt={product.name}
      />

      <div className='product-info'>

        <h3>{product.name}</h3>

        <p className='price'>
          ₹{product.price} / kg
        </p>

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
            onClick={() => handleDelete(product.id)}
          >
            Delete Product
          </button>

        </div>

      </div>

    </div>
  )
}

export default ProductCard