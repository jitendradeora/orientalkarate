import { motion } from "motion/react";
import { Award, Star, Trophy, ArrowRight } from "lucide-react";
import { InnerPageBanner } from "../components/InnerPageBanner";
import { Link } from "react-router";

/** Chief Instructors & Directors — from https://www.orientalkarate.com/about-us/#instructors */
const chiefInstructors = [
  {
    name: "Ali Mohammed",
    title: "Kyoshi",
    role: "Chief Examiner & Technical Director of International Shorin Ryu Seibukan Karate DO of UAE",
    karateDan: "8th Dan Karate",
    kobudoDan: "7th Dan Kobudo",
    highlights: [
      "Trained Kalaripayattu (Kerala), Karate (India, Malaysia, Tokyo, Germany, Switzerland, Okinawa), Kung Fu (Shaolin Temple China), Kobudo (Malaysia HQ), Taekwondo (Kukkiwon, South Korea)",
      "Conducted seminars and training in more than 30 countries",
      "Trained 25,000+ students in UAE; currently training 35 Instructors and 2,000 students",
      "Official at Battle of Atlanta World Karate Championship 2007",
    ],
    image: "https://images.unsplash.com/photo-1602827115146-853fa12ba155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    name: "Yoosuf",
    title: "Renshi",
    role: "Asst. Chief Examiner & Technical Director of International Shorin Ryu Seibukan Karate DO of UAE",
    karateDan: "6th Dan Karate",
    kobudoDan: "5th Dan Kobudo",
    highlights: [
      "Trained in India, Malaysia, Thailand, London and Scotland",
      "Conducted several martial arts seminars and Instructor training in UAE, India and Malaysia",
    ],
    image: "https://images.unsplash.com/photo-1550759807-6419ff64a5e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    name: "Chin Mok Sung",
    title: "Hanshi",
    role: "Supreme Instructor — Vice President of the Malaysian Karate Federation",
    karateDan: "9th Dan Karate",
    kobudoDan: "8th Dan Kobudo",
    highlights: [
      "Trained Chief Instructors; undergone training and seminars in India, Malaysia, Thailand, Germany, Switzerland, London, Scotland & U.S.A",
    ],
    image: "https://images.unsplash.com/photo-1764616211830-993b5e360d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
];

/** OUR INSTRUCTORS — from live site https://www.orientalkarate.com/about-us/#instructors */
const ourInstructors = [
  { name: "Yousuf Kancholy", rank: "5th Dan Karate & 5th Dan Kobudo" },
  { name: "Hameed Aboobacker", rank: "5th Dan Karate & 5th Dan Kobudo" },
  { name: "Mohammed Nawas", rank: "5th Dan Karate & 5th Dan Kobudo" },
  { name: "Nizar Aboobacker", rank: "5th Dan Karate & 5th Dan Kobudo" },
  { name: "Naseef Muhammed", rank: "5th Dan Karate & 5th Dan Kobudo" },
  { name: "Thafjal", rank: "4th Dan Karate & 4th Dan Kobudo" },
  { name: "Shad Ali", rank: "4th Dan Karate & 4th Dan Kobudo" },
  { name: "Sumith", rank: "4th Dan Karate & 4th Dan Kobudo" },
  { name: "Muhammed Shammas", rank: "4th Dan Karate & 4th Dan Kobudo" },
  { name: "Remeesh", rank: "4th Dan Karate & 3rd Dan Kobudo" },
  { name: "Isabin Hussain", rank: "4th Dan Karate & 4th Dan Kobudo" },
  { name: "Mishal", rank: "4th Dan Karate & 3rd Dan Kobudo" },
  { name: "Ansar", rank: "4th Dan Karate & 4th Dan Kobudo" },
  { name: "Rafzan", rank: "3rd Dan Karate & 4th Dan Kobudo" },
  { name: "Noushad Ali", rank: "3rd Dan Karate & 4th Dan Kobudo" },
  { name: "Fajis", rank: "3rd Dan Karate & 4th Dan Kobudo" },
  { name: "Hadi", rank: "3rd Dan Karate & 4th Dan Kobudo" },
  { name: "Sinoj", rank: "3rd Dan Karate & 3rd Dan Kobudo" },
  { name: "Anjunath", rank: "3rd Dan Karate & 3rd Dan Kobudo" },
  { name: "Fahad", rank: "3rd Dan Karate & 3rd Dan Kobudo" },
  { name: "Thanhal", rank: "3rd Dan Karate & 2nd Dan Kobudo" },
  { name: "Rahil", rank: "3rd Dan Karate & 2nd Dan Kobudo" },
  { name: "Muhammed Shafi", rank: "3rd Dan Karate & 2nd Dan Kobudo" },
  { name: "Safwan", rank: "3rd Dan Karate & 2nd Dan Kobudo" },
  { name: "Muhammed Sahal", rank: "2nd Dan Karate & 2nd Dan Kobudo" },
  { name: "Muhammed Nibras", rank: "2nd Dan Karate & 2nd Dan Kobudo" },
  { name: "Muhammed Sibhathulla", rank: "2nd Dan Karate & 2nd Dan Kobudo" },
  { name: "Safnas", rank: "2nd Dan Karate & 2nd Dan Kobudo" },
  { name: "Najmudeen", rank: "2nd Dan Karate & 2nd Dan Kobudo" },
  { name: "Rizwan", rank: "2nd Dan Karate & 2nd Dan Kobudo" },
  { name: "Suhail", rank: "2nd Dan Karate & 2nd Dan Kobudo" },
  { name: "Muhasin", rank: "2nd Dan Karate & 2nd Dan Kobudo" },
  { name: "Sadwin Sojan", rank: "2nd Dan Karate & 2nd Dan Kobudo" },
];

export function Instructors() {
  return (
    <div className="min-h-screen pt-[130px] bg-black text-white">
      <InnerPageBanner
        badge={
          <>
            <Award size={14} className="text-[#FFD700]" />
            <span className="text-sm text-gray-300">Certified Black Belt Masters</span>
          </>
        }
        title={
          <>
            Our <span className="text-[#FFD700]">Expert</span> Instructors
          </>
        }
        subtitle="Learn from certified black belt masters with decades of experience. Recognized by UAE Karate Federation and Ministry of Youth and Sports."
      />

      {/* Chief Instructors & Directors — from live site */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#eb0339]/10 text-[#eb0339] text-sm font-semibold mb-4">
              <Trophy size={14} />
              CHIEF INSTRUCTORS & DIRECTORS
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Our <span className="text-[#FFD700]">Leadership</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {chiefInstructors.map((chief, index) => (
              <motion.div
                key={chief.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 border border-white/10 rounded-2xl overflow-hidden hover:border-[#eb0339]/30 transition-all"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={chief.image}
                    alt={chief.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[#FFD700] font-bold text-sm">{chief.title}</p>
                    <h3 className="text-xl font-bold text-white">{chief.name}</h3>
                    <p className="text-white/80 text-sm mt-1">{chief.karateDan}</p>
                    <p className="text-white/80 text-sm">{chief.kobudoDan}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-400 text-sm mb-4">{chief.role}</p>
                  <ul className="space-y-2">
                    {chief.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <Star size={12} className="text-[#FFD700] shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 text-sm mt-8 max-w-3xl mx-auto"
          >
            We have more than 35 dedicated Instructors with several years of experience. We apply a scientifically proven method of teaching and training. All instructors undergo regular instructor training under the supervision of the Chief Instructors.
          </motion.p>
        </div>
      </section>

      {/* OUR INSTRUCTORS — from live site */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD700]/10 text-[#FFD700] text-sm font-semibold mb-4">
              <Award size={14} />
              OUR INSTRUCTORS
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Dedicated <span className="text-[#FFD700]">Instructor</span> Team
            </h2>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
              Professional instructors with several years of experience. All hold Dan grades in Karate and Kobudo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {ourInstructors.map((inst, index) => (
              <motion.div
                key={inst.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(index * 0.02, 0.4) }}
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/80 border border-white/5 hover:border-[#eb0339]/20 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#eb0339]/30 to-[#eb0339]/10 flex items-center justify-center shrink-0">
                  <span className="text-[#eb0339] font-bold text-sm">
                    {inst.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-white truncate">{inst.name}</p>
                  <p className="text-xs text-[#FFD700] font-medium">{inst.rank}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn From Us */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Why Learn From <span className="text-[#FFD700]">Our Masters</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-white bg-[#eb0339] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Certified Expertise</h3>
              <p className="text-gray-400">
                All instructors hold internationally recognized Dan grades in Karate and Kobudo
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-black bg-[#FFD700] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Proven Track Record</h3>
              <p className="text-gray-400">
                Chief Instructors have trained 25,000+ students; outstanding performance in UAE tournaments and demonstrations
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-white bg-[#eb0339] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Scientifically Proven Method</h3>
              <p className="text-gray-400">
                Regular instructor training under Chief Instructors; high standard effectively maintained
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#eb0339] to-[#c70230]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Train With the Best
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience world-class instruction from our expert team across 9 locations in Abu Dhabi
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 text-black bg-[#FFD700] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105"
            >
              <ArrowRight size={18} />
              Book Free Trial
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
