import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  Mail,
  Lock,
  User,
  Phone,
  Eye,
  EyeOff,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function Signup() {
  const Navigate = useNavigate();
  const leftRef = useRef();
  const formRef = useRef();
  const logoRef = useRef();
  const imageRef = useRef();

  const loginPage = () => {
    Navigate("/login");
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // GSAP Animations
  useGSAP(() => {
    const tl = gsap.timeline();

    // Logo animation - scale and fade in
    tl.from(logoRef.current, {
      scale: 0.5,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1, 0.5)",
    });

    // Heading animation
    tl.from(
      ".welcome-heading",
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5"
    );

    // Description text animation
    tl.from(
      ".description-text",
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
      },
      "-=0.4"
    );

    // Image animation
    tl.from(
      imageRef.current,
      {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      },
      "-=0.4"
    );

    // Features animation
    tl.from(
      ".feature-item",
      {
        x: -50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: "power2.out",
      },
      "-=0.6"
    );

    // Form animation
    tl.from(
      formRef.current,
      {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=1.2"
    );

    // Form fields stagger animation
    tl.from(
      ".form-field",
      {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.6"
    );
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    // ✅ Validate FIRST
    if (!validateForm()) {
      gsap.to(formRef.current, {
        x: [-10, 10, -10, 10, 0],
        duration: 0.4,
        ease: "power2.inOut",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/User/signup",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone.trim(),
          password: formData.password,
        },
        { withCredentials: true }
      );
      toast.success("Registration Done");
      Navigate("/login");
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
      setAcceptTerms(false);
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);

      // ✅ Handle validation errors from backend
      if (error.response?.data?.errors) {
        const errors = error.response.data.errors;

        // Find and display the first error
        for (const field in errors) {
          if (errors[field]._errors && errors[field]._errors.length > 0) {
            const firstError = errors[field]._errors[0];
            toast.error(
              `${field.charAt(0).toUpperCase() + field.slice(1)}: ${firstError}`
            );
            break; // Only show the first error
          }
        }
      } else {
        // Display general error message
        toast.error(
          error.response?.data?.message || "Signup failed. Please try again."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-90 bg-indigo-200 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Floating pills animation */}
      <div
        className="absolute top-20 right-20 w-16 h-16 opacity-10 animate-bounce"
        style={{ animationDuration: "3s" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <ellipse
            cx="100"
            cy="100"
            rx="40"
            ry="60"
            fill="#3b82f6"
            opacity="0.5"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-32 left-20 w-12 h-12 opacity-10 animate-bounce"
        style={{ animationDuration: "4s", animationDelay: "0.5s" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <ellipse
            cx="100"
            cy="100"
            rx="40"
            ry="60"
            fill="#6366f1"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-3xl">
        <div className="grid lg:grid-cols-2 min-h-[700px]">
          {/* Left Side - Info Section */}
          <div
            ref={leftRef}
            className="relative p-8 lg:p-12 flex flex-col justify-center overflow-hidden bg-white"
          >
            <div className="relative z-10 space-y-6">
              {/* Logo - Large and Centered */}
              <div
                ref={logoRef}
                className="flex items-center justify-center mb-6"
              >
                <img
                  src="/public/items/logo main.png"
                  alt="Mitan Pharma Logo"
                  className="w-64 h-auto transform transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Welcome Message */}
              <div className="space-y-4 text-center">
                <h2 className="welcome-heading text-4xl lg:text-5xl font-bold text-blue-600 leading-tight">
                  Welcome To Mitan Pharma
                </h2>
                <p className="description-text text-lg text-gray-700 leading-relaxed max-w-md mx-auto">
                  Join our platform to access comprehensive pharmaceutical
                  consulting services, regulatory guidance, and compliance
                  solutions.
                </p>

                {/* Additional descriptive text */}
                <p className="description-text text-base text-gray-600 leading-relaxed max-w-md mx-auto pt-3">
                  Experience seamless pharmaceutical compliance management with
                  our innovative platform. We provide expert regulatory support,
                  quality assurance, and consulting services tailored to meet
                  global pharmaceutical standards.
                </p>
              </div>

              {/* Pharma-related image */}
              <div ref={imageRef} className="pt-6 flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=500&q=80"
                  alt="Pharmaceutical Services"
                  className="w-full max-w-md rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                />
              </div>

              {/* Features List */}
              <div className="space-y-3 pt-6">
                <div className="feature-item flex items-start space-x-3 transform transition-all duration-300 hover:translate-x-2">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Expert Regulatory Support
                    </h4>
                    <p className="text-sm text-gray-600">
                      Access to pharmaceutical compliance experts
                    </p>
                  </div>
                </div>

                <div className="feature-item flex items-start space-x-3 transform transition-all duration-300 hover:translate-x-2">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Global Standards
                    </h4>
                    <p className="text-sm text-gray-600">
                      Compliance with international regulations
                    </p>
                  </div>
                </div>

                <div className="feature-item flex items-start space-x-3 transform transition-all duration-300 hover:translate-x-2">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Quality Assurance
                    </h4>
                    <p className="text-sm text-gray-600">
                      Ensuring pharmaceutical excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form Section */}
          <div
            ref={formRef}
            className="p-8 lg:p-12 flex flex-col justify-center bg-linear-to-br from-gray-50 to-blue-50"
          >
            <div className="max-w-md mx-auto w-full">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Sign Up
                </h3>
                <p className="text-gray-600">
                  Create your account to get started
                </p>
              </div>

              <div className="space-y-5">
                {/* Full Name */}
                <div className="form-field group">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors duration-300" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`w-full pl-10 pr-4 py-3 border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="form-field group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors duration-300" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={`w-full pl-10 pr-4 py-3 border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="form-field group">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors duration-300" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className={`w-full pl-10 pr-4 py-3 border ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Password */}
                <div className="form-field group">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors duration-300" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a strong password"
                      className={`w-full pl-10 pr-12 py-3 border ${
                        errors.password ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-blue-600 transition-colors duration-300"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="form-field group">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors duration-300" />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Re-enter your password"
                      className={`w-full pl-10 pr-12 py-3 border ${
                        errors.confirmPassword
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white`}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-blue-600 transition-colors duration-300"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSignup}
                  disabled={isSubmitting}
                  className="w-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3.5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group"
                >
                  {isSubmitting ? (
                    <> 
                      <svg
                        className="animate-spin h-5 w-5 mr-3 text-white"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Creating Account...
                    </>
                  ) : (
                    <>
                      Sign Up
                      <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>

                {/* Success Message */}
                <div className="success-message opacity-0 -translate-y-4 text-center">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-green-700 font-semibold flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Registration Successful!
                    </p>
                  </div>
                </div>

                {/* Login Link */}
                <div className="text-center pt-4">
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <span
                      onClick={loginPage}
                      className="text-blue-600 hover:text-blue-700 font-bold transition-colors duration-300 cursor-pointer"
                    >
                      Login Here
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
