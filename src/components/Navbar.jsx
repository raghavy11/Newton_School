import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "./ui/navigation-menu";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="w-full px-6 md:px-12 lg:px-32 bg-black text-white py-4 flex justify-between items-center relative">
      {/* Left - Logo */}
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-green-400" />
        <span className="font-bold text-lg">
          Newton <span className="font-normal">School</span>
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:block">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <a href="#" className="hover:text-blue-400">
                Data Science and AI
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="#" className="hover:text-blue-400">
                Software Development
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="#" className="hover:text-blue-400">
                Newton School of Technology
              </a>
            </NavigationMenuItem>

            {/* More Dropdown */}
        
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Right - Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 rounded-full px-6 py-2 text-sm font-semibold">
          Refer and Earn
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 text-sm font-semibold rounded-md">
          Sign up
        </Button>
      </div>

      {/* Mobile Hamburger */}
      <div className="lg:hidden flex items-center">
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 w-full bg-white text-gray-900 p-6 flex flex-col gap-4 lg:hidden z-50 shadow-lg rounded-b-lg">
          <a href="#" className="hover:text-blue-600">
            Data Science and AI
          </a>
          <a href="#" className="hover:text-blue-600">
            Software Development
          </a>
          <a href="#" className="hover:text-blue-600">
            Newton School of Technology
          </a>
          <a href="#" className="hover:text-blue-600">
            More
          </a>

          <div className="flex flex-col gap-2 mt-4">
            <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 rounded-full px-4 w-full">
              Refer and Earn
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 px-6 w-full">
              Sign up
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
