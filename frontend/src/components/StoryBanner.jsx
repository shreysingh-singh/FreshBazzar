import React from 'react'

function StoryBanner() {
  return (
    <section className="w-full bg-[#F7F9F5] px-5 sm:px-8 md:px-12 lg:px-20 py-10 md:py-12 mt-7 mb-7">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-14">
        {/* Left: Farm Image */}
        <div className="w-full h-[240px] sm:h-[300px] lg:h-[330px] overflow-hidden rounded-2xl">
          <img
            src="https://plus.unsplash.com/premium_photo-1681910885048-add4b980d2f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="Local farmer harvesting fresh vegetables"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center">
          <p className="text-xs sm:text-sm font-medium tracking-wide text-[#348A25] mb-4">
            ROOTED IN SOMETHING GOOD
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-tight leading-tight text-[#292D27] mb-5">
            Closer to the farm. Fresher on your table.
          </h2>

          <p className="text-sm sm:text-base font-normal leading-relaxed text-[#82877D] mb-6 max-w-[600px]">
            We work with growers who care as much about good food as you do.
            Shorter journeys, careful picking and honest prices — that's the
            FreshBazzar way.
          </p>

          {/* Statistics */}
          <div className="flex items-center gap-12 sm:gap-16 mb-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#348A25]">
                50+
              </h3>
              <p className="text-xs text-[#82877D] mt-1">
                trusted local growers
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#348A25]">
                100%
              </h3>
              <p className="text-xs text-[#82877D] mt-1">freshness promise</p>
            </div>
          </div>

          {/* Button */}
          <div>
            <button className="bg-[#EFF7E9] text-[#348A25] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#E4F0DA] transition-colors duration-300">
              Get to know us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


export default StoryBanner;
