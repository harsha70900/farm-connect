import Navbar from '../components/Navbar'
import '../styles/auth.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
      <Navbar />

      <div className='auth-page'>

        <div className='auth-container'>

          <div className='auth-left'>
            <h1>Welcome Back</h1>

            <p>
              Login to access your Farm-Connect dashboard
              and manage your agricultural marketplace activities.
            </p>

            <img
              src='https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop'
              alt='farm'
            />
          </div>

          <div className='auth-right'>

            <h2>Login</h2>

            <form className='auth-form'>

              <div className='form-group'>
                <label>Email</label>

                <input
                  type='email'
                  placeholder='Enter your email'
                />
              </div>

              <div className='form-group'>
                <label>Password</label>

                <input
                  type='password'
                  placeholder='Enter your password'
                />
              </div>

              <button className='auth-btn'>
                Login
              </button>

             <p className='auth-bottom-text'>
  Don’t have an account?
  <Link to='/register' className='auth-link'>
    Register
  </Link>
</p>

            </form>

          </div>

        </div>

      </div>
    </>
  )
}

export default Login