import { motion } from "motion/react";
import { Link } from "react-router";
import { Zap, ChevronRight } from "lucide-react";
import { InnerPageBanner } from "../components/InnerPageBanner";

const plans = [
  {
    title: "3 Months",
    discount: "10%",
    subtitle: "SHORT COMMITMENT",
    desc: "Great for new students who want to begin their karate journey with focus and consistency.",
    features: ["Access to regular classes", "Grading eligibility included"],
    popular: false,
  },
  {
    title: "6 Months",
    discount: "15%",
    subtitle: "BEST VALUE",
    bonus: "+ FREE uniform",
    desc: "Ideal for students committed to real progress in fitness, technique and belt level.",
    features: ["Full access to your program", "Free official dojo uniform", "Perfect for families"],
    popular: true,
  },
  {
    title: "12 Months",
    discount: "25%",
    subtitle: "FOR DEDICATED STUDENTS",
    bonus: "+ FREE uniform",
    desc: "Perfect for long-term students and families who want to fully commit to martial arts.",
    features: ["Maximum yearly savings", "Free official dojo uniform", "Full-year commitment benefits"],
    popular: false,
  },
];

export function Offers() {
  return (
    <div className="min-h-screen pt-24 bg-black text-white">
      <InnerPageBanner
        badge={
          <>
            <Zap size={14} className="text-[#FFD700]" />
            <span className="text-sm text-gray-300">Limited-time enrolment savings</span>
          </>
        }
        title={
          <>
            Current{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#ffa500] bg-clip-text text-transparent">
              Offers
            </span>
          </>
        }
        subtitle="Choose the plan that fits your journey — for new students, families, and long-term members."
      />

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#eb0339] via-[#c70230] to-[#7b021d]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col rounded-3xl p-8 ${
                  plan.popular
                    ? "border-2 border-[#FFD700] bg-black/30 shadow-2xl shadow-black/30"
                    : "border border-white/10 bg-black/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#FFD700] px-4 py-1 text-xs font-bold text-black">
                    MOST POPULAR
                  </div>
                )}
                <span className="mb-2 text-sm font-semibold text-[#FFD700]">{plan.subtitle}</span>
                <h3 className="mb-1 text-2xl font-bold text-white">Pay {plan.title}</h3>
                <div className="mb-1 flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[#FFD700]">{plan.discount}</span>
                  <span className="text-2xl text-[#FFD700]">OFF</span>
                </div>
                {plan.bonus && <span className="mb-4 font-semibold text-white">{plan.bonus}</span>}
                <p className="mb-6 flex-grow text-sm text-white/70">{plan.desc}</p>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-white/80">
                      <ChevronRight size={14} className="text-[#FFD700]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/fee-admission"
                  className={`w-full rounded-xl py-3.5 text-center font-semibold transition-all duration-300 hover:scale-[1.02] ${
                    plan.popular
                      ? "bg-[#FFD700] text-black hover:bg-[#f7e07a]"
                      : "bg-white text-[#eb0339] hover:bg-gray-100"
                  }`}
                >
                  Choose {plan.title} plan
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-white/70">
            For exact fees and branch-specific promotions, visit{" "}
            <Link to="/fee-admission" className="font-semibold text-[#FFD700] underline-offset-2 hover:underline">
              Fee &amp; Admission
            </Link>{" "}
            or{" "}
            <Link to="/contact" className="font-semibold text-[#FFD700] underline-offset-2 hover:underline">
              contact us
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
