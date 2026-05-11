import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'

const products = [
  {
    id: 1,
    name: 'Fresh Tomatoes',
    description: 'Organic tomatoes directly from local farmers.',
    price: 40,
    image:
      'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?q=80&w=1200&auto=format&fit=crop',
  },

  {
    id: 2,
    name: 'Rice',
    description: 'Premium quality Karnataka rice.',
    price: 70,
    image:
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1200&auto=format&fit=crop',
  },

  {
    id: 3,
    name: 'Fresh Carrots',
    description: 'Healthy naturally grown carrots.',
    price: 50,
    image:
      'https://images.unsplash.com/photo-1447175008436-054170c2e979?q=80&w=1200&auto=format&fit=crop',
  },
]

function Products() {
  return (
    <div>
      <Navbar />

      <div className='container' style={{ padding: '80px 0' }}>

        <h1 style={{
          fontSize: '48px',
          marginBottom: '50px'
        }}>
          Available Products
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
          gap: '35px'
        }}>
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Products