import { useState, useRef, useEffect } from "react";
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
  const sliderRef = useRef(null);

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
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  // Move the slider whenever the current slide changes
  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider || !slider.children[0]) return;

    const slideWidth = slider.children[0].clientWidth;

    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }, [currentSlide]);

  // Recalculate slide position when the window resizes
  useEffect(() => {
    const handleResize = () => {
      const slider = sliderRef.current;

      if (!slider || !slider.children[0]) return;

      const slideWidth = slider.children[0].clientWidth;

      slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [currentSlide]);

  return (
    <div className="relative px-7 mt-2 w-full overflow-hidden ">
      {/* Image Slider */}
      <div
        ref={sliderRef}
        className="flex w-full transition-transform duration-700 ease-in-out will-change-transform"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {images.map((image) => (
          <div key={image.src} className="w-full shrink-0">
            <img
              src={image.src}
              alt={image.alt}
              className="block h-[250px] w-full object-cover sm:h-[350px] lg:h-[450px]"
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
