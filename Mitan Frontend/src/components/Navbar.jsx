import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Team", path: "/team" },
    { name: "FAQ", path: "/FAQ" },
    { name: "Contact us", path: "/contact" },
  ];

  const servicesDropdownItems = [
    { name: "All Services", path: "/services" },
    { name: "Products", path: "/products" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
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
                <rect x="85" y="85" width="30" height="30" fill="white" />
                <polygon points="100,70 75,90 125,90" fill="white" />
                <rect x="90" y="92" width="8" height="8" fill="#2563eb" />
                <rect x="102" y="92" width="8" height="8" fill="#2563eb" />
                <rect x="90" y="102" width="8" height="8" fill="#2563eb" />
                <rect x="102" y="102" width="8" height="8" fill="#2563eb" />
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
            {navItems.map((item) => (
              <div key={item.path} className="relative" ref={item.hasDropdown ? dropdownRef : null}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group flex items-center gap-1 ${
                        isActive(item.path) || location.pathname === "/products"
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                      <span
                        className={`absolute bottom-1 left-4 right-4 h-0.5 bg-blue-600 transition-all duration-300 ${
                          isActive(item.path) || location.pathname === "/products"
                            ? "opacity-100 scale-x-100"
                            : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {isServicesOpen && (
                      <div
                        onMouseLeave={() => setIsServicesOpen(false)}
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-fadeIn"
                      >
                        {servicesDropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            onClick={() => setIsServicesOpen(false)}
                            className={`block px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                              isActive(dropdownItem.path)
                                ? "bg-blue-50 text-blue-600"
                                : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                            }`}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
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
                )}
              </div>
            ))}
          </div>

          {/* Contact Us Button - Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              to="/signup"
              className="inline-flex items-center px-6 py-2.5 bg-green-600 text-white text-sm font-medium rounded-full shadow-lg hover:bg-green-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              User Sign Up
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
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="py-4 px-2 space-y-2 bg-white rounded-lg shadow-lg border border-gray-100">
              {navItems.map((item) => (
                <div key={item.path}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                          isActive(item.path) || location.pathname === "/products"
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        }`}
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isMobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isMobileServicesOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                          {servicesDropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsMobileServicesOpen(false);
                              }}
                              className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                                isActive(dropdownItem.path)
                                  ? "bg-blue-100 text-blue-600"
                                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                              }`}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                        isActive(item.path)
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2 space-y-2">
                <Link
                  to="/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-4 py-2.5 bg-green-600 text-white text-sm font-medium rounded-full text-center hover:bg-green-700 transition-all duration-300 shadow-md"
                >
                  User Sign Up
                </Link>
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-4 py-2.5 bg-red-600 text-white text-sm font-medium rounded-full text-center hover:bg-red-700 transition-all duration-300 shadow-md"
                >
                  Admin Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;