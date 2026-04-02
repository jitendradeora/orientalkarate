import { useEffect } from "react";
import { motion } from "motion/react";
import { Award, MapPin, Users, Shield, Heart, Target, Star, Sparkles, GraduationCap, Globe } from "lucide-react";
import { useLocation } from "react-router";
import { InnerPageBanner } from "../components/InnerPageBanner";

const featuredInstructors = [
  {
    name: "Ali Mohammed",
    rank: "Kyoshi",
    role: "Chief Examiner & Technical Director",
    image: "https://www.orientalkarate.com/wp-content/uploads/2020/02/nizar-benefit-500x746.jpg",
  },
  {
    name: "Yoosuf",
    rank: "Renshi",
    role: "Asst. Chief Examiner & Technical Director",
    image: "https://www.orientalkarate.com/wp-content/uploads/2021/04/7-500x746.jpg",
  },
  {
    name: "Senior Instructor",
    rank: "Placeholder",
    role: "Black belt faculty — profile coming soon",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Senior Instructor",
    rank: "Placeholder",
    role: "Black belt faculty — profile coming soon",
    image: "https://images.unsplash.com/photo-1529630218527-7df22fc2d4ee?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Senior Instructor",
    rank: "Placeholder",
    role: "Black belt faculty — profile coming soon",
    image: "https://images.unsplash.com/photo-1738835935023-ebff4a85bc7e?auto=format&fit=crop&w=600&q=80",
  },
];

export function About() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#instructors") {
      document.getElementById("instructors")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  const values = [
    { icon: Shield, title: "Discipline", description: "Building self-control and focus through structured training", color: "#eb0339" },
    { icon: Heart, title: "Respect", description: "Honoring tradition, instructors, and fellow students", color: "#FFD700" },
    { icon: Target, title: "Excellence", description: "Striving for continuous improvement in all aspects", color: "#eb0339" },
    { icon: Award, title: "Integrity", description: "Upholding the highest standards of character", color: "#FFD700" },
  ];

  const stats = [
    { value: "9", label: "Training Centers", icon: MapPin },
    { value: "1500+", label: "Active Students", icon: Users },
    { value: "24,000+", label: "Students Trained", icon: GraduationCap },
    { value: "39+", label: "Years Excellence", icon: Award },
  ];

  return (
    <div className="min-h-screen pt-24 bg-black text-white">
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

      {/* Instructor grid — 5 equal-height cards */}
      <section id="instructors" className="scroll-mt-32 border-t border-gray-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#eb0339]/10 px-4 py-2 text-sm font-semibold text-[#eb0339]">
              <Users size={14} />
              Instructors
            </span>
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
              Meet our <span className="text-[#eb0339]">lead faculty</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Featured examiners and senior instructors. Additional profiles will be added over time.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {featuredInstructors.map((inst, index) => (
              <motion.article
                key={`${inst.name}-${index}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden bg-gray-100">
                  <img src={inst.image} alt="" className="h-full w-full object-cover object-top" />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <p className="font-bold text-gray-900">
                    {inst.name} <span className="text-[#eb0339]">{inst.rank}</span>
                  </p>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-gray-600">{inst.role}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Team photo */}
      <section className="relative overflow-hidden py-20 bg-gray-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Our <span className="text-[#eb0339]">team</span>
            </h2>
            <p className="mt-2 text-gray-400">The people behind decades of training in Abu Dhabi.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
          >
            <img
              src="https://www.orientalkarate.com/wp-content/uploads/2020/12/HQ-Group-photo-scaled.jpg"
              alt="Oriental Karate instructors and team group photo"
              className="h-auto w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent pointer-events-none" />
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

    </div>
  );
}
