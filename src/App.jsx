import AddProduct from './pages/AddProduct'
import ProductDetails from './pages/ProductDetails'

import Home from './pages/Home'
import Products from './pages/Products'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

import { Routes, Route } from 'react-router-dom'

function App() {

  return (

    <Routes>

      <Route path='/' element={<Home />} />

      <Route
        path='/products'
        element={<Products />}
      />

      <Route
        path='/login'
        element={<Login />}
      />

      <Route
        path='/register'
        element={<Register />}
      />

      <Route
        path='/dashboard'
        element={<Dashboard />}
      />

      <Route
        path='/add-product'
        element={<AddProduct />}
      />

      <Route
        path='/product/:id'
        element={<ProductDetails />}
      />

    </Routes>
  )
}

export default App