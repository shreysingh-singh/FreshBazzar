import React, { useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Truck,
  CalendarDays,
  ShieldCheck,
  Headphones,
  Sprout,
  Heart,
  ShoppingBag,
  Trash2,
  Minus,
  Plus,
  TicketPercent,
  ArrowRight,
  ArrowLeft,
  LockKeyhole,
  CheckCircle2,
} from "lucide-react";

import { ShopContext } from "../context/ShopContext";

const FREE_DELIVERY_THRESHOLD = 499;

const Cart = () => {
  const {
    cartItems,
    allProducts,
    updateCartQuantity,
    addToCart,
    currency,
    delivery_fee,
  } = useContext(ShopContext);

  const [promoCode, setPromoCode] = useState("");

  // Convert cart object into an array
  const cart = useMemo(() => {
    return Object.entries(cartItems || {}).flatMap(([productId, weights]) =>
      Object.entries(weights || {})
        .map(([weight, quantity]) => {
          const product = allProducts.find(
            (item) => String(item.id) === String(productId),
          );

          if (!product || quantity <= 0) return null;

          return {
            ...product,
            cartId: `${productId}-${weight}`,
            weight,
            quantity,
          };
        })
        .filter(Boolean),
    );
  }, [cartItems, allProducts]);

  // Recommended products
  const recommendedProducts = useMemo(() => {
    const cartProductIds = Object.keys(cartItems || {});

    return allProducts
      .filter((product) => !cartProductIds.includes(String(product.id)))
      .slice(0, 4);
  }, [allProducts, cartItems]);

  // Price formatter
  const formatPrice = (price) => `${currency}${Number(price || 0).toFixed(2)}`;

  // Cart calculations
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const amountAway = Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal);

  const deliveryFee =
    subtotal >= FREE_DELIVERY_THRESHOLD || cart.length === 0
      ? 0
      : (delivery_fee ?? 40);

  const total = subtotal + deliveryFee;

  const progress = Math.min((subtotal / FREE_DELIVERY_THRESHOLD) * 100, 100);

  // Quantity update
  const updateQuantity = (item, change) => {
    updateCartQuantity(
      item.id,
      item.weight,
      Math.max(0, item.quantity + change),
    );
  };

  // Remove item
  const removeItem = (item) => {
    updateCartQuantity(item.id, item.weight, 0);
  };

  // Add recommended product
  const handleAddToCart = (product) => {
    addToCart(product.id, product.unit || "1 unit", 1);
  };

  return (
    <main className="min-h-screen bg-white text-[#292d27]">
      <div className="mx-auto max-w-[1440px] px-4 pb-16 pt-7 sm:px-7 lg:px-12 xl:px-14">
        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-3 text-xs text-[#858b80]">
          <Link to="/" className="transition hover:text-[#42b02b]">
            Home
          </Link>

          <span>/</span>

          <Link to="/collection" className="transition hover:text-[#42b02b]">
            Shop
          </Link>

          <span>/</span>

          <span className="font-medium text-[#292d27]">Shopping cart</span>
        </nav>

        {/* Page Heading */}
        <div className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Your shopping cart
            </h1>

            <p className="mt-2 text-sm text-[#858b80]">
              A little basket of goodness. {totalItems} items, freshly picked
              for you.
            </p>
          </div>

          {/* Checkout Steps */}
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium sm:gap-4">
            <span className="flex items-center gap-1.5 text-[#299b20]">
              <CheckCircle2 size={14} />
              Cart
            </span>

            <span className="h-px w-5 bg-[#dfe4da]" />

            <span className="flex items-center gap-1.5 text-[#92988e]">
              <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#dfe4da] text-[9px]">
                2
              </span>
              Checkout
            </span>

            <span className="h-px w-5 bg-[#dfe4da]" />

            <span className="flex items-center gap-1.5 text-[#92988e]">
              <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#dfe4da] text-[9px]">
                3
              </span>
              Confirmation
            </span>
          </div>
        </div>

        {/* Main Cart Layout */}
        <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-[1.9fr_0.98fr]">
          {/* Left Section */}
          <section className="min-w-0">
            {/* Free Delivery Banner */}
            <div className="mb-4 rounded-xl bg-[#f0f8ed] px-5 py-5">
              <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-[#328c25]">
                <Truck size={16} />

                {amountAway > 0 ? (
                  <span>
                    You're just <strong>{formatPrice(amountAway)}</strong> away
                    from free delivery!
                  </span>
                ) : (
                  <strong>You've unlocked free delivery!</strong>
                )}
              </div>

              <div className="h-1 w-full overflow-hidden rounded-full bg-[#d8e9d1]">
                <div
                  className="h-full rounded-full bg-[#49b52d] transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Cart Table */}
            <div className="overflow-hidden rounded-xl border border-[#e8ece4]">
              {/* Table Header */}
              <div className="hidden grid-cols-[minmax(0,2fr)_0.6fr_0.9fr_0.65fr] gap-3 border-b border-[#e8ece4] px-5 py-4 text-[10px] font-medium tracking-wide text-[#7f8779] sm:grid lg:px-6">
                <span>PRODUCT</span>
                <span>PRICE</span>
                <span>QUANTITY</span>
                <span className="text-right">TOTAL</span>
              </div>

              {/* Cart Products */}
              {cart.length > 0 ? (
                <div className="px-4 sm:px-5 lg:px-6">
                  {cart.map((item) => (
                    <div
                      key={item.cartId}
                      className="grid grid-cols-1 gap-4 border-b border-[#e8ece4] py-5 last:border-b-0 sm:grid-cols-[minmax(0,2fr)_0.6fr_0.9fr_0.65fr] sm:items-center sm:gap-3"
                    >
                      {/* Product Information */}
                      <div className="flex min-w-0 items-center gap-3">
                        <Link
                          to={`/product/${item.id}`}
                          className="flex h-[76px] w-[76px] shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#f7f9f5] sm:h-[82px] sm:w-[82px]"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-contain mix-blend-multiply"
                          />
                        </Link>

                        <div className="min-w-0">
                          <Link
                            to={`/product/${item.id}`}
                            className="line-clamp-1 text-sm font-semibold transition hover:text-[#42a92c]"
                          >
                            {item.name}
                          </Link>

                          <p className="mt-1 text-xs text-[#858b80]">
                            {item.weight}
                          </p>

                          <button
                            type="button"
                            onClick={() => removeItem(item)}
                            className="mt-1.5 flex items-center gap-1 text-[11px] text-[#92988e] transition hover:text-red-500"
                          >
                            <Trash2 size={11} />
                            Remove
                          </button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between text-sm sm:block">
                        <span className="text-xs text-[#858b80] sm:hidden">
                          Price
                        </span>

                        <span className="font-medium">
                          {formatPrice(item.price)}
                        </span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between sm:block">
                        <span className="text-xs text-[#858b80] sm:hidden">
                          Quantity
                        </span>

                        <div className="flex w-fit items-center gap-4 rounded-full border border-[#e6ebe2] px-3 py-2">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item, -1)}
                            disabled={item.quantity <= 1}
                            className="text-[#7e8879] transition hover:text-[#42aa2c] disabled:cursor-not-allowed disabled:opacity-40"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>

                          <span className="min-w-3 text-center text-xs font-semibold">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() => updateQuantity(item, 1)}
                            className="text-[#299b20] transition hover:scale-110"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="flex items-center justify-between text-sm font-bold sm:block sm:text-right">
                        <span className="text-xs font-normal text-[#858b80] sm:hidden">
                          Total
                        </span>

                        {formatPrice(item.price * item.quantity)}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Empty Cart */
                <div className="flex flex-col items-center justify-center px-5 py-16 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f0f8ed] text-[#43ad2c]">
                    <ShoppingBag size={27} />
                  </div>

                  <h3 className="text-lg font-semibold">Your cart is empty</h3>

                  <p className="mt-2 max-w-sm text-sm text-[#858b80]">
                    Your basket is waiting for some fresh fruits and vegetables.
                  </p>

                  <Link
                    to="/collection"
                    className="mt-6 rounded-full bg-[#45b42b] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#359a20]"
                  >
                    Start shopping
                  </Link>
                </div>
              )}

              {/* Cart Footer */}
              {cart.length > 0 && (
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#e8ece4] px-4 py-4 sm:px-5 lg:px-6">
                  <Link
                    to="/collection"
                    className="flex items-center gap-1.5 text-xs font-medium text-[#299b20] transition hover:gap-2.5"
                  >
                    <ArrowLeft size={13} />
                    Continue shopping
                  </Link>

                  <span className="rounded-full bg-[#f0f8ed] px-4 py-2 text-[11px] font-semibold text-[#299b20]">
                    {totalItems} items in your basket
                  </span>
                </div>
              )}
            </div>

            {/* Promo Code */}
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex shrink-0 items-center gap-2 text-xs font-medium">
                <TicketPercent size={17} className="text-[#49b52d]" />
                Have a promo code?
              </div>

              <div className="flex flex-1 gap-2 sm:max-w-[380px]">
                <input
                  type="text"
                  placeholder="Enter your code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="min-w-0 flex-1 rounded-lg border border-[#e6ebe2] px-4 py-3 text-xs outline-none transition placeholder:text-[#a1a69c] focus:border-[#49b52d] focus:ring-2 focus:ring-[#49b52d]/10"
                />

                <button
                  type="button"
                  onClick={() =>
                    alert("Promo code functionality is not connected yet.")
                  }
                  className="rounded-full bg-[#f0f8ed] px-6 text-xs font-semibold text-[#299b20] transition hover:bg-[#e1f2dc]"
                >
                  Apply
                </button>
              </div>
            </div>
          </section>

          {/* Right Section */}
          <aside className="flex flex-col gap-4">
            {/* Order Summary */}
            <div className="rounded-xl border border-[#e8ece4] p-5 sm:p-6">
              <h2 className="border-b border-[#e8ece4] pb-4 text-lg font-bold">
                Order summary
              </h2>

              <div className="space-y-4 py-5 text-xs">
                <div className="flex items-center justify-between text-[#858b80]">
                  <span>Subtotal ({totalItems} items)</span>
                  <span className="font-medium text-[#292d27]">
                    {formatPrice(subtotal)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[#858b80]">
                  <span>Delivery</span>
                  <span className="font-medium text-[#292d27]">
                    {deliveryFee === 0 ? "Free" : formatPrice(deliveryFee)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[#858b80]">
                  <span>Taxes</span>
                  <span className="font-medium text-[#292d27]">Included</span>
                </div>
              </div>

              <div className="border-t border-[#e8ece4] pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold">Total</span>

                  <span className="text-xl font-bold tracking-tight">
                    {formatPrice(total)}
                  </span>
                </div>

                <p className="mt-4 text-[11px] text-[#858b80]">
                  {amountAway > 0
                    ? `Add ${formatPrice(amountAway)} more to unlock free delivery.`
                    : "You've saved on delivery with your order!"}
                </p>

                <button
                  type="button"
                  disabled={cart.length === 0}
                  onClick={() => {
                    window.location.href = "/checkout";
                  }}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#48b52c] py-3.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#359c20] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Proceed to checkout
                  <ArrowRight size={15} />
                </button>

                <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] text-[#858b80]">
                  <LockKeyhole size={12} />
                  Safe & secure checkout
                </div>
              </div>
            </div>

            {/* Delivery Information */}
            <div className="rounded-xl bg-[#f6f9f3] p-5">
              <div className="flex items-center gap-2 text-xs font-semibold">
                <CalendarDays size={16} className="text-[#49b52d]" />
                Fresh at your door tomorrow
              </div>

              <p className="mt-3 text-[11px] leading-relaxed text-[#858b80]">
                Your fresh groceries will be carefully packed and delivered to
                your doorstep. Choose your preferred delivery slot at checkout.
              </p>
            </div>
          </aside>
        </div>

        {/* Recommended Products */}
        {recommendedProducts.length > 0 && (
          <section className="mt-16">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Make your basket a little fresher
                </h2>

                <p className="mt-2 text-xs text-[#858b80]">
                  A few favourites you might have missed.
                </p>
              </div>

              <Link
                to="/collection"
                className="flex items-center gap-1 text-xs font-medium text-[#299b20] transition hover:gap-2"
              >
                Shop all products
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
              {recommendedProducts.map((product) => (
                <div
                  key={product.id}
                  className="group overflow-hidden rounded-xl border border-[#e8ece4] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#253c1d]/5"
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden bg-[#fbfcfa]">
                    <Link
                      to={`/product/${product.id}`}
                      className="flex aspect-[1/0.85] items-center justify-center p-4"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-contain mix-blend-multiply transition duration-500 group-hover:scale-105"
                      />
                    </Link>

                    {/* Badge */}
                    {(product.discount ||
                      product.bestSeller ||
                      product.isOrganic) && (
                      <span className="absolute left-3 top-3 rounded-md bg-[#eef7e9] px-2 py-1 text-[9px] font-semibold text-[#299b20]">
                        {product.discount
                          ? `${product.discount}% OFF`
                          : product.isOrganic
                            ? "Organic"
                            : "Bestseller"}
                      </span>
                    )}

                    <button
                      type="button"
                      className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#858b80] shadow-sm transition hover:text-red-500"
                      aria-label="Add to wishlist"
                    >
                      <Heart size={14} />
                    </button>
                  </div>

                  {/* Product Details */}
                  <div className="p-3 sm:p-4">
                    <p className="mb-1 text-[9px] text-[#858b80]">
                      {product.category}
                    </p>

                    <Link to={`/product/${product.id}`}>
                      <h3 className="line-clamp-1 text-xs font-semibold transition hover:text-[#299b20] sm:text-sm">
                        {product.name}
                      </h3>
                    </Link>

                    <p className="mt-1 line-clamp-1 text-[10px] text-[#858b80]">
                      {product.unit}
                    </p>

                    <div className="mt-3 flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <span className="text-sm font-bold">
                          {formatPrice(product.price)}
                        </span>

                        {product.originalPrice && (
                          <del className="ml-1 text-[9px] text-[#9ba095]">
                            {formatPrice(product.originalPrice)}
                          </del>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => handleAddToCart(product)}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eff7eb] text-[#299b20] transition hover:bg-[#48b52c] hover:text-white"
                        aria-label={`Add ${product.name} to cart`}
                      >
                        <ShoppingBag size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Bottom Benefits Strip */}
      <section className="border-t border-[#e8ece4] bg-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-7 px-4 py-8 sm:px-7 lg:grid-cols-4 lg:px-12 xl:px-14">
          <div className="flex items-center gap-3">
            <Truck
              size={21}
              strokeWidth={1.3}
              className="shrink-0 text-[#49b52d]"
            />
            <div>
              <h4 className="text-xs font-semibold">Delivered fresh</h4>
              <p className="mt-1 text-[10px] text-[#858b80]">
                Convenient daily delivery
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Sprout
              size={21}
              strokeWidth={1.3}
              className="shrink-0 text-[#49b52d]"
            />
            <div>
              <h4 className="text-xs font-semibold">Farm-picked quality</h4>
              <p className="mt-1 text-[10px] text-[#858b80]">
                Good food, nothing extra
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck
              size={21}
              strokeWidth={1.3}
              className="shrink-0 text-[#49b52d]"
            />
            <div>
              <h4 className="text-xs font-semibold">Freshness guaranteed</h4>
              <p className="mt-1 text-[10px] text-[#858b80]">
                Love it or we make it right
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Headphones
              size={21}
              strokeWidth={1.3}
              className="shrink-0 text-[#49b52d]"
            />
            <div>
              <h4 className="text-xs font-semibold">Here to help</h4>
              <p className="mt-1 text-[10px] text-[#858b80]">
                Friendly support, 7 days a week
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
