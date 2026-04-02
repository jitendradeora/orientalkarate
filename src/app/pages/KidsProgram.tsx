import { motion } from "motion/react";
import { Heart, Shield, Star, Users, Trophy, Smile, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router";
import { InnerPageBanner } from "../components/InnerPageBanner";

export function KidsProgram() {
  const benefits = [
    { icon: Shield, title: "Confidence", description: "Build self-esteem through achievement and mastery", color: "#eb0339" },
    { icon: Star, title: "Discipline", description: "Learn self-control and respect for authority", color: "#eb0339" },
    { icon: Heart, title: "Fitness", description: "Develop healthy habits and physical fitness", color: "#eb0339" },
    { icon: Users, title: "Social Skills", description: "Make friends and learn teamwork", color: "#eb0339" },
    { icon: Trophy, title: "Goal Setting", description: "Work towards belt rankings and achievements", color: "#eb0339" },
    { icon: Smile, title: "Fun!", description: "Enjoy exciting and engaging classes", color: "#eb0339" },
  ];

  const safetyMeasures = [
    "Age-appropriate curriculum designed for young learners",
    "Certified instructors trained in child development",
    "Small class sizes for individual attention",
    "Padded training areas and safety equipment",
    "Positive reinforcement teaching methods",
    "Regular progress reports for parents",
    "Parent observation areas in all dojos",
    "Emergency protocols and first aid certified staff",
  ];

  return (
    <div className="min-h-screen bg-black pt-24 text-white">
      <InnerPageBanner
        badge={
          <>
            <Smile size={14} className="text-[#FFD700]" />
            <span className="text-sm text-gray-300">Ages 5-14 • Fun & Engaging Classes</span>
          </>
        }
        title={
          <>
            <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
              Karate
            </span>{" "}
            for Kids
          </>
        }
        subtitle="Building confident, disciplined, and healthy young martial artists"
      />

      {/* WHY KIDS — light */}
      <section className="border-b border-gray-200 bg-white py-20 text-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#eb0339]/10 px-4 py-2 text-sm font-semibold text-[#eb0339]">
                <Heart size={14} />
                WHY KIDS LOVE US
              </span>
              <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Why{" "}
                <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
                  Kids Love
                </span>{" "}
                Our Program
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-gray-600">
                Our kids&apos; karate program is fun, engaging, and educational. We balance martial arts with games,
                activities, and positive reinforcement so children learn best while enjoying class.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Every session builds physical skills, mental discipline, and character in an age-appropriate way.
              </p>
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#eb0339] to-[#ff1a4f] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#eb0339]/25 transition-all hover:shadow-xl"
              >
                Book free trial
                <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1738835935023-ebff4a85bc7e?auto=format&fit=crop&w=1200&q=80"
                  alt="Kids karate class"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits — light */}
      <section className="bg-gray-50 py-20 text-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#eb0339]/10 px-4 py-2 text-sm font-semibold text-[#eb0339]">
              <Star size={14} />
              BENEFITS
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Benefits for{" "}
              <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
                Your Child
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div
                  className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform group-hover:scale-105"
                  style={{ backgroundColor: `${benefit.color}14` }}
                >
                  <benefit.icon size={28} style={{ color: benefit.color }} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety — light, improved spacing */}
      <section className="border-t border-gray-200 bg-white py-20 text-gray-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#eb0339]/10 px-4 py-2 text-sm font-semibold text-[#eb0339]">
              <Shield size={14} />
              SAFETY FIRST
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Your Child&apos;s{" "}
              <span className="text-[#eb0339]">Safety</span> Matters
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              We design every class around safe progression, qualified staff, and clear communication with families.
            </p>
          </motion.div>

          <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {safetyMeasures.map((measure, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="flex gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eb0339]/10">
                  <CheckCircle className="h-5 w-5 text-[#eb0339]" />
                </div>
                <p className="pt-1 text-sm leading-relaxed text-gray-700">{measure}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
