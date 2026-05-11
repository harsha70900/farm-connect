import Navbar from '../components/Navbar'
import '../styles/login.css'

function Login() {
  return (
    <>
      <Navbar />

      <div className='login-page'>

        <div className='login-box'>

          <h1>Login</h1>

          <form>

            <input
              type='email'
              placeholder='Enter Email'
            />

            <input
              type='password'
              placeholder='Enter Password'
            />

            <button>
              Login
            </button>

          </form>

        </div>

      </div>
    </>
  )
}

export default Login