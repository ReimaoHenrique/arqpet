export interface Product {
  id: string;
  title: string;
  photoUrl: string;
  photoAds: string[];
  category: "industrial" | "inteligente" | "artesanal";
  price: number;
  description: string;
  stock: number;
  themeColor: string;
  rating: number;
  shipping: number;
}
