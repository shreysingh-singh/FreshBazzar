import {
  freshFruits,
  freshVegetables,
  leafyGreens,
  seasonalPicks,
  organicGoodness,
  dailyEssentials,
} from "./assest";

const categories = [
  {
    id: 1,
    title: "Fresh Fruits",
    description: "Fresh and juicy fruits for everyday goodness.",
    categoryImage: "/images/categories/fruits.jpg",
    products: freshFruits,
  },
  {
    id: 2,
    title: "Fresh Vegetables",
    description: "Farm-fresh vegetables for your kitchen.",
    categoryImage: "/images/categories/vegetables.jpg",
    products: freshVegetables,
  },
  {
    id: 3,
    title: "Leafy Greens",
    description: "Healthy and nutritious greens.",
    categoryImage: "/images/categories/leafy-greens.jpg",
    products: leafyGreens,
  },
  {
    id: 4,
    title: "Seasonal Picks",
    description: "Enjoy the best produce of the season.",
    categoryImage: "/images/categories/seasonal.jpg",
    products: seasonalPicks,
  },
  {
    id: 5,
    title: "Organic Goodness",
    description: "Naturally grown organic products.",
    categoryImage: "/images/categories/organic.jpg",
    products: organicGoodness,
  },
  {
    id: 6,
    title: "Daily Essentials",
    description: "Everything you need every day.",
    categoryImage: "/images/categories/essentials.jpg",
    products: dailyEssentials,
  },
];

export default categories;
