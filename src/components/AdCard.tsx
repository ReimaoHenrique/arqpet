"use client";

import { Product } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { useTheme } from "@/components/ThemeProvider"; // importa seu hook
import { useState } from "react";

interface AdCardProps {
  product: Product;
}

export default function AdCard({ product }: AdCardProps) {
  const { addToCart } = useCart();
  const { theme } = useTheme();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      href={`/ads/${product.id}`}
      className={`m-4 max-w-sm rounded-lg shadow-lg relative p-4 transition-colors
    ${
      theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
    }`}
      style={{ borderColor: product.themeColor }}
    >
      <Image
        src={product.photoUrl}
        alt={product.title}
        width={300}
        height={200}
        className="rounded-lg"
      />
      <h2 className="mt-4 text-xl font-bold">{product.title}</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Category: {product.category}
      </p>
      <p className="mt-2 text-lg font-semibold">${product.price}</p>
      <p className="mt-2 text-sm text-gray-500">Stock: {product.stock}</p>

      <button
        onClick={handleAddToCart}
        className="w-full px-4 py-2 mt-4 font-semibold text-white bg-[#FF6F00] rounded hover:bg-[#FF8000] transition-colors"
      >
        Add to Cart
      </button>

      {added && (
        <span className="absolute top-2 right-2 px-2 py-1 text-xs font-bold text-white bg-green-500 rounded">
          Adicionado!
        </span>
      )}
    </Link>
  );
}
