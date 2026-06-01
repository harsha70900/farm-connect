import {
  createContext,
  useState,
  useEffect,
} from 'react'

export const ProductContext =
  createContext()

export const ProductProvider =
  ({ children }) => {

    const [products, setProducts] =
      useState(() => {

        const savedProducts =
          localStorage.getItem('products')

        return savedProducts
          ? JSON.parse(savedProducts)
          : []
      })

    const [editProduct, setEditProduct] =
      useState(null)

    useEffect(() => {

      localStorage.setItem(
        'products',
        JSON.stringify(products)
      )

    }, [products])

    return (

      <ProductContext.Provider
        value={{
          products,
          setProducts,
          editProduct,
          setEditProduct,
        }}
      >

        {children}

      </ProductContext.Provider>
    )
}