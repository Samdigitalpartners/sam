import { Mail, CheckCircle2, TrendingUp } from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const stats = [
    {
      value: "7+",
      label: "Years of Experience",
    },
    {
      value: "$500K+",
      label: "Partner Revenue (Last Year)",
    },
    {
      value: "35K+",
      label: "Monthly User Delivery",
    },
  ];

  const services = [
    {
      title: "DSP & Programmatic Media Buying",
      description:
        "Expert placement across demand-side platforms for maximum reach and efficiency.",
    },
    {
      title: "Performance-Based Affiliate Campaigns",
      description:
        "Results-driven partnership marketing with transparent ROI tracking.",
    },
    {
      title: "Content & Publisher-Led Promotions",
      description:
        "Strategic partnerships with high-authority websites for qualified user acquisition.",
    },
    {
      title: "SaaS & B2B User Acquisition",
      description:
        "Specialized expertise in acquiring high-value users for software and digital services.",
    },
    {
      title: "Conversion-Focused Traffic Delivery",
      description:
        "Premium traffic optimized for conversions, not just impressions.",
    },
    {
      title: "EU Market Specialization",
      description:
        "Deep expertise in European traffic sources and compliance requirements.",
    },
  ];

  const brands = [
    "Shopify",
    "Fiverr",
    "GoDaddy",
    "Emirates",
    "Unbounce",
  ];

  const reasons = [
    "Independent and accountable operations",
    "Quality-first traffic approach",
    "EU market specialization",
    "Proven revenue generation experience",
    "Professional partner communication",
  ];

  const compliancePoints = [
    "Brand-safe and policy-compliant traffic",
    "No misleading or incentivized traffic",
    "Clear attribution and transparent reporting",
    "Long-term partnership mindset",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <svg
              className="h-8 w-8"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 70C30 50 45 35 60 35C70 35 75 40 80 50C85 40 90 35 95 35C85 50 75 60 70 70H30Z"
                fill="currentColor"
                className="text-primary"
              />
              <path
                d="M25 65C25 45 35 30 50 30C65 30 70 40 75 55"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
                className="text-primary"
              />
            </svg>
            <div>
              <div className="text-sm font-bold leading-none text-gray-800">
                Sam Digital
              </div>
              <div className="text-xs text-gray-500">PARTNERS</div>
            </div>
          </div>
          <nav className="hidden gap-8 md:flex">
            <a href="#about" className="text-sm text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#services" className="text-sm text-gray-600 hover:text-gray-900">
              Services
            </a>
            <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-gray-100 px-6 py-20 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            Performance-Driven Media Buying & Partner Marketing
          </h1>
          <p className="mb-8 text-lg text-gray-600 md:text-xl">
            Sam Digital Partners is an independent performance marketing partner specializing
            in DSP-based traffic, partnered publisher sites, and scalable EU-focused campaigns.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            Contact for Partnerships
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-gray-100 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-b border-gray-100 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            About Us
          </h2>
          <div className="space-y-4 text-gray-600">
            <p className="text-lg leading-relaxed">
              Sam Digital Partners is an independent digital performance marketing company
              led by an experienced media buyer with over 7 years of hands-on industry experience.
            </p>
            <p className="text-lg leading-relaxed">
              We help global brands acquire high-quality users through compliant, data-driven
              promotion strategies across DSP inventory and partnered content websites. Our focus
              is on long-term value creation, brand safety, and measurable performance.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 font-semibold text-gray-900">
                Experience & Credentials
              </h3>
              <ul className="space-y-3">
                {[
                  "7+ years of experience in performance marketing and media buying",
                  "Generated over $500,000 in partner revenue in the last year",
                  "Expertise in DSP inventory, programmatic traffic, and content-driven acquisition",
                  "Strong focus on EU and Tier-1 geographies",
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-gray-900">
                Traffic & Reach
              </h3>
              <ul className="space-y-3">
                {[
                  "Monthly delivery capability of 35,000+ qualified users",
                  "Primary traffic sources from European countries",
                  "Access to multiple partnered, high-authority websites",
                  "Scalable traffic while maintaining compliance and advertiser guidelines",
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <TrendingUp className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="border-b border-gray-100 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-3xl font-bold text-gray-900 md:text-4xl">
            Our Services
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-100 bg-gray-50 p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="mb-3 font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partnerships Section */}
      <section className="border-b border-gray-100 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Trusted by Leading Global Brands
            </h2>
            <p className="text-gray-600">
              We have experience working with and promoting globally recognized brands
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-5">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-lg border border-gray-100 bg-gray-50 px-4 py-8"
              >
                <span className="font-semibold text-gray-700">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="border-b border-gray-100 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-3xl font-bold text-gray-900 md:text-4xl">
            Why Work With Us
          </h2>
          <ul className="space-y-4">
            {reasons.map((reason, index) => (
              <li key={index} className="flex gap-4">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span className="text-lg text-gray-700 py-0.5">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Compliance & Transparency */}
      <section className="border-b border-gray-100 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Compliance & Transparency
          </h2>
          <p className="mb-8 text-gray-600">
            We operate with the highest standards of integrity and compliance to ensure
            advertiser trust and network partnerships.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {compliancePoints.map((point, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-b border-gray-100 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Get in Touch
          </h2>
          <p className="mb-8 text-gray-600">
            Ready to discuss partnership opportunities? We'd love to hear from you.
          </p>

          <div className="mb-12 flex items-center gap-3 text-lg text-gray-900">
            <Mail className="h-6 w-6 text-primary" />
            <a
              href="mailto:partnerships@samdigitalpartners.com"
              className="text-primary hover:underline"
            >
              partnerships@samdigitalpartners.com
            </a>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleFormChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Your company"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                required
                rows={5}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Tell us about your partnership opportunity..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              {submitted ? "Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-gray-50 px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center gap-3">
            <svg
              className="h-6 w-6"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 70C30 50 45 35 60 35C70 35 75 40 80 50C85 40 90 35 95 35C85 50 75 60 70 70H30Z"
                fill="currentColor"
                className="text-primary"
              />
              <path
                d="M25 65C25 45 35 30 50 30C65 30 70 40 75 55"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
                className="text-primary"
              />
            </svg>
            <div>
              <div className="text-sm font-bold text-gray-900">
                Sam Digital Partners
              </div>
              <div className="text-xs text-gray-500">
                Independent Performance Marketing Partner
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>© 2024 Sam Digital Partners. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
