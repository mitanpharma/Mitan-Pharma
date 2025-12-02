import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-100">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-30 -top-48 -left-48 animate-float"></div>
        <div className="absolute w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 top-1/3 -right-48 animate-float-delayed"></div>
        <div className="absolute w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-25 -bottom-48 left-1/4 animate-float-slow"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="pt-16 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-blue-100 rounded-full border-2 border-blue-300">
              <span className="text-blue-700 font-bold font-serif text-sm uppercase tracking-wide">
                📞 Contact Us
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black font-serif mb-6 text-gray-900 leading-tight">
              Get In <span className="text-blue-600">Touch</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about our pharmaceutical consultancy services?
              <span className="text-gray-900 font-semibold">
                {" "}
                We're here to help!
              </span>
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Side - Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-blue-100">
                {!submitted ? (
                  <>
                    <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8 text-gray-900">
                      Send us a <span className="text-blue-600">message</span>
                    </h2>

                    <div className="space-y-6">
                      {/* Full Name */}
                      <div className="relative group">
                        <label className="block text-sm font-bold font-serif text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("fullName")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="John Doe"
                          required
                          className="w-full bg-blue-50 border-3 border-blue-200 rounded-2xl px-6 py-4 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:bg-white focus:outline-none transition-all duration-300"
                        />
                      </div>

                      {/* Email & Phone Grid */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="relative group">
                          <label className="block text-sm font-bold font-serif text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            placeholder="john@example.com"
                            required
                            className="w-full bg-blue-50 border-3 border-blue-200 rounded-2xl px-6 py-4 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:bg-white focus:outline-none transition-all duration-300"
                          />
                        </div>

                        <div className="relative group">
                          <label className="block text-sm font-bold font-serif text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("phone")}
                            onBlur={() => setFocusedField(null)}
                            placeholder="+91 98765 43210"
                            className="w-full bg-blue-50 border-3 border-blue-200 rounded-2xl px-6 py-4 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:bg-white focus:outline-none transition-all duration-300"
                          />
                        </div>
                      </div>

                      {/* Company */}
                      <div className="relative group">
                        <label className="block text-sm font-bold font-serif text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("company")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Your Company"
                          className="w-full bg-blue-50 border-3 border-blue-200 rounded-2xl px-6 py-4 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:bg-white focus:outline-none transition-all duration-300"
                        />
                      </div>

                      {/* Message */}
                      <div className="relative group">
                        <label className="block text-sm font-bold font-serif text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Tell us about your requirements..."
                          rows="6"
                          required
                          className="w-full bg-blue-50 border-3 border-blue-200 rounded-2xl px-6 py-4 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:bg-white focus:outline-none transition-all duration-300 resize-none"
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <button
                        onClick={handleSubmit}
                        className="group relative w-full bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold font-serif py-5 px-8 rounded-full overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          <Send className="w-5 h-5" />
                          Send Message
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-20">
                    <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-in shadow-2xl">
                      <CheckCircle className="w-14 h-14 text-white" />
                    </div>
                    <h3 className="text-4xl font-bold font-serif mb-4 text-gray-900">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 text-xl">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side - Contact Info */}
            <div className="space-y-6">
              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Phone Card */}
                <div className="group bg-linear-to-br from-blue-600 to-blue-700 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer text-white">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-4 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 backdrop-blur-sm">
                      <Phone className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-100 mb-1 font-semibold">
                        Phone
                      </p>
                      <a
                        href="tel:+919499444948"
                        className="text-xl font-bold hover:text-blue-100 transition-colors"
                      >
                        +91 9499444948
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="group bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border-4 border-blue-100">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 p-4 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1 font-semibold">
                        Email
                      </p>
                      <a
                        href="mailto:mitanpharma@gmail.com"
                        className="text-lg font-bold text-blue-600 hover:text-blue-700 transition-colors break-all"
                      >
                        mitanpharma@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="group bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border-4 border-blue-100">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 p-4 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1 font-semibold">
                        Location
                      </p>
                      <p className="text-lg font-bold text-gray-900">
                        New Ext. Colony, Palwal
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-blue-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-600 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold  text-gray-900">
                    Business Hours
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b-2 border-blue-100">
                    <span className="text-gray-600 font-semibold">
                      Monday - Friday
                    </span>
                    <span className="font-bold text-blue-600">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b-2 border-blue-100">
                    <span className="text-gray-600 font-semibold">
                      Saturday
                    </span>
                    <span className="font-bold  text-blue-600">
                      10:00 AM - 4:00 PM
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-semibold">Sunday</span>
                    <span className="font-bold font-serif text-red-500">
                      Closed
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-center text-white shadow-xl">
                  <div className="text-4xl font-black mb-2">&lt;24h</div>
                  <p className="text-sm font-semibold text-blue-100">
                    Response Time
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 text-center border-4 border-blue-100 shadow-xl">
                  <div className="text-4xl font-black text-blue-600 mb-2">
                    100%
                  </div>
                  <p className="text-sm font-semibold text-gray-600">
                    Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(-10px) translateX(-10px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-30px) translateX(-15px);
          }
          66% {
            transform: translateY(-15px) translateX(15px);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-25px) translateX(-20px);
          }
        }

        @keyframes bounce-in {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 30s ease-in-out infinite;
        }

        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      `}</style>
    </div>
  );
}
