"use client";

import AdCard from "@/components/AdCard";
import { Product } from "@/lib/types";
import { useEffect, useState } from "react";

export default function HandcraftedAds() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) =>
        setProducts(data.filter((p: Product) => p.category === "artesanal"))
      );
  }, []);

  return (
    <div>
      <h1>Handcrafted Ads</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <AdCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
