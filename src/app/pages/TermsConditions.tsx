import { motion } from "motion/react";

export function TermsConditions() {
  return (
    <div className="min-h-screen pt-[130px] bg-black text-white">
      <section className="bg-gradient-to-b from-black to-gray-950 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Terms &amp; Conditions
          </motion.h1>
          <p className="text-gray-300">Last updated: March 2026</p>
        </div>
      </section>

      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold mb-2">1. General</h2>
            <p className="text-gray-300">
              These Terms &amp; Conditions govern your use of the Oriental Karate &amp; Kobudo Club website and your
              participation in our classes, programs and events. By using this site or registering for any of our
              services, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">2. Classes, Bookings &amp; Attendance</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Trial classes and bookings are subject to availability and confirmation from our team.</li>
              <li>Students are expected to arrive on time and follow the instructions of the instructors at all times.</li>
              <li>We reserve the right to change class schedules, instructors or locations when necessary.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">3. Payments &amp; Offers</h2>
            <p className="text-gray-300 mb-2">
              Fees for memberships, programs and special offers (including multi-month discounts and free uniforms) will
              be communicated at the time of registration. Promotions may be subject to additional terms, duration and
              eligibility criteria.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">4. Health &amp; Safety</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Students (or parents/guardians for minors) must inform us of any medical conditions before training.</li>
              <li>Participation is at your own risk; martial arts involves physical activity and contact.</li>
              <li>We maintain safety standards in our dojos but cannot guarantee the complete absence of risk.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">5. Hall Rental</h2>
            <p className="text-gray-300">
              Hall rental for personal or group training is subject to separate agreement, including duration, permitted
              activities, equipment usage and responsibility for any damages.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">6. Conduct &amp; Respect</h2>
            <p className="text-gray-300 mb-2">We expect all students, parents and visitors to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Show respect to instructors, staff and fellow students.</li>
              <li>Follow dojo etiquette and safety rules at all times.</li>
              <li>Avoid any form of harassment, bullying or inappropriate behaviour.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">7. Changes to These Terms</h2>
            <p className="text-gray-300">
              We may update these Terms &amp; Conditions from time to time. Any changes will be posted on this page with
              an updated &quot;Last updated&quot; date. Continued use of our website or services after changes means you accept
              the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">8. Contact</h2>
            <p className="text-gray-300">
              For questions about these Terms &amp; Conditions, please contact us at:
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
