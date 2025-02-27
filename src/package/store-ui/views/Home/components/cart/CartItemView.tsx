"use client"
import { Trash2 } from "lucide-react"
import { Product } from "../../HomeType"

type CartItemProps = {
  item: Product
  handleRemoveFromCart: (productId: number) => void
}

export function CartItemView(cartItem: CartItemProps) {
  const quantity = cartItem.item.quantity || 1
  const itemTotal = Number.parseFloat(cartItem.item.price) * quantity

  return (
    <div className="py-4 flex items-center">
      <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded overflow-hidden">
        <img src={cartItem.item.image || "/placeholder.svg"} alt={cartItem.item.name} className="w-full h-full object-cover" />
      </div>

      <div className="ml-4 flex-grow">
        <h3 className="font-semibold">{cartItem.item.name}</h3>
        <p className="text-gray-500 text-sm">{cartItem.item.detail}</p>
        {cartItem.item.info && <p className="text-gray-400 text-xs mt-1">{cartItem.item.info}</p>}
        {cartItem.item.offer && <p className="text-green-600 text-sm font-semibold mt-1">{cartItem.item.offer}</p>}
        <div className="flex items-center mt-1">
          <span className="text-gray-600">Qtd: {quantity}</span>
          <span className="mx-2 text-gray-400">|</span>
          <span className="font-semibold">R$ {cartItem.item.price} cada</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="font-bold whitespace-nowrap">R$ {itemTotal.toFixed(2)}</span>
        <button
          onClick={() => cartItem.handleRemoveFromCart(cartItem.item.id)}
          className="text-red-500 hover:text-red-700 transition-colors"
          aria-label="Remover item"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  )
}

