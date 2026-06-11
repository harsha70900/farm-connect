import Navbar from '../components/Navbar'
import '../styles/addproduct.css'
import { useState } from 'react'
import axios from 'axios'

function AddProduct() {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('Vegetables')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState('')
  const [imageUrl, setImageUrl] = useState('') // Removed the extra "image" state

  const handleAddProduct = async (e) => {
    e.preventDefault()

    // Parse values cleanly to prevent database type mismatch bugs
    const product = {
      name,
      category,
      price: parseFloat(price) || 0.0,
      quantity: parseInt(quantity) || 0,
      imageUrl,
      description
    }

    try {
      const response = await axios.post('http://localhost:8080/products', product)
      console.log(response.data)
      alert('Product Added Successfully')

      // Clear all state variables after a successful database save
      setName('')
      setCategory('Vegetables')
      setPrice('')
      setDescription('')
      setQuantity('')
      setImageUrl('')
    } catch (error) {
      console.error(error)
      alert('Failed to Add Product')
    }
  }

  return (
    <>
      <Navbar />
      <div className='add-product-page'>
        <div className='add-product-container'>
          <h1>Add New Product</h1>
          <p>Upload fresh agricultural products to the marketplace.</p>

          <form className='add-product-form' onSubmit={handleAddProduct}>
            <div className='form-group'>
              <label>Product Name</label>
              <input
                type='text'
                placeholder='Enter product name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className='form-group'>
              <label>Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>Vegetables</option>
                <option>Fruits</option>
                <option>Grains</option>
                <option>Dairy</option>
              </select>
            </div>

            <div className='form-group'>
              <label>Price</label>
              <input
                type='number'
                placeholder='Enter price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className='form-group'>
              <label>Quantity</label>
              <input
                type='number'
                placeholder='Enter quantity'
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)} // Added binding
              />
            </div>

            <div className='form-group'>
              <label>Image URL</label>
              <input
                type='text'
                placeholder='Paste image URL'
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)} // Changed from image to imageUrl
              />
            </div>

            <div className='form-group'>
              <label>Description</label>
              <textarea
                rows='5'
                placeholder='Enter product description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <button className='add-product-btn'>Add Product</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddProduct
