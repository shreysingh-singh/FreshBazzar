import { User, Heart, ShoppingBag, Menu, ChevronDown, Truck } from "lucide-react";
import SearchBar from "./SearchBar";
import logo from "../assets/logo.png";
import Navbar from "./NavBar";
import ImageGallery from "./ImageGalary";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Header = () => {
  const cartTotal = "19.46";
  const { currency } = useContext(ShopContext);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center">
          <img
            src={logo}
            alt="FreshBazzar"
            className="h-16 w-auto object-contain"
          />
        </a>

        {/* Search Bar */}
        <div className="hidden flex-1 md:block md:max-w-xl">
          <SearchBar />
        </div>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-4 sm:gap-6">
          {/* Account */}
          <button
            type="button"
            aria-label="My account"
            className="group flex items-center justify-center rounded-full p-2 text-gray-700 transition-colors hover:bg-green-50 hover:text-green-600"
          >
            <User size={23} strokeWidth={1.8} />
          </button>

          {/* Wishlist */}
          <button
            type="button"
            aria-label="Wishlist"
            className="group relative flex items-center justify-center rounded-full p-2 text-gray-700 transition-colors hover:bg-green-50 hover:text-green-600"
          >
            <Heart size={23} strokeWidth={1.8} />
          </button>

          {/* Shopping Cart */}
          <button
            type="button"
            aria-label="Shopping cart"
            className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-green-50"
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-green-700">
              <ShoppingBag size={22} strokeWidth={1.8} />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-xs font-semibold text-white">
                2
              </span>
            </div>

            <div className="hidden text-left sm:block">
              <p className="text-xs text-gray-500">Shopping cart</p>
              <p className="text-sm font-bold text-gray-900">{currency}{cartTotal}</p>
            </div>
          </button>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;

