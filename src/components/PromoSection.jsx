// PromoSection.jsx
import React from "react";

const PromoSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#fff7e6] to-[#ffe9c9] rounded-2xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-6">
          Your first step to find your dream tech job.
        </h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold px-5 py-2 sm:px-6 sm:py-3 rounded-md shadow-md transition">
          Start Learning
        </button>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
        <img
          src="/logos/marketing.avif"
          alt="Newton Students"
          className="max-h-52 sm:max-h-60 md:max-h-64 object-contain"
        />
      </div>
    </section>
  );
};

export default PromoSection;
