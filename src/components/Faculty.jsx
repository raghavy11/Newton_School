// Faculty.jsx
import { Linkedin } from "lucide-react";
import React, { useState } from "react";

export default function Faculty() {
  const faculty = [
    {
      name: "Gladden Rumao",
      role: "Technical Instructor and SDE",
      company: "BARCLAYS",
      companyLogo: "/logos/barclays.png",
      image: "/logos/gladden.jpeg",
    },
    {
      name: "Vishal Sharma",
      role: "Software Engineer-2",
      company: "zepto",
      companyLogo: "/logos/zepto.png",
      image: "/logos/vishal.jpeg",
    },
    {
      name: "Bhavesh Bansal",
      role: "Senior Software Engineer",
      company: "Appbrew",
      companyLogo: "/logos/app.webp",
      image: "/logos/bhavesh.jpeg",
    },
    {
      name: "Rahul Jaiswal",
      role: "Full Stack (MERN) Trainer",
      company: "DUCAT",
      companyLogo: "/logos/ducat.webp",
      image: "/logos/rahul.jpeg",
    },
    {
      name: "Rohit Arora",
      role: "Senior Software Engineer",
      company: "Microsoft",
      companyLogo: "/logos/microsoft.png",
      image: "/logos/rohit.jpeg",
    },
  ];

  const [current, setCurrent] = useState(0);

  // visible cards count depending on screen
  const getVisibleCards = () => {
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 4; // desktop
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  React.useEffect(() => {
    const handleResize = () => setVisibleCards(getVisibleCards());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    if (current > 0) setCurrent(current - 1);
  };
  const nextSlide = () => {
    if (current < faculty.length - visibleCards) setCurrent(current + 1);
  };

  return (
    <section className="bg-[#fef6e4] py-16">
      <div className="container mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <p className="text-sm font-semibold uppercase text-orange-500">
          Introducing the Faculty
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 sm:mb-10">
            Learn From The Best
          </h2>

          {/* Navigation Arrows */}
          <div className="flex gap-2 self-start sm:self-auto">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
            >
              →
            </button>
          </div>
        </div>

        {/* Faculty Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${(current * 100) / visibleCards}%)`,
              width: `${(faculty.length * 100) / visibleCards}%`,
            }}
          >
            {faculty.map((person, index) => (
              <div
                key={index}
                className="bg-white rounded-md shadow-sm overflow-hidden flex-shrink-0 px-2"
                style={{ width: `${100 / visibleCards}%` }}
              >
                {/* Faculty Image */}
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-64 sm:h-72 object-cover"
                />

                {/* Details */}
                <div className="p-4 flex flex-col justify-between relative">
                  <a
                    href="#"
                    className="absolute top-4 right-4 text-blue-600 hover:text-blue-800"
                  >
                    <Linkedin size={20} />
                  </a>

                  <h3 className="font-bold text-lg">{person.name}</h3>
                  <p className="text-gray-600 text-sm">{person.role}</p>

                  <div className="mt-2 flex items-center gap-2">
                    {person.companyLogo && (
                      <img
                        src={person.companyLogo}
                        alt={person.company}
                        className="h-5 object-contain"
                      />
                    )}
                    <span className="text-sm font-medium text-gray-700">
                      {person.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>

        {/* Footer */}
        <p className="mt-10 text-center text-gray-700 text-sm max-w-2xl mx-auto">
          Our faculty bridges the gap between industry and academia, giving you
          the best of both worlds.
        </p>
      </div>
    </section>
  );
}
