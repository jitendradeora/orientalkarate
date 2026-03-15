import { motion } from "motion/react";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-[130px] bg-black text-white">
      <section className="bg-gradient-to-b from-black to-gray-950 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Privacy Policy
          </motion.h1>
          <p className="text-gray-300">Last updated: March 2026</p>
        </div>
      </section>

      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold mb-2">1. Introduction</h2>
            <p className="text-gray-300">
              Oriental Karate &amp; Kobudo Club (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use and protect your personal information when you use our
              website or contact us about classes, bookings and services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">2. Information We Collect</h2>
            <p className="text-gray-300 mb-2">We may collect the following types of information:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Contact details such as your name, email address and phone number.</li>
              <li>Booking and registration details for classes, trials and events.</li>
              <li>Messages and inquiries you send via forms or email.</li>
              <li>Basic usage data such as pages visited and interactions with our website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>To respond to your inquiries and provide information about our classes and services.</li>
              <li>To process bookings, registrations and manage your participation in our programs.</li>
              <li>To send important updates related to schedules, cancellations or policy changes.</li>
              <li>To improve our website, services and customer experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">4. Sharing of Information</h2>
            <p className="text-gray-300">
              We do not sell your personal information. We may share your information with trusted service providers
              (such as email or hosting providers) who help us operate our website and services, only to the extent
              necessary and under appropriate confidentiality obligations, or when required by law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">5. Data Security</h2>
            <p className="text-gray-300">
              We take reasonable technical and organizational measures to protect your personal information from
              unauthorized access, loss, misuse or alteration. However, no method of transmission over the Internet or
              electronic storage is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">6. Your Rights</h2>
            <p className="text-gray-300 mb-2">Depending on your jurisdiction, you may have rights to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Request access to the personal information we hold about you.</li>
              <li>Request correction or deletion of your personal information.</li>
              <li>Object to or restrict certain types of processing.</li>
            </ul>
            <p className="text-gray-300 mt-2">
              To exercise these rights, please contact us using the details below.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">7. Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about this Privacy Policy or how we handle your data, please contact us at:
              <br />
              Email: karate@emirates.net.ae
              <br />
              Phone: +971 (2) 6771611
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
