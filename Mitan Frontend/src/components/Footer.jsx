import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../public/items/logo1.png";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "Regulatory Affairs", path: "/services" },
    { name: "Quality Consulting", path: "/services" },
    { name: "CGMP Training", path: "/services" },
    { name: "Process Simplification", path: "/services" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-12 h-12 shrink-0">
                <img
                  src={logo1}
                  alt="Mitan Pharma Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Mitan Pharma</h3>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed">
              Your Vision, Our Expertise
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading pharmaceutical consultancy providing expert regulatory
              guidance, ensuring safety, efficacy, and compliance throughout
              your product lifecycle.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transform hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919499444948"
                  className="flex items-start space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                >
                  <Phone className="w-5 h-5 mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span>+91 9499444948</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:mitanpharma@gmail.com"
                  className="flex items-start space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="break-all">mitanpharma@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@mitanpharma.com"
                  className="flex items-start space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="break-all">info@mitanpharma.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                  <span>New Ext. Colony, Palwal</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Mitan Pharma. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="h-1 bg-linear-to-r from-blue-600 via-blue-500 to-blue-600"></div>
    </footer>
  );
}

export default Footer;