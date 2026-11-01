import { useState, useEffect } from "react";
import Bowl from "../assets/Bowl.png";
import Juice from "../assets/Juices.png";
import Vegetables from "../assets/Vegetables.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: Bowl,
    alt: "Fresh bowl",
  },
  {
    src: Juice,
    alt: "Fresh juices",
  },
  {
    src: Vegetables,
    alt: "Fresh vegetables",
  },
];

function ImageGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = images.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Automatically move to the next slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-2 mx-7 overflow-hidden">
      {/* Image Slider */}
      <div
        className="flex transition-transform duration-700 ease-in-out will-change-transform"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-[0_0_100%] min-w-0 overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="block w-full h-[250px] sm:h-[350px] lg:h-[450px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/70"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition hover:bg-black/70"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

export default ImageGallery;
