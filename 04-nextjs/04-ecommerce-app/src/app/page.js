import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";

const categories = [
  {
    name: "Men's Clothing",
    description: "Everyday essentials and modern styles",
    emoji: "👕",
    category: "men's clothing",
  },
  {
    name: "Jewelry",
    description: "Details that make a statement",
    emoji: "💍",
    category: "jewelery",
  },
  {
    name: "Electronics",
    description: "Tech for your everyday life",
    emoji: "🎧",
    category: "electronics",
  },
  {
    name: "Women's Clothing",
    description: "Find your next favorite look",
    emoji: "👗",
    category: "women's clothing",
  },
];

export default function page() {
  const featuredProducts = products.slice(0, 4);

  return (
    <main className="min-h-screen bg-white">
      <Navbar/>
      {/* Hero Section */}
      <section className="bg-gray-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">
          <div>
            <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
              Your everyday shopping destination
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Find your next
              <span className="block text-indigo-600">favorite thing.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
              Discover clothing, accessories, electronics, and more. Great finds
              for your everyday life, all in one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-indigo-700"
              >
                Shop All Products →
              </Link>

              <Link
                href="/categories"
                className="rounded-xl border border-gray-300 bg-white px-6 py-3.5 font-semibold text-gray-800 transition hover:bg-gray-100"
              >
                Explore Categories
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-600">
              <span>✓ Easy shopping</span>
              <span>✓ Great selection</span>
              <span>✓ Simple checkout</span>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative flex min-h-80 items-center justify-center overflow-hidden rounded-3xl bg-indigo-100 p-8 sm:min-h-96">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-indigo-200/70" />
            <div className="absolute -bottom-12 -left-8 h-48 w-48 rounded-full bg-purple-200/70" />

            <div className="relative grid w-full max-w-sm grid-cols-2 gap-4">
              <div className="flex aspect-square flex-col justify-between rounded-2xl bg-white p-5 shadow-lg">
                <span className="text-5xl">🎒</span>
                <div>
                  <p className="font-bold text-gray-900">Everyday style</p>
                  <p className="mt-1 text-sm text-gray-500">Made for you</p>
                </div>
              </div>

              <div className="mt-8 flex aspect-square flex-col justify-between rounded-2xl bg-gray-900 p-5 shadow-lg">
                <span className="text-5xl">⌚</span>
                <div>
                  <p className="font-bold text-white">Modern living</p>
                  <p className="mt-1 text-sm text-gray-300">Find your fit</p>
                </div>
              </div>

              <div className="col-span-2 flex items-center justify-between rounded-2xl bg-white p-5 shadow-lg">
                <div>
                  <p className="font-bold text-gray-900">
                    Something for everyone
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Your next great find is waiting.
                  </p>
                </div>
                <span className="text-4xl">🛍️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-gray-100">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            {
              icon: "🚚",
              title: "Convenient shopping",
              text: "Explore products in one place",
            },
            {
              icon: "✨",
              title: "Discover your style",
              text: "Find something you'll love",
            },
            {
              icon: "🔒",
              title: "Shop with confidence",
              text: "A simple, clear shopping experience",
            },
          ].map((benefit) => (
            <div key={benefit.title} className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-2xl">
                {benefit.icon}
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="font-semibold text-indigo-600">EXPLORE OUR STORE</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              Shop by category
            </h2>
            <p className="mt-2 text-gray-500">
              Browse your interests and discover something new.
            </p>
          </div>

          <Link
            href="/products"
            className="hidden font-semibold text-indigo-600 hover:text-indigo-700 sm:inline-block"
          >
            All products →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.category}
              href={`/products?category=${encodeURIComponent(category.category)}`}
              className="group rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 text-4xl transition group-hover:bg-indigo-50">
                {category.emoji}
              </span>

              <h3 className="mt-5 font-bold text-gray-900">{category.name}</h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {category.description}
              </p>

              <span className="mt-4 inline-block text-sm font-semibold text-indigo-600">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="font-semibold text-indigo-600">
                HANDPICKED FOR YOU
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                Featured products
              </h2>
              <p className="mt-2 text-gray-500">
                Take a look at some of our picks.
              </p>
            </div>

            <Link
              href="/products"
              className="shrink-0 font-semibold text-indigo-600 transition hover:text-indigo-700"
            >
              View all →
            </Link>
          </div>

          {featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="rounded-xl bg-white p-8 text-center text-gray-500">
              Products will appear here soon.
            </p>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gray-900 px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="font-semibold text-indigo-300">
            YOUR NEXT FAVORITE FIND
          </p>

          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Good finds are just a click away.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-300">
            Browse our collection and find the products that fit your everyday
            life.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-flex rounded-xl bg-white px-6 py-3.5 font-semibold text-gray-900 transition hover:bg-indigo-100"
          >
            Start Shopping →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <Link href="/" className="text-lg font-extrabold text-gray-900">
            Shop<span className="text-indigo-600">Ease</span>
          </Link>

          <p>
            © ShopEase. Built for everyday shopping.
          </p>

          <Link href="/products" className="transition hover:text-indigo-600">
            Browse products
          </Link>
        </div>
      </footer>
    </main>
  );
}
