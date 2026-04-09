import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  ClipboardList,
  Users,
  Zap,
  TrendingUp,
  Settings,
  ShieldCheck,
  CheckCircle,
  Search,
  BookOpen,
  Layers,
} from "lucide-react";

const howItWorks = [
  {
    step: "01",
    icon: Search,
    title: "Requirement Analysis",
    description:
      "We begin by conducting a thorough evaluation of your operational requirements, project scope, regulatory workload volume, and the technical competencies needed to deliver your project successfully. This discovery phase ensures our engagement model is precisely tailored to your organization's needs before a single resource is deployed.",
  },
  {
    step: "02",
    icon: Users,
    title: "Talent Acquisition",
    description:
      "Based on the defined project requirements, our team identifies, evaluates, and deploys qualified professionals with hands-on expertise in pharmaceutical regulatory operations, compliance management, and project coordination. Every candidate is assessed against your specific technical and functional requirements before selection.",
  },
  {
    step: "03",
    icon: BookOpen,
    title: "Training & Deployment",
    description:
      "Selected professionals undergo a structured onboarding and training program to align with your organization's SOPs, internal quality systems, and regulatory workflows. Only after this preparation phase are they deployed to manage project tasks — ensuring seamless integration with your existing teams from day one.",
  },
];

const benefits = [
  {
    icon: Users,
    title: "Zero HR Administration Burden",
    description:
      "We eliminate the complexity of hiring, onboarding, and managing regulatory professionals. You gain immediate access to trained talent without the time, cost, and administrative burden of direct recruitment and HR management.",
  },
  {
    icon: Zap,
    title: "Faster Project Execution",
    description:
      "With experienced professionals ready to integrate into your workflows, project timelines are accelerated significantly. Our team hits the ground running — reducing ramp-up time and driving faster delivery of regulatory and operational deliverables.",
  },
  {
    icon: Layers,
    title: "Scalable Resource Deployment",
    description:
      "Our outsourcing model is fully scalable — whether you need one specialist or an entire project team, we can adjust resource allocation based on your workload volume, project phases, and evolving operational demands.",
  },
  {
    icon: TrendingUp,
    title: "Reduced Operational Costs",
    description:
      "Outsourcing project management functions to Mitan Pharma delivers significant cost savings compared to maintaining a full in-house team — eliminating overhead costs associated with salaries, training, infrastructure, and employee benefits.",
  },
  {
    icon: Settings,
    title: "Workflow Optimization",
    description:
      "Our project management professionals bring structured methodologies and process improvement expertise — identifying inefficiencies, streamlining regulatory workflows, and implementing best practices that enhance overall operational performance.",
  },
  {
    icon: ShieldCheck,
    title: "Maintained Regulatory Compliance",
    description:
      "Every project we manage is executed with compliance at its core. Our professionals ensure all regulatory submissions, documentation, and operational activities meet the applicable standards and quality requirements at all times.",
  },
];

const whyPoints = [
  {
    title: "Regulatory Expertise Meets Project Management",
    detail:
      "Unlike generic outsourcing providers, Mitan Pharma combines deep pharmaceutical regulatory knowledge with structured project management methodologies — delivering teams that understand both the science and the operational demands of your projects.",
  },
  {
    title: "Seamless Team Integration",
    detail:
      "Our professionals are trained to work as an extension of your internal team — aligning with your culture, systems, and processes to ensure continuity, collaboration, and consistent quality across all project activities.",
  },
  {
    title: "Rapid Resource Scalability",
    detail:
      "As your regulatory workload fluctuates across project phases, we provide the flexibility to scale your outsourced team up or down quickly — maintaining optimal resource utilization without long-term fixed commitments.",
  },
  {
    title: "Quality-Driven Delivery",
    detail:
      "Every deliverable produced under our project management model undergoes rigorous quality review before submission or handover — ensuring accuracy, compliance, and consistency in all outputs regardless of project complexity.",
  },
];

function ProjectAndOutsourcingServices() {
  const stepRefs = useRef([]);
  const benefitRefs = useRef([]);
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
    [...stepRefs.current, ...benefitRefs.current, ...whyRefs.current].forEach(
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
            <span className="text-blue-700 font-semibold">Project Management & Outsourcing Services</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-semibold tracking-widest uppercase rounded-full mb-6 border border-blue-200">
              Project Management & Outsourcing
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Project Management &{" "}
              <span className="text-blue-600">Outsourcing Services</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Pharmaceutical companies today face mounting pressure to manage
              increasingly complex regulatory submissions, clinical development
              activities, and compliance operations — often with limited
              in-house resources. Mitan Pharma addresses this challenge by
              providing professional project management and outsourcing
              services specifically designed for life sciences organizations.
            </p>
            <p className="text-base text-gray-500 leading-relaxed mb-8">
              Our experienced regulatory professionals integrate seamlessly into
              your existing teams, taking ownership of project coordination,
              regulatory task management, and timely deliverable completion —
              so your internal teams can focus on strategic priorities without
              operational overload.
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
              { value: "3-Step", label: "Outsourcing Model" },
              { value: "100%", label: "Compliance-Driven" },
              { value: "Scalable", label: "Team Deployment" },
              { value: "Fast", label: "Project Execution" },
            ].map((stat, i) => (
              <div key={i} className="text-white">
                <div className="text-2xl sm:text-3xl font-extrabold mb-1">{stat.value}</div>
                <div className="text-blue-100 text-xs font-medium tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest uppercase rounded-full mb-4 border border-blue-100">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How Our Outsourcing Model Works
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
              Our outsourcing model is built around a structured three-phase
              approach — designed to simplify operational management, reduce
              administrative burden, and drive measurable improvements in
              project efficiency.
            </p>
            <div className="mt-6 mx-auto w-16 h-1 bg-blue-500 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (stepRefs.current[index] = el)}
                  className="opacity-0 translate-y-6 transition-all duration-500 relative group bg-white border border-blue-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Step number */}
                  <div className="absolute -top-4 left-6 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Step {step.step}
                  </div>
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5 mt-2 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Benefits Grid ── */}
      <section className="py-20 bg-blue-50 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-white text-blue-600 text-xs font-semibold tracking-widest uppercase rounded-full mb-4 border border-blue-200">
              Key Advantages
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Key Benefits of Our Outsourcing Model
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
              Our project management outsourcing model is designed to deliver
              tangible operational, financial, and compliance benefits — giving
              your organization a competitive edge in managing regulatory
              workloads.
            </p>
            <div className="mt-6 mx-auto w-16 h-1 bg-blue-500 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (benefitRefs.current[index] = el)}
                  className="opacity-0 translate-y-6 transition-all duration-500 group bg-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 cursor-default"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-200">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {benefit.description}
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
            <div>
              <span className="inline-block px-4 py-1.5 bg-white/10 text-blue-100 text-xs font-semibold tracking-widest uppercase rounded-full mb-6 border border-white/20">
                Why Mitan Pharma
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                Why Choose Mitan Pharma for Project Management Outsourcing?
              </h2>
              <p className="text-blue-100 text-base leading-relaxed mb-4">
                Mitan Pharma stands apart by combining deep pharmaceutical
                regulatory expertise with structured project management
                capabilities — enabling us to manage complex regulatory and
                operational workflows with precision, accountability, and
                compliance-first execution.
              </p>
              <p className="text-blue-200 text-sm leading-relaxed">
                Our outsourcing model is purpose-built for the pharmaceutical
                industry — giving you access to trained, experienced
                professionals who understand regulatory requirements, quality
                standards, and the operational demands of pharmaceutical
                project management.
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
            Ready to Optimize Your Regulatory Project Operations?
          </h3>
          <p className="text-gray-500 mb-8 text-base max-w-2xl mx-auto leading-relaxed">
            Partner with Mitan Pharma to access trained regulatory professionals
            who integrate seamlessly into your workflows — delivering faster
            execution, reduced operational costs, and sustained compliance across
            all your pharmaceutical project activities.
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

export default ProjectAndOutsourcingServices;