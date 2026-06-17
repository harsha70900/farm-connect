import { Link } from 'react-router-dom'
import { FaLeaf } from 'react-icons/fa'
import '../styles/navbar.css'

import { useContext } from 'react'

import {
  AuthContext,
} from '../context/AuthContext'

import { useNavigate }
from 'react-router-dom'

function Navbar() {
const {
  isLoggedIn,
  logout,
} = useContext(AuthContext)

const navigate = useNavigate()

const handleLogout = () => {

  localStorage.removeItem('role')

  logout()

  navigate('/login')
}

const role=localStorage.getItem('role')

  return (
    <nav className='navbar'>

      <div className='container navbar-container'>

        <div className='logo'>
          <FaLeaf className='logo-icon' />
          <h1>Farm-Connect</h1>
        </div>

        <div className='nav-links'>

  <Link to='/'>Home</Link>

  <Link to='/products'>
    Products
  </Link>

  <Link to='/dashboard'>
    Dashboard
  </Link>

  {

    isLoggedIn ? (

      <button
        className='logout-btn'
        onClick={handleLogout}
      >
        Logout
      </button>

    ) : (

      <Link to='/login'>
        Login
      </Link>

    )

  }

</div>

 {isLoggedIn && role === 'Farmer' && (
  <button
    className='floating-add-btn'
    onClick={() => navigate('/add-product')}
  >
    +
  </button>
)}

      </div>

    </nav>

    

    
  )
}

export default Navbar