import {
  FaBox,
  FaUsers,
  FaShoppingCart,
  FaChartLine,
} from 'react-icons/fa'

import Navbar from '../components/Navbar'
import '../styles/dashboard.css'

import api from '../api/AxiosConfig'

import { useQuery } from '@tanstack/react-query'

function Dashboard() {

  const {
    data: products = [],
    isLoading
  } = useQuery({

    queryKey: ['products'],

    queryFn: async () => {

      const response =
        await api.get('/products')

      return response.data
    }

  })

  const productCount = products.length

  const totalQuantity =
    products.reduce(
      (sum, product) =>
        sum + product.quantity,
      0
    )

  if (isLoading) {

    return (
      <>
        <Navbar />

        <div
          style={{
            textAlign: "center",
            marginTop: "150px",
            fontSize: "24px",
            fontWeight: "600"
          }}
        >
          Loading Dashboard...
        </div>

      </>
    )
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

                    {
                      product.quantity > 0
                        ? "Available"
                        : "Out of Stock"
                    }

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
