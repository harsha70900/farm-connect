import {FaBox,FaUsers,FaShoppingCart,FaChartLine,}
 from 'react-icons/fa'
import { useState, useEffect, useContext  } from 'react'
import axios from 'axios'

import Navbar from '../components/Navbar'
import '../styles/dashboard.css'

import { AuthContext,
} from '../context/AuthContext'
import { useNavigate }
from 'react-router-dom'

function Dashboard() {

  const [productCount, setProductCount] =
  useState(0)

  const [products, setProducts] =
  useState([])

  const [totalQuantity, setTotalQuantity] =
  useState(0)



   useEffect(() => {

  fetchProductCount()

  fetchProducts()

  fetchTotalQuantity()

}, [])

const fetchProducts = async () => {

  try {

    const response =
      await axios.get(
        'http://localhost:8080/products'
      )

    setProducts(response.data)

  } catch (error) {

    console.error(error)
  }
}

const fetchProductCount = async () => {

  try {

    const response =
      await axios.get(
        'http://localhost:8080/products/count'
      )

    setProductCount(response.data)

  } catch (error) {

    console.error(error)
  }
}

const fetchTotalQuantity = async () => {

  try {

    const response =
      await axios.get(
        'http://localhost:8080/products/quantity'
      )

    setTotalQuantity(response.data)

  } catch (error) {

    console.error(error)
  }
}

  const { logout } =
    useContext(AuthContext)

  const navigate =
    useNavigate()

  const handleLogout = () => {

    logout()

    navigate('/login')
  }
  return (
    <>
      <Navbar />

      <div className='dashboard-page container'>

        <div className='dashboard-header'>
          <h1>Dashboard Analytics</h1>

          <p>
            Monitor products, buyers, and marketplace insights.
          </p>
          <button
              onClick={handleLogout}
            >
              Logout
            </button>
        </div>

        <div className='dashboard-cards'>

          <div className='dashboard-card'>
            <FaBox className='dashboard-icon' />

            <h2>{productCount}</h2>

            <p>Total Products</p>
          </div>

          <div className='dashboard-card'>
            <FaUsers className='dashboard-icon' />

            <h2>{totalQuantity}</h2>

            <p>Total Inventory</p>
          </div>

          <div className='dashboard-card'>
            <FaShoppingCart className='dashboard-icon' />

            <h2>88</h2>

            <p>Buyers</p>
          </div>

          <div className='dashboard-card'>
            <FaChartLine className='dashboard-icon' />

            <h2>95%</h2>

            <p>Growth Rate</p>
          </div>

        </div>

        <div className='dashboard-table-section'>

          <h2>Recent Products</h2>

          <table className='dashboard-table'>

            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

                {products.map((product) => (

                  <tr key={product.id}>

                    <td>{product.name}</td>

                    <td>{product.category}</td>

                    <td>₹{product.price}</td>

                    <td>
                      {product.quantity > 0
                        ? 'Available'
                        : 'Out of Stock'}
                    </td>

                  </tr>

                ))}

          </tbody>

          </table>

        </div>

      </div>
    </>
  )
}

export default Dashboard