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
    <div className="min-h-screen pt-[130px] bg-black text-white">
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

      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {classTypes.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl p-6 lg:p-8 border bg-gray-900 border-gray-800"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#eb0339] to-[#c70230] flex items-center justify-center text-white flex-shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-1">{item.title}</h2>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#eb0339]" />
                      <span className="text-gray-300 text-sm">{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#eb0339] to-[#c70230]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Need a <span className="text-[#FFD700]">personalized program</span>?
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Whether you're an individual, company, university or school, we can design a program specifically for
                you – or arrange hall rental for your own training.
              </p>
              <ul className="space-y-3 text-white/90 text-sm">
                <li className="flex gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
                  <span>Tell us the number of participants and preferred schedule.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
                  <span>We'll reply with suggested formats, pricing and availability.</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20"
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Mail size={20} />
                Email Us Your Requirements
              </h3>
              <div className="space-y-4 mb-6 text-sm text-white/90">
                <p>
                  Email:{" "}
                  <a href={`mailto:${email}`} className="font-semibold underline underline-offset-4">
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
                className="inline-flex items-center justify-center w-full gap-2 bg-white text-[#eb0339] font-semibold text-sm py-2.5 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Mail size={18} />
                Send Email Now
              </a>
              <p className="mt-4 text-xs text-white/70 flex items-center gap-2">
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
