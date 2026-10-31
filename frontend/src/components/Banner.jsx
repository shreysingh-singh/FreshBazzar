import React from 'react'

function Banner() {
    console.log('banner is render');
    
  return (
    <div className="w-2/2 p-13 flex items-center justify-between">
      {/* Banner-1  */}
      <div className="h-60 bg-green-100 border border-zinc-200 rounded-[18px] flex gap-5 group hover:border-zinc-300 transition duration-300 overflow-hidden hover:-translate-y-1 hover:shadow-sm">
        {/* Text Content */}
        <div className="flex-1 min-w-0 flex flex-col justify-center py-5 pl-6">
          <p className="text-sm font-normal text-green-700 mb-4">
            STRAIGHT FROM THE FARM
          </p>

          <h2 className="text-2xl font-semibold mb-3 tracking-wide">
            A little greener. A lot <br /> better.
          </h2>

          <button className="w-fit text-green-800 rounded-full px-5 py-1.5 text-sm hover:bg-zinc-100 transition-colors">
            Shop the collection
          </button>
        </div>

        {/* Image */}
        <div className="w-1/2 h-full shrink-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1620745994925-0e5771eed960?q=80&w=2070&auto=format&fit=crop"
            alt="Green leaves"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Banner-2  */}
      <div className="h-60 bg-orange-100 border border-zinc-200 rounded-[18px] flex gap-5 group hover:border-zinc-300 transition duration-300 overflow-hidden hover:-translate-y-1 hover:shadow-sm">
        {/* Text Content */}
        <div className="flex-1 min-w-0 flex flex-col justify-center py-5 pl-6">
          <p className="text-sm font-normal text-green-700 mb-4">
            SWEET SAVINGS . UP TO 20% OFF
          </p>

          <h2 className="text-2xl font-semibold mb-3 tracking-wide">
            Bring home a little <br /> sunshine.
          </h2>

          <button className="w-fit text-green-800 bg-green-50 rounded-full px-5 py-1.5 text-sm hover:bg-zinc-100 transition-colors">
            Shop the collection
          </button>
        </div>

        {/* Image */}
        <div className="w-1/2 h-full shrink-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1741422707696-1106a9848670?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="Green leaves"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner
