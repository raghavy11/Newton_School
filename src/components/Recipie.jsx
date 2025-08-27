// Recipe.jsx
import React from "react";

export default function Recipe() {
  const stats = [
    {
      badge: "ACCESS 3000+ COMPANIES",
      badgeColor: "bg-orange-100 text-orange-600",
      title: "Get Referrals",
      desc: "Boost your job prospects with referrals from our vast network of companies.",
      image: "/logos/image1.webp", // collage of logos
    },
    {
      badge: "TAILORED INTERVIEW PREP",
      badgeColor: "bg-blue-100 text-blue-600",
      title: "Company-Specific Prep",
      desc: "Get ready for interviews with customized preparation for your target companies.",
      image: "/logos/image2.avif", // interview mockup
    },
    {
      badge: "INTERACTIVE CODING SESSIONS",
      badgeColor: "bg-purple-100 text-purple-600",
      title: "Live Coding Practice",
      desc: "Improve your skills with live coding exercises and real time feedback.",
      image: "/logos/image3.jpg", // coding mockup
    },
    {
      badge: "LIFETIME PLACEMENT ASSISTANCE",
      badgeColor: "bg-green-100 text-green-600",
      title: "Career Support",
      desc: "Continue to receive job opportunities and support as a valued alumnus of Newton School.",
      image: "/logos/image4.webp", // career mockup
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <p className="text-sm font-semibold uppercase text-gray-500 text-center md:text-left">
          Welcome to the Outcome Powerhouse
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-10 text-center md:text-left">
          Your Recipe for a Rockstar career
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col md:flex-row items-center md:items-start"
            >
              {/* Left Side - Text */}
              <div className="flex-1 md:pr-6 text-center md:text-left">
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-md mb-3 ${stat.badgeColor}`}
                >
                  {stat.badge}
                </span>
                <h3 className="text-lg sm:text-xl font-bold">{stat.title}</h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed">
                  {stat.desc}
                </p>
              </div>

              {/* Right Side - Image */}
              <div className="flex-shrink-0 w-full md:w-[45%] mt-4 md:mt-0">
                <img
                  src={stat.image}
                  alt={stat.title}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
