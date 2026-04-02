import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Calendar } from "lucide-react";

export function StartYourJourneySection() {
  return (
    <section className="relative overflow-hidden border-y border-gray-200 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(235,3,57,0.06),transparent_55%)]" />
      <div className="relative mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 lg:px-8 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#eb0339]/20 bg-[#eb0339]/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#eb0339]">
            <Sparkles className="h-3.5 w-3.5" />
            Start your journey
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Ready to step on the{" "}
            <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">mat</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-600 sm:text-lg">
            Book a free trial at any of our nine Abu Dhabi branches — no obligation, just real training.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#eb0339] to-[#ff1a4f] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#eb0339]/25 transition-all hover:shadow-xl hover:shadow-[#eb0339]/30"
            >
              <Calendar className="h-4 w-4" />
              Book free trial
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-300 bg-white px-8 py-3.5 text-sm font-semibold text-gray-900 transition-colors hover:border-[#eb0339] hover:text-[#eb0339]"
            >
              Explore programs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
