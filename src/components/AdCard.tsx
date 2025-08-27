"use client";

import { Product } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { useState } from "react";

interface AdCardProps {
  product: Product;
}

export default function AdCard({ product }: AdCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);

    setAdded(true);
    setTimeout(() => setAdded(false), 1500); // some depois de 1.5s
  };

  return (
    <Link
      href={`/ads/${product.id}`}
      className="card m-4 max-w-sm rounded-lg shadow-lg relative"
      style={{ borderColor: product.themeColor }}
    >
      <div className="p-4">
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
      </div>
    </Link>
  );
}
