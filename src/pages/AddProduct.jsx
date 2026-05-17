import Navbar from '../components/Navbar'
import '../styles/addproduct.css'

function AddProduct() {
  return (
    <>
      <Navbar />

      <div className='add-product-page'>

        <div className='add-product-container'>

          <h1>Add New Product</h1>

          <p>
            Upload fresh agricultural products to the marketplace.
          </p>

          <form className='add-product-form'>

            <div className='form-group'>
              <label>Product Name</label>

              <input
                type='text'
                placeholder='Enter product name'
              />
            </div>

            <div className='form-group'>
              <label>Category</label>

              <select>
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