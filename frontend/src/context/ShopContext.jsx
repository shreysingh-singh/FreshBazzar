import { createContext, useEffect, useMemo, useState } from "react";

import {
  freshFruits,
  freshVegetables,
  leafyGreens,
  seasonalPicks,
  organicGoodness,
  dailyEssentials,
} from "../assets/assest";
import { useNavigate } from "react-router-dom";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₹";
  const delivery_fee = 10;

  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

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
  
  const addToCart = (itemId, size, quantity = 1) => {
    setCartItems((prevCart) => {
      const cartData = structuredClone(prevCart);

      if (!cartData[itemId]) {
        cartData[itemId] = {};
      }

      cartData[itemId][size] = (cartData[itemId][size] || 0) + quantity;

      return cartData;
    });
  };
  // const addToCart = (itemId, selectedWeight) => {

  //   let cardData = structuredClone(cartItems);

  //   if (cardData[itemId]) {
  //     if (cardData[itemId][selectedWeight]) {
  //       cardData[itemId][selectedWeight] += 1;
  //     } else {
  //       cardData[itemId][selectedWeight] = 1;
  //     }
  //   } else {
  //     cardData[itemId] = {};
  //     cardData[itemId][selectedWeight] = 1;
  //   }
  //   setCartItems(cardData);
    
  // };

  useEffect(() => {
    console.log(cartItems);
    
  },[cartItems]);

  const getCartCount = () => {
    let totalCount = 0;

    for(const items in cartItems){
      for(const item in cartItems[items]){
        try {
          if(cartItems[items][item] > 0){
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          
        }
      }
    }
    return totalCount;
  }

  const updateCartQuantity = (itemId, size, quantity) => {
    setCartItems((prevCart) => {
      const cartData = structuredClone(prevCart);

      if (!cartData[itemId]) return prevCart;

      if (quantity <= 0) {
        delete cartData[itemId][size];

        // Remove product if no sizes remain
        if (Object.keys(cartData[itemId]).length === 0) {
          delete cartData[itemId];
        }
      } else {
        cartData[itemId][size] = quantity;
      }

      return cartData;
    });
  };


  const value = {
    freshFruits,
    freshVegetables,
    leafyGreens,
    seasonalPicks,
    organicGoodness,
    dailyEssentials,

    allProducts,

    navigate,

    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateCartQuantity,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
