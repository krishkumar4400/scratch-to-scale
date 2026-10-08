import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchProductDetails = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`,
      );

      setProduct(response.data);
    } catch (error) {
      console.error("Failed to fetch product details", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-indigo-600" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-gray-500">Product not found.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Product Container */}
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-sm lg:grid-cols-2">
          {/* Product Image */}
          <div className="flex min-h-[500px] items-center justify-center bg-gray-50 p-10">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-[450px] max-w-full object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center p-8 lg:p-14">
            {/* Category */}
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-600">
              {product.category}
            </p>

            {/* Title */}
            <h1 className="text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-3">
              <div className="flex items-center gap-1 rounded-lg bg-yellow-50 px-3 py-2">
                <span className="text-yellow-500">★</span>

                <span className="font-semibold text-gray-800">
                  {product.rating.rate}
                </span>
              </div>

              <span className="text-sm text-gray-500">
                {product.rating.count} reviews
              </span>
            </div>

            {/* Price */}
            <div className="mt-7">
              <span className="text-4xl font-bold text-gray-900">
                ${product.price}
              </span>
            </div>

            {/* Divider */}
            <div className="my-7 h-px bg-gray-200" />

            {/* Description */}
            <div>
              <h2 className="mb-3 text-lg font-semibold text-gray-900">
                Description
              </h2>

              <p className="leading-7 text-gray-600">{product.description}</p>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold text-gray-900">
                Quantity
              </p>

              <div className="flex w-fit items-center overflow-hidden rounded-lg border border-gray-300">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="px-4 py-2 text-xl transition hover:bg-gray-100"
                >
                  −
                </button>

                <span className="min-w-12 px-4 text-center font-semibold">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-4 py-2 text-xl transition hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add To Cart */}
            <button
              onClick={() => {
                console.log("Added to cart:", {
                  product,
                  quantity,
                });
              }}
              className="mt-8 w-full rounded-xl bg-indigo-600 px-6 py-4 text-base font-semibold text-white transition duration-200 hover:bg-indigo-700 active:scale-[0.98]"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
