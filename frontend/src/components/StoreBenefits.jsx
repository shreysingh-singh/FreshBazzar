import { Headset, ShieldCheck, Sprout, Truck } from "lucide-react";

function StoreBenefits() {
  return (
    <div className="p-4 sm:p-5 md:p-6 px-4 sm:px-6 md:px-10 border border-gray-200 flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6 lg:gap-4 mt-3">
      <div className="flex items-center gap-3 w-full lg:w-auto">
        <div className="text-green-600 shrink-0">
          <Truck />
        </div>
        <div>
          <h4 className="font-extralight text-slate-900">Delivered fresh</h4>
          <p className="text-gray-400 font-extralight text-xs">
            Convenient daily delivery
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 w-full lg:w-auto">
        <div className="text-green-600 shrink-0">
          <Sprout />
        </div>
        <div>
          <h4 className="font-extralight text-slate-900">
            farm-picked quality
          </h4>
          <p className="text-gray-400 font-extralight text-xs">
            Good food,nothing extra
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 w-full lg:w-auto">
        <div className="text-green-600 shrink-0">
          <ShieldCheck />
        </div>
        <div>
          <h4 className="font-extralight text-slate-900">
            Freshness guaranteed
          </h4>
          <p className="text-gray-400 font-extralight text-xs">
            Love it or we make it right
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 w-full lg:w-auto">
        <div className="text-green-600 shrink-0">
          <Headset />
        </div>
        <div>
          <h4 className="font-extralight text-slate-900">Hear to help</h4>
          <p className="text-gray-400 font-extralight text-xs">
            friendly support,7 days a week
          </p>
        </div>
      </div>
    </div>
  );
}

export default StoreBenefits;
