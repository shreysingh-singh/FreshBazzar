import React, { useState } from "react";
import {
  Package,
  Truck,
  CheckCircle2,
  Clock,
  XCircle,
  ArrowRight,
  ShoppingBag,
  CalendarDays,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

const ordersData = [
  {
    id: "FBZ-2026-00124",
    date: "12 Nov 2026",
    status: "Delivered",
    total: 450,
    payment: "Paid",
    items: [
      {
        id: 1,
        name: "Fresh Green Apples",
        image:
          "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=200",
        quantity: 2,
        unit: "500 g",
        price: 120,
      },
      {
        id: 2,
        name: "Fresh Red Tomatoes",
        image:
          "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=200",
        quantity: 1,
        unit: "1 kg",
        price: 80,
      },
    ],
  },
  {
    id: "FBZ-2026-00118",
    date: "09 Nov 2026",
    status: "Shipped",
    total: 320,
    payment: "Paid",
    items: [
      {
        id: 3,
        name: "Fresh Bananas",
        image:
          "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=200",
        quantity: 2,
        unit: "1 dozen",
        price: 90,
      },
      {
        id: 4,
        name: "Fresh Broccoli",
        image:
          "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=200",
        quantity: 1,
        unit: "500 g",
        price: 140,
      },
    ],
  },
  {
    id: "FBZ-2026-00102",
    date: "05 Nov 2026",
    status: "Processing",
    total: 580,
    payment: "Pending",
    items: [
      {
        id: 5,
        name: "Fresh Oranges",
        image:
          "https://images.unsplash.com/photo-1547514701-42782101795e?w=200",
        quantity: 2,
        unit: "1 kg",
        price: 160,
      },
      {
        id: 6,
        name: "Fresh Carrots",
        image:
          "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=200",
        quantity: 2,
        unit: "500 g",
        price: 130,
      },
    ],
  },
  {
    id: "FBZ-2026-00095",
    date: "01 Nov 2026",
    status: "Cancelled",
    total: 250,
    payment: "Refunded",
    items: [
      {
        id: 7,
        name: "Fresh Strawberries",
        image:
          "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=200",
        quantity: 1,
        unit: "500 g",
        price: 250,
      },
    ],
  },
];

const filters = ["All", "Processing", "Shipped", "Delivered", "Cancelled"];

const statusStyles = {
  Delivered: {
    color: "text-green-700",
    bg: "bg-green-50",
    icon: CheckCircle2,
  },
  Shipped: {
    color: "text-blue-700",
    bg: "bg-blue-50",
    icon: Truck,
  },
  Processing: {
    color: "text-amber-700",
    bg: "bg-amber-50",
    icon: Clock,
  },
  Cancelled: {
    color: "text-red-700",
    bg: "bg-red-50",
    icon: XCircle,
  },
};

function Orders() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedOrder, setExpandedOrder] = useState(null);

  const filteredOrders =
    activeFilter === "All"
      ? ordersData
      : ordersData.filter((order) => order.status === activeFilter);

  const formatPrice = (price) => `₹${price.toFixed(2)}`;

  return (
    <div className="min-h-screen bg-[#f8faf6] px-4 py-8 sm:px-6 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Page Heading */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 text-sm font-medium text-[#399b25]">
              FreshBazzar / My Account
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-[#252a22] sm:text-4xl">
              My Orders
            </h1>

            <p className="mt-2 text-sm text-[#777d72]">
              Track, manage and view your grocery orders.
            </p>
          </div>

          <Link
            to="/collection"
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#399b25] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#318820]"
          >
            <ShoppingBag size={17} />
            Continue Shopping
          </Link>
        </div>

        {/* Order Summary */}
        <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <SummaryCard
            icon={Package}
            title="Total Orders"
            value={ordersData.length}
            color="bg-green-50 text-[#399b25]"
          />

          <SummaryCard
            icon={Clock}
            title="Processing"
            value={ordersData.filter((o) => o.status === "Processing").length}
            color="bg-amber-50 text-amber-600"
          />

          <SummaryCard
            icon={Truck}
            title="Shipped"
            value={ordersData.filter((o) => o.status === "Shipped").length}
            color="bg-blue-50 text-blue-600"
          />

          <SummaryCard
            icon={CheckCircle2}
            title="Delivered"
            value={ordersData.filter((o) => o.status === "Delivered").length}
            color="bg-green-50 text-green-700"
          />
        </div>

        {/* Filters */}
        <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition ${
                activeFilter === filter
                  ? "bg-[#399b25] text-white shadow-sm"
                  : "border border-[#e8ebe4] bg-white text-[#666d61] hover:border-[#399b25] hover:text-[#399b25]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Orders */}
        <div className="space-y-5">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => {
              const status = statusStyles[order.status];
              const StatusIcon = status.icon;
              const isExpanded = expandedOrder === order.id;

              return (
                <div
                  key={order.id}
                  className="overflow-hidden rounded-2xl border border-[#e9ede5] bg-white shadow-sm transition hover:shadow-md"
                >
                  {/* Order Header */}
                  <div className="flex flex-col gap-4 border-b border-[#edf0e9] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-3 sm:flex sm:gap-10">
                      <div>
                        <p className="mb-1 text-xs text-[#969b91]">Order ID</p>
                        <p className="text-sm font-semibold text-[#30362d]">
                          #{order.id}
                        </p>
                      </div>

                      <div>
                        <p className="mb-1 text-xs text-[#969b91]">
                          Order Date
                        </p>
                        <p className="flex items-center gap-1.5 text-sm font-medium text-[#555c50]">
                          <CalendarDays size={14} />
                          {order.date}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`flex w-fit items-center gap-2 rounded-full px-3.5 py-2 text-xs font-semibold ${status.bg} ${status.color}`}
                    >
                      <StatusIcon size={15} />
                      {order.status}
                    </div>
                  </div>

                  {/* Order Content */}
                  <div className="p-5 sm:p-7">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                      {/* Products */}
                      <div className="flex min-w-0 flex-1 flex-col gap-4">
                        {order.items.slice(0, 2).map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center gap-4"
                          >
                            <div className="h-[72px] w-[72px] shrink-0 overflow-hidden rounded-xl bg-[#f6f8f3]">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="h-full w-full object-cover"
                              />
                            </div>

                            <div className="min-w-0 flex-1">
                              <h3 className="truncate text-sm font-semibold text-[#30362d]">
                                {item.name}
                              </h3>

                              <p className="mt-1 text-xs text-[#8a9084]">
                                {item.unit} · Qty: {item.quantity}
                              </p>

                              <p className="mt-1 text-sm font-semibold text-[#399b25]">
                                {formatPrice(item.price * item.quantity)}
                              </p>
                            </div>
                          </div>
                        ))}

                        {order.items.length > 2 && (
                          <p className="text-xs font-medium text-[#399b25]">
                            +{order.items.length - 2} more items
                          </p>
                        )}
                      </div>

                      {/* Order Total and Actions */}
                      <div className="flex flex-col gap-3 border-t border-[#edf0e9] pt-5 sm:flex-row sm:items-center sm:justify-between lg:min-w-[260px] lg:flex-col lg:items-end lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                        <div>
                          <p className="text-xs text-[#92988d]">Total Amount</p>
                          <p className="mt-1 text-2xl font-bold text-[#252a22]">
                            {formatPrice(order.total)}
                          </p>
                          <p className="mt-1 text-xs text-[#8a9084]">
                            Payment: {order.payment}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {order.status !== "Cancelled" && (
                            <button
                              onClick={() =>
                                setExpandedOrder(isExpanded ? null : order.id)
                              }
                              className="inline-flex items-center gap-2 rounded-xl border border-[#dce5d7] px-4 py-2.5 text-xs font-semibold text-[#399b25] transition hover:bg-[#f4f9f1]"
                            >
                              {isExpanded ? "Hide Details" : "View Details"}
                              <ChevronDown
                                size={14}
                                className={`transition ${isExpanded ? "rotate-180" : ""}`}
                              />
                            </button>
                          )}

                          {order.status === "Shipped" && (
                            <button className="inline-flex items-center gap-2 rounded-xl bg-[#399b25] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#318820]">
                              Track Order
                              <ArrowRight size={14} />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {isExpanded && (
                      <div className="mt-6 grid gap-5 rounded-xl bg-[#f8faf6] p-5 sm:grid-cols-2">
                        <div>
                          <h4 className="mb-3 text-sm font-semibold text-[#30362d]">
                            Order Information
                          </h4>
                          <p className="mb-2 text-xs text-[#777d72]">
                            Order ID: {order.id}
                          </p>
                          <p className="mb-2 text-xs text-[#777d72]">
                            Payment Status: {order.payment}
                          </p>
                          <p className="text-xs text-[#777d72]">
                            Order Date: {order.date}
                          </p>
                        </div>

                        <div>
                          <h4 className="mb-3 text-sm font-semibold text-[#30362d]">
                            Delivery Information
                          </h4>
                          <p className="flex items-start gap-2 text-xs leading-5 text-[#777d72]">
                            <MapPin
                              size={15}
                              className="mt-0.5 shrink-0 text-[#399b25]"
                            />
                            Your saved delivery address will appear here once
                            connected to your account.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="rounded-2xl border border-[#e9ede5] bg-white px-5 py-16 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f0f7ed] text-[#399b25]">
                <Package size={30} />
              </div>

              <h3 className="text-lg font-semibold text-[#30362d]">
                No {activeFilter === "All" ? "" : activeFilter.toLowerCase()}{" "}
                orders found
              </h3>

              <p className="mt-2 text-sm text-[#8a9084]">
                Your orders will appear here when you place an order.
              </p>

              <Link
                to="/collection"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#399b25] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#318820]"
              >
                Explore Products
                <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </div>

        {/* Bottom Support Section */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-[#edf6e9] p-6 sm:flex-row sm:items-center sm:px-8">
          <div>
            <h3 className="font-semibold text-[#30362d]">
              Need help with your order?
            </h3>
            <p className="mt-1 text-sm text-[#777d72]">
              Our support team is here to help you.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#399b25] transition hover:text-[#28791b]"
          >
            Contact Support
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function SummaryCard({ icon: Icon, title, value, color }) {
  return (
    <div className="rounded-2xl border border-[#e9ede5] bg-white p-4 shadow-sm sm:p-5">
      <div
        className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${color}`}
      >
        <Icon size={20} />
      </div>

      <p className="text-xs text-[#858b80] sm:text-sm">{title}</p>
      <h3 className="mt-1 text-2xl font-bold text-[#30362d]">{value}</h3>
    </div>
  );
}

export default Orders;
