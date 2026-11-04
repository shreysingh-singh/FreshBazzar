import React from 'react'
import Title from './Title'
import { MoveRight } from 'lucide-react';
import MoveRightComponent from './MoveRight';


function InspirationSection() {
    const stories = [
      {
        id: 1,
        category: "RECIPES",
        readTime: "5 MIN READ",
        title: "Your new favourite green salad",
        image:
          "https://plus.unsplash.com/premium_photo-1691054888146-0858efd80a65?w=900&auto=format&fit=crop&q=60",
      },
      {
        id: 2,
        category: "FRESHNESS TIPS",
        readTime: "4 MIN READ",
        title: "Keep your greens fresher, longer",
        image:
          "https://plus.unsplash.com/premium_photo-1661676001262-82e9bcc079c7?w=900&auto=format&fit=crop&q=60",
      },
      {
        id: 3,
        category: "HEALTHY LIVING",
        readTime: "6 MIN READ",
        title: "Simple ways to eat fresh every day",
        image:
          "https://plus.unsplash.com/premium_photo-1664302148512-ddea30cd2a92?w=900&auto=format&fit=crop&q=60",
      },
    ];

  return (
    <section className="w-full px-5 sm:px-8 md:px-10 lg:px-12 py-12 md:py-16">
      {/* Section Header */}
      <div className="flex items-center justify-between ">
        <Title
          text1={"A little inspiration for your table"}
          text2={"simple recipes. Fresh ideas.Everyday goodness."}
        />
        <MoveRightComponent text={'Explore the journal'}/>
      </div>

      {/* Journal Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 mt-5 mr-5">
        {stories.map((story) => (
          <article key={story.id} className="group cursor-pointer">
            {/* Image */}
            <div className="w-full h-[220px] sm:h-[230px] lg:h-[240px] overflow-hidden rounded-2xl bg-[#F5F7F0]">
              <img
                src={story.image}
                alt={story.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="pt-5 px-1">
              {/* Category and Read Time */}
              <div className="flex items-center text-[10px] font-light tracking-widest text-green-700">
                <span>{story.category}</span>
                <span className="ml-1 font-extrabold">·</span>
                <span className="ml-1">{story.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="mt-3 text-lg sm:text-xl font-medium tracking-tight text-[#292D27] leading-snug">
                {story.title}
              </h3>

              {/* Read More */}
              <div className="flex items-center gap-2 mt-4 text-xs sm:text-sm font-medium text-gray-500">
                <span>Read the story</span>
                <MoveRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default InspirationSection





