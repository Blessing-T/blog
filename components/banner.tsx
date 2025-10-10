"use client";
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

export function EmblaCarousel() {
  
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
             <div className="relative w-full h-[400px]">
       <Image
          src="/banner1.jpg" 
          alt="Banner"
          fill
          priority
          className="object-cover"
        />
        
        <div className="absolute inset-0 flex flex-col  bg-black/10 ">
          <h1 className="text-4xl font-bold text-red-600 mb-4 ml-10 w-1/2 mt-50">Breaking News</h1>
          <h1 className="text-2xl font-bold text-white mb-4 ml-10 w-1/2 ">Trump To Say Goodbye To King</h1>
          <p className="text-white text-lg ml-10 w-1/2"> The two leaders are expected to hold a joint press conference at the prime ministers country residence later.</p>
        </div>
      </div>
        </div>
        <div className="embla__slide">
             <div className="relative w-full h-[400px]">
       <Image
          src="/business.jpg" 
          alt="Banner"
          fill
          priority
          className="object-cover"
        />
        
        <div className="absolute inset-0 flex flex-col  bg-black/10 ">
        <h1 className="text-4xl font-bold text-red-600 mb-4 ml-10 w-1/2 mt-50">Business</h1>
          <h1 className="text-2xl font-bold text-white mb-4 ml-10 w-1/2">Empowering Ideas, Driving Success</h1>
          <p className="text-white text-lg ml-10 w-1/2"> Innovative solutions for a smarter tomorrow</p>
        </div>
      </div>
        </div>
        <div className="embla__slide">
             <div className="relative w-full h-[400px]">
       <Image
          src="/football.jpg" 
          alt="Banner"
          fill
          priority
          className="object-cover"
        />
        
        <div className="absolute inset-0 flex flex-col  bg-black/10 ">
        <h1 className="text-4xl font-bold text-red-600 mb-4 ml-10 w-1/2 mt-50">Sports</h1>
          <h1 className="text-2xl font-bold text-white mb-4 ml-10 w-1/2">Where Sports Lives</h1>
          <p className="text-white text-lg ml-10 w-1/2">Latest scores, highlights, and news from the pitch.</p>
        </div>
      </div>
        </div>
        <div className="embla__slide">
             <div className="relative w-full h-[400px]">
       <Image
          src="/technology.jpg" 
          alt="Banner"
          fill
          priority
          className="object-cover"
        />
        
        <div className="absolute inset-0 flex flex-col  bg-black/10 ">
        <h1 className="text-4xl font-bold text-red-600 mb-4 ml-10 w-1/2 mt-50">Technology</h1>
          <h1 className="text-2xl font-bold text-white mb-4 ml-10 w-1/2">Innovating Tomorrow, Today</h1>
          <p className="text-white text-lg ml-10 w-1/2">Breaking tech news, trends, and insights.</p>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}
export default EmblaCarousel;