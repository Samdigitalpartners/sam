import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80">
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
          </Link>
          <nav className="hidden gap-8 md:flex">
            <Link to="/" className="text-sm text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <a
              href="/#about"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="/#services"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Services
            </a>
            <a
              href="/#contact"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <div className="mb-8">
          <Link
            to="/"
            className="text-sm text-primary hover:underline mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-600">Last updated: February 2024</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p>
              Sam Digital Partners ("Company," "we," "our," or "us") is
              committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you visit our website at samdigitalpartners.com and engage with
              our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Information We Collect
            </h2>
            <p>We collect information in the following ways:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Contact Form Information:</strong> When you submit our
                contact form, we collect your name, email address, company name,
                and message content.
              </li>
              <li>
                <strong>Website Usage Data:</strong> We may collect information
                about your device, browser type, IP address, and pages visited
                through standard web analytics tools.
              </li>
              <li>
                <strong>Communication Data:</strong> If you email us directly,
                we retain your correspondence and contact details.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. How We Use Your Information
            </h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                To respond to your partnership inquiries and communications
              </li>
              <li>To provide our performance marketing services</li>
              <li>To improve our website and user experience</li>
              <li>To comply with legal obligations</li>
              <li>To analyze website performance and user behavior</li>
              <li>
                To send occasional updates about our services (with your
                consent)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Information Sharing and Disclosure
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share information only in the following
              circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Service Providers:</strong> We may share information
                with trusted partners who assist us in operating our website and
                conducting our business.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose information
                if required by law or in response to legal requests.
              </li>
              <li>
                <strong>Business Transfer:</strong> In the event of a merger,
                acquisition, or sale of assets, your information may be
                transferred.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the Internet is completely secure. While we
              strive to use commercially acceptable means to protect your
              personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Cookies and Tracking Technologies
            </h2>
            <p>
              We may use cookies and similar tracking technologies to enhance
              your browsing experience. These tools help us understand how you
              interact with our website and improve our services. You can
              control cookie settings through your browser, though some website
              features may not function properly without them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Data Retention
            </h2>
            <p>
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required or permitted by law. For
              partnership inquiries, we retain contact information for up to two
              years.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Your Rights and Choices
            </h2>
            <p>
              Depending on your jurisdiction, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Right to Access:</strong> You can request a copy of the
                personal information we hold about you.
              </li>
              <li>
                <strong>Right to Correction:</strong> You can request that we
                correct inaccurate information.
              </li>
              <li>
                <strong>Right to Deletion:</strong> You can request deletion of
                your personal information, subject to legal limitations.
              </li>
              <li>
                <strong>Right to Opt-Out:</strong> You can opt out of receiving
                marketing communications from us.
              </li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at
              partnerships@samdigitalpartners.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. GDPR Compliance (EU Residents)
            </h2>
            <p>
              If you are located in the European Union, we process your personal
              information in accordance with GDPR. We have a lawful basis for
              processing your information, including your consent, our
              legitimate business interests, or contractual necessity. You have
              the right to lodge a complaint with your supervisory authority.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of these external sites. We
              encourage you to review their privacy policies before providing
              any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              11. Children's Privacy
            </h2>
            <p>
              Our services are not intended for children under the age of 13. We
              do not knowingly collect personal information from children under
              13. If we become aware that we have collected such information, we
              will take steps to delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12. International Data Transfers
            </h2>
            <p>
              Your information may be transferred to, stored in, and processed
              in countries other than your country of residence. These countries
              may have data protection laws that differ from your country of
              origin. By providing your information, you consent to such
              transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              13. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last updated" date. Your continued use
              of our website constitutes your acceptance of the updated Privacy
              Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              14. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or our privacy
              practices, please contact us at:
            </p>
            <div className="mt-4 space-y-2">
              <p>
                <strong>Sam Digital Partners</strong>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:partnerships@samdigitalpartners.com"
                  className="text-primary hover:underline"
                >
                  partnerships@samdigitalpartners.com
                </a>
              </p>
              <p>We will respond to your inquiry within 30 business days.</p>
            </div>
          </section>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8">
          <Link to="/" className="text-primary hover:underline font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-gray-50 px-6 py-12 mt-16">
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
            <div className="mt-4 flex justify-center gap-6">
              <Link to="/" className="hover:text-gray-900">
                Home
              </Link>
              <Link to="/privacy" className="hover:text-gray-900">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
