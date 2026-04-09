import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  FileCheck,
  Award,
  ClipboardCheck,
  Globe,
  BadgeCheck,
  Building2,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Wholesale Drug License (WDL) Support",
    description:
      "We guide pharmaceutical companies through the complete process of obtaining Wholesale Drug Licenses — managing documentation preparation, authority coordination, and application submission to ensure a seamless and compliant approval experience.",
  },
  {
    icon: ClipboardCheck,
    title: "Product Permission & Approval Applications",
    description:
      "Our regulatory specialists prepare and submit product permission applications with precision, ensuring every dossier is complete, accurate, and aligned with the current requirements of the relevant drug regulatory authority.",
  },
  {
    icon: Building2,
    title: "Loan License Documentation & Processing",
    description:
      "We handle the full documentation and processing cycle for loan licensing arrangements, enabling manufacturers to leverage third-party facilities while maintaining full regulatory compliance and legal standing.",
  },
  {
    icon: Globe,
    title: "COPP (Certificate of Pharmaceutical Product)",
    description:
      "We assist exporters in obtaining the Certificate of Pharmaceutical Product (COPP) — a critical document for international market entry — by coordinating with national regulatory authorities and ensuring all supporting documentation is accurately prepared.",
  },
  {
    icon: Award,
    title: "FSC (Free Sale Certificate) Preparation",
    description:
      "Our team prepares Free Sale Certificates (FSCs) required for exporting pharmaceutical products to international markets, ensuring they reflect accurate product information and meet the importing country's regulatory expectations.",
  },
  {
    icon: BadgeCheck,
    title: "FDA & State Drug Authority Coordination",
    description:
      "We act as a dedicated liaison between your organization and regulatory authorities — including the Central Drugs Standard Control Organization (CDSCO), FDA, and State Drug Authorities — facilitating communication and expediting the review process.",
  },
];

const expertise = [
  {
    title: "Manufacturing Licensing",
    detail:
      "We support pharmaceutical manufacturers in obtaining and renewing licenses for drug manufacturing operations, ensuring full compliance with GMP standards and regulatory guidelines at every stage.",
  },
  {
    title: "Distribution & Wholesale Licensing",
    detail:
      "Our team manages the complete documentation and submission process for wholesale and distribution licenses, covering both state-level and central regulatory requirements.",
  },
  {
    title: "Export Documentation",
    detail:
      "We assist in preparing and processing all export-related regulatory documentation including COPPs, FSCs, and GMP certificates required for entering regulated international pharmaceutical markets.",
  },
  {
    title: "Regulatory Authority Liaison",
    detail:
      "With established coordination practices, we manage communications with regulatory authorities to track application status, respond to queries, and ensure timely approvals without unnecessary delays.",
  },
];

const whyPoints = [
  {
    title: "Seasoned Regulatory Professionals",
    detail:
      "Our team comprises experienced regulatory affairs specialists with deep knowledge of Indian and international pharmaceutical licensing frameworks — ensuring your applications are handled with expertise and precision.",
  },
  {
    title: "End-to-End Licensing Support",
    detail:
      "From initial documentation assessment to final regulatory approval, we manage the entire licensing journey — eliminating gaps, reducing back-and-forth with authorities, and keeping you informed at every milestone.",
  },
  {
    title: "Faster Approval Timelines",
    detail:
      "Through meticulous documentation and proactive authority coordination, we minimize the risk of rejections and resubmissions — helping you obtain approvals faster and launch products without regulatory delays.",
  },
  {
    title: "Compliance-Focused Submissions",
    detail:
      "Every application we prepare is reviewed against the latest regulatory guidelines and authority checklists — ensuring submissions are complete, compliant, and ready for review from day one.",
  },
];

function LicensingServices() {
  const cardRefs = useRef([]);
  const expertiseRefs = useRef([]);
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
      { threshold: 0.1 }
    );
    [...cardRefs.current, ...expertiseRefs.current, ...whyRefs.current].forEach(
      (ref) => { if (ref) observer.observe(ref); }
    );
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-24 bg-linear-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-16 w-72 h-72 bg-blue-200 rounded-full opacity-30 blur-2xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-blue-600 transition-colors duration-200 font-medium">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-blue-700 font-semibold">Pharmaceutical Licensing Services</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-semibold tracking-widest uppercase rounded-full mb-6 border border-blue-200">
              Licensing & Regulatory Approvals
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Pharmaceutical{" "}
              <span className="text-blue-600">Licensing Services</span>{" "}
              for Drug Manufacturers & Exporters
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Navigating the complex landscape of pharmaceutical licensing
              requires both regulatory expertise and meticulous attention to
              detail. At Mitan Pharma, we provide end-to-end pharmaceutical
              licensing support to help manufacturers, exporters, and
              distributors obtain the approvals they need — efficiently,
              accurately, and in full compliance with applicable regulations.
            </p>
            <p className="text-base text-gray-500 leading-relaxed mb-8">
              From wholesale drug licenses and product approvals to export
              certificates and regulatory authority coordination, our
              experienced team manages every aspect of the licensing process
              so you can focus on your core business operations.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Get in Touch <ChevronRight className="w-4 h-4" />
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
              { value: "6+", label: "Licensing Service Types" },
              { value: "100%", label: "Compliance-Focused" },
              { value: "FDA · CDSCO", label: "Authority Coordination" },
              { value: "Fast", label: "Approval Timelines" },
            ].map((stat, i) => (
              <div key={i} className="text-white">
                <div className="text-2xl sm:text-3xl font-extrabold mb-1">{stat.value}</div>
                <div className="text-blue-100 text-xs font-medium tracking-wide uppercase">{stat.label}</div>
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
              Pharmaceutical Licensing Services We Provide
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
              Our regulatory team manages the full spectrum of pharmaceutical
              licensing requirements — ensuring every filing is complete,
              accurate, and submitted without unnecessary delays.
            </p>
            <div className="mt-6 mx-auto w-16 h-1 bg-blue-500 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* ── Licensing Expertise ── */}
      <section className="py-20 bg-blue-50 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-white text-blue-600 text-xs font-semibold tracking-widest uppercase rounded-full mb-4 border border-blue-200">
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Pharmaceutical Licensing Expertise
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
              Mitan Pharma supports pharmaceutical companies throughout the
              entire licensing process — from initial documentation preparation
              to final regulatory approval — working closely with authorities
              to keep every application compliant and on track.
            </p>
            <div className="mt-6 mx-auto w-16 h-1 bg-blue-500 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <div
                key={index}
                ref={(el) => (expertiseRefs.current[index] = el)}
                className="opacity-0 translate-y-6 transition-all duration-500 flex items-start gap-4 bg-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-300"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 bg-linear-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-500 rounded-full opacity-20 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-400 rounded-full opacity-20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block px-4 py-1.5 bg-white/10 text-blue-100 text-xs font-semibold tracking-widest uppercase rounded-full mb-6 border border-white/20">
                Why Mitan Pharma
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                Why Choose Mitan Pharma for Licensing Services?
              </h2>
              <p className="text-blue-100 text-base leading-relaxed mb-4">
                Pharmaceutical licensing is a high-stakes process where errors
                or omissions can result in costly delays, rejections, and missed
                market opportunities. At Mitan Pharma, we eliminate that risk by
                combining regulatory expertise with a structured, compliance-first
                approach to every application we handle.
              </p>
              <p className="text-blue-200 text-sm leading-relaxed">
                Whether you are a first-time applicant or an established
                organization managing multiple licenses, our team provides the
                precision and coordination needed to keep your regulatory
                timelines on track.
              </p>
            </div>

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
                    <p className="text-white text-sm font-semibold mb-0.5">{point.title}</p>
                    <p className="text-blue-200 text-xs leading-relaxed">{point.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-semibold tracking-widest uppercase rounded-full mb-6 border border-blue-200">
            Take the Next Step
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Ready to Streamline Your Pharmaceutical Licensing?
          </h3>
          <p className="text-gray-500 mb-8 text-base max-w-2xl mx-auto leading-relaxed">
            Connect with our licensing specialists today and let Mitan Pharma
            handle the complexities of regulatory approvals — so you can bring
            your products to market faster, with confidence and full compliance.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Contact Our Team <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}

export default LicensingServices;