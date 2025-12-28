import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>

      <div className="max-w-6xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* 404 Badge */}
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-lg">
                Error 404
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                404
              </span>
            </h1>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Page Not Found
            </h2>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Oops! The page you're looking for seems to have gone missing. Our detective is on the case, but let's get you back on track.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </Link>

              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 font-bold text-lg rounded-full shadow-lg hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </div>

            {/* Helpful Links */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Quick Navigation:</p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link
                  to="/products"
                  className="px-5 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 bg-white rounded-full border border-gray-200 hover:border-blue-600 transition-all duration-300 hover:shadow-md"
                >
                  Products
                </Link>
                <Link
                  to="/services"
                  className="px-5 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 bg-white rounded-full border border-gray-200 hover:border-blue-600 transition-all duration-300 hover:shadow-md"
                >
                  Services
                </Link>
                <Link
                  to="/about"
                  className="px-5 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 bg-white rounded-full border border-gray-200 hover:border-blue-600 transition-all duration-300 hover:shadow-md"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="px-5 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 bg-white rounded-full border border-gray-200 hover:border-blue-600 transition-all duration-300 hover:shadow-md"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side - Detective GIF (Larger) */}
          <div className="flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-full max-w-2xl">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              
              {/* Main GIF */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-6 transform hover:scale-105 transition-all duration-500">
                <img
                  src="/items/detective-404.gif"
                  alt="404 Detective"
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-500 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}