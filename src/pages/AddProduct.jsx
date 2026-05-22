import Navbar from '../components/Navbar'
import '../styles/addproduct.css'
import { useState, useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

function AddProduct() {

  const { products, setProducts } =
  useContext(ProductContext)

const [name, setName] = useState('')
const [category, setCategory] = useState('Vegetables')
const [price, setPrice] = useState('')
const [image, setImage] = useState('')

const handleAddProduct = (e) => {
  e.preventDefault()

  const newProduct = {
    id: Date.now(),
    name,
    category,
    price,
    image,
  }

  setProducts([...products, newProduct])

  setName('')
  setPrice('')
  setImage('')
}

  return (
    <>
      <Navbar />

      <div className='add-product-page'>

        <div className='add-product-container'>

          <h1>Add New Product</h1>

          <p>
            Upload fresh agricultural products to the marketplace.
          </p>

          <form
  className='add-product-form'
  onSubmit={handleAddProduct}
>

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

  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
  >
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
              />
            </div>

            <div className='form-group'>
              <label>Image URL</label>

              <input
  type='text'
  placeholder='Paste image URL'
  value={image}
  onChange={(e) => setImage(e.target.value)}
/>
            </div>

            <div className='form-group'>
              <label>Description</label>

              <textarea
                rows='5'
                placeholder='Enter product description'
              ></textarea>
            </div>

            <button className='add-product-btn'>
              Add Product
            </button>

          </form>

        </div>

      </div>
    </>
  )
}

export default AddProduct