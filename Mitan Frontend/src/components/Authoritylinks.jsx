import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Globe,
  ExternalLink,
  ShieldCheck,
  BookOpen,
  HeartPulse,
  AlertCircle,
} from "lucide-react";

const globalAuthorities = [
  {
    short: "FDA",
    country: "USA",
    name: "US Food and Drug Administration",
    description:
      "The FDA is responsible for protecting public health by ensuring the safety, efficacy, and security of human and veterinary drugs, biological products, and medical devices in the United States.",
    url: "https://www.fda.gov",
    flag: "🇺🇸",
  },
  {
    short: "CDSCO",
    country: "India",
    name: "Central Drugs Standard Control Organization",
    description:
      "CDSCO is the national regulatory body of India responsible for the approval of new drugs, clinical trials, and the licensing of pharmaceutical manufacturers and importers.",
    url: "https://cdsco.gov.in",
    flag: "🇮🇳",
  },
  {
    short: "EMA",
    country: "European Union",
    name: "European Medicines Agency",
    description:
      "The EMA is a decentralized EU agency responsible for the scientific evaluation, supervision, and safety monitoring of medicines developed for use in the European Union.",
    url: "https://www.ema.europa.eu",
    flag: "🇪🇺",
  },
  {
    short: "PMDA",
    country: "Japan",
    name: "Pharmaceuticals and Medical Devices Agency",
    description:
      "PMDA conducts reviews of pharmaceutical products, ensures post-marketing safety, and provides relief services for adverse health effects of drugs and medical devices in Japan.",
    url: "https://www.pmda.go.jp/english/index.html",
    flag: "🇯🇵",
  },
  {
    short: "MHRA",
    country: "United Kingdom",
    name: "Medicines and Healthcare Products Regulatory Agency",
    description:
      "MHRA is the UK government agency responsible for ensuring that medicines, medical devices, and blood components meet applicable standards of safety, quality, and efficacy.",
    url: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency",
    flag: "🇬🇧",
  },
  {
    short: "TGA",
    country: "Australia",
    name: "Therapeutic Goods Administration",
    description:
      "The TGA is Australia's regulatory authority for therapeutic goods, responsible for evaluating, assessing, and monitoring products including prescription medicines, vaccines, and medical devices.",
    url: "https://www.tga.gov.au",
    flag: "🇦🇺",
  },
  {
    short: "Health Canada",
    country: "Canada",
    name: "Health Canada",
    description:
      "Health Canada is the federal department responsible for helping Canadians maintain and improve their health, including the regulation of health products, food safety, and pharmaceutical compliance.",
    url: "https://www.canada.ca/en/health-canada.html",
    flag: "🇨🇦",
  },
  {
    short: "NMPA",
    country: "China",
    name: "National Medical Products Administration",
    description:
      "NMPA oversees the regulation of drugs, medical devices, and cosmetics in China — responsible for product registration, licensing, and post-marketing surveillance across the country.",
    url: "https://english.nmpa.gov.cn",
    flag: "🇨🇳",
  },
  {
    short: "ANVISA",
    country: "Brazil",
    name: "National Health Surveillance Agency",
    description:
      "ANVISA is Brazil's federal regulatory agency responsible for sanitary control of products and services that pose health risks — including pharmaceuticals, food, cosmetics, and medical devices.",
    url: "https://www.gov.br/anvisa/en",
    flag: "🇧🇷",
  },
  {
    short: "SAHPRA",
    country: "South Africa",
    name: "South African Health Products Regulatory Authority",
    description:
      "SAHPRA is responsible for the regulation of health products in South Africa, ensuring their safety, quality, and efficacy through rigorous evaluation and post-market surveillance.",
    url: "https://www.sahpra.org.za",
    flag: "🇿🇦",
  },
  {
    short: "PPB",
    country: "Kenya",
    name: "Pharmacy and Poisons Board",
    description:
      "The PPB is the national regulatory authority in Kenya responsible for regulating the practice of pharmacy and the manufacture, trade, and use of drugs, poisons, and medical devices.",
    url: "https://www.pharmacyboardkenya.org",
    flag: "🇰🇪",
  },
  {
    short: "SFDA",
    country: "Saudi Arabia",
    name: "Saudi Food and Drug Authority",
    description:
      "SFDA is the regulatory authority in Saudi Arabia overseeing the safety, efficacy, and quality of food, drugs, medical devices, and cosmetics distributed across the Kingdom.",
    url: "https://www.sfda.gov.sa/en",
    flag: "🇸🇦",
  },
  {
    short: "HSA",
    country: "Singapore",
    name: "Health Sciences Authority",
    description:
      "HSA is Singapore's regulatory authority responsible for ensuring the safety, quality, and efficacy of health products — including therapeutic products, medical devices, and clinical trials.",
    url: "https://www.hsa.gov.sg",
    flag: "🇸🇬",
  },
  {
    short: "MFDS",
    country: "South Korea",
    name: "Ministry of Food and Drug Safety",
    description:
      "MFDS is the South Korean government body responsible for ensuring the safety and effectiveness of food, drugs, cosmetics, medical devices, and biopharmaceutical products.",
    url: "https://www.mfds.go.kr/eng/index.do",
    flag: "🇰🇷",
  },
];

const internationalOrgs = [
  {
    short: "WHO",
    name: "World Health Organization",
    description:
      "The WHO is the leading international body for public health, responsible for coordinating global health responses, setting international healthcare standards, and leading pharmaceutical regulatory harmonization efforts worldwide.",
    url: "https://www.who.int",
    icon: "🌐",
  },
  {
    short: "ICH",
    name: "International Council for Harmonisation",
    description:
      "ICH brings together regulatory authorities and the pharmaceutical industry to discuss scientific and technical aspects of drug registration, developing internationally recognized guidelines for drug quality, safety, and efficacy.",
    url: "https://www.ich.org",
    icon: "⚖️",
  },
  {
    short: "CIOMS",
    name: "Council for International Organizations of Medical Sciences",
    description:
      "CIOMS is an international non-governmental organization that works closely with WHO to develop international ethical guidelines for biomedical research and pharmacovigilance standards.",
    url: "https://cioms.ch",
    icon: "🔬",
  },
  {
    short: "BMA",
    name: "British Medical Association",
    description:
      "The BMA is a professional association and independent trade union representing doctors and medical students in the UK, providing scientific and policy guidance on medical practice and healthcare regulation.",
    url: "https://www.bma.org.uk",
    icon: "🏥",
  },
  {
    short: "WMA",
    name: "World Medical Association",
    description:
      "The WMA represents the interests of physicians globally, developing ethical standards and policies on topics including clinical research, patient rights, and pharmaceutical trial conduct.",
    url: "https://www.wma.net",
    icon: "👨‍⚕️",
  },
  {
    short: "ISoP",
    name: "International Society of Pharmacovigilance",
    description:
      "ISoP is a non-profit scientific organization dedicated to advancing pharmacovigilance globally — promoting drug safety science, education, and the application of best practices in medicines monitoring.",
    url: "https://isoponline.org",
    icon: "💊",
  },
];

const pvResources = [
  {
    name: "Pharmacovigilance Europe",
    description:
      "A dedicated European resource providing comprehensive information, educational materials, and updates on pharmacovigilance regulations, case reporting standards, and safety monitoring frameworks across the EU.",
    url: "https://www.pharmacovigilance.eu",
    icon: "🛡️",
  },
  {
    name: "Global Patient Safety Alerts",
    description:
      "A centralized platform that aggregates safety alerts, drug recalls, and regulatory warnings from health authorities worldwide — enabling pharmaceutical professionals to monitor and respond to emerging safety signals promptly.",
    url: "https://www.who.int/initiatives/global-patient-safety-alerts",
    icon: "🚨",
  },
  {
    name: "WHO Global Pharmacovigilance Programme",
    description:
      "The WHO's dedicated pharmacovigilance programme that collects and analyzes adverse drug reaction data from member countries through the Uppsala Monitoring Centre — supporting global drug safety surveillance.",
    url: "https://www.who.int/teams/regulation-prequalification/pharmacovigilance",
    icon: "🌍",
  },
];

function AuthorityLinks() {
  const authRefs = useRef([]);
  const orgRefs = useRef([]);
  const pvRefs = useRef([]);

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
      { threshold: 0.08 }
    );
    [...authRefs.current, ...orgRefs.current, ...pvRefs.current].forEach(
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
            <span className="text-blue-700 font-semibold">Authorities & Regulatory Contacts</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-semibold tracking-widest uppercase rounded-full mb-6 border border-blue-200">
              Global Regulatory Resources
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Global Pharmaceutical{" "}
              <span className="text-blue-600">Regulatory Authorities</span>{" "}
              & Useful Links
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              This curated resource page provides direct access to the world's
              leading pharmaceutical regulatory authorities, international
              healthcare organizations, and pharmacovigilance frameworks.
              Whether you are a pharmaceutical company, regulatory professional,
              or researcher, staying connected to these authoritative sources is
              essential for maintaining compliance and staying ahead of
              evolving regulatory standards.
            </p>
            <p className="text-base text-gray-500 leading-relaxed mb-8">
              From FDA and EMA drug approval guidelines to WHO pharmacovigilance
              programmes and ICH harmonization standards — all critical
              regulatory touchpoints are consolidated here for your convenience.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Get Regulatory Support <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3 bg-white text-blue-600 text-sm font-semibold rounded-full shadow border border-blue-200 hover:bg-blue-50 transition-all duration-300"
              >
                Our Services
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
              { value: "14+", label: "Regulatory Authorities" },
              { value: "6", label: "International Organizations" },
              { value: "3", label: "PV Resource Portals" },
              { value: "Global", label: "Coverage" },
            ].map((stat, i) => (
              <div key={i} className="text-white">
                <div className="text-2xl sm:text-3xl font-extrabold mb-1">{stat.value}</div>
                <div className="text-blue-100 text-xs font-medium tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Global Regulatory Authorities ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest uppercase rounded-full mb-4 border border-blue-100">
              Regulatory Authorities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <Globe className="w-8 h-8 text-blue-600" />
              Global Regulatory Authorities
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
              Direct links to national and regional pharmaceutical regulatory
              authorities worldwide — the primary sources for drug approval
              guidelines, licensing requirements, and compliance frameworks in
              their respective jurisdictions.
            </p>
            <div className="mt-6 mx-auto w-16 h-1 bg-blue-500 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {globalAuthorities.map((auth, index) => (
              <a
                key={index}
                href={auth.url}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => (authRefs.current[index] = el)}
                className="opacity-0 translate-y-6 transition-all duration-500 group bg-white border border-blue-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 cursor-pointer block"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{auth.flag}</span>
                    <div>
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                        {auth.short}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors duration-200 shrink-0" />
                </div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                  {auth.country}
                </p>
                <h3 className="text-sm font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-200 leading-snug">
                  {auth.name}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                  {auth.description}
                </p>
                <div className="mt-3 flex items-center gap-1 text-blue-500 text-xs font-semibold group-hover:gap-2 transition-all duration-200">
                  Visit Website <ChevronRight className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── International Organizations ── */}
      <section className="py-20 bg-blue-50 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-white text-blue-600 text-xs font-semibold tracking-widest uppercase rounded-full mb-4 border border-blue-200">
              International Bodies
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <BookOpen className="w-8 h-8 text-blue-600" />
              International Organizations
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
              These international bodies set the global standards, ethical
              frameworks, and harmonization guidelines that underpin
              pharmaceutical regulation, clinical research, and drug safety
              monitoring across the world.
            </p>
            <div className="mt-6 mx-auto w-16 h-1 bg-blue-500 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {internationalOrgs.map((org, index) => (
              <a
                key={index}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => (orgRefs.current[index] = el)}
                className="opacity-0 translate-y-6 transition-all duration-500 group bg-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 cursor-pointer block"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl group-hover:bg-blue-600 transition-colors duration-300">
                    {org.icon}
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors duration-200" />
                </div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100 mb-2 inline-block">
                  {org.short}
                </span>
                <h3 className="text-base font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-200">
                  {org.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {org.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-blue-500 text-xs font-semibold group-hover:gap-2 transition-all duration-200">
                  Visit Website <ChevronRight className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pharmacovigilance Resources ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest uppercase rounded-full mb-4 border border-blue-100">
              PV Resources
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <HeartPulse className="w-8 h-8 text-blue-600" />
              Pharmacovigilance Resources
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
              Essential portals and programmes dedicated to drug safety
              monitoring, adverse event reporting, and global pharmacovigilance
              standards — critical resources for maintaining product safety
              throughout the product lifecycle.
            </p>
            <div className="mt-6 mx-auto w-16 h-1 bg-blue-500 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pvResources.map((res, index) => (
              <a
                key={index}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => (pvRefs.current[index] = el)}
                className="opacity-0 translate-y-6 transition-all duration-500 group bg-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 cursor-pointer block"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl group-hover:bg-blue-600 transition-colors duration-300">
                    {res.icon}
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors duration-200" />
                </div>
                <h3 className="text-base font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-200">
                  {res.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {res.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-blue-500 text-xs font-semibold group-hover:gap-2 transition-all duration-200">
                  Visit Resource <ChevronRight className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why These Resources Matter ── */}
      <section className="py-20 bg-linear-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-500 rounded-full opacity-20 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-400 rounded-full opacity-20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-white/10 text-blue-100 text-xs font-semibold tracking-widest uppercase rounded-full mb-6 border border-white/20">
                Why It Matters
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                Why These Regulatory Resources Are Essential
              </h2>
              <p className="text-blue-100 text-base leading-relaxed mb-4">
                Pharmaceutical regulatory authorities and global healthcare
                organizations are the architects of the standards that ensure
                medicines are safe, effective, and of consistently high quality.
                Their guidelines shape every aspect of pharmaceutical
                development — from early clinical research through to
                post-marketing safety surveillance.
              </p>
              <p className="text-blue-200 text-sm leading-relaxed">
                Staying continuously informed about regulatory updates from
                organizations such as the FDA, WHO, ICH, and CDSCO enables
                pharmaceutical companies to proactively align their product
                development strategies, regulatory submissions, and
                pharmacovigilance practices with the latest international
                standards — reducing compliance risk and accelerating time
                to market.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: ShieldCheck,
                  title: "Ensure Ongoing Regulatory Compliance",
                  detail: "Access current guidelines, approval requirements, and compliance frameworks directly from authoritative regulatory sources to keep your operations fully aligned with applicable laws.",
                },
                {
                  icon: Globe,
                  title: "Navigate Multi-Market Registrations",
                  detail: "Understanding the requirements of multiple regulatory authorities simultaneously is essential for pharmaceutical companies seeking approvals across international markets.",
                },
                {
                  icon: AlertCircle,
                  title: "Monitor Safety Signals Proactively",
                  detail: "Pharmacovigilance resources and global safety alert portals enable you to detect and respond to emerging drug safety signals before they escalate into regulatory or public health issues.",
                },
                {
                  icon: BookOpen,
                  title: "Align with International Harmonization Standards",
                  detail: "ICH guidelines and WHO frameworks provide the internationally harmonized standards that streamline regulatory submissions and reduce duplication across global markets.",
                },
              ].map((point, index) => {
                const Icon = point.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-white/10 border border-white/15 rounded-xl px-5 py-4 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
                  >
                    <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-blue-200" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold mb-0.5">{point.title}</p>
                      <p className="text-blue-200 text-xs leading-relaxed">{point.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-semibold tracking-widest uppercase rounded-full mb-6 border border-blue-200">
            Need Regulatory Support?
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Let Mitan Pharma Guide Your Regulatory Journey
          </h3>
          <p className="text-gray-500 mb-8 text-base max-w-2xl mx-auto leading-relaxed">
            If your organization requires expert assistance with regulatory
            submissions, dossier preparation, pharmacovigilance compliance,
            or clinical trial coordination, our experienced team at Mitan
            Pharma is ready to provide the strategic guidance and hands-on
            support you need.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Contact Our Team <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-600 text-sm font-semibold rounded-full shadow border border-blue-200 hover:bg-blue-50 transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AuthorityLinks;