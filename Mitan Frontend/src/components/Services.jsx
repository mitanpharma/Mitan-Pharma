import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  FlaskConical,
  Building2,
  Shield,
  ClipboardCheck,
  BookOpen,
  Settings,
  Phone,
  TrendingUp,
  Search,
  GraduationCap,
  Users2,
  CheckCircle2,
  Award,
  Users,
  Target,
  Briefcase,
  Globe,
  ArrowRight,
} from "lucide-react";

function Service() {
  const mainServices = [
    {
      icon: FileText,
      title: "Dossier and CTD Compilation",
      description:
        "Expert compilation of CTD, ACTD, and country-specific submissions for ASEAN, CIS, AFRICA, GCC and ROW markets ensuring regulatory compliance.",
      features: [
        "Module 1-5 Documentation",
        "Country-specific dossier preparation",
        "Quality documentation review",
        "Regulatory submission support",
      ],
      color: "from-blue-500 to-blue-600",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop",
    },
    {
      icon: Building2,
      title: "Plant Setup & Design",
      description:
        "Complete plant layout design planning with compliance to regulatory standards, operations management, and audit support.",
      features: [
        "Plant layout design",
        "Equipment specification",
        "Regulatory compliance planning",
        "Operational audits",
      ],
      color: "from-blue-600 to-blue-700",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop",
    },
    {
      icon: Shield,
      title: "CGMP Compliance",
      description:
        "Ensuring Current Good Manufacturing Practice compliance through systematic quality management and regulatory adherence.",
      features: [
        "CGMP audits & assessments",
        "Quality system implementation",
        "Deviation management",
        "CAPA system development",
      ],
      color: "from-indigo-600 to-indigo-700",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop",
    },
    {
      icon: ClipboardCheck,
      title: "Regulatory Affairs",
      description:
        "Complete regulatory affairs support from initial consultation to post-approval maintenance across global markets.",
      features: [
        "Regulatory strategy development",
        "Marketing authorization applications",
        "Variation submissions",
        "Regulatory intelligence",
      ],
      color: "from-blue-500 to-indigo-600",
      image:
        "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&auto=format&fit=crop",
    },
    {
      icon: BookOpen,
      title: "Training & Development",
      description:
        "Comprehensive training programs for pharmaceutical professionals covering regulatory, quality, and compliance topics.",
      features: [
        "GMP training programs",
        "Regulatory compliance training",
        "SOP development workshops",
        "Quality management training",
      ],
      color: "from-indigo-500 to-blue-600",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop",
    },
  ];

  const specialtyServices = [
    {
      icon: FileText,
      title: "Regulatory Affairs",
      description:
        "Comprehensive regulatory support for pharmaceutical companies ensuring compliance with national and international regulations.",
      link: "/contact",
    },
    {
      icon: Settings,
      title: "Process Simplification",
      description:
        "Streamline your pharmaceutical processes for enhanced efficiency and reduced complexity.",
      link: "/contact",
    },
    {
      icon: Phone,
      title: "Quality Consulting",
      description:
        "Expert quality consulting services to maintain highest standards in pharmaceutical manufacturing.",
      link: "/contact",
    },
    {
      icon: TrendingUp,
      title: "Regulatory Audit Consulting",
      description:
        "Prepare for and navigate regulatory audits with confidence through our expert guidance.",
      link: "/contact",
    },
    {
      icon: GraduationCap,
      title: "CGMP Training",
      description:
        "Comprehensive training programs on Current Good Manufacturing Practices for your team.",
      link: "/contact",
    },
    {
      icon: Search,
      title: "CGMP Auditing",
      description:
        "Professional auditing services to ensure compliance with CGMP standards and regulations.",
      link: "/contact",
    },
    {
      icon: Users2,
      title: "Quality Culture Transformation",
      description:
        "Transform your organization's quality culture with our comprehensive consulting services.",
      link: "/contact",
    },
    {
      icon: CheckCircle2,
      title: "Validation/Qualification",
      description:
        "Complete validation and qualification services for pharmaceutical equipment and processes.",
      link: "/contact",
    },
  ];

  const stats = [
    {
      icon: TrendingUp,
      number: "20+",
      label: "Years Experience",
      color: "text-blue-600",
    },
    {
      icon: CheckCircle2,
      number: "500+",
      label: "Projects Completed",
      color: "text-blue-600",
    },
    {
      icon: Users2,
      number: "200+",
      label: "Happy Clients",
      color: "text-blue-600",
    },
    {
      icon: Shield,
      number: "100%",
      label: "Compliance Rate",
      color: "text-blue-600",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description:
        "We begin with understanding your specific regulatory needs and challenges.",
    },
    {
      number: "02",
      title: "Strategy Development",
      description:
        "Create a tailored compliance strategy aligned with your business goals.",
    },
    {
      number: "03",
      title: "Implementation",
      description:
        "Execute the plan with expert guidance and hands-on support.",
    },
    {
      number: "04",
      title: "Monitoring & Support",
      description:
        "Continuous monitoring and ongoing support to ensure sustained compliance.",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg">
              Our Services
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up">
            Comprehensive Pharmaceutical{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
              Consulting Services
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-slide-up-delay">
            Expert regulatory guidance and compliance solutions tailored to your
            pharmaceutical business needs
          </p>
        </div>
      </section>

      {/* Our Specialty Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Specialty</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              With a team of highly experienced professionals, we offer
              comprehensive regulatory services to pharmaceutical companies,
              ensuring compliance with national and international regulations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialtyServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-linear-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>

                <Link
                  to={service.link}
                  className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:text-indigo-600 transition-colors duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Core{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
                Services
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized pharmaceutical consulting solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 border border-gray-100 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-1000"
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 opacity-80 group-hover:opacity-70 transition-opacity duration-500`}
                  ></div>

                  {/* Icon */}
                  <div className="absolute top-4 left-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-gray-700 transform transition-all duration-300 hover:translate-x-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-indigo-600 transition-colors duration-300"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-blue-400/20 to-indigo-400/20 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-5 group-hover:-translate-y-5 transition-transform duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== NEW: CONTRACT MANUFACTURING SECTION ====== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-50 via-indigo-50 to-blue-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: "1.5s" }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-linear-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg">
                Contract Manufacturing
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Pharmaceutical Contract{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
                Manufacturing Services
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Mitan Pharma, we offer comprehensive contract manufacturing solutions for all dosage forms tailored to meet the specific needs of our valued clients.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Search,
                title: "Sourcing & Procurement",
                description: "Strategic sourcing and procurement of high-quality raw materials",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Settings,
                title: "Production & Manufacturing",
                description: "End-to-end production with state-of-the-art facilities",
                color: "from-indigo-500 to-indigo-600"
              },
              {
                icon: Briefcase,
                title: "Packaging Solutions",
                description: "Comprehensive packaging solutions meeting global standards",
                color: "from-blue-600 to-indigo-600"
              },
              {
                icon: Shield,
                title: "Quality Control",
                description: "In-depth quality control and assurance at every stage",
                color: "from-indigo-600 to-blue-600"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-linear-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Why Choose Section */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Content */}
              <div className="p-8 md:p-12 lg:p-16">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  Why Choose{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
                    Mitan Pharma?
                  </span>
                </h3>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: Target,
                      title: "Seamless Integration",
                      description: "Seamless integration into your supply chain, especially for solid dosage forms"
                    },
                    {
                      icon: TrendingUp,
                      title: "Optimized Delivery",
                      description: "Monitoring and optimizing delivery timelines to ensure on-time performance and customer satisfaction"
                    },
                    {
                      icon: Users,
                      title: "Flexible Trade Terms",
                      description: "Flexible trade terms with personalized service for every client"
                    },
                    {
                      icon: Globe,
                      title: "Online Platform",
                      description: "A secure, online collaboration platform for information sharing and project tracking"
                    },
                    {
                      icon: Shield,
                      title: "Data Security",
                      description: "Custom access controls for partners and suppliers, ensuring data confidentiality and control"
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-all duration-300"
                    >
                      <div className="shrink-0">
                        <div className="w-12 h-12 bg-linear-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <item.icon className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative bg-linear-to-br from-blue-600 to-indigo-700 p-8 md:p-12 lg:p-16 flex items-center justify-center overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 text-center">
                  <Award className="w-24 h-24 text-white mx-auto mb-8 animate-pulse" />
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Our Goal
                  </h3>
                  <p className="text-xl text-blue-100 leading-relaxed max-w-md mx-auto">
                    To create a productive and profitable outsourcing partnership, solving the complexities of extended supply chains and enabling you to focus on core operations.
                  </p>
                  <div className="mt-8">
                    <Link
                      to="/contact"
                      className="inline-flex items-center bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
                    >
                      Get Started Today
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
              With our highly integrated production facilities and deep pharmaceutical industry expertise, we manage flexible production lines that adapt to your requirements. This enables us to execute custom contract manufacturing projects with efficiency and precision.
            </p>
          </div>
        </div>
      </section>
      {/* ====== END: CONTRACT MANUFACTURING SECTION ====== */}

      {/* Why Choose Us Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading expertise and commitment to excellence
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 text-center transform hover:-translate-y-3 hover:scale-105"
              >
                <div className="w-20 h-20 bg-linear-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <stat.icon className={`w-10 h-10 ${stat.color}`} />
                </div>
                <div className="text-5xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage:
                "radial-linear(circle, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A systematic approach to pharmaceutical compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                  <div className="text-6xl font-bold text-white/20 mb-4 group-hover:text-white/40 transition-colors duration-500">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-blue-100 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-white/30 group-hover:bg-white/60 transition-colors duration-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
