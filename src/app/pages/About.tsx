import { motion } from "motion/react";
import { Award, MapPin, Users, Shield, Heart, Target, Star, ArrowRight, Sparkles, GraduationCap, Globe } from "lucide-react";
import { Link } from "react-router";
import { InnerPageBanner } from "../components/InnerPageBanner";

export function About() {
  const values = [
    { icon: Shield, title: "Discipline", description: "Building self-control and focus through structured training", color: "#eb0339" },
    { icon: Heart, title: "Respect", description: "Honoring tradition, instructors, and fellow students", color: "#FFD700" },
    { icon: Target, title: "Excellence", description: "Striving for continuous improvement in all aspects", color: "#eb0339" },
    { icon: Award, title: "Integrity", description: "Upholding the highest standards of character", color: "#FFD700" },
  ];

  const programs = [
    {
      title: "Children's Karate Classes",
      description: "We conduct the classes twice a week. Our syllabuses are tailored to suit beginners as well as serious tournament trainers. Many additional skills like somersault, tumbling, gymnastic stretching, front & back midair rolls, and many special skills are included in the syllabus to motivate the students in all kinds of sports besides karate. We also conduct special classes on Tuesdays.",
      icon: Users,
      gradient: "from-[#eb0339] to-[#ff4d6d]",
    },
    {
      title: "Adult's Karate Classes",
      description: "We conduct separate classes for adults (male and female) twice a week. The bane of an implacable body of an adult will be mitigated in the executive classes conducted by the club. Many Yoga exercises are included in the training sessions, which may help one to keep up a relaxed lifestyle.",
      icon: Shield,
      gradient: "from-[#FFD700] to-[#ffa500]",
    },
    {
      title: "Kobudo Classes",
      description: "We conduct the classes once a week. Kobudo is an ancient martial art that originated in Okinawa (Japan), the place known as the Cradle of Martial Arts. It is taught in very few countries in the world due to the unavailability of proficient instructors. We are proud to have our chief instructor, Ali Mohammed Kyoshi, a weapon expert and one of the few masters in the world who holds a 7th Degree Black Belt in Kobudo. We teach weapons like BO (Long Staff), Nunchako, Sai, Tonfa, Kama, Chux, Sanchako, etc.",
      icon: Award,
      gradient: "from-[#eb0339] to-[#c70230]",
    },
  ];

  const stats = [
    { value: "9", label: "Training Centers", icon: MapPin },
    { value: "1500+", label: "Active Students", icon: Users },
    { value: "24,000+", label: "Students Trained", icon: GraduationCap },
    { value: "39+", label: "Years Excellence", icon: Award },
  ];

  return (
    <div className="min-h-screen pt-[130px] bg-black text-white">
      <InnerPageBanner
        badge={
          <>
            <Sparkles size={14} className="text-[#FFD700]" />
            <span className="text-sm text-gray-300">Established 1987</span>
          </>
        }
        title={
          <>
            About{" "}
            <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
              Oriental Karate
            </span>
          </>
        }
        subtitle="Building Martial Arts Excellence in Abu Dhabi Since 1987"
      />

      {/* Stats Bar */}
      <section className="relative py-8 bg-gradient-to-r from-[#eb0339] via-[#c70230] to-[#eb0339]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center text-white"
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <stat.icon size={18} className="opacity-80" />
                  <span className="text-3xl font-bold">{stat.value}</span>
                </div>
                <p className="text-sm text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#eb0339]/10 text-[#eb0339] text-sm font-semibold mb-6">
                <Star size={14} />
                OUR STORY
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                A Legacy of{" "}
                <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                The Oriental Karate & Kobudo Club focuses on bringing Martial Arts to improve the health and fitness of their students in a scientific, safe, and fun environment. Since its inception in 1987, it has conquered the area of Martial Arts in Abu Dhabi by bringing in professional Instructors, well-maintained Dojos (Training Areas) and a reputation to bring the best performance out of its students.
              </p>
              
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#eb0339] to-[#c70230] text-white mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">9 Locations in Abu Dhabi</h3>
                    <p className="text-white/80 text-sm">With more than 1500 active students</p>
                  </div>
                </div>
                <p className="text-lg font-semibold text-white/90">
                  More than 24,000 students have been trained under the club.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1764616211830-993b5e360d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjB0cmFpbmluZyUyMGRvam98ZW58MXx8fHwxNzczMjk0OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Karate Training"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              {/* Decorative border */}
              <div className="absolute -z-10 top-4 right-4 w-full h-full rounded-3xl border-2 border-[#eb0339]/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Director Profile */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#eb0339]/10 text-[#eb0339] text-sm font-semibold mb-6">
                <Award size={14} />
                CHIEF EXAMINER & TECHNICAL DIRECTOR
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-3">
                <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">Ali Mohammed</span>{" "}
                <span className="text-white">Kyoshi</span>
              </h2>
              <p className="text-lg text-[#FFD700] font-semibold mb-2">
                International Shorin Ryu Seibukan Karate Do of UAE
              </p>
              <p className="text-gray-400 mb-8">
                8th Dan Karate · 7th Dan Kobudo
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { art: "Kalaripayattu", place: "Kerala — Birth place of Kalaripayattu" },
                  { art: "Kung Fu", place: "Shaolin Temple, China — Deng Feng" },
                  { art: "Karate", place: "India, Malaysia, Tokyo, Germany, Switzerland and Okinawa" },
                  { art: "Kobudo", place: "Headquarters of International Shorin-Ryu Seibukan Karate, Malaysia" },
                  { art: "Taekwondo", place: "South Korea — Kukkiwon" },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-3 text-sm p-3 rounded-xl bg-white/5 border border-white/5"
                  >
                    <span className="font-semibold text-[#eb0339] min-w-[6rem]">{item.art}</span>
                    <span className="text-gray-400">{item.place}</span>
                  </motion.div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-white/5">
                <h3 className="font-bold text-lg mb-3 text-[#eb0339]">Seminars & Training</h3>
                <p className="text-gray-300 leading-relaxed">
                  Conducted seminars and training in <strong className="text-white">more than 30 countries</strong>. Trained <strong className="text-white">25,000 students</strong> in UAE. Currently training <strong className="text-white">35 Instructors</strong> and <strong className="text-white">2,000 students</strong>.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://www.orientalkarate.com/wp-content/uploads/2020/02/nizar-benefit-500x746.jpg"
                  alt="Ali Mohammed Kyoshi — Chief Examiner & Technical Director, 8th Dan Karate, 7th Dan Kobudo"
                  className="w-full aspect-[3/4] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-white font-bold text-xl">Ali Mohammed Kyoshi</p>
                  <p className="text-white/80 text-sm">Chief Examiner & Technical Director</p>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-3xl bg-gradient-to-br from-[#eb0339]/20 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Asst. Chief Examiner Profile */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://www.orientalkarate.com/wp-content/uploads/2021/04/7-500x746.jpg"
                  alt="Yoosuf Renshi — Asst. Chief Examiner & Technical Director, 6th Dan Karate, 5th Dan Kobudo"
                  className="w-full aspect-[3/4] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-white font-bold text-xl">Yoosuf Renshi</p>
                  <p className="text-white/80 text-sm">Asst. Chief Examiner & Technical Director</p>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full rounded-3xl bg-gradient-to-br from-[#FFD700]/20 to-transparent" />
            </motion.div>
            
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD700]/10 text-[#FFD700] text-sm font-semibold mb-6">
                <Award size={14} />
                ASST. CHIEF EXAMINER & TECHNICAL DIRECTOR
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-3">
                <span className="bg-gradient-to-r from-[#FFD700] to-[#ffa500] bg-clip-text text-transparent">Yoosuf</span>{" "}
                <span className="text-white">Renshi</span>
              </h2>
              <p className="text-gray-400 mb-2">
                International Shorin Ryu Seibukan Karate Do of UAE
              </p>
              <p className="text-lg font-semibold mb-8 text-[#FFD700]">
                6th Dan Karate · 5th Dan Kobudo
              </p>

              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-black/50 border border-white/5">
                  <h3 className="font-bold text-[#eb0339] mb-3">Training</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Trained in <strong className="text-white">India, Malaysia, Thailand, London</strong> and <strong className="text-white">Scotland</strong>.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-black/50 border border-white/5">
                  <h3 className="font-bold text-[#eb0339] mb-3">Seminars & Instructor Training</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Conducted several martial arts seminars and instructors training in <strong className="text-white">UAE</strong>, <strong className="text-white">India</strong> and <strong className="text-white">Malaysia</strong>.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link 
              to="/instructors" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#eb0339] to-[#ff1a4f] text-white font-bold hover:shadow-lg hover:shadow-[#eb0339]/30 transition-all duration-300 hover:scale-[1.02]"
            >
              View All Instructors
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD700]/10 text-[#FFD700] text-sm font-semibold mb-6">
              <Heart size={14} />
              OUR VALUES
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold">
              What We{" "}
              <span className="bg-gradient-to-r from-[#FFD700] to-[#ffa500] bg-clip-text text-transparent">
                Stand For
              </span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-white/5 hover:border-white/10 transition-all duration-300 text-center"
              >
                <div 
                  className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${value.color}20` }}
                >
                  <value.icon className="w-8 h-8" style={{ color: value.color }} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#eb0339]/10 text-[#eb0339] text-sm font-semibold mb-6">
              <GraduationCap size={14} />
              OUR PROGRAMS
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Training{" "}
              <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
                Programs
              </span>
            </h2>
          </motion.div>
          
          <div className="space-y-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#eb0339] transition-colors">{program.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    

      {/* CTA Section - Light background (Need more help style) */}
      <section className="relative py-24 overflow-hidden bg-gray-100">
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#eb0339]/10 text-[#eb0339] text-sm font-semibold mb-6">
              <Sparkles size={14} />
              START YOUR JOURNEY
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Ready to Begin Your{" "}
              <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
                Transformation?
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join over 1,500 active students and be part of our legacy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#eb0339] to-[#ff1a4f] text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-[#eb0339]/30 transition-all duration-300 hover:scale-[1.02]"
              >
                Book Free Trial
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gray-800 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-700 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
