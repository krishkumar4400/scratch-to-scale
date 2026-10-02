import { useMemo, useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  Heart,
  Star,
  SlidersHorizontal,
  ChevronDown,
  Menu,
  X,
  Home,
  Package,
  ArrowUpDown,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "AeroSound Pro",
    category: "Electronics",
    description:
      "Premium wireless headphones with adaptive noise cancellation.",
    price: 7999,
    originalPrice: 9999,
    rating: 4.8,
    reviews: 328,
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    name: "KeyForge Mechanical",
    category: "Accessories",
    description: "Compact mechanical keyboard with tactile RGB switches.",
    price: 5499,
    originalPrice: 6999,
    rating: 4.7,
    reviews: 214,
    discount: 21,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "Pulse X Smartwatch",
    category: "Electronics",
    description: "AMOLED smartwatch with fitness and everyday health tracking.",
    price: 6499,
    originalPrice: 7999,
    rating: 4.6,
    reviews: 187,
    discount: 19,
    image:
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    name: "Velocity Gaming Mouse",
    category: "Gaming",
    description: "Ultra-light gaming mouse with precision optical sensor.",
    price: 2999,
    originalPrice: 3499,
    rating: 4.8,
    reviews: 456,
    discount: 14,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    name: "Urban Runner Sneakers",
    category: "Fashion",
    description: "Minimal everyday sneakers designed for comfort and style.",
    price: 4299,
    originalPrice: 5999,
    rating: 4.5,
    reviews: 163,
    discount: 28,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    name: "Nomad Everyday Backpack",
    category: "Fashion",
    description: "Water-resistant backpack with dedicated laptop compartment.",
    price: 3499,
    originalPrice: 4499,
    rating: 4.7,
    reviews: 291,
    discount: 22,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 7,
    name: "Nova X Smartphone",
    category: "Electronics",
    description: "Flagship-inspired smartphone with a vibrant OLED display.",
    price: 32999,
    originalPrice: 37999,
    rating: 4.8,
    reviews: 512,
    discount: 13,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 8,
    name: "Elevate Laptop Stand",
    category: "Home",
    description: "Aluminum laptop stand for a cleaner and more ergonomic desk.",
    price: 1999,
    originalPrice: 2499,
    rating: 4.6,
    reviews: 142,
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 9,
    name: "Echo Mini Speaker",
    category: "Electronics",
    description: "Compact Bluetooth speaker with rich room-filling audio.",
    price: 2499,
    originalPrice: 2999,
    rating: 4.5,
    reviews: 238,
    discount: 17,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 10,
    name: "Aura Smart Lamp",
    category: "Home",
    description: "Minimal smart LED lamp with adjustable ambient lighting.",
    price: 2299,
    originalPrice: 2999,
    rating: 4.4,
    reviews: 119,
    discount: 23,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 11,
    name: "CloudFit Sneakers",
    category: "Fashion",
    description: "Lightweight performance sneakers for everyday movement.",
    price: 4799,
    originalPrice: 6499,
    rating: 4.7,
    reviews: 204,
    discount: 26,
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 12,
    name: "Titan Gaming Headset",
    category: "Gaming",
    description: "Immersive gaming headset with low-latency wireless audio.",
    price: 5999,
    originalPrice: 7499,
    rating: 4.8,
    reviews: 376,
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=900&q=85",
  },
];

const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Accessories",
  "Home",
  "Gaming",
];

const sortOptions = [
  "Featured",
  "Price: Low to High",
  "Price: High to Low",
  "Rating",
];

function formatPrice(price) {
  return `₹${price.toLocaleString("en-IN")}`;
}

function ProductCard({ product, isWishlisted, onToggleWishlist, onAddToCart }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d131d] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/[0.14] hover:shadow-2xl hover:shadow-black/30">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#111925]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {product.discount && (
          <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-indigo-600 px-2.5 py-1 text-[11px] font-semibold text-white shadow-lg">
            -{product.discount}%
          </span>
        )}

        <button
          type="button"
          onClick={() => onToggleWishlist(product.id)}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-md transition ${
            isWishlisted
              ? "border-indigo-400/30 bg-indigo-600 text-white"
              : "border-white/10 bg-[#080d15]/70 text-slate-300 hover:border-white/20 hover:bg-[#111925] hover:text-white"
          }`}
        >
          <Heart
            className="h-4 w-4"
            fill={isWishlisted ? "currentColor" : "none"}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="text-[11px] font-medium uppercase tracking-wider text-indigo-400">
            {product.category}
          </span>

          <div className="flex items-center gap-1 text-xs text-slate-400">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span className="font-medium text-slate-300">{product.rating}</span>
            <span>({product.reviews})</span>
          </div>
        </div>

        <h2 className="truncate text-base font-semibold text-white">
          {product.name}
        </h2>

        <p className="mt-1.5 line-clamp-2 min-h-[40px] text-xs leading-5 text-slate-500">
          {product.description}
        </p>

        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <div className="text-lg font-bold tracking-tight text-white">
              {formatPrice(product.price)}
            </div>

            {product.originalPrice && (
              <div className="text-xs text-slate-600 line-through">
                {formatPrice(product.originalPrice)}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-3.5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-indigo-600/10 transition hover:bg-indigo-500 hover:shadow-indigo-600/20 active:scale-95"
          >
            <ShoppingCart className="h-4 w-4" />
            Add
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Products() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [cartCount, setCartCount] = useState(2);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "All") {
      result = result.filter(
        (product) => product.category === selectedCategory,
      );
    }

    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query),
      );
    }

    switch (sortBy) {
      case "Price: Low to High":
        result.sort((a, b) => a.price - b.price);
        break;

      case "Price: High to Low":
        result.sort((a, b) => b.price - a.price);
        break;

      case "Rating":
        result.sort((a, b) => b.rating - a.rating);
        break;

      default:
        break;
    }

    return result;
  }, [search, selectedCategory, sortBy]);

  const toggleWishlist = (productId) => {
    setWishlist((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    );
  };

  const handleAddToCart = () => {
    setCartCount((count) => count + 1);
  };

  return (
    <div className="min-h-screen bg-[#070b12] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/[0.045] blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-purple-600/[0.04] blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#070b12]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
          {/* Brand */}
          <a href="#" className="flex shrink-0 items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 shadow-lg shadow-indigo-600/20">
              <Package className="h-4.5 w-4.5" />
            </div>

            <span className="hidden text-lg font-bold tracking-tight sm:block">
              Nexora
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="ml-5 hidden items-center gap-1 md:flex">
            <a
              href="#"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              <Home className="h-4 w-4" />
              Home
            </a>

            <a
              href="#"
              className="rounded-lg bg-white/5 px-3 py-2 text-sm font-medium text-white"
            >
              Products
            </a>
          </nav>

          {/* Search */}
          <div className="relative ml-auto hidden w-full max-w-md md:block">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-600" />

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-xl border border-white/[0.08] bg-[#0d131d] py-2.5 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 hover:border-white/[0.14] focus:border-indigo-500/60 focus:ring-4 focus:ring-indigo-500/10"
            />
          </div>

          {/* Actions */}
          <div className="ml-auto flex items-center gap-1 md:ml-4">
            <button
              type="button"
              aria-label="Cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              <ShoppingCart className="h-5 w-5" />

              <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-indigo-600 px-1 text-[9px] font-bold text-white">
                {cartCount}
              </span>
            </button>

            <button
              type="button"
              aria-label="Profile"
              className="hidden h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition hover:bg-white/5 hover:text-white sm:flex"
            >
              <User className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => setShowMobileMenu((open) => !open)}
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition hover:bg-white/5 hover:text-white md:hidden"
            >
              {showMobileMenu ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="border-t border-white/[0.07] px-4 pb-4 pt-3 md:hidden">
            <div className="mb-3 relative">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-600" />

              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full rounded-xl border border-white/[0.08] bg-[#0d131d] py-2.5 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-indigo-500/60"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                className="rounded-xl bg-white/5 px-4 py-2.5 text-sm text-slate-300"
              >
                Home
              </button>

              <button
                type="button"
                className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white"
              >
                Products
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-10">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-500/10 bg-indigo-500/5 px-3 py-1 text-xs font-medium text-indigo-400">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              Curated collection
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Explore Products
            </h1>

            <p className="mt-2 max-w-xl text-sm text-slate-500 sm:text-base">
              Discover products curated for you.
            </p>
          </div>

          <p className="text-sm text-slate-500">
            <span className="font-medium text-slate-300">
              {filteredProducts.length}
            </span>{" "}
            Products
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 rounded-2xl border border-white/[0.07] bg-[#0b111a]/80 p-3 backdrop-blur-sm">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            {/* Categories */}
            <div className="flex gap-1.5 overflow-x-auto pb-1 lg:pb-0">
              {categories.map((category) => {
                const active = selectedCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition ${
                      active
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/10"
                        : "text-slate-500 hover:bg-white/5 hover:text-slate-200"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Sort */}
            <div className="relative flex shrink-0 items-center gap-2">
              <ArrowUpDown className="h-4 w-4 text-slate-600" />

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none rounded-xl border border-white/[0.08] bg-[#080d15] py-2 pl-3 pr-9 text-sm text-slate-300 outline-none transition hover:border-white/[0.15] focus:border-indigo-500/60"
                >
                  {sortOptions.map((option) => (
                    <option
                      key={option}
                      value={option}
                      className="bg-[#0d131d]"
                    >
                      {option}
                    </option>
                  ))}
                </select>

                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-500" />
              </div>

              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-[#080d15] text-slate-500 transition hover:border-white/[0.15] hover:text-white"
                aria-label="Filters"
              >
                <SlidersHorizontal className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlist.includes(product.id)}
                onToggleWishlist={toggleWishlist}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[360px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/[0.08] bg-[#0b111a] px-6 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.04]">
              <Search className="h-6 w-6 text-slate-600" />
            </div>

            <h2 className="text-lg font-semibold text-white">
              No products found
            </h2>

            <p className="mt-2 max-w-sm text-sm text-slate-500">
              Try a different search term or select another category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              className="mt-5 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-500"
            >
              Clear filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
