import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
  ArrowRight,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";

export default function Login() {
  const Navigate = useNavigate();
  const leftRef = useRef();
  const rightRef = useRef();
  const logoRef = useRef();

  const [showPassword, setShowPassword] = useState(false);
  const [animated, setAnimated] = useState(false);

  // CSS-based animations on mount
  useEffect(() => {
    setTimeout(() => setAnimated(true), 100);
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [shake, setShake] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      // Shake animation for errors
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return;
    }
    setIsSubmitting(true);

    try {
      const response = await axios.post(
       `${import.meta.env.VITE_API_URL}/User/login`,
        {
          email: formData.email,
          password: formData.password,
        }, 
        {
          withCredentials: true,
        }
      );

      if (response.data.success || response.status === 200) {
        // ✅ Get user role from response
        const userData = response.data.data?.user;
        const userRole = userData?.role;

        // ✅ Navigate based on role
        if (userRole === "admin") {
          Navigate('/admin/dashboard/main/tele'); 
          toast.success(`Hii Naveen! Welcome back to Mitan Pharma!`);
        } else {
          Navigate("/");
          toast.success("Login Successful! Welcome to Mitan Pharma!");
        }

        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData({
          email: "",
          password: "",
        });
        setTimeout(() => setShowSuccess(false), 2000);
      } else {
        toast.error(response.data.message || "Login failed!");
        setIsSubmitting(false);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed!");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Floating elements */}
      <div
        className="absolute top-32 left-32 w-16 h-16 opacity-10 animate-bounce"
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
        className="absolute bottom-40 right-40 w-12 h-12 opacity-10 animate-bounce"
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
      <div className="relative z-10 w-full bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-3xl">
        <div className="grid lg:grid-cols-2 min-h-[700px]">
          {/* Left Side - Form Section */}
          <div
            ref={leftRef}
            className={`p-8 lg:p-12 flex flex-col justify-center transition-all duration-1000 ${
              animated
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            } ${shake ? "animate-shake" : ""}`}
          >
            <div className="max-w-md mx-auto w-full">
              {/* Logo at top of form */}
              <div
                ref={logoRef}
                className={`flex items-center justify-center mb-8 transition-all duration-1000 delay-200 ${
                  animated ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}
              >
                <img
                  src="/items/logo main.png"
                  alt="Mitan Pharma Logo"
                  className="w-48 h-auto transform transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div
                className={`mb-8 text-center transition-all duration-1000 delay-400 ${
                  animated
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Welcome Back
                </h3>
              </div>

              <div className="space-y-5">
                {/* Email */}
                <div
                  className={`form-field group transition-all duration-1000 delay-500 ${
                    animated
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                >
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

                {/* Password */}
                <div
                  className={`form-field group transition-all duration-1000 delay-600 ${
                    animated
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                >
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
                      placeholder="Enter your password"
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

                {/* Remember Me & Forgot Password
                <div
                  className={`form-field flex items-center justify-between transition-all duration-1000 delay-700 ${
                    animated
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer transition-all duration-300"
                    />
                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm text-gray-700 cursor-pointer"
                    >
                      Remember me
                    </label>
                  </div>
                  <span className="text-sm text-blue-600 hover:text-blue-700 font-semibold cursor-pointer transition-colors duration-300">
                    Forgot Password?
                  </span> */}
                {/* </div> */}

                {/* Login Button */}
                <button
                  onClick={handleLogin}
                  disabled={isSubmitting}
                  className={`w-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3.5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group ${
                    animated
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: animated ? "0.8s" : "0s" }}
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
                      Signing In...
                    </>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>

                {/* Success Message */}
                <div
                  className={`text-center transition-all duration-500 ${
                    showSuccess
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-4"
                  }`}
                >
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-green-700 font-semibold flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Login Successful!
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div
                  className={`relative my-6 transition-all duration-1000 delay-800 ${
                    animated ? "opacity-100" : "opacity-0"
                  }`}
                >
                  
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content Section with Background Image */}
          <div
            ref={rightRef}
            className={`relative p-8 lg:p-12 flex flex-col justify-center overflow-hidden transition-all duration-1000 ${
              animated
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
            style={{
              backgroundImage:
                "linear-linear(rgba(37, 99, 235, 0.92), rgba(99, 102, 241, 0.92)), url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay linear for better readability */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-600/95 to-indigo-600/95"></div>

            <div className="relative z-10 space-y-8 text-white">
              {/* Main Heading */}
              <div className="space-y-4">
                <h2
                  className={`text-4xl lg:text-5xl font-bold leading-tight transition-all duration-1000 delay-300 ${
                    animated
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  Your Trusted Partner in Pharmaceutical Compliance
                </h2>
                <p
                  className={`text-lg text-blue-100 leading-relaxed transition-all duration-1000 delay-400 ${
                    animated
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  Access comprehensive regulatory solutions, expert consulting,
                  and compliance management tools designed for the
                  pharmaceutical industry.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                <div
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 transform transition-all duration-1000 hover:scale-105 hover:bg-white/20 delay-600 ${
                    animated ? "opacity-100 scale-100" : "opacity-0 scale-80"
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">5000+</div>
                      <div className="text-sm text-blue-200">Active Users</div>
                    </div>
                  </div>
                </div>

                <div
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 transform transition-all duration-1000 hover:scale-105 hover:bg-white/20 delay-700 ${
                    animated ? "opacity-100 scale-100" : "opacity-0 scale-80"
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-sm text-blue-200">Compliance</div>
                    </div>
                  </div>
                </div>

                <div
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 transform transition-all duration-1000 hover:scale-105 hover:bg-white/20 delay-800 ${
                    animated ? "opacity-100 scale-100" : "opacity-0 scale-80"
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm text-blue-200">Support</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 pt-6">
                {[
                  {
                    title: "Real-Time Compliance Tracking",
                    desc: "Monitor your regulatory status with live updates and alerts",
                    delay: "delay-600",
                  },
                  {
                    title: "Expert Consultation Services",
                    desc: "Direct access to pharmaceutical regulatory experts",
                    delay: "delay-700",
                  },
                  {
                    title: "Comprehensive Documentation",
                    desc: "Complete audit trails and regulatory documentation management",
                    delay: "delay-800",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-3 transform transition-all duration-1000 hover:translate-x-2 ${
                      feature.delay
                    } ${
                      animated
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-10"
                    }`}
                  >
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-blue-200">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Badge */}
              <div
                className={`pt-6 transition-all duration-1000 delay-800 ${
                  animated
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-8 h-8 text-white" />
                    <div>
                      <div className="font-semibold text-white">
                        Trusted by Industry Leaders
                      </div>
                      <div className="text-sm text-blue-200">
                        Certified and compliant with international
                        pharmaceutical standards
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
