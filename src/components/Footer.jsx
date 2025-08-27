import React from "react";
import { Twitter, Instagram, Linkedin, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* Left Section */}
        <div className="md:col-span-2 flex flex-col md:flex-row md:items-start gap-6 md:gap-0">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <img
              src="/logos/newton.jpeg"
              alt="Newton School Logo"
              className="w-6 h-6"
            />
            <span className="text-lg font-semibold">Newton School</span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-600 text-sm">
              Trusted by 2.1 million+ Students
            </p>
            <p className="text-gray-600 text-sm">
              Building phenomenal outcomes with industry-oriented tech
              education.
            </p>
            <p className="text-gray-500 text-xs">
              Copyright © 2025 Incanus Technologies Pvt. Ltd. All rights
              reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-4 flex-wrap">
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-500">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-700">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-red-600">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Courses */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Courses</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              Data Science and AI{" "}
              <span className="bg-blue-100 text-blue-700 px-2 py-0.5 text-xs rounded ml-1">
                PLACEMENT PROGRAM
              </span>
            </li>
            <li>
              Software Development{" "}
              <span className="bg-blue-100 text-blue-700 px-2 py-0.5 text-xs rounded ml-1">
                PLACEMENT PROGRAM
              </span>
            </li>
            <li>
              Xcelerate{" "}
              <span className="bg-blue-100 text-blue-700 px-2 py-0.5 text-xs rounded ml-1">
                PLACEMENT PROGRAM
              </span>
            </li>
            <li>
              Newton School of Technology{" "}
              <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 text-xs rounded ml-1">
                UG TECH PROGRAMS
              </span>
            </li>
            <li>Free Courses / Launchpad</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Masterclass</li>
            <li>Job Board</li>
            <li>AI Tryouts ✦</li>
            <li>Question of the Day ✦</li>
            <li>CodeRush</li>
            <li>Playground - Online compiler</li>
            <li>Games</li>
          </ul>
        </div>

        {/* Company + More */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>About us</li>
              <li>Blogs</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">More</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Join Community</li>
              <li>Teach at Newton</li>
              <li>Hire from us</li>
              <li>Refer and Earn</li>
              <li>Create an account</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
