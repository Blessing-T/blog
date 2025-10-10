"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/pic1.jpg", alt: "Featured Post 1" },
  { src: "/slide2.jpg", alt: "Featured Post 2" },
  { src: "/slide3.jpg", alt: "Featured Post 3" },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
     
      <div className="flex justify-between items-center">
       
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1 w-8 rounded-sm transition-all duration-300 ${
                current === index ? "bg-teal-500" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        
        <div className="flex space-x-4">
          <button
            onClick={prevSlide}
            className="text-gray-400 hover:text-gray-700 transition"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={36} strokeWidth={1.5} />
          </button>
          <button
            onClick={nextSlide}
            className="text-gray-400 hover:text-gray-700 transition"
            aria-label="Next Slide"
          >
            <ChevronRight size={36} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={400}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
