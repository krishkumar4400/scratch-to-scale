import Image from "next/image";
import Link from "next/link";

async function getProduct(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product || !product.id) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4">
        <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>

        <Link
          href="/"
          className="rounded-lg bg-gray-900 px-5 py-3 text-white hover:bg-gray-700"
        >
          Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/products"
          className="mb-8 inline-flex text-sm font-medium text-gray-600 hover:text-black"
        >
          ← Back to Products
        </Link>

        <div className="grid gap-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-2 md:gap-12 md:p-10">
          {/* Product Image */}
          <div className="flex min-h-80 items-center justify-center rounded-xl bg-gray-50 p-8">
            <Image
              src={product.image}
              alt={product.title}
              width={450}
              height={450}
              unoptimized
              className="max-h-[420px] w-full object-contain"
              priority
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">
            <span className="mb-4 w-fit rounded-full bg-gray-100 px-3 py-1 text-sm capitalize text-gray-600">
              {product.category}
            </span>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {product.title}
            </h1>

            <div className="mt-4 flex items-center gap-2">
              <span className="text-xl text-amber-500">★</span>

              <span className="font-semibold text-gray-900">
                {product.rating?.rate ?? "N/A"}
              </span>

              <span className="text-sm text-gray-500">
                ({product.rating?.count ?? 0} reviews)
              </span>
            </div>

            <p className="mt-6 text-3xl font-bold text-gray-900">
              ${Number(product.price).toFixed(2)}
            </p>

            <div className="my-6 border-t border-gray-200" />

            <h2 className="text-lg font-semibold text-gray-900">Description</h2>

            <p className="mt-3 text-base leading-7 text-gray-600">
              {product.description}
            </p>

            <button
              type="button"
              className="mt-8 w-full rounded-xl bg-gray-900 px-6 py-4 font-semibold text-white transition hover:bg-gray-700 active:scale-[0.98] sm:w-fit"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
