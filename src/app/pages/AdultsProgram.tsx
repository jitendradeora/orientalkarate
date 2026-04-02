import { motion } from "motion/react";
import { Check, Users, Sparkles, ArrowRight, Calendar, Gift } from "lucide-react";
import { Link } from "react-router";
import { InnerPageBanner } from "../components/InnerPageBanner";
import { Dumbbell, Brain, Shield, Heart } from "lucide-react";

const benefitSnippets = [
  {
    icon: Dumbbell,
    title: "Fitness & strength",
    text: "Full-body training that builds endurance and functional strength.",
  },
  {
    icon: Brain,
    title: "Focus & stress relief",
    text: "Structured classes help clear the mind after demanding workdays.",
  },
  {
    icon: Shield,
    title: "Self-defense awareness",
    text: "Practical movement and confidence in a safe, traditional syllabus.",
  },
  {
    icon: Heart,
    title: "Community",
    text: "Train alongside adults of all levels across nine Abu Dhabi locations.",
  },
];

export function AdultsProgram() {
  const admissionSteps = [
    { step: 1, title: "Book Free Trial", description: "Experience a class with no commitment", icon: Calendar },
    { step: 2, title: "Choose Your Plan", description: "Select the membership that fits your goals", icon: Gift },
    { step: 3, title: "Complete Registration", description: "Fill out our simple online form", icon: Check },
    { step: 4, title: "Start Training", description: "Begin your martial arts journey!", icon: Sparkles },
  ];

  return (
    <div className="min-h-screen bg-black pt-24 text-white">
      <InnerPageBanner
        badge={
          <>
            <Users size={14} className="text-[#FFD700]" />
            <span className="text-sm text-gray-300">Ages 15–60</span>
          </>
        }
        title={
          <>
            Karate for{" "}
            <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
              Adults
            </span>
          </>
        }
        subtitle="Separate classes for men and women, twice weekly — with yoga elements and traditional Okinawan karate."
      />

      {/* Karate for Adults — light intro */}
      <section className="border-b border-gray-200 bg-white py-20 text-gray-900">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#eb0339]/10 px-4 py-2 text-sm font-semibold text-[#eb0339]">
              <Users size={14} />
              KARATE FOR ADULTS
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Training that fits <span className="text-[#eb0339]">real life</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
              Whether you want fitness, stress relief, or a structured path in traditional karate, our adult program
              offers separate men&apos;s and women&apos;s classes, experienced instructors, and flexible scheduling
              across Abu Dhabi.
            </p>
            <Link
              to="/booking"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#eb0339] to-[#ff1a4f] px-8 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#eb0339]/25 transition-opacity hover:opacity-95"
            >
              Book free trial
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
        <div className="mx-auto mt-14 grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {benefitSnippets.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
            >
              <div className="mb-3 inline-flex rounded-full bg-[#eb0339]/10 p-2.5">
                <b.icon className="h-5 w-5 text-[#eb0339]" />
              </div>
              <h3 className="font-bold text-gray-900">{b.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SIMPLE PROCESS — light */}
      <section className="bg-gray-50 py-24 text-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#eb0339]/10 px-4 py-2 text-sm font-semibold text-[#eb0339]">
              <Check size={14} />
              SIMPLE PROCESS
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Admission{" "}
              <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
                process
              </span>
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-4">
            {admissionSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#eb0339] to-[#c70230]">
                  <item.icon size={26} className="text-white" />
                </div>
                <div className="mb-2 text-xs font-bold uppercase tracking-wide text-[#eb0339]">Step {item.step}</div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
