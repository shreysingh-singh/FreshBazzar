import { User, Heart, ShoppingBag } from "lucide-react";

import SearchBar from "./SearchBar";
import logo from "../assets/logo.png";
import Navbar from "./NavBar";

import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Header = () => {
  const { getCartCount, navigate, subtotal, formatPrice } =
    useContext(ShopContext);

  const cartCount = getCartCount();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center">
          <img
            src={logo}
            alt="FreshBazzar"
            className="h-14 w-auto object-contain"
          />
        </a>

        {/* Search Bar */}
        <div className="hidden flex-1 md:block md:max-w-xl">
          <SearchBar />
        </div>

        {/* Header Actions */}
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
            onClick={() => navigate("/cart")}
            type="button"
            aria-label={`Shopping cart with ${cartCount} items`}
            className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-green-50"
          >
            {/* Cart Icon & Quantity Badge */}
            <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-green-700">
              <ShoppingBag size={22} strokeWidth={1.8} />

              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-green-600 px-1 text-xs font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </div>

            {/* Cart Information */}
            <div className="hidden text-left sm:block">
              <p className="text-xs text-gray-500">
                Shopping cart ({cartCount})
              </p>

              <p className="text-sm font-bold text-gray-900">
                {formatPrice(subtotal)}
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <Navbar />
    </header>
  );
};

export default Header;
