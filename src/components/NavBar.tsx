"use client";

import { useTheme } from "./ThemeProvider";
import Link from "next/link";
import { useCart } from "@/lib/cart";

export default function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const { cart } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800">
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-lg font-bold">
          PetStore
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
        <Link href="/ads" className="hover:underline">
          Ads
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/cart" className="hover:underline">
          Cart ({totalItems})
        </Link>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 font-semibold text-white bg-orange-500 rounded hover:bg-orange-600"
        >
          Toggle Theme
        </button>
      </div>
    </nav>
  );
}
