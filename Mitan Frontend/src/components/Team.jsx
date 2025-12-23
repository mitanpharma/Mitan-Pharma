// ==================== FILE: TeamPage.jsx ====================
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Linkedin,
  Award,
  Briefcase,
  GraduationCap,
  Users,
  Target,
  Shield,
  TrendingUp,
  Globe,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

function TeamPage() {
  const [activeTab, setActiveTab] = useState("all");

  const teamMembers = [
    {
      name: "Dr. Manu Babbar",
      role: "GM- Drug Regulatory Affairs , Ph.D Pharmaceutical Sciences, GATE-Pharmaceutical Sciences ",
      image: "/items/Sir.png",
      experience: "15+ years Experience",
      specialization: "Regulatory Affairs & Global Submissions",
      description:
        "Expert in international regulatory strategy with extensive experience in FDA, EMA, and APAC markets.",
      expertise: [
        "CTD Compilation",
        "Regulatory Strategy",
        "Global Submissions",
      ],
      linkedin: "#",
      email: "ManuBabbar@mitanpharma.com",
      category: "leadership",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Quality Assurance Head",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&auto=format&fit=crop",
      experience: "15+ years Experience",
      specialization: "CGMP Compliance & Quality Systems",
      description:
        "Specialized in quality management systems and pharmaceutical manufacturing excellence.",
      expertise: ["CGMP Audits", "Quality Systems", "Deviation Management"],
      linkedin: "#",
      email: "priya@mitanpharma.com",
      category: "quality",
    },
    {
      name: "Mr. Anil Verma",
      role: "Process Excellence Manager",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop",
      experience: "18+ years Experience",
      specialization: "Process Optimization & Plant Design",
      description:
        "Leading expert in pharmaceutical process simplification and operational efficiency.",
      expertise: ["Process Optimization", "Plant Setup", "Operational Audits"],
      linkedin: "#",
      email: "anil@mitanpharma.com",
      category: "operations",
    },
    {
      name: "Ms. Sneha Patel",
      role: "CGMP Training Specialist",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop",
      experience: "12+ years Experience",
      specialization: "Training & Development Programs",
      description:
        "Passionate about building quality culture through comprehensive training and development.",
      expertise: ["CGMP Training", "SOP Development", "Team Building"],
      linkedin: "#",
      email: "sneha@mitanpharma.com",
      category: "training",
    },
    {
      name: "Dr. Amit Singh",
      role: "Regulatory Affairs Manager",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&auto=format&fit=crop",
      experience: "14+ years Experience",
      specialization: "BA/BE Studies & Clinical Documentation",
      description:
        "Specialized in bioequivalence studies and clinical regulatory submissions.",
      expertise: ["BA/BE Studies", "Clinical Documentation", "ANOVA Analysis"],
      linkedin: "#",
      email: "amit@mitanpharma.com",
      category: "regulatory",
    },
    {
      name: "Ms. Kavita Desai",
      role: "Documentation Specialist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop",
      experience: "10+ years Experience",
      specialization: "Technical Writing & Dossier Management",
      description:
        "Expert in pharmaceutical documentation and regulatory dossier compilation.",
      expertise: ["Module Writing", "Document Control", "Regulatory Writing"],
      linkedin: "#",
      email: "kavita@mitanpharma.com",
      category: "documentation",
    },
  ];

  const expertise = [
    {
      icon: Award,
      title: "Regulatory Affairs",
      description:
        "Deep expertise in global regulatory requirements and submission processes for multiple markets.",
    },
    {
      icon: Shield,
      title: "Quality Management",
      description:
        "Comprehensive quality systems and CGMP compliance knowledge across pharmaceutical operations.",
    },
    {
      icon: Target,
      title: "Process Optimization",
      description:
        "Proven track record in streamlining pharmaceutical operations and enhancing efficiency.",
    },
    {
      icon: GraduationCap,
      title: "Training Excellence",
      description:
        "Expert trainers developing pharmaceutical professionals through comprehensive programs.",
    },
    {
      icon: Briefcase,
      title: "Strategic Planning",
      description:
        "Strategic regulatory planning and market access solutions for global pharmaceutical markets.",
    },
    {
      icon: Globe,
      title: "International Experience",
      description:
        "Extensive experience across ASEAN, CIS, Africa, GCC, and ROW markets.",
    },
  ];

  const filteredMembers =
    activeTab === "all"
      ? teamMembers
      : teamMembers.filter((member) => member.category === activeTab);

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg">
              Our Team
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
              Expert Team
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Meet the professionals behind our success. Our team brings decades
            of combined experience in pharmaceutical regulatory affairs and
            quality management.
          </p>
        </div>
      </section>
      {/* Team Members Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership & Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals committed to pharmaceutical excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 border border-gray-100 transform hover:-translate-y-3"
              >
                {/* Member Image */}
                <div className="relative h-80 overflow-hidden bg-linear-to-br from-blue-100 to-indigo-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* Social Icons - Appear on Hover */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <a
                    href={member.linkedin}
                    className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2">
                    {member.role}
                  </p>

                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <Briefcase className="w-4 h-4 mr-2" />
                    {member.experience}
                  </div>

                  <p className="text-gray-700 font-medium text-sm mb-3">
                    {member.specialization}
                  </p>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((exp, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full hover:bg-blue-100 transition-colors duration-300"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>

                  {/* Contact Button */}
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center w-full justify-center px-4 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collective Expertise Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Collective Expertise
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Areas where our team excels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-linear-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
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

            <div className="relative z-10 text-center text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Why Partner With Our Team?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Industry-leading expertise, proven track record, and commitment
                to your success
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
                  <CheckCircle className="w-12 h-12 text-white mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-2">Proven Results</h4>
                  <p className="text-blue-100 text-sm">
                    100% success rate in regulatory approvals
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
                  <TrendingUp className="w-12 h-12 text-white mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-2">
                    Continuous Innovation
                  </h4>
                  <p className="text-blue-100 text-sm">
                    Always staying ahead of industry trends
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
                  <Users className="w-12 h-12 text-white mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-2">Dedicated Support</h4>
                  <p className="text-blue-100 text-sm">
                    24/7 availability for all your needs
                  </p>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300"
              >
                Connect With Our Team
                <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            We're always looking for talented professionals to join our mission
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-10 py-5 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-10 py-5 bg-transparent border-2 border-blue-600 text-blue-600 font-bold text-lg rounded-full hover:bg-blue-600 hover:text-white transform hover:scale-110 transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamPage;
