import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const routeNames = {
  "/": "Home",
  "/shop": "Shop",
  "/cart": "Shopping Cart",
  "/checkout": "Checkout",
  "/account": "My Account",
  "/orders": "Orders",
  "/wishlist": "Wishlist",
};

export default function Breadcrumb({ productName }) {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter(Boolean);

  const breadcrumbs = [
    { name: "Home", path: "/" },
    ...pathnames.map((segment, index) => {
      const path = `/${pathnames.slice(0, index + 1).join("/")}`;

      return {
        name:
          index === pathnames.length - 1 && productName
            ? productName
            : routeNames[path] ||
              segment
                .replace(/-/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase()),
        path,
      };
    }),
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-2 text-xs mb-3 text-stone-400"
    >
      {breadcrumbs.map((item, index) => {
        const isLast = index === breadcrumbs.length - 1;

        return (
          <div key={item.path} className="flex items-center gap-2">
            {index === 0 ? (
              <Link
                to="/"
                aria-label="Home"
                className="text-[#475569] hover:text-[#399b25] transition-colors"
              >
                <Home size={15} strokeWidth={1.8} />
              </Link>
            ) : (
              <>
                <ChevronRight size={15} className="text-gray-300" />

                {isLast ? (
                  <span aria-current="page" className="text-[#399b25]">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="text-gray-500 hover:text-[#399b25] transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </>
            )}
          </div>
        );
      })}
    </nav>
  );
}
