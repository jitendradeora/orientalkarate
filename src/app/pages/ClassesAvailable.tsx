import { motion } from "motion/react";
import { Mail, Building2, User2, School, Users, Calendar, PhoneCall } from "lucide-react";
import { InnerPageBanner } from "../components/InnerPageBanner";

export function ClassesAvailable() {
  const classTypes = [
    {
      title: "Individual Personal Training",
      icon: User2,
      description:
        "One-to-one sessions tailored to your goals – fitness, competition preparation, or intensive belt progression.",
      highlights: ["Flexible scheduling", "Custom training plan", "Direct feedback from senior instructors"],
    },
    {
      title: "Corporate & Company Programs",
      icon: Building2,
      description:
        "Bring martial arts, fitness and team-building to your organization with structured programs at your office or our dojos.",
      highlights: ["Stress relief & wellness", "Team building workshops", "Custom corporate packages"],
    },
    {
      title: "School & University Programs",
      icon: School,
      description:
        "Regular or short-term martial arts programs integrated into your institution's activities, sports or wellbeing agenda.",
      highlights: ["On-campus classes", "Certified instructors", "Age-appropriate curriculum"],
    },
    {
      title: "Hall Rental for Training",
      icon: Users,
      description:
        "Rent our fully equipped, air-conditioned dojos for your own training, workshops or small group sessions.",
      highlights: ["Matted floors", "Sound system (where available)", "Flexible hourly / daily rental"],
    },
  ];

  const email = "karate@emirates.net.ae";

  return (
    <div className="min-h-screen bg-black pt-24 text-white">
      <InnerPageBanner
        badge={
          <>
            <Calendar size={14} className="text-[#FFD700]" />
            <span className="text-sm text-gray-300">Flexible Programs & Hall Rentals</span>
          </>
        }
        title={
          <>
            Classes & <span className="text-[#eb0339]">Custom Programs</span>
          </>
        }
        subtitle="Choose from personal training, corporate wellness, school & university programs, or rent our halls for your own training."
      />

      <section className="border-t border-gray-200 bg-white py-20 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {classTypes.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm lg:p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#eb0339] to-[#c70230] flex items-center justify-center text-white flex-shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-1 text-gray-900">{item.title}</h2>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#eb0339]" />
                      <span className="text-gray-600 text-sm">{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gradient-to-b from-gray-900 to-gray-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Need a <span className="text-[#eb0339]">personalized program</span>?
              </h2>
              <p className="mb-6 text-lg text-gray-300">
                Whether you're an individual, company, university or school, we can design a program specifically for
                you – or arrange hall rental for your own training.
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#eb0339]" />
                  <span>Tell us the number of participants and preferred schedule.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#eb0339]" />
                  <span>We'll reply with suggested formats, pricing and availability.</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-700 bg-gray-800/60 p-6 backdrop-blur-sm md:p-8"
            >
              <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-white">
                <Mail size={20} className="text-[#eb0339]" />
                Email Us Your Requirements
              </h3>
              <div className="mb-6 space-y-4 text-sm text-gray-300">
                <p>
                  Email:{" "}
                  <a href={`mailto:${email}`} className="font-semibold text-white underline underline-offset-4 hover:text-[#eb0339]">
                    {email}
                  </a>
                </p>
                <p>
                  Please include:<br />
                  - Type of program (individual / company / university / school / hall rental)<br />
                  - Preferred branch or location<br />
                  - Approximate number of participants<br />
                  - Preferred dates & times
                </p>
              </div>
              <a
                href={`mailto:${email}?subject=Personalized Classes / Hall Rental Inquiry`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#eb0339] py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#c70230]"
              >
                <Mail size={18} />
                Send Email Now
              </a>
              <p className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                <PhoneCall size={14} />
                Prefer to talk? Call us at +971 (2) 6771611.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
