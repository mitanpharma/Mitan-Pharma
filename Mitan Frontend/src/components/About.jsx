import { useState, useEffect, useRef } from "react";
import {
  Award,
  Target,
  Users,
  TrendingUp,
  Shield,
  Globe,
  CheckCircle,
  Lightbulb,
  HeartHandshake,
  Microscope,
  FileCheck,
  BookOpen,
  ArrowRight,
  Briefcase,
  Star,
} from "lucide-react";

export default function About() {
  const [animated, setAnimated] = useState({});
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimated((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="section-"]').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const stats = [
    { number: "20+", label: "Years of Experience", icon: TrendingUp },
    { number: "500+", label: "Successful Projects", icon: FileCheck },
    { number: "100%", label: "Client Satisfaction", icon: Star },
    { number: "50+", label: "Global Partners", icon: Globe },
  ];

  const certifications = [
    { title: "GMP Compliance Expert", icon: Shield },
    { title: "FDA Regulatory Knowledge", icon: FileCheck },
    { title: "ICH Guidelines Specialist", icon: BookOpen },
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We uphold the highest ethical standards in all our regulatory consulting practices, ensuring transparent and honest guidance.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace cutting-edge approaches to regulatory challenges, continuously improving our methodologies to deliver superior results.",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "We are committed to delivering exceptional quality in every project, exceeding client expectations through meticulous attention to detail.",
    },
    {
      icon: HeartHandshake,
      title: "Collaboration",
      description:
        "We work closely with our clients as trusted partners, fostering strong relationships built on mutual respect and shared success.",
    },
  ];

  const services = [
    {
      icon: FileCheck,
      title: "Regulatory Affairs Consulting",
      description:
        "Comprehensive guidance on global regulatory requirements and submission strategies.",
    },
    {
      icon: Microscope,
      title: "Quality Assurance Services",
      description:
        "Expert quality management systems implementation and compliance auditing.",
    },
    {
      icon: BookOpen,
      title: "Documentation Management",
      description:
        "Complete regulatory documentation preparation, review, and maintenance services.",
    },
    {
      icon: Users,
      title: "Training & Development",
      description:
        "Specialized training programs for pharmaceutical professionals on regulatory compliance.",
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description:
        "Comprehensive risk evaluation and mitigation strategies for regulatory submissions.",
    },
    {
      icon: Globe,
      title: "Global Market Access",
      description:
        "Strategic guidance for navigating international regulatory pathways and market entry.",
    },
  ];

  const timeline = [
    {
      year: "2003",
      title: "Foundation",
      description:
        "Mitan Pharma established with a vision to transform pharmaceutical compliance",
    },
    {
      year: "2015",
      title: "Global Expansion",
      description:
        "Extended services to 15+ countries across Asia, Europe, and Americas",
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description: "Launched advanced digital compliance management platform",
    },
    {
      year: "2024",
      title: "Industry Leader",
      description:
        "Recognized as top pharmaceutical regulatory consultancy with 500+ successful projects",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-50 via-white to-indigo-50 py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <img
                src="/items/logo main.png"
                alt="Mitan Pharma Logo"
                className="w-64 h-auto"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              About <span className="text-blue-600">Mitan Pharma</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              A next-generation pharmaceutical consultancy providing
              comprehensive consulting services based on extensive
              pharmaceutical expertise and industry experience, renowned for
              Process Simplification, Process Enhancement & Quality Culture
              Transformation services.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="section-vision" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div
              className={`${
                animated["section-vision"]
                  ? "animate-fade-in-left"
                  : "opacity-0"
              }`}
            >
              <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Our Vision
                  </h2>
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To be recognized as a global leader in pharmaceutical
                    regulatory affairs consultancy, achieving significant
                    business growth in generic product dossier consultancy with
                    a strong presence in regulated and semi-regulated markets.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We empower our clients to make a positive impact on global
                    healthcare through innovative and regulatory-compliant
                    products that improve patient outcomes worldwide.
                  </p>
                  <img
                    src="https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=600&q=80"
                    alt="Vision"
                    className="rounded-xl shadow-md mt-6 w-full"
                  />
                </div>
              </div>
            </div>

            {/* Mission */}
            <div
              className={`${
                animated["section-vision"]
                  ? "animate-fade-in-right"
                  : "opacity-0"
              }`}
            >
              <div className="bg-linear-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Our Mission
                  </h2>
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our mission is to assist pharmaceutical companies in
                    navigating the complex landscape of regulatory affairs,
                    enabling them to bring safe and effective drugs to market
                    while maintaining strict compliance with global regulatory
                    requirements.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We are renowned for our expertise in Process Simplification,
                    Process Enhancement & Quality Culture Transformation
                    services, helping organizations achieve operational
                    excellence and regulatory success.
                  </p>
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80"
                    alt="Mission"
                    className="rounded-xl shadow-md mt-6 w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Why Choose Us */}
      <section
        id="section-stats"
        className="py-20 bg-linear-to-r from-blue-600 to-indigo-600 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-br from-blue-700/50 to-indigo-700/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 ${
              animated["section-stats"] ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We combine deep pharmaceutical industry knowledge with innovative
              approaches to help you navigate the complex regulatory landscape.
              Our team of experienced professionals is committed to your
              success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`text-center ${
                    animated["section-stats"] ? "animate-scale-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <Icon className="w-12 h-12 text-white mx-auto mb-4" />
                    <div className="text-5xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-lg text-blue-100">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="section-certifications" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 ${
              animated["section-certifications"]
                ? "animate-fade-in-up"
                : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Certifications & Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognized standards and professional credentials that demonstrate
              our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className={`bg-blue-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                    animated["section-certifications"]
                      ? "animate-fade-in-up"
                      : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {cert.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="section-values" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 ${
              animated["section-values"] ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define who we are
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`bg-linear-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 ${
                    animated["section-values"]
                      ? "animate-fade-in-up"
                      : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="section-services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 ${
              animated["section-services"] ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive pharmaceutical regulatory and quality consulting
              solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                    animated["section-services"]
                      ? "animate-scale-in"
                      : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-blue-600 font-semibold cursor-pointer hover:text-blue-700 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="section-timeline" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 ${
              animated["section-timeline"] ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two decades of excellence in pharmaceutical regulatory consulting
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  animated["section-timeline"]
                    ? index % 2 === 0
                      ? "animate-fade-in-left"
                      : "animate-fade-in-right"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="w-full md:w-5/12">
                    <div
                      className={`bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-full md:w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-full md:w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
