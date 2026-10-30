import { createContext} from 'react'
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

    const currency = '₹';
    const delivery_fee = 10;

    const value = {
      freshFruits,
      freshVegetables,
      leafyGreens,
      seasonalPicks,
      organicGoodness,
      dailyEssentials,
      currency,
      delivery_fee,
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;
