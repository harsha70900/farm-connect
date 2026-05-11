import Navbar from '../components/Navbar'
import '../styles/dashboard.css'

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className='container dashboard'>

        <h1>Dashboard</h1>

        <div className='dashboard-cards'>

          <div className='dashboard-card'>
            <h2>Total Products</h2>
            <p>120</p>
          </div>

          <div className='dashboard-card'>
            <h2>Farmers</h2>
            <p>45</p>
          </div>

          <div className='dashboard-card'>
            <h2>Buyers</h2>
            <p>88</p>
          </div>

        </div>

      </div>
    </>
  )
}

export default Dashboard