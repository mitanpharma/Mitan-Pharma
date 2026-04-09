import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  CheckCircle,
  FileText,
  ArrowRight,
  Shield,
  Globe,
  Award,
  Users,
  Microscope,
  BookOpen,
  ClipboardCheck,
  FileCheck,
  FlaskConical,
  Stethoscope,
  BarChart3,
  GraduationCap,
  Search,
  Package,
  Layers,
  Activity,
  Play,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ─── VIDEO PATHS ─────────────────────────────────────────────────────────────
// Replace these filenames with your actual files in /public/items/
const VIDEO_PHARMA_1 = "/items/vid.mp4";  // video section 1 after services (left)
const VIDEO_PHARMA_2 = "/items/vid1.mp4"; // video section 1 after services (right)
const VIDEO_PHARMA_3 = "/items/pharma.mp4"; // video section 2 before testimonials (left)
const VIDEO_PHARMA_4 = "/items/vid3.mp4"; // video section 2 before testimonials (right)
const VIDEO_GLOBE    = "/items/vid4.mp4"; // globe video before stats
// ─────────────────────────────────────────────────────────────────────────────

function Home() {
  const [statsVisible, setStatsVisible] = useState(false);
  const heroRef      = useRef(null);
  const heroTextRef  = useRef(null);
  const heroImageRef = useRef(null);
  const featuresRef  = useRef(null);
  const servicesRef  = useRef(null);
  const statsRef     = useRef(null);

  useGSAP(() => {
    if (!heroTextRef.current) return;
    const tl = gsap.timeline();
    tl.from(heroTextRef.current.children, { y: 100, opacity: 0, duration: 1, stagger: 0.15, ease: "power3.out" });
    if (heroImageRef.current) {
      tl.from(heroImageRef.current, { x: 100, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.5");
    }
  }, []);

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
      title: "Dossier & CTD Compilation",
      description: "Compilation of CTD, ACTD, Country Specific Submissions for ASEAN, CIS, AFRICA, GCC and ROW markets.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FileCheck,
      title: "Regulatory Submissions",
      description: "Expert preparation and submission of regulatory dossiers for new product approvals, variations, and renewals across global markets.",
      color: "from-indigo-600 to-indigo-700",
    },
    {
      icon: Shield,
      title: "GMP Compliance Assurance",
      description: "GMP Compliance, Documentation Management, and Audit Support ensuring adherence to regulatory standards and minimizing risks.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Activity,
      title: "Pharmacovigilance Services",
      description: "Comprehensive drug safety monitoring, adverse event reporting, PSUR/PBRER preparation, and signal detection for global compliance.",
      color: "from-rose-500 to-pink-600",
    },
    {
      icon: FlaskConical,
      title: "Analytical & Lab Services",
      description: "Method development, validation, and transfer. Stability studies and analytical support for regulatory submissions worldwide.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Stethoscope,
      title: "Clinical Services (BA/BE)",
      description: "BA/BE study design, protocol writing, bioanalytical method validation, and clinical trial support for regulatory approvals.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Search,
      title: "Gap Analysis & Query Support",
      description: "Thorough gap analysis against current regulatory requirements and expert response drafting for authority queries and deficiency letters.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: GraduationCap,
      title: "RA & GMP Training",
      description: "Customized training programs on regulatory affairs, GMP principles, ICH guidelines, and audit readiness for pharma professionals.",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: Package,
      title: "Licensing Services",
      description: "Product licensing, out-licensing, in-licensing strategy, and technology transfer support for domestic and international markets.",
      color: "from-sky-500 to-cyan-600",
    },
    {
      icon: Layers,
      title: "Project & Outsourcing Services",
      description: "End-to-end project management for pharma outsourcing, CRO/CMO selection, contract negotiations, and timeline oversight.",
      color: "from-fuchsia-500 to-pink-500",
    },
    {
      icon: BarChart3,
      title: "Regulatory Strategy",
      description: "Tailored regulatory roadmaps for new molecules, biosimilars, and generics. Market entry strategy across US, EU, and emerging markets.",
      color: "from-lime-500 to-green-600",
    },
    {
      icon: ClipboardCheck,
      title: "Quality Management Systems",
      description: "QMS design, implementation, and improvement. SOP writing, change control, deviation management, and CAPA systems setup.",
      color: "from-teal-500 to-emerald-600",
    },
  ];

  const features = [
    { icon: CheckCircle,    text: "Expert Regulatory Guidance",     color: "bg-blue-100 text-blue-600" },
    { icon: Shield,         text: "CGMP Compliance Support",        color: "bg-indigo-100 text-indigo-600" },
    { icon: Award,          text: "Quality Culture Transformation",  color: "bg-blue-100 text-blue-600" },
    { icon: Globe,          text: "Global Regulatory Knowledge",     color: "bg-indigo-100 text-indigo-600" },
    { icon: Users,          text: "Comprehensive Training Programs", color: "bg-indigo-100 text-indigo-600" },
    { icon: Microscope,     text: "Laboratory Compliance",           color: "bg-indigo-100 text-indigo-600" },
    { icon: BookOpen,       text: "SOP Development & Review",        color: "bg-blue-100 text-blue-600" },
    { icon: ClipboardCheck, text: "Regulatory Audits & Inspections", color: "bg-indigo-100 text-indigo-600" },
  ];

  const stats = [
    { number: "100", suffix: "%",  label: "Compliance Rate" },
    { number: "50",  suffix: "+",  label: "Countries Served" },
    { number: "500", suffix: "+",  label: "Successful Projects" },
    { number: "24",  suffix: "/7", label: "Support Available" },
  ];

  const testimonials = [
    {
      quote: "Their team transformed our documentation processes — audits are now seamless and findings minimal.",
      name: "Dr. A. Patel",
      role: "Quality Head, PharmaCo",
    },
    {
      quote: "Method validation support was top-notch. Regulatory submission was accepted with no major queries.",
      name: "Ms. S. Kumar",
      role: "R&D Lead, BioMed Labs",
    },
    {
      quote: "Operational recommendations reduced batch rework and improved on-time deliveries — strong ROI from consulting.",
      name: "Mr. R. Singh",
      role: "Operations Manager, GlobalMeds",
    },
    {
      quote: "Outstanding BA/BE study support. Their expertise in bioanalytical validation ensured our submission was scientifically robust.",
      name: "Dr. R. Verma",
      role: "Clinical Research Head, NovaCure Pharma",
    },
  ];

  return (
    <div className="min-h-screen">

      {/* ══════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1661776255948-7a76baa9d7b9?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Pharmaceutical background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-blue-950/85 via-blue-900/75 to-indigo-900/60" />
        </div>
        <div className="absolute top-12 left-0 w-56 h-56 md:w-80 md:h-80 bg-blue-400 rounded-full blur-3xl opacity-10 animate-pulse pointer-events-none z-10"></div>
        <div className="absolute bottom-12 right-0 w-56 h-56 md:w-80 md:h-80 bg-indigo-400 rounded-full blur-3xl opacity-10 animate-pulse pointer-events-none z-10" style={{ animationDelay: "1s" }}></div>

        <div className="max-w-7xl mx-auto relative z-20 w-full pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            <div ref={heroTextRef} className="order-1">
              <div className="inline-block mb-4">
                <span className="bg-linear-to-r from-pink-500 to-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow">
                  Leading Pharmaceutical Consultancy
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Regulatory Affairs{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-indigo-300">Specialist</span>
              </h1>
              <p className="text-lg md:text-xl font-semibold text-blue-100 mb-3 leading-snug">
                Comprehensive Solutions for Pharmaceutical Excellence and Compliance
              </p>
              <p className="text-base md:text-lg text-blue-200 mb-6 leading-relaxed max-w-2xl">
                Ensuring quality, efficiency, and adherence to global regulatory standards for pharmaceuticals.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/services" className="group inline-flex items-center px-6 py-3 bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full shadow hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Explore Services
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-white/15 backdrop-blur-sm text-white font-semibold rounded-full shadow border-2 border-white/40 hover:bg-white/25 transform hover:scale-105 transition-all duration-300">
                  Get Started
                </Link>
              </div>
              <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="feature-item flex items-center space-x-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200">
                    <div className={`p-2 ${feature.color} rounded-lg shrink-0`}>
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold text-white">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — lab image card */}
            <div ref={heroImageRef} className="relative order-2 mt-6 lg:mt-0 hidden lg:flex justify-center items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-sm">
                <img
                  src="https://img.freepik.com/free-photo/virolog-coducting-experiment-course-coronavirus-pandemic-with-micropipette-chemist-modern-laboratory-doing-research-using-dispenser-global-epidemic-with-covid-19_482257-5737.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="Laboratory research"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-blue-950/90 via-blue-900/70 to-blue-800/50" />
                <div className="relative z-10 p-8 text-center space-y-6">
                  <div className="flex justify-center">
                    <div className="p-4 bg-green-400/20 rounded-full border border-green-400/30">
                      <CheckCircle className="w-12 h-12 text-green-400" />
                    </div>
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-white">100%</p>
                    <p className="text-blue-200 mt-1 font-medium">Compliance Rate</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/20">
                    <div>
                      <p className="text-2xl font-bold text-white">50+</p>
                      <p className="text-xs text-blue-200">Countries</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">500+</p>
                      <p className="text-xs text-blue-200">Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SERVICES SECTION
      ══════════════════════════════════════════════ */}
      <section ref={servicesRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Services</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive pharmaceutical consulting services tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="service-card group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col">
                <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                <div className="relative z-10 flex flex-col grow">
                  <div className={`inline-flex p-3 bg-linear-to-br ${service.color} rounded-xl mb-4 shadow transform group-hover:scale-105 transition-all duration-300 self-start`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 grow">{service.description}</p>
                  <Link to="/services" className="inline-flex items-center text-blue-600 font-semibold group-hover:text-indigo-600 transition-colors duration-300 mt-auto">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-blue-100 to-indigo-100 rounded-bl-full opacity-20 transform translate-x-10 -translate-y-10 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          VIDEO SECTION 1 — right after services
      ══════════════════════════════════════════════ */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Inside Our{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">Expertise</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base">A glimpse into pharmaceutical excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { src: VIDEO_PHARMA_1, label: "Quality & Compliance" },
              { src: VIDEO_PHARMA_2, label: "Regulatory Affairs" },
            ].map((v, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-900 group">
                <video src={v.src} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-linear-to-t from-blue-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-semibold text-sm bg-blue-600/70 backdrop-blur-sm px-3 py-1 rounded-full">
                    {v.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          VIDEO SECTION 2 — before testimonials
      ══════════════════════════════════════════════ */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">Process</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base">How we deliver world-class pharmaceutical consulting</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { src: VIDEO_PHARMA_3, label: "Laboratory Research",  desc: "Precision testing & validation" },
              { src: VIDEO_PHARMA_4, label: "Clinical Excellence",   desc: "Global regulatory submissions" },
            ].map((v, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 group">
                <div className="aspect-video">
                  <video src={v.src} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-75 group-hover:opacity-95 transition-opacity duration-500" />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-gray-950/90 via-gray-950/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                      <Play className="w-4 h-4 text-white fill-white" />
                    </div>
                    <p className="text-white font-bold text-base">{v.label}</p>
                  </div>
                  <p className="text-blue-300 text-sm ml-10">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TESTIMONIALS — clean white cards, no video bg
      ══════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-indigo-600">
                Success Stories
              </span>{" "}
              From Our Valued Clients
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Testimonials from clients who achieved significant improvements in{" "}
              <span className="font-semibold text-blue-600">regulatory compliance</span>,{" "}
              <span className="font-semibold text-indigo-600">operational efficiency</span>, and{" "}
              <span className="font-semibold text-blue-600">product quality</span>.
            </p>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
                <div className="text-5xl text-blue-100 font-serif leading-none mb-2">"</div>
                <p className="text-gray-700 italic text-base leading-relaxed mb-6">{t.quote}</p>
                <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                  <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile scroll */}
          <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-4" style={{ width: "max-content" }}>
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 shrink-0" style={{ width: "300px" }}>
                  <div className="text-4xl text-blue-100 font-serif leading-none mb-2">"</div>
                  <p className="text-gray-700 italic text-sm leading-relaxed mb-4">{t.quote}</p>
                  <div className="flex items-center gap-3 border-t border-gray-100 pt-3">
                    <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:hidden text-center mt-4">
            <p className="text-xs text-gray-400">← Swipe to see more →</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          GLOBE VIDEO — centered medium, before stats
      ══════════════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">Global Reach</span>
          </h2>
          <p className="text-gray-400 mb-8 text-sm md:text-base">Serving pharmaceutical companies across 50+ countries</p>
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-blue-800/40">
              <video src={VIDEO_GLOBE} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-blue-950/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
                <p className="text-white font-bold text-lg drop-shadow-lg">50+ Countries Served</p>
                <p className="text-blue-200 text-sm drop-shadow-md">Regulatory expertise without borders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          STATS — bottom of page, before footer
      ══════════════════════════════════════════════ */}
      <section ref={statsRef} className="py-12 md:py-16 bg-linear-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
                  {statsVisible ? <CountUp end={parseInt(stat.number)} duration={2} /> : "0"}
                  <span className="ml-1">{stat.suffix}</span>
                </div>
                <p className="text-sm md:text-base text-blue-100 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

// Counter Component
function CountUp({ end, duration }) {
  const [count, setCount] = useState(0);
  const countRef     = useRef(0);
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