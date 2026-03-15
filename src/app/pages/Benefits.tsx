import { motion } from "motion/react";
import { Link } from "react-router";
import { InnerPageBanner } from "../components/InnerPageBanner";
import {
  Heart,
  Zap,
  Activity,
  Dumbbell,
  Brain,
  Target,
  Shield,
  TrendingUp,
  Users,
  Award,
  Smile,
  Wind,
  Sparkles,
  ArrowRight,
  Quote,
} from "lucide-react";

export function Benefits() {
  const physicalBenefits = [
    { icon: Dumbbell, title: "Fitness", description: "Full-body workout improving cardiovascular health and endurance" },
    { icon: Zap, title: "Strength", description: "Build lean muscle and increase overall body strength" },
    { icon: Activity, title: "Flexibility", description: "Enhanced range of motion and joint mobility" },
    { icon: Wind, title: "Agility", description: "Improved balance, coordination, and reaction time" },
  ];

  const mentalBenefits = [
    { icon: Brain, title: "Discipline", description: "Develop self-control and structured thinking patterns" },
    { icon: Target, title: "Focus", description: "Sharpen concentration and mental clarity" },
    { icon: Award, title: "Confidence", description: "Build self-esteem and personal empowerment" },
    { icon: Smile, title: "Mental Health", description: "Reduce stress and improve emotional well-being" },
  ];

  const lifestyleBenefits = [
    { icon: Shield, title: "Self-Defense", description: "Learn practical skills to protect yourself and others" },
    { icon: TrendingUp, title: "Stress Reduction", description: "Release tension and find inner peace through training" },
    { icon: Heart, title: "Character Development", description: "Cultivate respect, integrity, and perseverance" },
    { icon: Users, title: "Community", description: "Join a supportive family of like-minded individuals" },
  ];

  return (
    <div className="min-h-screen pt-[130px] bg-black text-white">
      <InnerPageBanner
        badge={
          <>
            <Heart size={14} className="text-[#eb0339]" />
            <span className="text-sm text-gray-300">Transform Your Life</span>
          </>
        }
        title={
          <>
            The{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#ffa500] bg-clip-text text-transparent">
              Benefits
            </span>{" "}
            of Karate
          </>
        }
        subtitle="Transform your life through martial arts - physically, mentally, and spiritually"
      />

      {/* Why Oriental Karate — from live site */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-gray-900/80 p-8 lg:p-10"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-white">
              Why Choose Oriental Karate?
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Recognized by <strong className="text-white">UAE Karate Federation</strong> and{" "}
              <strong className="text-white">Ministry of Youth and Sports</strong>, The Oriental Karate & Kobudo Club has been serving Abu Dhabi since 1987. With over 24,000 students trained and more than 1,500 currently active students across 9 locations, we offer proven programs for all ages.
            </p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#eb0339]" />
                Traditional Okinawan Karate & Kobudo under certified instructors
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#eb0339]" />
                Programs for children (5+) and adults — male and female
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#eb0339]" />
                Conveyance arrangements available for those who require it
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#eb0339]" />
                Sibling and advance payment discounts on fees
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Physical Benefits */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#eb0339]/10 text-[#eb0339] text-sm font-semibold mb-6">
              <Dumbbell size={14} />
              PHYSICAL
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Build a{" "}
              <span className="bg-gradient-to-r from-[#FFD700] to-[#ffa500] bg-clip-text text-transparent">
                Stronger
              </span>{" "}
              Body
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Karate provides a comprehensive physical workout that improves every aspect of your fitness
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {physicalBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-white/5 hover:border-[#eb0339]/30 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#eb0339] to-[#c70230] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mental Benefits */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD700]/10 text-[#FFD700] text-sm font-semibold mb-6">
              <Brain size={14} />
              MENTAL
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Sharpen Your{" "}
              <span className="bg-gradient-to-r from-[#FFD700] to-[#ffa500] bg-clip-text text-transparent">
                Mind
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Develop mental fortitude and emotional resilience through disciplined practice
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentalBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-white/5 hover:border-[#FFD700]/30 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFD700] to-[#ffa500] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon size={28} className="text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Benefits */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#eb0339]/10 text-[#eb0339] text-sm font-semibold mb-6">
              <Heart size={14} />
              LIFESTYLE
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
                Life
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Experience life-changing benefits that extend far beyond the dojo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifestyleBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-white/5 hover:border-[#eb0339]/30 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#eb0339] to-[#c70230] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infographic Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD700]/10 text-[#FFD700] text-sm font-semibold mb-6">
              <Sparkles size={14} />
              THE COMPLETE PACKAGE
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Why{" "}
              <span className="bg-gradient-to-r from-[#FFD700] to-[#ffa500] bg-clip-text text-transparent">
                Karate
              </span>{" "}
              Works
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Activity, value: "100%", label: "Full Body Workout", desc: "Every muscle group engaged in every session", gradient: "from-[#eb0339] to-[#c70230]" },
              { icon: Brain, value: "500+", label: "Techniques to Master", desc: "Continuous learning and improvement", gradient: "from-[#FFD700] to-[#ffa500]", dark: true },
              { icon: Heart, value: "Lifetime", label: "Skills & Friendships", desc: "Benefits that last forever", gradient: "from-[#eb0339] to-[#ff4d6d]" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-10 rounded-3xl bg-gradient-to-br ${item.gradient} text-center ${item.dark ? "text-black" : "text-white"}`}
              >
                <item.icon className={`w-14 h-14 mx-auto mb-6 ${item.dark ? "text-black" : "text-white"} opacity-80`} />
                <h3 className="text-4xl font-bold mb-2">{item.value}</h3>
                <p className="text-xl font-semibold mb-3">{item.label}</p>
                <p className={`text-sm ${item.dark ? "text-black/70" : "text-white/70"}`}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-10 lg:p-14 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-white/5 text-center"
          >
            <Quote className="w-12 h-12 text-[#FFD700]/30 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-bold mb-8 leading-relaxed">
              "Karate has transformed my life in ways I never imagined. I'm stronger, more focused, 
              and more confident than ever before."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700] to-[#ffa500]" />
              <div className="text-left">
                <p className="font-bold text-white">John Smith</p>
                <p className="text-[#FFD700] text-sm">Black Belt Student</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden bg-gray-100">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#eb0339]/10 text-[#eb0339] text-sm font-semibold mb-6">
              <Sparkles size={14} />
              NEED MORE HELP?
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Experience These Benefits Yourself
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Start your transformation today with a free trial class
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#eb0339] to-[#ff1a4f] text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#eb0339]/30 hover:scale-[1.02]"
            >
              Book Free Trial
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
