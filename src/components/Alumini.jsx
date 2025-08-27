// Alumni.jsx
import React, { useRef } from "react";
import { Linkedin, ChevronLeft, ChevronRight } from "lucide-react";

export default function Alumni() {
  const scrollRef = useRef(null);

  const alumni = [
    {
      name: "Shubham Rane",
      role: "Product Analyst",
      company: "cult.fit",
      companyLogo: "/logos/cultfit.png",
      image: "/logos/shubham.jpeg",
      before: "Fresher",
      after: "Product Analyst",
    },
    {
      name: "Megha Chouhan",
      role: "Data Analyst",
      company: "Rocket Learning",
      companyLogo: "/logos/rocket.png",
      image: "/logos/megha.jpeg",
      before: "Research Analyst",
      after: "Data Analyst",
    },
    {
      name: "Mansi Mishra",
      role: "MIS Executive",
      company: "IndiGo",
      companyLogo: "/logos/indigo.png",
      image: "/logos/mansi.jpeg",
      before: "HR Consultant",
      after: "MIS Executive",
    },
    {
      name: "Yash Kumar",
      role: "Product Analyst Intern",
      company: "Spinny",
      companyLogo: "/logos/spinny.jpg",
      image: "/logos/yash.jpeg",
      before: "Fresher",
      after: "Product Analyst Intern",
    },
    {
      name: "Niharika Nishu",
      role: "SDE 2 (Backend)",
      company: "Meesho",
      companyLogo: "/logos/meesho.png",
      image: "/logos/niharika.jpeg",
      before: "Intern",
      after: "SDE 2 (Backend)",
    },
    {
      name: "Shubham",
      role: "Backend Developer",
      company: "Incred",
      companyLogo: "/logos/incred.png",
      image: "/logos/shivam.jpeg",
      before: "Fresher",
      after: "Backend Developer",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 320; // approx card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-purple-100 py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 text-center">
        {/* Header */}
        <p className="text-sm font-semibold uppercase text-purple-600 tracking-wider">
          Placement Stories
        </p>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-6 md:mb-10">
            Newton Alumni Network
          </h2>

          {/* Navigation Arrows (only visible on md+) */}
          <div className="hidden md:flex gap-2 mb-6 md:mb-0">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Alumni Scrollable Row */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth hide-scrollbar pb-4"
          >
            {alumni.map((person, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden w-72 sm:w-80 flex-shrink-0"
              >
                {/* Alumni Image */}
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-56 sm:h-64 object-cover"
                />

                {/* Details */}
                <div className="p-4">
                  <h3 className="font-bold text-lg">{person.name}</h3>
                  <p className="text-gray-600 text-sm">{person.role}</p>

                  {/* Company */}
                  <div className="mt-2 flex items-center gap-2">
                    <img
                      src={person.companyLogo}
                      alt={person.company}
                      className="h-5 object-contain"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {person.company}
                    </span>
                  </div>

                  {/* Before / After */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mt-4 text-sm">
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-center">
                      Before: {person.before}
                    </span>
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-center">
                      After: {person.after}
                    </span>
                  </div>

                  {/* LinkedIn Button */}
                  <button className="mt-4 flex items-center justify-center gap-2 w-full border rounded-md py-2 px-3 text-blue-700 hover:bg-blue-50">
                    <Linkedin className="w-4 h-4" />
                    Connect on LinkedIn
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-sm max-w-2xl text-center md:text-left">
            Work hard with us, with dedication and commitment, and watch
            multiple opportunities grab you and transform your future!
          </p>
          <button className="bg-white border px-5 py-2 rounded-md shadow-sm hover:bg-gray-50">
            View more Placement Stories
          </button>
        </div>
      </div>

      {/* Custom scrollbar hide */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari */
        }
      `}</style>
    </section>
  );
}
