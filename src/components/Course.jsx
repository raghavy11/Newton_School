// Course.jsx
import React from "react";

export default function Course() {
  const courses = [
    {
      title: "Data Science & Artificial Intelligence",
      label: "ONLINE",
      duration: "14 MONTHS",
      start: "Sep 08, 2025",
      scholarship: "Yes",
      emi: "Rs. 7,200",
      eligibility: "Open for All",
      highlights: [
        "Get a professional certificate on completion of course",
        "Unlimited mock interviews for your interview practice",
        "Access to 10,000+ coding questions in our Arena",
        "100% Placement Assistance (Lifetime)",
        "No coding experience required",
      ],
      students: "1,200+ Students already enrolled",
      color: "blue",
    },
    {
      title: "Advanced Full Stack Development",
      label: "ONLINE",
      duration: "6-8 MONTHS",
      start: "Sep 10, 2025",
      scholarship: "Yes",
      emi: "Rs. 6,167",
      eligibility: "Open for All",
      highlights: [
        "Get a professional certificate on completion of course",
        "Unlimited mock interviews for your interview practice",
        "Access to 10,000+ coding questions in our Arena",
        "100% Placement Assistance (Lifetime)",
        "No coding experience required",
      ],
      students: "6,300+ Students already enrolled",
      color: "green",
    },
  ];

  return (
 <section className="relative bg-gray-50 min-h-screen flex items-center">
  <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm sm:text-base font-semibold uppercase text-gray-500 text-center">
          Courses
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-8 sm:mb-12">
          Our Offerings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col hover:shadow-xl transition"
            >
              {/* Header */}
              <h3
                className={`text-xl sm:text-2xl md:text-3xl font-bold ${
                  course.color === "blue" ? "text-blue-600" : "text-green-600"
                }`}
              >
                {course.title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-3 sm:mt-4">
                <span className="text-xs sm:text-sm font-semibold bg-gray-100 px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg">
                  {course.label}
                </span>
                <span
                  className={`text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg ${
                    course.color === "blue"
                      ? "bg-blue-50 text-blue-600"
                      : "bg-green-50 text-green-600"
                  }`}
                >
                  {course.duration}
                </span>
              </div>

              {/* Info grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-6 sm:mt-8 text-sm sm:text-base">
                <div className="p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                  <p className="text-gray-500 text-xs">NEW BATCH START FROM</p>
                  <p className="font-semibold">{course.start}</p>
                </div>
                <div className="p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                  <p className="text-gray-500 text-xs">SCHOLARSHIP AVAILABLE</p>
                  <p className="font-semibold">{course.scholarship}</p>
                </div>
                <div className="p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                  <p className="text-gray-500 text-xs">EMI STARTS FROM</p>
                  <p className="font-semibold">{course.emi}</p>
                </div>
                <div className="p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl">
                  <p className="text-gray-500 text-xs">ELIGIBILITY</p>
                  <p className="font-semibold">{course.eligibility}</p>
                </div>
              </div>

              {/* Highlights */}
              <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-sm sm:text-base">
                {course.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start sm:items-center gap-2 sm:gap-3"
                  >
                    <span
                      className={`inline-flex w-4 h-4 sm:w-5 sm:h-5 items-center justify-center rounded-full ${
                        course.color === "blue" ? "bg-blue-500" : "bg-green-500"
                      } text-white text-xs sm:text-sm`}
                    >
                      ✓
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Actions */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  className={`flex-1 rounded-lg py-2.5 sm:py-3 font-semibold text-white text-sm sm:text-base ${
                    course.color === "blue"
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  Register now
                </button>
                <button className="flex-1 rounded-lg py-2.5 sm:py-3 font-semibold border text-sm sm:text-base border-gray-300 hover:bg-gray-50">
                  Explore Course
                </button>
              </div>

              {/* Students count */}
              <p className="mt-4 sm:mt-5 text-xs sm:text-sm text-gray-500 flex items-center gap-1 sm:gap-2">
                <span className="text-orange-500">🔥</span> {course.students}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
