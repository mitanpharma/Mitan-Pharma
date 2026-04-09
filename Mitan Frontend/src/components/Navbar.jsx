import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo1 from "../../public/items/logo1.png";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileContactOpen, setIsMobileContactOpen] = useState(false);
  const location = useLocation();
  const aboutDropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const contactDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) setIsAboutOpen(false);
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) setIsServicesOpen(false);
      if (contactDropdownRef.current && !contactDropdownRef.current.contains(event.target)) setIsContactOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
    { name: "Services", path: "/services", hasDropdown: true, dropdownType: "services" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about", hasDropdown: true, dropdownType: "about" },
    { name: "Contact", path: "/contact", hasDropdown: true, dropdownType: "contact" },
  ];

  const aboutDropdownItems = [
    { name: "About Us", path: "/about" },
    { name: "FAQ", path: "/FAQ" },
  ];

  const servicesDropdownItems = [
    { name: "Core Services", path: "/services" },
    { name: "Pharmacovigilance Services", path: "/pharmacovigilance" },
    { name: "Licensing Services", path: "/licensing-services" },
    { name: "Project & Outsourcing Services", path: "/project-outsourcing-services" },
  ];

  const contactDropdownItems = [
    { name: "Contact Us", path: "/contact" },
    { name: "Authorities & Regulatory Contacts", path: "/authority-links" },
  ];

  const isActive = (path) => location.pathname === path;
  const isServicesActive = ["/services", "/pharmacovigilance", "/licensing-services", "/project-outsourcing-services"].includes(location.pathname);
  const isAboutActive = location.pathname === "/about" || location.pathname === "/FAQ";
  const isContactActive = location.pathname === "/contact" || location.pathname === "/authority-links";

  const isDropdownOpen = (type) => {
    if (type === "about") return isAboutOpen;
    if (type === "services") return isServicesOpen;
    if (type === "contact") return isContactOpen;
    return false;
  };

  const isMobileDropdownOpen = (type) => {
    if (type === "about") return isMobileAboutOpen;
    if (type === "services") return isMobileServicesOpen;
    if (type === "contact") return isMobileContactOpen;
    return false;
  };

  const isNavItemActive = (item) => {
    if (item.dropdownType === "about") return isAboutActive;
    if (item.dropdownType === "services") return isServicesActive;
    if (item.dropdownType === "contact") return isContactActive;
    return false;
  };

  const getDropdownItems = (type) => {
    if (type === "about") return aboutDropdownItems;
    if (type === "services") return servicesDropdownItems;
    if (type === "contact") return contactDropdownItems;
    return [];
  };

  const getDropdownRef = (type) => {
    if (type === "about") return aboutDropdownRef;
    if (type === "services") return servicesDropdownRef;
    if (type === "contact") return contactDropdownRef;
    return null;
  };

  const handleMouseEnter = (type) => {
    if (type === "about") setIsAboutOpen(true);
    if (type === "services") setIsServicesOpen(true);
    if (type === "contact") setIsContactOpen(true);
  };

  const handleMouseLeave = (type) => {
    if (type === "about") setIsAboutOpen(false);
    if (type === "services") setIsServicesOpen(false);
    if (type === "contact") setIsContactOpen(false);
  };

  const handleToggle = (type) => {
    if (type === "about") setIsAboutOpen((prev) => !prev);
    if (type === "services") setIsServicesOpen((prev) => !prev);
    if (type === "contact") setIsContactOpen((prev) => !prev);
  };

  const handleMobileToggle = (type) => {
    if (type === "about") setIsMobileAboutOpen((prev) => !prev);
    if (type === "services") setIsMobileServicesOpen((prev) => !prev);
    if (type === "contact") setIsMobileContactOpen((prev) => !prev);
  };

  const getDropdownWidth = (type) => {
    if (type === "services") return "w-64";
    if (type === "contact") return "w-60";
    return "w-48";
  };

  // Determine if we're on the home page
  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : isHomePage
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section — bigger logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-20 h-20 shrink-0">
              <img
                src={logo1}
                alt="Mitan Pharma Logo"
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-bold tracking-tight leading-tight transition-colors duration-300 ${
                isScrolled || !isHomePage ? "text-[#1e40af]" : "text-white drop-shadow-md"
              }`}>
                Mitan Pharma
              </span>
              <span className={`text-sm -mt-1 transition-colors duration-300 ${
                isScrolled || !isHomePage ? "text-blue-600" : "text-blue-100 drop-shadow-sm"
              }`}>
                Your Vision, Our Expertise
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                ref={item.hasDropdown ? getDropdownRef(item.dropdownType) : null}
              >
                {item.hasDropdown ? (
                  <div>
                    <button
                      onMouseEnter={() => handleMouseEnter(item.dropdownType)}
                      onClick={() => handleToggle(item.dropdownType)}
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group flex items-center gap-1 ${
                        isNavItemActive(item)
                          ? isScrolled || !isHomePage ? "text-blue-600" : "text-white"
                          : isScrolled || !isHomePage
                          ? "text-gray-700 hover:text-blue-600"
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen(item.dropdownType) ? "rotate-180" : ""}`} />
                      <span className={`absolute bottom-1 left-4 right-4 h-0.5 bg-blue-400 transition-all duration-300 ${
                        isNavItemActive(item) ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                      }`} />
                    </button>

                    {isDropdownOpen(item.dropdownType) && (
                      <div
                        onMouseLeave={() => handleMouseLeave(item.dropdownType)}
                        className={`absolute top-full left-0 mt-2 ${getDropdownWidth(item.dropdownType)} bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-fadeIn`}
                      >
                        {getDropdownItems(item.dropdownType).map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            onClick={() => handleMouseLeave(item.dropdownType)}
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
                        ? isScrolled || !isHomePage ? "text-blue-600" : "text-white"
                        : isScrolled || !isHomePage
                        ? "text-gray-700 hover:text-blue-600"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-1 left-4 right-4 h-0.5 bg-blue-400 transition-all duration-300 ${
                      isActive(item.path) ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                    }`} />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Buttons - Desktop */}
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
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled || !isHomePage ? "text-gray-700 hover:bg-blue-50" : "text-white hover:bg-white/20"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                        onClick={() => handleMobileToggle(item.dropdownType)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                          isNavItemActive(item) ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        }`}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileDropdownOpen(item.dropdownType) ? "rotate-180" : ""}`} />
                      </button>
                      {isMobileDropdownOpen(item.dropdownType) && (
                        <div className="ml-4 mt-2 space-y-2">
                          {getDropdownItems(item.dropdownType).map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              onClick={() => { setIsMobileMenuOpen(false); handleMobileToggle(item.dropdownType); }}
                              className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                                isActive(dropdownItem.path) ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
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
                        isActive(item.path) ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2 space-y-2">
                <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)} className="block w-full px-4 py-2.5 bg-green-600 text-white text-sm font-medium rounded-full text-center hover:bg-green-700 transition-all duration-300 shadow-md">
                  User Sign Up
                </Link>
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="block w-full px-4 py-2.5 bg-red-600 text-white text-sm font-medium rounded-full text-center hover:bg-red-700 transition-all duration-300 shadow-md">
                  Login
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