import AddProduct from './pages/AddProduct'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'

import Home from './pages/Home'
import Products from './pages/Products'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/product-details'element={<ProductDetails />}
/>
      </Routes>
    </BrowserRouter>
  )
}

export default App