import { createContext, useMemo, useState } from "react";

import {
  freshFruits,
  freshVegetables,
  leafyGreens,
  seasonalPicks,
  organicGoodness,
  dailyEssentials,
} from "../assets/assest";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₹";
  const delivery_fee = 10;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // Combine all product categories into one array
  const allProducts = useMemo(
    () => [
      ...freshFruits,
      ...freshVegetables,
      ...leafyGreens,
      ...seasonalPicks,
      ...organicGoodness,
      ...dailyEssentials,
    ],
    [],
  );

  const value = {
    freshFruits,
    freshVegetables,
    leafyGreens,
    seasonalPicks,
    organicGoodness,
    dailyEssentials,

    allProducts,

    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
