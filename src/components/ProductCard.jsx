import '../styles/productcard.css'

function ProductCard({ product }) {
  return (
    <div className='product-card'>

      <img src={product.image} alt={product.name} />

      <div className='product-info'>
        <h2>{product.name}</h2>

        <p>{product.description}</p>

        <div className='product-bottom'>
          <span>₹{product.price}</span>

          <button>View</button>
        </div>
      </div>

    </div>
  )
}

export default ProductCard