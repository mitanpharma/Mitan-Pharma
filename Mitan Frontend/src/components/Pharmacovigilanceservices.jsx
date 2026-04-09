import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  ShieldCheck,
  FileText,
  BookOpen,
  ClipboardList,
  AlertTriangle,
  Search,
  MessageSquare,
  UserCheck,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: ClipboardList,
    title: "ICSR Management",
    description:
      "We handle the complete lifecycle of Individual Case Safety Reports — from initial data entry and thorough medical review to accurate MedDRA coding, detailed narrative writing, and submission within regulatory timelines to health authorities worldwide.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Data Management",
    description:
      "Our team ensures that all safety data is captured, stored, and managed with the highest level of accuracy and security. Using validated pharmacovigilance systems, we maintain complete audit trails and full lifecycle traceability for every safety record.",
  },
  {
    icon: FileText,
    title: "PSUR & DSUR Reporting",
    description:
      "We prepare, review, and finalize Periodic Safety Update Reports (PSURs) and Development Safety Update Reports (DSURs) in full compliance with ICH E2C and E2F guidelines, enabling continuous and structured benefit-risk evaluation of your products.",
  },
  {
    icon: BookOpen,
    title: "PSMF / PvMF",
    description:
      "We develop and maintain your Pharmacovigilance System Master File as a living document that accurately reflects your entire PV system — ensuring it remains inspection-ready and aligned with EMA and global regulatory expectations at all times.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Management Plans (RMP / REMS)",
    description:
      "Our regulatory experts design robust Risk Management Plans and Risk Evaluation and Mitigation Strategies that identify, characterize, and minimize product-related risks — while ensuring post-marketing safety obligations are clearly defined and executed.",
  },
  {
    icon: Search,
    title: "Literature Surveillance",
    description:
      "We conduct systematic and periodic reviews of global scientific and medical literature to proactively detect emerging safety signals, potential adverse effects, and new benefit-risk considerations — keeping your pharmacovigilance program continuously up to date.",
  },
  {
    icon: MessageSquare,
    title: "Medical Inquiry & Complaint Handling",
    description:
      "Our specialists manage the end-to-end process of product complaints and unsolicited medical queries with professionalism and precision — ensuring timely, accurate, and regulatory-compliant responses that safeguard both patients and your brand reputation.",
  },
  {
    icon: UserCheck,
    title: "QPPV Support Services",
    description:
      "We provide dedicated support to your Qualified Person for Pharmacovigilance in fulfilling their regulatory responsibilities — including system oversight, signal management, regulatory liaison, and ensuring your PV system operates in full compliance.",
  },
];

const whyPoints = [
  {
    title: "Deep Scientific & Regulatory Expertise",
    detail:
      "Our team brings together seasoned pharmacovigilance professionals with a strong foundation in both life sciences and global regulatory frameworks — ensuring your safety program is built on solid, evidence-based knowledge.",
  },
  {
    title: "Audit-Ready Drug Safety Deliverables",
    detail:
      "Every report, case, and document we produce is accurate, thoroughly reviewed, and submission-ready — designed to withstand scrutiny from regulatory inspectors and auditors at any time.",
  },
  {
    title: "Global Regulatory Alignment",
    detail:
      "Our pharmacovigilance practices are fully aligned with the requirements of the FDA, EMA, and ICH guidelines — giving you the confidence to operate seamlessly across multiple markets and jurisdictions.",
  },
  {
    title: "Flexible & Cost-Effective PV Outsourcing",
    detail:
      "Whether you need full PV system support or targeted assistance for specific functions, our scalable outsourcing model adapts to your operational scale and budget without compromising on quality or compliance.",
  },
  {
    title: "End-to-End Lifecycle Support",
    detail:
      "From early clinical stages through post-marketing surveillance, we provide continuous pharmacovigilance support that evolves alongside your product — ensuring sustained compliance at every phase of its lifecycle.",
  },
];

function PharmacovigilanceServices() {
  const cardRefs = useRef([]);
  const whyRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-6");
          }
        });
      },
      { threshold: 0.1 },
    );
    [...cardRefs.current, ...whyRefs.current].forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ── Hero / Banner ── */}
      <section className="relative pt-32 pb-24 bg-linear-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-16 w-72 h-72 bg-blue-200 rounded-full opacity-30 blur-2xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <Link
              to="/"
              className="hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-blue-700 font-semibold">
              Pharmacovigilance Services
            </span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-semibold tracking-widest uppercase rounded-full mb-6 border border-blue-200">
              Drug Safety & Regulatory Compliance
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Comprehensive{" "}
              <span className="text-blue-600">Pharmacovigilance</span> Solutions
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              At Mitan Pharma, we are committed to protecting patients and
              supporting the pharmaceutical industry through robust, end-to-end
              pharmacovigilance services. Our solutions are designed to monitor,
              assess, and minimize drug-related risks — ensuring that every
              product remains safe, effective, and fully compliant throughout
              its entire lifecycle.
            </p>
            <p className="text-base text-gray-500 leading-relaxed mb-8">
              From adverse event monitoring and ICSR case processing to
              aggregate safety reporting and post-marketing surveillance, our
              experienced team delivers tailored pharmacovigilance support
              grounded in FDA, EMA, and ICH regulatory standards.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Get in Touch
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3 bg-white text-blue-600 text-sm font-semibold rounded-full shadow border border-blue-200 hover:bg-blue-50 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="bg-blue-600 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "8+", label: "PV Service Offerings" },
              { value: "100%", label: "Regulatory Alignment" },
              { value: "FDA · EMA · ICH", label: "Global Standards" },
              { value: "24/7", label: "Safety Monitoring" },
            ].map((stat, i) => (
              <div key={i} className="text-white">
                <div className="text-2xl sm:text-3xl font-extrabold mb-1">
                  {stat.value}
                </div>
                <div className="text-blue-100 text-xs font-medium tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest uppercase rounded-full mb-4 border border-blue-100">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Pharmacovigilance Services
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
              We offer a full spectrum of pharmacovigilance services tailored to
              the unique safety and compliance requirements of pharmaceutical
              and biotech companies operating in regulated global markets.
            </p>
            <div className="mt-6 mx-auto w-16 h-1 bg-blue-500 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="opacity-0 translate-y-6 transition-all duration-500 group bg-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 cursor-default"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 bg-linear-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-500 rounded-full opacity-20 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-400 rounded-full opacity-20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-white/10 text-blue-100 text-xs font-semibold tracking-widest uppercase rounded-full mb-6 border border-white/20">
                Why Mitan Pharma
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                Why Partner with Mitan Pharma for Pharmacovigilance?
              </h2>
              <p className="text-blue-100 text-base leading-relaxed mb-6">
                Choosing the right pharmacovigilance partner is a critical
                decision. At Mitan Pharma, we go beyond standard compliance — we
                become a strategic extension of your safety team, combining
                scientific rigor with regulatory intelligence to deliver
                outcomes that are accurate, timely, and always audit-ready.
              </p>
              <p className="text-blue-200 text-sm leading-relaxed">
                Whether you are a growing biotech or an established
                pharmaceutical organization, our flexible engagement model
                ensures that your drug safety obligations are met with
                efficiency and precision at every stage.
              </p>
            </div>

            {/* Right */}
            <div className="space-y-4">
              {whyPoints.map((point, index) => (
                <div
                  key={index}
                  ref={(el) => (whyRefs.current[index] = el)}
                  className="opacity-0 translate-y-6 transition-all duration-500 flex items-start gap-4 bg-white/10 border border-white/15 rounded-xl px-5 py-4 backdrop-blur-sm hover:bg-white/20"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-blue-200 shrink-0 mt-1" />
                  <div>
                    <p className="text-white text-sm font-semibold mb-0.5">
                      {point.title}
                    </p>
                    <p className="text-blue-200 text-xs leading-relaxed">
                      {point.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section className="py-20 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-semibold tracking-widest uppercase rounded-full mb-6 border border-blue-200">
            Take the Next Step
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Ready to Elevate Your Drug Safety Program?
          </h3>
          <p className="text-gray-500 mb-8 text-base max-w-2xl mx-auto leading-relaxed">
            Connect with our pharmacovigilance specialists today and discover
            how Mitan Pharma can help you build a compliant, resilient, and
            patient-focused drug safety framework — tailored to your specific
            needs and regulatory obligations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Contact Our Team
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default PharmacovigilanceServices;
