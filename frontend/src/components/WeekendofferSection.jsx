import React from 'react'

function WeekendofferSection() {
  return (
    <div className="w-full h-[240px] p-5 flex items-center gap-6 max-sm:h-auto max-sm:p-3">
      {/* Main Banner */}
      <div className="w-full h-full bg-green-600 rounded-2xl flex items-center justify-between overflow-hidden px-6 max-md:px-4 max-sm:flex-col max-sm:items-stretch max-sm:gap-5 max-sm:py-5">
        {/* Left Section: Image + Text */}
        <div className="flex items-center gap-6 h-full min-w-0 max-lg:gap-4 max-sm:w-full">
          {/* Image */}
          <div className="h-44 shrink-0 overflow-hidden rounded-2xl shadow-2xl max-md:h-36 max-sm:h-32 max-sm:w-28">
            <img
              src="https://plus.unsplash.com/premium_photo-1726743655748-6d18a6fcce83?q=80&w=2129&auto=format&fit=crop"
              alt="Vegetable box"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center text-white min-w-0">
            <p className="text-xs font-extralight tracking-widest font-medium mb-3 text-green-100 max-sm:text-[9px] max-sm:mb-2">
              YOUR WEEK, FRESHLY SORTED
            </p>

            <h3 className="text-4xl font-extralight tracking-normal mb-2 max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
              Meet your weekly fresh box.
            </h3>

            <p className="text-xs text-green-100 leading-relaxed max-sm:text-[10px]">
              A seasonal selection of farm-picked goodness.Less planning,more
              delicious moments.
            </p>
          </div>
        </div>

        {/* Right Section: Price + Button */}
        <div className="flex flex-col items-end gap-4 shrink-0 max-sm:flex-row max-sm:items-center max-sm:justify-between max-sm:w-full">
          <h2 className="text-xl font-semibold text-white max-sm:text-base">
            From $24.99
          </h2>

          <button className="bg-white text-green-800 px-5 py-2 rounded-full text-sm font-medium hover:bg-green-50 transition-colors max-sm:px-3 max-sm:text-xs">
            Discover fresh boxes
          </button>
        </div>
      </div>
    </div>
  );
}

export default WeekendofferSection


