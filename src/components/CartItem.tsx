"use client";

import { Product } from "@/lib/types";
import { useCart } from "@/lib/cart";
import Image from "next/image";

interface CartItemProps {
  item: Product & { quantity: number };
}

export default function CartItem({ item }: CartItemProps) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div style={{ display: "flex", marginBottom: "16px" }}>
      <Image src={item.photoUrl} alt={item.title} width={100} height={100} />
      <div style={{ marginLeft: "16px" }}>
        <h2>{item.title}</h2>
        <p>Price: ${item.price}</p>
        <p>
          Quantity:
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
            min="1"
            style={{ width: "50px", marginLeft: "8px" }}
          />
        </p>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
}
