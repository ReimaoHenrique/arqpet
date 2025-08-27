"use client";

import { useCart } from "@/lib/cart";
import CartItem from "./CartItem";

export default function Cart() {
  const { cart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <h1>Your cart is empty</h1>;
  }

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <h2>Total: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
}
