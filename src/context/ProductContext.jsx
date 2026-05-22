import {
  createContext,
  useState,
  useEffect,
} from 'react'

export const ProductContext = createContext()

function ProductProvider({ children }) {

 const [products, setProducts] = useState(() => {

  const savedProducts =
    localStorage.getItem('products')

  return savedProducts
    ? JSON.parse(savedProducts)
    : [
        {
          id: 1,
          name: 'Fresh Tomatoes',
          category: 'Vegetables',
          price: 40,
          image:
            'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?q=80&w=1200&auto=format&fit=crop',
        },

        {
          id: 2,
          name: 'Premium Rice',
          category: 'Grains',
          price: 70,
          image:
            'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1200&auto=format&fit=crop',
        },
      ]
})

useEffect(() => {
  localStorage.setItem(
    'products',
    JSON.stringify(products)
  )
}, [products])

  return (
    <ProductContext.Provider
      value={{ products, setProducts }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider