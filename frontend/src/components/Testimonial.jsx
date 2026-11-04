import React from "react";
import reviews from "../data/review";

// Individual review card
const Testimonial = ({ review }) => {
  if (!review) return null;

  return (
    <div className="p-5 rounded-xl mx-3 bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 w-72 sm:w-80 shrink-0">
      {/* Customer details */}
      <div className="flex gap-3 items-center">
        <img
          className="w-11 h-11 rounded-full object-cover"
          src={review.image}
          alt={review.name}
          loading="lazy"
        />

        <div className="flex flex-col min-w-0">
          <p className="font-semibold text-gray-800 truncate">{review.name}</p>

          <span className="text-xs text-gray-500">{review.handle}</span>
        </div>
      </div>

      {/* Rating */}
      <div
        className="flex gap-1 mt-4 text-yellow-500 text-sm"
        aria-label="5 out of 5 stars"
      >
        {"★★★★★"}
      </div>

      {/* Review */}
      <p className="text-sm leading-6 py-3 text-gray-700 min-h-[100px]">
        {review.review}
      </p>

      {/* Date */}
      <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-gray-100">
        <span>Customer review</span>
        <span>{review.date}</span>
      </div>
    </div>
  );
};

// Main customer reviews section
const CustomerReviews = () => {
  // Duplicate reviews for continuous scrolling
  const marqueeReviews = [...reviews, ...reviews];

  return (
    <section className="w-full py-14 md:py-20 overflow-hidden bg-gray-100 border-t-1 border-gray-200">
      {/* Heading */}
      <div className="text-center px-4 mb-8 md:mb-12">
        <p className="text-sm font-semibold uppercase tracking-[3px] text-green-700 mb-3">
          Customer Stories
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#26352a]">
          Loved by our customers
        </h2>

        <p className="text-sm sm:text-base text-[#777d70] mt-3 max-w-xl mx-auto">
          Freshness you can taste, quality you can trust. Here's what our
          FreshBazzar customers say.
        </p>
      </div>

      {/* Marquee animation */}
      <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-inner {
          animation: marqueeScroll 35s linear infinite;
          width: max-content;
        }

        .marquee-row:hover .marquee-inner {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-inner {
            animation: none;
          }
        }
      `}</style>

      {/* Single scrolling row */}
      <div className="marquee-row w-full overflow-hidden relative">
        {/* Left gradient */}
        <div className="absolute left-0 top-0 h-full w-12 sm:w-24 z-10 pointer-events-none bg-gradient-to-r from-[#f5f7f0] to-transparent" />

        <div className="marquee-inner flex pt-5 pb-6">
          {marqueeReviews.map((review, index) => (
            <Testimonial key={`${review.id}-${index}`} review={review} />
          ))}
        </div>

        {/* Right gradient */}
        <div className="absolute right-0 top-0 h-full w-12 sm:w-24 z-10 pointer-events-none bg-gradient-to-l from-[#f5f7f0] to-transparent" />
      </div>
    </section>
  );
};

export default CustomerReviews;
