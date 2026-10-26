"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        return router.push(`/products/${product.id}`);
      }}
      className="group bg-white flex flex-col overflow-hidden rounded-2xl border border-gray-200  shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center bg-gray-50 p-6">
        <Image
          src={product.image}
          alt={product.title}
          width={250}
          height={250}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
          unoptimized
        />

        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-medium capitalize text-gray-600 shadow-sm">
          {product.category}
        </span>
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-5">
        <h2 className="line-clamp-2 min-h-12 text-base font-semibold text-gray-900">
          {product.title}
        </h2>

        <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-lg text-amber-500">★</span>

          <span className="text-sm font-semibold text-gray-800">
            {product.rating.rate}
          </span>

          <span className="text-sm text-gray-400">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price and Button */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>

          <button
            type="button"
            onClick={() => console.log("Added to cart:", product.id)}
            className="rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700 active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
