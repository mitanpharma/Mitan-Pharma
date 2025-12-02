import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   setIsMobileMenuOpen(false);
  // }, [location]);

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Team", path: "/team" },
    { name: "FAQ", path: "/FAQ" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-12 h-15 shrink-0">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Pills */}
                <ellipse
                  cx="60"
                  cy="100"
                  rx="25"
                  ry="40"
                  fill="#2563eb"
                  opacity="0.9"
                />
                <ellipse cx="60" cy="100" rx="25" ry="20" fill="#60a5fa" />
                <ellipse
                  cx="140"
                  cy="100"
                  rx="25"
                  ry="40"
                  fill="#1e40af"
                  opacity="0.9"
                />
                <ellipse cx="140" cy="100" rx="25" ry="20" fill="#3b82f6" />

                {/* House in center */}
                <rect x="85" y="85" width="30" height="30" fill="white" />
                <polygon points="100,70 75,90 125,90" fill="white" />

                {/* Windows */}
                <rect x="90" y="92" width="8" height="8" fill="#2563eb" />
                <rect x="102" y="92" width="8" height="8" fill="#2563eb" />
                <rect x="90" y="102" width="8" height="8" fill="#2563eb" />
                <rect x="102" y="102" width="8" height="8" fill="#2563eb" />

                {/* Cross connections */}
                <line
                  x1="85"
                  y1="100"
                  x2="60"
                  y2="100"
                  stroke="#1e40af"
                  strokeWidth="6"
                />
                <line
                  x1="115"
                  y1="100"
                  x2="140"
                  y2="100"
                  stroke="#1e40af"
                  strokeWidth="6"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#1e40af] tracking-tight leading-tight">
                Mitan Pharma
              </span>
              <span className="text-sm text-blue-600 -mt-1">
                Your Compliance, Our Mission
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  isActive(item.path)
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-1 left-4 right-4 h-0.5 bg-blue-600 transition-all duration-300 ${
                    isActive(item.path)
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Contact Us Button - Desktop */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-2.5 mr-1 bg-blue-600 text-white text-sm font-medium rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center px-6 py-2.5 bg-red-600 text-white text-sm font-medium rounded-full shadow-lg hover:bg-red-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Admin Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-blue-50 transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive(item.path)
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full px-4 py-2.5 mt-4 bg-blue-600 text-white text-sm font-medium rounded-full text-center hover:bg-blue-700 transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full px-4 py-2.5 mt-4 bg-red-600 text-white text-sm font-medium rounded-full text-center hover:bg-red-700 transition-all duration-300"
            >
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
