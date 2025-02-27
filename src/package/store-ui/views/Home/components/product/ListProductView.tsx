"use client"
import { ShoppingCart } from "lucide-react"
import { ProductCardView } from "./ProductCardView"
import { Product } from "../../HomeType"

type ProductListProps = {
  products: Product[]
  addToCart: (product: Product) => void
  itemCount: number
  onViewCart: () => void
}

export function ListProductView(listProduct: ProductListProps) {


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Produtos</h1>
        <button
          onClick={listProduct.onViewCart}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          <ShoppingCart size={20} />
          <span>Carrinho</span>
          {listProduct.itemCount > 0 && (
            <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
              {listProduct.itemCount}
            </span>
          )}
        </button>
      </div>

      {listProduct.products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {listProduct.products.map((product) => (
            <ProductCardView key={product.id} product={product} addToCart={listProduct.addToCart} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">Não há produtos cadastrados</p>
      )}
    </div>
  )
}

