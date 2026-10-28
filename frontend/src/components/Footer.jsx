import { Sprout } from "lucide-react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-[#f5f7f0] w-full mx-auto text-[#465448] pt-8 lg:pt-12 px-4 sm:px-8 md:px-16 lg:px-28 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-8 md:gap-12">
        <div className="lg:col-span-3 space-y-6">
          <a href="https://prebuiltui.com" className="block">
            <div className="text-green-500 flex items-center">
              <Sprout />
              <h4 className="flex text-black text-xl font-medium ml-2">
                Freshbazar <p className="text-green-500 font-bold">.</p>
              </h4>
            </div>
          </a>

          <div className="text-sm/6 text-[#465448] max-w-96">
            <p>
              A little closer to the farm. A lot fresh on your table.
              <br />
              Your everyday essentials, thoughtfully picked and <br />
              delivered with care.
            </p>

            <div className="mt-6">
              <h3 className="font-medium text-[#23452D]">
                hellofreshbazzar@gmail.com
              </h3>
              <p className="mt-5 text-[#465448]">
                Mon-Sun, 8am-8pm. +1 (800) 555-1023
              </p>
            </div>
          </div>

          <div className="flex gap-5 md:gap-6 order-1 md:order-2">
            {/* X (Twitter) */}
            <a
              href="#"
              aria-label="X"
              className="text-[#23452D] hover:text-[#718071] transition-colors duration-200"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>

            {/* Github */}
            <a
              href="#"
              aria-label="GitHub"
              className="text-[#23452D] hover:text-[#718071] transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-[#23452D] hover:text-[#718071] transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="#"
              aria-label="YouTube"
              className="text-[#23452D] hover:text-[#718071] transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0" />
                <path d="m10 15 5-3-5-3z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="text-[#23452D] hover:text-[#718071] transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-28 items-start">
          {/* Products */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-[#23452D]">
              Discover
            </h3>
            <ul className="space-y-3 text-sm text-[#9ca59c]">
              <li>
                <a
                  href="#"
                  className="hover:text-[#0f8d39] transition-colors duration-200"
                >
                  Shop all
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#0f8d39] transition-colors duration-200"
                >
                  Fresh fruits
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#0f8d39] transition-colors duration-200"
                >
                  Vegetables
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#0f8d39] transition-colors duration-200"
                >
                  Daily deals
                </a>
              </li>
            </ul>
          </div>

          {/* FreshBazzar */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-[#23452D]">
              Fresh Bazzar
            </h3>
            <ul className="space-y-3 text-sm text-[#9ca59c]">
              <li>
                <a
                  href="#"
                  className="hover:text-[#0f8d39] transition-colors duration-200"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#0f8d39] transition-colors duration-200"
                >
                  Our growers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#0f8d39] transition-colors duration-200"
                >
                  Fresh journal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#0f8d39] transition-colors duration-200"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-semibold text-sm mb-4 text-[#23452D]">
              We can help
            </h3>
            <ul className="space-y-3 text-sm text-[#9ca59c]">
              <li>
                <a
                  href="#"
                  className="hover:text-[#0f8d39] transition-colors duration-200"
                >
                  Delivery information
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#0f8d39] transition-colors duration-200"
                >
                  Returns & refunds
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a
                  href="#"
                  className="hover:text-[#0f8d39] transition-colors duration-200"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#0f8d39] transition-colors duration-200"
                >
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-3xl h-full max-h-64 bg-green-500 rounded-full blur-[170px] pointer-events-none" />
        {/* Copyright */}
        <div className="max-w-7xl mx-auto mt-12 pt-4 border-t border-gray-300 flex justify-between items-center">
          <p className="text-[#718071] text-sm mt-1">
            © 2026 FreshBazzar. Fresh food. Happy living.
          </p>
          <p className="text-sm text-[#718071]">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
