import React from "react";
import {
  Leaf,
  Heart,
  ShieldCheck,
  Truck,
  ArrowRight,
  Sprout,
  ShoppingBasket,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  const features = [
    {
      icon: Leaf,
      title: "Freshness First",
      description:
        "We believe fresh food makes a difference. That's why we focus on bringing quality fruits and vegetables to your doorstep.",
    },
    {
      icon: ShieldCheck,
      title: "Quality You Can Trust",
      description:
        "Every product deserves attention. We aim to make your grocery shopping reliable, simple, and worry-free.",
    },
    {
      icon: Truck,
      title: "Convenience Delivered",
      description:
        "From browsing to delivery, we make everyday grocery shopping easier so you can spend more time on what matters.",
    },
    {
      icon: Heart,
      title: "Made for Everyday Living",
      description:
        "We want to make better everyday food choices accessible to every household.",
    },
  ];

  const promises = [
    "Carefully selected fresh produce",
    "Simple and convenient online shopping",
    "A wide range of everyday essentials",
    "A customer-first shopping experience",
  ];

  return (
    <main className="overflow-hidden bg-white">
      {/* HERO / ABOUT SECTION */}
      <section className="px-4 py-14 sm:px-8 sm:py-20 lg:px-16 xl:px-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT IMAGE */}
          <div className="relative mx-auto w-full max-w-[600px] lg:mx-0">
            <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full bg-[#edf6e9]" />

            <div className="relative overflow-hidden rounded-[28px]">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&auto=format&fit=crop&q=85"
                alt="Fresh fruits and vegetables at FreshBazzar"
                className="h-[380px] w-full object-cover sm:h-[480px] lg:h-[550px]"
              />
            </div>

            {/* Floating freshness card */}
            <div className="absolute -bottom-6 right-4 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:-right-6 sm:p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#edf6e9] text-[#399b25]">
                <Sprout size={26} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#30362d]">
                  Freshness Matters
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Good food, better everyday
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="pt-5 lg:pt-0">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#edf6e9] px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-[#399b25]">
              <Leaf size={15} />
              About FreshBazzar
            </div>

            <h1 className="max-w-xl text-4xl font-bold leading-[1.2] tracking-tight text-[#252a22] sm:text-5xl xl:text-[58px]">
              Bringing Freshness
              <span className="text-[#399b25]"> Closer to You.</span>
            </h1>

            <p className="mt-7 text-base leading-8 text-[#73796e]">
              At FreshBazzar, we believe that good food begins with fresh
              ingredients. Our goal is to make everyday grocery shopping simpler
              by bringing a variety of fresh fruits, vegetables, leafy greens,
              and daily essentials together in one place.
            </p>

            <p className="mt-4 text-base leading-8 text-[#73796e]">
              We are building a shopping experience where quality, convenience,
              and customer satisfaction come first. Whether you're planning your
              weekly groceries or picking up something fresh for today,
              FreshBazzar is here to make it easier.
            </p>

            <div className="mt-8 space-y-4">
              {promises.map((promise, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={19} className="shrink-0 text-[#399b25]" />
                  <p className="text-sm font-medium text-[#454b40]">
                    {promise}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/collection"
              className="mt-9 inline-flex items-center gap-3 rounded-xl bg-[#399b25] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-[#318820] hover:shadow-lg"
            >
              Explore Our Collection
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* BRAND MESSAGE */}
      <section className="bg-[#f5f8f1] px-4 py-16 sm:px-8 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#399b25] shadow-sm">
            <Heart size={27} />
          </div>

          <p className="text-xs font-semibold uppercase tracking-[3px] text-[#399b25]">
            What We Believe
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#252a22] sm:text-4xl lg:text-5xl">
            Fresh food isn't a luxury.
            <span className="text-[#399b25]"> It's everyday goodness.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-[#73796e] sm:text-base">
            We believe everyone deserves access to quality everyday groceries.
            That's the idea behind FreshBazzar: making fresh choices easier, one
            shopping experience at a time.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-4 py-16 sm:px-8 sm:py-20 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#399b25]">
              The FreshBazzar Difference
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#252a22] sm:text-4xl">
              More Than Just Groceries
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#858b80] sm:text-base">
              We want every shopping experience to feel fresh, easy, and
              dependable.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-[#edf0e9] bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-[#d7e9ce] hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf6e9] text-[#399b25] transition duration-300 group-hover:bg-[#399b25] group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <h3 className="text-lg font-bold text-[#30362d]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#858b80]">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-4 pb-16 sm:px-8 sm:pb-20 lg:px-16 xl:px-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#399b25] px-6 py-14 text-center sm:px-12 sm:py-16">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10" />
          <div className="absolute -bottom-28 -left-16 h-64 w-64 rounded-full border-[35px] border-white/10" />

          <div className="relative z-10">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
              <ShoppingBasket size={29} />
            </div>

            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Make Every Meal a Fresh Start.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
              Discover fresh produce and everyday essentials for your home. Your
              next grocery experience starts here.
            </p>

            <Link
              to="/collection"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-[#399b25] transition duration-300 hover:-translate-y-1 hover:bg-[#f2f7ef]"
            >
              Start Shopping
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
