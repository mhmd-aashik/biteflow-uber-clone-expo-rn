import { Restaurant } from "../types/restaurant";

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Burger District",
    slug: "burger-district",
    categorySlug: "burgers",
    rating: 4.8,
    deliveryTime: "25–35 min",
    deliveryFee: 0,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },
  {
    id: 2,
    name: "Pizza Corner",
    slug: "pizza-corner",
    categorySlug: "pizza",
    rating: 4.7,
    deliveryTime: "30–40 min",
    deliveryFee: 4,
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498",
  },
  {
    id: 3,
    name: "Tokyo Sushi",
    slug: "tokyo-sushi",
    categorySlug: "sushi",
    rating: 4.9,
    deliveryTime: "20–30 min",
    deliveryFee: 0,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
  },
  {
    id: 4,
    name: "Green Bowl",
    slug: "green-bowl",
    categorySlug: "healthy",
    rating: 4.6,
    deliveryTime: "20–25 min",
    deliveryFee: 3,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999",
  },
];
