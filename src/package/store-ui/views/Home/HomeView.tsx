"use client"

import { useEffect, useState } from "react"
import { ListProductView } from "./components/product/ListProductView"
import { CartView } from "./components/cart/CartView"
import { Box, CircularProgress } from '@mui/material';
import { Product } from "./HomeType"
import { homeController } from "./HomeController"

export default function HomeView() {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState<Product[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    init()
  }, [])

  async function init() {
    const data = await homeController.fetchProducts()
    setProducts(data)
    setIsLoading(false)
  }

  function handleGetTotalPrice() {
    return cartItems.reduce((total, item) => {
      return total + Number.parseFloat(item.price) * (item.quantity || 1)
    }, 0)
  }

  function getItemCount() {
    return cartItems.reduce((count, item) => count + (item.quantity || 1), 0)
  }

  function HandleClickRemoveFromCart(productId: number) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId))
  }

  function handleClickAddToCart(product: Product) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item,
        )
      } else {
        return [...prevItems, { ...product, quantity: 1 }]
      }
    })
  }

  if (isLoading) {
    return (
        <div className="flex justify-center items-center h-screen">
            <Box>
                <CircularProgress size={'50px'} />
            </Box>
        </div>
    );
}

  return (
    <main className="min-h-screen bg-gray-50">
      {showCart ? (
        <CartView
          items={cartItems}
          handleRemoveFromCart={HandleClickRemoveFromCart}
          handleGetTotalPrice={handleGetTotalPrice}
          onBackToProducts={() => setShowCart(false)}
        />
      ) : (
        <ListProductView
          products={products}
          addToCart={handleClickAddToCart}
          itemCount={getItemCount()}
          onViewCart={() => setShowCart(true)}
        />
      )}
    </main>
  )
}

