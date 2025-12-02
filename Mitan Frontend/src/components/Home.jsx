import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  CheckCircle,
  FileText,
  FlaskConical,
  Building2,
  ArrowRight,
  Shield,
  Globe,
  Award,
  Target,
  Users,
  TrendingUp,
  Microscope,
  BookOpen,
  ClipboardCheck,
  FileCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [statsVisible, setStatsVisible] = useState(false);
  const heroRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroImageRef = useRef(null);
  const featuresRef = useRef(null);
  const servicesRef = useRef(null);
  const statsRef = useRef(null);

  // Hero Section Animation
  useGSAP(() => {
    if (!heroTextRef.current) return;

    const tl = gsap.timeline();

    tl.from(heroTextRef.current.children, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });

    if (heroImageRef.current) {
      tl.from(
        heroImageRef.current,
        {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      );
    }
  }, []);


  // Services Section Scroll Animation
  // useGSAP(() => {
  //   const services = servicesRef.current?.querySelectorAll(".service-card");

  //   if (services && services.length > 0) {
  //     gsap.from(services, {
  //       scrollTrigger: {
  //         trigger: servicesRef.current,
  //         start: "top 80%",
  //         end: "bottom 25%",
  //         toggleActions: "play none none reverse",
  //       },
  //       scale: 0.95,
  //       opacity: 0,
  //       duration: 0.7,
  //       stagger: 0.12,
  //       ease: "back.out(1.2)",
  //     });
  //   }
  // }, []);

  // Stats Counter Animation
  useGSAP(() => {
    if (statsRef.current) {
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: "top 85%",
        onEnter: () => setStatsVisible(true),
        onLeaveBack: () => setStatsVisible(false),
      });
    }
  }, []);

  const services = [
    {
      icon: FileText,
      title: "Dossier and CTD",
      description:
        "Compilation of CTD, ACTD, Country Specific Submissions for ASEAN, CIS, AFRICA, GCC and ROW markets.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FlaskConical,
      title: "BA/BE Studies",
      description:
        "Paper BE, Generated BE, Bio-analytical Validation, Report and Protocol along with ANOVA calculation.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: FileCheck,
      title: "Dossier Compilation",
      description:
        "Expert compilation of CTD, ACTD, and country-specific dossiers for ASEAN, CIS, Africa, and GCC markets, ensuring compliance and faster approvals, enhancing global market access.",
      color: "from-indigo-600 to-indigo-700",
    },
    {
      icon: Shield,
      title: "Compliance Assurance",
      description:
        "GMP Compliance, Documentation Management, and Audit Support, ensuring adherence to regulatory standards, minimizing risks, and achieving successful certifications with minimal findings for global market access.",
      color: "from-blue-500 to-indigo-500",
    }
  ];

  const features = [
    {
      icon: CheckCircle,
      text: "Expert Regulatory Guidance",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Shield,
      text: "CGMP Compliance Support",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: Award,
      text: "Quality Culture Transformation",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Globe,
      text: "Global Regulatory Knowledge",
      color: "bg-indigo-100 text-indigo-600",
    },
    
    {
      icon: Users,
      text: "Comprehensive Training Programs",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: Microscope,
      text: "Laboratory Compliance",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: BookOpen,
      text: "SOP Development & Review",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: ClipboardCheck,
      text: "Regulatory Audits & Inspections",
      color: "bg-indigo-100 text-indigo-600",
    },
  ];

  const stats = [
    { number: "100", suffix: "%", label: "Compliance Rate" },
    { number: "50", suffix: "+", label: "Countries Served" },
    { number: "500", suffix: "+", label: "Successful Projects" },
    { number: "24", suffix: "/7", label: "Support Available" },
  ];

  const testimonials = [
    {
      quote:
        "Their team transformed our documentation processes — audits are now seamless and findings minimal.",
      name: "Dr. A. Patel",
      role: "Quality Head, PharmaCo",
    },
    {
      quote:
        "Method validation support was top-notch. Regulatory submission was accepted with no major queries.",
      name: "Ms. S. Kumar",
      role: "R&D Lead, BioMed Labs",
    },
    {
      quote:
        "Operational recommendations reduced batch rework and improved on-time deliveries — strong ROI from consulting.",
      name: "Mr. R. Singh",
      role: "Operations Manager, GlobalMeds",
    },
    {
      quote:
        "The regulatory dossier compilation was flawless. We achieved market approval in record time across multiple regions.",
      name: "Dr. M. Johnson",
      role: "Regulatory Affairs Director, MedTech Solutions",
    },
    {
      quote:
        "Their GMP compliance consulting helped us pass international audits with zero critical observations. Truly exceptional service.",
      name: "Mr. K. Sharma",
      role: "VP Quality Assurance, GenPharma Industries",
    },
    {
      quote:
        "The plant layout redesign and compliance guidance streamlined our operations significantly. Production efficiency increased by 30%.",
      name: "Ms. L. Chen",
      role: "Plant Manager, BioHealth Manufacturing",
    },
    {
      quote:
        "Outstanding BA/BE study support. Their expertise in bioanalytical validation ensured our submission was scientifically robust.",
      name: "Dr. R. Verma",
      role: "Clinical Research Head, NovaCure Pharma",
    },
    {
      quote:
        "Professional, knowledgeable, and responsive. Their training programs elevated our team's understanding of regulatory requirements.",
      name: "Ms. T. Anderson",
      role: "Training Manager, HealthFirst Laboratories",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Background Decorations */}
        <div className="absolute top-12 left-0 w-56 h-56 md:w-80 md:h-80 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none"></div>
        <div
          className="absolute bottom-12 right-0 w-56 h-56 md:w-80 md:h-80 bg-indigo-200 rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div ref={heroTextRef} className="order-1 lg:order-1">
              <div className="inline-block mb-4 overflow-hidden">
                <span className="bg-linear-to-r from-pink-600 to-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow">
                  Leading Pharmaceutical Consultancy
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Regulatory Affairs{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
                  Specialist
                </span>
              </h1>

              <p className="text-lg md:text-xl font-semibold text-gray-800 mb-3 leading-snug">
                Comprehensive Solutions for Pharmaceutical Excellence and
                Compliance
              </p>

              <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed max-w-2xl">
                Ensuring quality, efficiency, and adherence to global regulatory
                standards for pharmaceuticals.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  to="/services"
                  className="group inline-flex items-center px-6 py-3 bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full shadow hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow border-2 border-blue-600 transform hover:scale-105 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>

              {/* Feature Pills */}
              <div
                ref={featuresRef}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="feature-item flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
                  >
                    <div className={`p-2 ${feature.color} rounded-lg shrink-0`}>
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div
              ref={heroImageRef}
              className="relative order-2 lg:order-2 mt-6 lg:mt-0"
            >
              <div className="absolute inset-0 bg-linear-to-tr from-purple-600 to-indigo-600 rounded-2xl transform rotate-3 opacity-10 pointer-events-none"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                <img
                  src="https://imgs.search.brave.com/7AMq0sRIYanC3P3jFvsIOawKLcxR4M7lS8yGiMyEcx4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lcnBz/b2Z0d2FyZWJsb2cu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy9h/LXBpY3R1cmUtZm9y/LXF1YWxpdHktY29u/dHJvbC1pbi1waGFy/bWFjZXV0aWNhbC1p/bmR1c3RyeS5qcGc"
                  alt="Medical Professional"
                  className="w-full h-64 md:h-96 object-cover"
                  loading="lazy"
                />

                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-full">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-gray-900">100%</p>
                      <p className="text-xs text-gray-600">Compliance Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={statsRef}
        className="py-12 md:py-16 bg-linear-to-r from-blue-600 to-indigo-600"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
                  {statsVisible ? (
                    <CountUp end={parseInt(stat.number)} duration={2} />
                  ) : (
                    "0"
                  )}
                  <span className="ml-1">{stat.suffix}</span>
                </div>
                <p className="text-sm md:text-base text-blue-100 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
                Services
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive pharmaceutical consulting services tailored to your
              needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                ></div>

                <div className="relative z-10 flex flex-col grow">
                  {/* Icon */}
                  <div
                    className={`inline-flex p-3 bg-linear-to-br ${service.color} rounded-xl mb-4 shadow transform group-hover:scale-105 transition-all duration-300 self-start`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 grow">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <Link
                    to="/services"
                    className="inline-flex items-center text-blue-600 font-semibold group-hover:text-indigo-600 transition-colors duration-300 mt-auto"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-blue-100 to-indigo-100 rounded-bl-full opacity-20 transform translate-x-10 -translate-y-10 transition-transform duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-indigo-600">
                Success Stories
              </span>{" "}
              From Our Valued Clients
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Read testimonials from our{" "}
              <span className="font-semibold text-blue-600">
                satisfied clients
              </span>{" "}
              who have experienced significant improvements in{" "}
              <span className="font-semibold text-indigo-600">
                regulatory compliance
              </span>
              ,{" "}
              <span className="font-semibold text-blue-600">
                operational efficiency
              </span>
              , and{" "}
              <span className="font-semibold text-indigo-600">
                product quality
              </span>{" "}
              through our expert consulting services.
            </p>
          </div>

          {/* Testimonials Grid - 2 per row on desktop, scrollable on mobile */}
          <div className="relative">
            {/* Desktop View - Grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1"
                >
                  <div className="flex items-start mb-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {t.name.charAt(0)}
                      </div>
                    </div>
                    <div className="ml-4 grow">
                      <p className="text-gray-800 italic text-base leading-relaxed mb-4">
                        "{t.quote}"
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-sm font-bold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-600">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile View - Horizontal Scroll */}
            <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
              <div className="flex gap-4" style={{ width: "max-content" }}>
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 shrink-0"
                    style={{ width: "300px" }}
                  >
                    <div className="flex items-start mb-4">
                      <div className="shrink-0">
                        <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {t.name.charAt(0)}
                        </div>
                      </div>
                      <div className="ml-3 grow">
                        <p className="text-gray-800 italic text-sm leading-relaxed mb-3">
                          "{t.quote}"
                        </p>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <p className="text-sm font-bold text-gray-900">
                        {t.name}
                      </p>
                      <p className="text-xs text-gray-600">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll Hint for Mobile */}
            <div className="md:hidden text-center mt-4">
              <p className="text-xs text-gray-500">
                ← Swipe to see more testimonials →
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Counter Component
function CountUp({ end, duration }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef(null);

  useEffect(() => {
    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = (timestamp - startTimeRef.current) / (duration * 1000);

      if (progress < 1) {
        countRef.current = Math.floor(end * progress);
        setCount(countRef.current);
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}</span>;
}

export default Home;
