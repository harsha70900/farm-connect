import Navbar from '../components/Navbar'
import '../styles/auth.css'

function Register() {
  return (
    <>
      <Navbar />

      <div className='auth-page'>

        <div className='auth-container'>

          <div className='auth-left'>
            <h1>Join Farm-Connect</h1>

            <p>
              Create your account and become part of the
              smart agricultural marketplace ecosystem.
            </p>

            <img
              src='https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop'
              alt='farm'
            />
          </div>

          <div className='auth-right'>

            <h2>Create Account</h2>

            <form className='auth-form'>

              <div className='form-group'>
                <label>Full Name</label>

                <input
                  type='text'
                  placeholder='Enter your full name'
                />
              </div>

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
                  placeholder='Create password'
                />
              </div>

              <div className='form-group'>
                <label>Select Role</label>

                <select>
                  <option>Farmer</option>
                  <option>Buyer</option>
                  <option>Admin</option>
                </select>
              </div>

              <button className='auth-btn'>
                Register
              </button>

            </form>

          </div>

        </div>

      </div>
    </>
  )
}

export default Register