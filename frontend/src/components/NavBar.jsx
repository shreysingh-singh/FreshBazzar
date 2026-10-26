import { Menu, ChevronDown, Truck } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Deals", href: "/deals" },
    { name: "Our Story", href: "/our-story" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="w-full border-b  bg-[#191f19]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Categories Button */}
        <button
          type="button"
          className="flex shrink-0 items-center gap-3 bg-green-600 px-4 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-green-700 sm:px-6"
        >
          <Menu size={21} />
          <span>All Categories</span>
          <ChevronDown size={17} />
        </button>

        {/* Navigation Links */}
        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative py-5 text-sm font-medium text-white transition-colors duration-200 hover:text-green-600"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Delivery Message */}
        <div className="hidden shrink-0 items-center gap-2 text-green-700 md:flex">
          <Truck size={23} strokeWidth={1.8} />
          <p className="text-sm font-medium text-white">Fresh delivery, every day</p>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex items-center justify-center gap-5 overflow-x-auto border-t border-gray-100 px-4 py-3 lg:hidden">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="shrink-0 text-sm font-medium text-gray-700 transition-colors hover:text-green-600"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

