// components/Testimonials.tsx
"use client";

import React, { useState, useEffect } from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    quote: "Working with this developer was a game-changer. Their attention to detail and innovative solutions elevated our product to new heights.",
    image: "/profile.jpg"
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    company: "Digital Solutions",
    quote: "An exceptional team player with outstanding technical skills. They consistently delivered high-quality code under tight deadlines.",
    image: "/profile.jpg"
  },
  {
    name: "Emily Rodriguez",
    role: "CEO",
    company: "StartUp Inc",
    quote: "Their ability to turn complex requirements into elegant solutions is unmatched. A true asset to any development team.",
    image: "/profile.jpg"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Manual navigation
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl text-center font-bold text-gray-900 mb-12">
        Testimonials
      </h2>
      <div className="relative overflow-hidden">
        {/* Slider Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-full flex-shrink-0 p-6 bg-white rounded-lg shadow-md"
            >
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s photo`}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
        >
          ‹
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
        >
          ›
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;