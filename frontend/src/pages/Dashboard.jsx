import {
  FaBox,
  FaUsers,
  FaShoppingCart,
  FaChartLine,
} from 'react-icons/fa'

import Navbar from '../components/Navbar'
import '../styles/dashboard.css'

function Dashboard() {
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

            <h2>120</h2>

            <p>Total Products</p>
          </div>

          <div className='dashboard-card'>
            <FaUsers className='dashboard-icon' />

            <h2>45</h2>

            <p>Farmers</p>
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

              <tr>
                <td>Tomatoes</td>
                <td>Vegetables</td>
                <td>₹40</td>
                <td>Available</td>
              </tr>

              <tr>
                <td>Rice</td>
                <td>Grains</td>
                <td>₹70</td>
                <td>Available</td>
              </tr>

              <tr>
                <td>Apples</td>
                <td>Fruits</td>
                <td>₹120</td>
                <td>Out of Stock</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </>
  )
}

export default Dashboard