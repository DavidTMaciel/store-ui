"use client"
import { ArrowLeft, ShoppingBag } from "lucide-react"
import { CartItemView } from "./CartItemView"
import { Product } from "../../HomeType"

type CartProps = {
  items: Product[]
  handleRemoveFromCart: (productId: number) => void
  handleGetTotalPrice: () => number
  onBackToProducts: () => void
}

export function CartView(cart: CartProps) {
  const totalPrice = cart.handleGetTotalPrice()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={cart.onBackToProducts}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Voltar para produtos</span>
        </button>
        <h1 className="text-3xl font-bold">Carrinho de Compras</h1>
      </div>

      {cart.items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 bg-white rounded-lg shadow">
          <ShoppingBag size={64} className="text-gray-300 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-600 mb-2">Seu carrinho está vazio</h2>
          <p className="text-gray-500 mb-6">Adicione alguns produtos para começar a comprar</p>
          <button
            onClick={cart.onBackToProducts}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Explorar produtos
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Itens do Carrinho</h2>
              <div className="divide-y">
                {cart.items.map((item) => (
                  <CartItemView key={item.id} item={item} handleRemoveFromCart={cart.handleRemoveFromCart} />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>R$ {totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Frete</span>
                  <span>Grátis</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>R$ {totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition-colors">
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

