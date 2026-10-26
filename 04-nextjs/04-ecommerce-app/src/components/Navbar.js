"use client";

import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "./ToggleTheme";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Replace this with your actual cart state later.
  const cartCount = 0;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-gray-900"
        >
            <div>
                <ModeToggle/>
            </div>
          Shop<span className="text-indigo-600">Ease</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition hover:text-indigo-600"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="text-sm font-medium text-gray-700 transition hover:text-indigo-600"
          >
            Products
          </Link>

          <Link
            href="/categories"
            className="text-sm font-medium text-gray-700 transition hover:text-indigo-600"
          >
            Categories
          </Link>
        </div>

        {/* Search */}
        <form
          action="/products"
          method="GET"
          className="mx-6 hidden max-w-xs flex-1 lg:flex"
        >
          <input
            type="search"
            name="search"
            placeholder="Search products..."
            className="w-full rounded-l-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />

          <button
            type="submit"
            aria-label="Search products"
            className="rounded-r-lg bg-gray-900 px-4 text-white transition hover:bg-indigo-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="m16 16 4 4" />
            </svg>
          </button>
        </form>

        {/* Cart + Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            aria-label={`Shopping cart, ${cartCount} items`}
            className="relative rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 hover:text-indigo-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.5 3h2l2.4 11.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 1.9-1.5L21 7H5"
              />
              <circle cx="9" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-600 px-1 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 md:hidden"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m6 6 12 12M18 6 6 18"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 md:hidden">
          <form action="/products" method="GET" className="mb-4 flex">
            <input
              type="search"
              name="search"
              placeholder="Search products..."
              className="min-w-0 flex-1 rounded-l-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-indigo-500"
            />

            <button
              type="submit"
              className="rounded-r-lg bg-gray-900 px-4 text-sm font-medium text-white"
            >
              Search
            </button>
          </form>

          <div className="flex flex-col gap-1">
            {[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "Categories", href: "/categories" },
              { label: "Cart", href: "/cart" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-indigo-600"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
