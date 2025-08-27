import { useEffect, useRef, useState } from "react";

export default function SpotlightEffect() {
  const gridRef = useRef(null);
  const [target, setTarget] = useState({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  });
  const [pos, setPos] = useState({ x: target.x, y: target.y });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTarget({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrame;
    const smoothFollow = () => {
      setPos((prev) => {
        const ease = 0.08;
        const x = prev.x + (target.x - prev.x) * ease;
        const y = prev.y + (target.y - prev.y) * ease;

        if (gridRef.current) {
          gridRef.current.style.maskImage = `radial-gradient(circle 160px at ${x}px ${y}px, rgba(0,0,0,1) 70%, transparent 100%)`;
          gridRef.current.style.webkitMaskImage = `radial-gradient(circle 160px at ${x}px ${y}px, rgba(0,0,0,1) 70%, transparent 100%)`;
        }

        return { x, y };
      });
      animationFrame = requestAnimationFrame(smoothFollow);
    };

    smoothFollow();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [target]);

  const stats = [
    { label: "Companies Hiring", value: "800+" },
    { label: "Students Placed", value: "4,500+" },
    { label: "Highest Package", value: "1.5 Cr" },
    { label: "Industry Experts", value: "1200+" },
    { label: "Highest Salary Hike", value: "500%" },
  ];

  return (
    <div className="relative w-full  min-h-screen overflow-hidden">
      <div className="bg-gradient-to-b from-black pt-10 pb-8 via-black to-[#1a1508]">
        {/* Grid overlay with spotlight mask */}
        <div
          ref={gridRef}
          className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:28px_28px]"
        />

        {/* Foreground content */}
        <div className="relative z-20 flex items-center justify-center h-full text-white">
          <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center px-4 sm:px-6 md:px-10 relative left-4">
            {/* Left Section */}
            <div className="text-center md:text-left">
              <p className="text-orange-400 font-semibold uppercase tracking-wide text-sm sm:text-base">
                Learn what the industry demands
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-6 leading-tight">
                Unlock your <br /> dream{" "}
                <span className="text-blue-500">tech job</span>
              </h1>
              <p className="mt-6 sm:mt-8 text-gray-300 text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0">
                AI-driven, industry-focused courses in software development and
                data science to secure your dream tech job.
              </p>
              <button className="mt-8 sm:mt-10 px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold text-lg sm:text-xl">
                Sign up
              </button>

              {/* Students Enrolled */}
              <div className="flex justify-center md:justify-start items-center mt-6 sm:mt-8 text-sm sm:text-base font-medium">
                <span className="text-orange-500 mr-2">🔥</span>
                15K+ Students Already Enrolled
              </div>

              {/* Rating */}
              <div className="mt-6 sm:mt-8 flex justify-center md:justify-start items-center space-x-2 text-base sm:text-lg">
                <span className="font-bold">4.9/5</span>
                <span className="text-yellow-400 text-lg sm:text-xl md:text-2xl">
                  ★★★★★
                </span>
                <span className="text-gray-400 text-xs sm:text-sm">
                  from 2000+ reviews
                </span>
              </div>
            </div>

            {/* Right Section (Form) */}
            <div className="bg-white text-gray-900 shadow-2xl rounded-2xl p-6 sm:p-8 md:p-10 max-w-md w-full h-full flex flex-col justify-between mx-auto md:mx-0">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-center">
                  Book a Live Class, For Free!
                </h3>
                <button className="mt-4 w-full border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50">
                  <img
                    src="https://developers.google.com/identity/images/g-logo.png"
                    alt="Google"
                    className="w-5 h-5"
                  />
                  Sign up with Google
                </button>

                <p className="text-center text-gray-500 mt-4 text-sm">OR</p>

                <form className="mt-6 space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  />
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  />

                  {/* Course Options */}
                  <div className="flex flex-col gap-2 text-sm text-gray-600">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="course" /> Data Science & AI
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="course" /> Full Stack
                      Development
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-3 font-semibold text-sm sm:text-base"
                  >
                    Send OTP
                  </button>
                </form>
              </div>

              <p className="mt-4 text-center text-xs text-gray-500">
                By clicking Sign Up, you agree to our{" "}
                <a href="#" className="text-blue-600 underline">
                  Terms & Conditions
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-6xl mx-auto  mt-8 mb-0.5 sm:mt-12 px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-4 sm:p-6 bg-white rounded-2xl shadow-xl text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
