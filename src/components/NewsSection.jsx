// NewsSection.jsx
import React from "react";
import { Newspaper } from "lucide-react";

const NewsSection = () => {
  const newsImages = [
    "/logos/n7.jpg",
    "/logos/n1.jpg",
    "/logos/n2.jpeg",
    "/logos/n3.jpeg",
    "/logos/n4.jpeg",
    "/logos/n5.jpeg",
    "/logos/n6.png",
  ];

  return (
  <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="flex items-center gap-2 mb-8">
          <Newspaper className="w-6 h-6 text-purple-600" />
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900">
            Newton School in News
          </h2>
        </div>

        {/* Scrolling News Images */}
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll whitespace-nowrap">
            {[...newsImages, ...newsImages].map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-56 sm:w-64 md:w-72 h-64 sm:h-80 md:h-80 rounded-xl shadow-lg bg-white mx-2 md:mx-3 overflow-hidden border"
              >
                <img
                  src={src}
                  alt={`news-${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind CSS animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default NewsSection;
