import React, { useState } from "react";
import { Menu, X, ChevronDown, Search, HelpCircle } from "lucide-react";

const MitanPharmaFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const faqData = [
    {
      category: "Services",
      question:
        "What pharmaceutical consultancy services does Mitan Pharma offer?",
      answer:
        "Mitan Pharma provides comprehensive pharmaceutical consultancy services including regulatory compliance, drug development support, quality assurance, manufacturing process optimization, GMP training, documentation services, and market authorization assistance for pharmaceutical companies.",
    },
    {
      category: "Services",
      question:
        "Do you provide support for new pharmaceutical product launches?",
      answer:
        "Yes, we offer complete support for new product launches including regulatory strategy, dossier preparation, stability studies coordination, marketing authorization applications, and post-approval compliance support.",
    },
    {
      category: "Regulatory",
      question:
        "Which regulatory authorities does Mitan Pharma have expertise in?",
      answer:
        "We have extensive experience with multiple regulatory authorities including CDSCO (India), USFDA, EMA (European Medicines Agency), WHO, and other international regulatory bodies. Our team stays updated with the latest regulatory requirements and guidelines.",
    },
    {
      category: "Regulatory",
      question: "Can you help with drug approval and licensing procedures?",
      answer:
        "Absolutely! We specialize in navigating complex drug approval processes, preparing regulatory submissions, obtaining manufacturing licenses, and ensuring compliance with all necessary regulatory requirements for both domestic and international markets.",
    },
    {
      category: "Quality",
      question:
        "What is your approach to quality assurance and GMP compliance?",
      answer:
        "We follow a comprehensive approach that includes facility audits, documentation review, SOP development, training programs, gap analysis, and continuous improvement strategies to ensure full GMP compliance and maintain the highest quality standards.",
    },
    {
      category: "Quality",
      question: "Do you provide GMP training for pharmaceutical staff?",
      answer:
        "Yes, we conduct customized GMP training programs for pharmaceutical personnel at all levels, covering topics like quality systems, documentation practices, hygiene standards, contamination control, and regulatory compliance.",
    },
    {
      category: "Company",
      question:
        "How long has Mitan Pharma been in the pharmaceutical consultancy business?",
      answer:
        "Mitan Pharma has been serving the pharmaceutical industry with dedicated consultancy services, bringing together experienced professionals who understand the unique challenges and requirements of pharmaceutical manufacturing and compliance.",
    },
    {
      category: "Company",
      question:
        "What makes Mitan Pharma different from other consultancy firms?",
      answer:
        "Our key differentiators include personalized service, deep industry expertise, practical solutions based on real-world experience, cost-effective consulting packages, quick turnaround times, and a commitment to building long-term partnerships with our clients.",
    },
    {
      category: "Process",
      question:
        "How do I get started with Mitan Pharma's consultancy services?",
      answer:
        "Simply contact us via phone (+91 9499444948) or email (mitanpharma@gmail.com). We'll schedule an initial consultation to understand your specific needs, assess your requirements, and propose a customized solution with clear timelines and deliverables.",
    },
    {
      category: "Process",
      question: "What is the typical timeline for consultancy projects?",
      answer:
        "Project timelines vary based on scope and complexity. Simple documentation projects may take 2-4 weeks, while comprehensive regulatory submissions can take 3-6 months. We provide detailed project plans with milestones during our initial consultation.",
    },
    {
      category: "Process",
      question: "Do you offer ongoing support after project completion?",
      answer:
        "Yes, we believe in long-term partnerships. We offer post-project support, periodic compliance reviews, regulatory update notifications, and are always available to address any questions or concerns that may arise after project completion.",
    },
    {
      category: "Pricing",
      question: "How is your consultancy pricing structured?",
      answer:
        "We offer flexible pricing models including project-based fees, hourly rates, and retainer arrangements. Pricing depends on project scope, complexity, and duration. We provide transparent quotations with no hidden costs after our initial assessment.",
    },
  ];

  const categories = ["All", ...new Set(faqData.map((faq) => faq.category))];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFAQs = faqData.filter((faq) => {
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-100">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-float"></div>
        <div className="absolute w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-15 top-1/3 -right-48 animate-float-delayed"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-16 pb-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-blue-100 rounded-full border-2 border-blue-300">
              <HelpCircle className="w-5 h-5 text-blue-600" />
              <span className="text-blue-700 font-serif text-sm uppercase tracking-wide">
                Frequently Asked Questions
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-black mb-6 text-gray-900 leading-tight">
              Have Questions?
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Find answers to the most common questions about our
              <span className="text-blue-600 font-semibold">
                {" "}
                pharmaceutical consultancy services
              </span>
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search for questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-16 pr-6 py-5 rounded-full border-4 border-blue-200 bg-white focus:border-blue-600 focus:outline-none text-gray-900 placeholder-gray-400 text-lg shadow-lg transition-all duration-300"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-serif font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-700 border-2 border-blue-200 hover:border-blue-400"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 px-4">
          <div className="max-w-5xl mx-auto">
            {filteredFAQs.length > 0 ? (
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <div
                    key={index}
                    className="group bg-white border-4 border-blue-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-blue-300"
                  >
                    {/* Question */}
                    <button
                      className="w-full px-6 py-6 md:px-8 md:py-7 text-left flex justify-between items-start hover:bg-blue-50 transition-all duration-300"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={activeIndex === index}
                    >
                      <div className="flex-1 pr-4">
                        <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold font-serif rounded-full mb-3">
                          {faq.category}
                        </span>
                        <span className="block text-lg md:text-xl font-bold font-serif text-gray-900">
                          {faq.question}
                        </span>
                      </div>
                      <div
                        className={`shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white transition-all duration-300 ${
                          activeIndex === index ? "rotate-180" : ""
                        }`}
                      >
                        <ChevronDown className="w-6 h-6" />
                      </div>
                    </button>

                    {/* Answer */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        activeIndex === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-7">
                        <div className="pl-4 border-l-4 border-blue-600">
                          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border-4 border-blue-100 shadow-lg">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  No results found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Still Have Questions Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
              <h2 className="text-3xl md:text-4xl font-black font-serif mb-4">
                Still Have Questions?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Our team is ready to help you with any inquiries about
                pharmaceutical consultancy services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+919499444948"
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-serif font-bold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  📞 Call Us Now
                </a>
                <a
                  href="mailto:mitanpharma@gmail.com"
                  className="bg-blue-800 text-white px-8 py-4 rounded-full font-serif font-bold text-lg hover:bg-blue-900 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  ✉️ Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
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

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default MitanPharmaFAQ;
