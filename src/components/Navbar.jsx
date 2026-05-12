import { Link } from 'react-router-dom'
import { FaLeaf } from 'react-icons/fa'
import '../styles/navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>

      <div className='container navbar-container'>

        <div className='logo'>
          <FaLeaf className='logo-icon' />
          <h1>Farm-Connect</h1>
        </div>

        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/products'>Products</Link>
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/login'>Login</Link>
        </div>

      </div>

    </nav>
  )
}

export default Navbar