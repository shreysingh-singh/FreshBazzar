import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "@/context/ShopContext";
import {
  Check,
  ShieldCheck,
  ArrowLeft,
  LockKeyhole,
  ShoppingBag,
  DollarSign,
  CirclePoundSterling,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";
import StoreBenefits from "@/components/StoreBenefits";

const inputStyle =
  "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#399b25] focus:ring-2 focus:ring-[#399b25]/10";

const labelStyle = "mb-2 block text-xs font-semibold text-gray-700";

const PlaceOrder = () => {
  const { cart, subtotal, delivery_fee, formatPrice } =
    useContext(ShopContext);

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [deliverySlot, setDeliverySlot] = useState("9 AM - 12 PM");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [emailOffers, setEmailOffers] = useState(true);
  const [orderNotes, setOrderNotes] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const tax = 0;
  const total = subtotal + delivery_fee + tax;

  const today = new Date();
  const localToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!cart || cart.length === 0) {
      toast.error("Your shopping cart is empty.");
      return;
    }

    if (!deliveryDate) {
      toast.error("Please select your delivery date.");
      return;
    }

    // Frontend demonstration only.
    // Connect your backend and payment provider to create real orders.
    toast.info(
      "Checkout details are ready. Connect your payment provider and order API to place your order.",
    );
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="flex min-h-[65vh] flex-col items-center justify-center px-4 text-center">
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#eef7e9]">
          <ShoppingBag size={34} className="text-[#399b25]" />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800">
          Your cart is empty
        </h2>

        <p className="mt-2 max-w-sm text-sm text-gray-500">
          Add some fresh products to your basket before proceeding to checkout.
        </p>

        <Link
          to="/"
          className="mt-6 rounded-xl bg-[#399b25] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#318820]"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfdfb] px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-7 flex flex-wrap items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="transition hover:text-[#399b25]">
            Home
          </Link>
          <span>/</span>
          <Link to="/cart" className="transition hover:text-[#399b25]">
            Shopping cart
          </Link>
          <span>/</span>
          <span className="font-semibold text-[#399b25]">Checkout</span>
        </div>

        <div className="flex justify-between">
          {/* Page Heading */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              One step closer to fresh.
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Your basket is ready. Let's get it to your doorstep.
            </p>
          </div>
          {/* Checkout Steps */}
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium sm:gap-4">
            <span className="flex items-center gap-1.5 text-[#92988e]">
              <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#dfe4da] text-[9px]">
                1
              </span>
              Cart
            </span>

            <span className="h-px w-5 bg-[#dfe4da]" />

            <span className="flex items-center gap-1.5 text-[#92988e]">
              <span className="flex items-center gap-1.5 text-[#299b20]">
                <CheckCircle2 size={14} />
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

        {/* Checkout Form */}
        <form onSubmit={handlePlaceOrder}>
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.65fr_0.85fr] lg:gap-10">
            {/* LEFT SIDE */}
            <div className="space-y-6">
              {/* Existing Customer */}
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#e8f0e3] bg-[#f5faf2] px-5 py-4">
                <p className="text-xs text-gray-600">
                  Already have an account?
                  <button
                    type="button"
                    className="ml-2 font-semibold text-[#399b25] hover:underline"
                  >
                    Sign in for faster checkout
                  </button>
                </p>
              </div>

              {/* Contact Information */}
              <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eef7e9] text-sm font-bold text-[#399b25]">
                    1
                  </span>

                  <div>
                    <h2 className="text-base font-semibold text-gray-800">
                      Contact information
                    </h2>
                    <p className="mt-1 text-xs text-gray-400">
                      Where should we send your order updates?
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelStyle}>Email address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputStyle}
                    />
                  </div>

                  <div>
                    <label className={labelStyle}>Phone number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={inputStyle}
                    />
                  </div>
                </div>

                <label className="mt-5 flex cursor-pointer items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={emailOffers}
                    onChange={(e) => setEmailOffers(e.target.checked)}
                    className="h-4 w-4 accent-[#399b25]"
                  />
                  <span className="text-xs text-gray-500">
                    Email me updates and fresh offers.
                  </span>
                </label>
              </section>

              {/* Delivery Address */}
              <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eef7e9] text-sm font-bold text-[#399b25]">
                    2
                  </span>

                  <div>
                    <h2 className="text-base font-semibold text-gray-800">
                      Delivery address
                    </h2>
                    <p className="mt-1 text-xs text-gray-400">
                      Where would you like your fresh order delivered?
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelStyle}>First name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                      className={inputStyle}
                    />
                  </div>

                  <div>
                    <label className={labelStyle}>Last name *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      className={inputStyle}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className={labelStyle}>Street address *</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="House number and street name"
                    className={inputStyle}
                  />
                </div>

                <div className="mt-4">
                  <label className={labelStyle}>
                    Apartment, suite, etc. (Optional)
                  </label>
                  <input
                    type="text"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleChange}
                    placeholder="Apartment, floor, landmark..."
                    className={inputStyle}
                  />
                </div>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div>
                    <label className={labelStyle}>City *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City"
                      className={inputStyle}
                    />
                  </div>

                  <div>
                    <label className={labelStyle}>State *</label>
                    <input
                      type="text"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="State"
                      className={inputStyle}
                    />
                  </div>

                  <div>
                    <label className={labelStyle}>PIN code *</label>
                    <input
                      type="text"
                      name="zipCode"
                      required
                      value={formData.zipCode}
                      onChange={handleChange}
                      placeholder="PIN code"
                      className={inputStyle}
                    />
                  </div>
                </div>
              </section>

              {/* Delivery Options */}
              <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eef7e9] text-sm font-bold text-[#399b25]">
                    3
                  </span>

                  <div>
                    <h2 className="text-base font-semibold text-gray-800">
                      Choose your delivery
                    </h2>
                    <p className="mt-1 text-xs text-gray-400">
                      Select when you would like your order to arrive.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-[#399b25] bg-[#f5faf2] p-4">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="delivery"
                        defaultChecked
                        className="h-4 w-4 accent-[#399b25]"
                      />

                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          Fresh home delivery
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          Carefully packed and delivered to your doorstep.
                        </p>
                      </div>
                    </div>

                    <span className="whitespace-nowrap text-sm font-semibold text-gray-800">
                      {formatPrice(delivery_fee)}
                    </span>
                  </label>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelStyle}>Delivery date *</label>
                    <input
                      type="date"
                      required
                      min={localToday}
                      value={deliveryDate}
                      onChange={(e) => setDeliveryDate(e.target.value)}
                      className={inputStyle}
                    />
                  </div>

                  <div>
                    <label className={labelStyle}>Time slot *</label>
                    <select
                      value={deliverySlot}
                      onChange={(e) => setDeliverySlot(e.target.value)}
                      className={inputStyle}
                    >
                      <option value="9 AM - 12 PM">9 AM - 12 PM</option>
                      <option value="12 PM - 3 PM">12 PM - 3 PM</option>
                      <option value="3 PM - 6 PM">3 PM - 6 PM</option>
                      <option value="6 PM - 9 PM">6 PM - 9 PM</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label className={labelStyle}>
                    Delivery notes (Optional)
                  </label>
                  <textarea
                    rows="3"
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    placeholder="Please ring the doorbell on arrival..."
                    className={`${inputStyle} resize-none`}
                  />
                </div>
              </section>

              {/* Payment Method */}
              <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eef7e9] text-sm font-bold text-[#399b25]">
                    4
                  </span>

                  <div>
                    <h2 className="text-base font-semibold text-gray-800">
                      Payment method
                    </h2>
                    <p className="mt-1 text-xs text-gray-400">
                      Choose your preferred payment option.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("stripe")}
                    className={`flex items-center justify-center gap-2 rounded-xl border p-4 text-sm font-medium transition ${
                      paymentMethod === "stripe"
                        ? "border-[#399b25] bg-[#f5faf2] text-[#399b25]"
                        : "border-gray-200 text-gray-500 hover:border-gray-300"
                    }`}
                  >
                    <DollarSign size={18} />
                    Stripe
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("razorpay")}
                    className={`flex items-center justify-center gap-2 rounded-xl border p-4 text-sm font-medium transition ${
                      paymentMethod === "razorpay"
                        ? "border-[#399b25] bg-[#f5faf2] text-[#399b25]"
                        : "border-gray-200 text-gray-500 hover:border-gray-300"
                    }`}
                  >
                    <CirclePoundSterling size={18} />
                    Razorpay
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("cod")}
                    className={`flex items-center justify-center gap-2 rounded-xl border p-4 text-sm font-medium transition ${
                      paymentMethod === "cod"
                        ? "border-[#399b25] bg-[#f5faf2] text-[#399b25]"
                        : "border-gray-200 text-gray-500 hover:border-gray-300"
                    }`}
                  >
                    <ShoppingBag size={18} />
                    Cash on delivery
                  </button>
                </div>

                <div className="mt-5 rounded-xl bg-[#f7f9f5] p-4">
                  <div className="flex items-start gap-3">
                    <LockKeyhole
                      size={18}
                      className="mt-0.5 shrink-0 text-[#399b25]"
                    />

                    <div>
                      <p className="text-sm font-semibold text-gray-700">
                        {paymentMethod === "card"
                          ? "Secure card payment"
                          : paymentMethod === "upi"
                            ? "UPI payment"
                            : "Pay when your order arrives"}
                      </p>

                      <p className="mt-1 text-xs leading-6 text-gray-500">
                        {paymentMethod === "card"
                          ? "You will enter your card details through a secure payment provider when payment integration is connected."
                          : paymentMethod === "upi"
                            ? "You will be redirected to a secure UPI payment flow once your payment provider is connected."
                            : "Pay the delivery partner when your fresh order reaches your doorstep."}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <Link
                to="/cart"
                className="inline-flex items-center gap-2 py-2 text-sm font-medium text-[#399b25] transition hover:gap-3"
              >
                <ArrowLeft size={16} />
                Back to shopping cart
              </Link>
            </div>

            {/* RIGHT SIDE - ORDER SUMMARY */}
            <aside className="lg:sticky lg:top-9">
              <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
                <h2 className="mb-6 text-lg font-bold text-gray-900">
                  Order summary
                </h2>

                {/* Cart Products */}
                <div className="max-h-[340px] space-y-5 overflow-y-auto pr-1">
                  {cart.map((item) => {
                    const productImage = Array.isArray(item.image)
                      ? item.image[0]
                      : item.image;

                    return (
                      <div
                        key={item.cartId}
                        className="flex items-center gap-3"
                      >
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#f7f9f5]">
                          <img
                            src={productImage}
                            alt={item.name}
                            className="h-full w-full object-contain"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="truncate text-sm font-semibold text-gray-800">
                            {item.name}
                          </h3>

                          <p className="mt-1 text-xs text-gray-400">
                            {item.weight} · Qty: {item.quantity}
                          </p>
                        </div>

                        <p className="whitespace-nowrap text-sm font-semibold text-gray-800">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="my-6 border-t border-dashed border-gray-200" />

                {/* Price Details */}
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between text-gray-500">
                    <span>Subtotal ({cart.length} items)</span>
                    <span className="font-medium text-gray-800">
                      {formatPrice(subtotal)}
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-500">
                    <span>Delivery</span>
                    <span className="font-medium text-gray-800">
                      {formatPrice(delivery_fee)}
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-500">
                    <span>Taxes</span>
                    <span className="font-medium text-[#399b25]">
                      {tax === 0 ? "Included" : formatPrice(tax)}
                    </span>
                  </div>
                </div>

                <div className="my-6 border-t border-gray-100" />

                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-gray-900">
                    Total
                  </span>

                  <span className="text-2xl font-bold tracking-tight text-gray-900">
                    {formatPrice(total)}
                  </span>
                </div>

                <p className="mt-2 text-right text-xs text-gray-400">
                  Inclusive of applicable charges.
                </p>

                {/* Place Order */}
                <button
                  onClick={() => navigate("/orders")}
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#399b25] px-5 py-4 text-sm font-bold text-white shadow-md shadow-green-900/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#318820] hover:shadow-lg"
                >
                  Place Order · {formatPrice(total)}
                  <Check size={17} />
                </button>

                <p className="mt-4 flex items-center justify-center gap-2 text-center text-[11px] text-gray-400">
                  <LockKeyhole size={12} />
                  Your information is safe and secure.
                </p>

                <p className="mt-5 text-center text-[11px] leading-5 text-gray-400">
                  By placing your order, you agree to our Terms of Service and
                  Privacy Policy.
                </p>
              </div>

              {/* Freshness Promise */}
              <div className="mt-5 rounded-2xl border border-[#e8f0e3] bg-[#f5faf2] p-5">
                <div className="flex items-start gap-3">
                  <ShieldCheck size={23} className="shrink-0 text-[#399b25]" />

                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">
                      Our freshness promise
                    </h3>

                    <p className="mt-1 text-xs leading-6 text-gray-500">
                      Every order is carefully packed with farm-fresh products
                      and quality checked before delivery.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </form>
      </div>
      {/* Bottom Benefits */}
      <StoreBenefits />
    </div>
  );
};

export default PlaceOrder;
