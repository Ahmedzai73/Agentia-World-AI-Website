"use client"
import Link from "next/link";
import { useState } from "react";

// Header component for the website.
export default function Header() {
  // State to track whether the mobile menu is open.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="jsx-1acfa59fff5c82b4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/80 backdrop-blur-md shadow-lg shadow-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-purple-500"
              >
                <path d="M12 8V4H8" />
                <rect width="16" height="12" x="4" y="8" rx="2" />
                <path d="M2 14h2" />
                <path d="M20 14h2" />
                <path d="M15 13v2" />
                <path d="M9 13v2" />
              </svg>
              <span className="text-xl font-bold">Agentia World</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link href="#features" className="text-gray-300 hover:text-white transition-colors duration-300">
                Features
              </Link>
              <Link href="#technology" className="text-gray-300 hover:text-white transition-colors duration-300">
                Technology
              </Link>
              <Link href="#solutions" className="text-gray-300 hover:text-white transition-colors duration-300">
                Agents
              </Link>
              <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-300">
                Pricing
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                Contact
              </Link>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-300">
                Launch Console
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              // Toggle the mobile menu state when clicked.
              // The exclamation mark (!) is used to toggle the state from true to false or vice versa.
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown Links */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
            <Link href="#features" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300">
              Features
            </Link>
            <Link href="#technology" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300">
              Technology
            </Link>
            <Link href="#solutions" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300">
              Agents
            </Link>
            <Link href="#pricing" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300">
              Pricing
            </Link>
            <Link href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300">
              Contact
            </Link>
            <button className="w-full text-left px-3 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium hover:opacity-90 transition-all duration-300">
              Launch Console
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
 