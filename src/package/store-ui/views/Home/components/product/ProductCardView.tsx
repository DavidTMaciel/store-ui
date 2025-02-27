"use client"
import { PlusCircle } from "lucide-react"
import { Product } from "../../HomeType"

type ProductCardProps = {
  product: Product
  addToCart: (product: Product) => void
}

export function ProductCardView(productCard: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        {productCard.product.hero && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
            {productCard.product.hero}
          </div>
        )}
        <img src={productCard.product.image || "/placeholder.svg"} alt={productCard.product.name} className="w-full h-48 object-cover" />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{productCard.product.name}</h2>
        <p className="text-gray-600 mb-4 text-sm">{productCard.product.detail}</p>
        {productCard.product.info && (
          <p className="text-gray-500 text-xs mb-2">{productCard.product.info}</p>
        )}

        {productCard.product.offer && (
          <p className="text-green-600 text-sm font-semibold mb-2">{productCard.product.offer}</p>
        )}
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">R$ {productCard.product.price}</span>
          <button
            onClick={() => productCard.addToCart(productCard.product)}
            className="flex items-center gap-1 bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            <PlusCircle size={18} />
            <span>Adicionar</span>
          </button>
        </div>
      </div>
    </div>
  )
}

