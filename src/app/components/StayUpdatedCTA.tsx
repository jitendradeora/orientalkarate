import { motion } from "motion/react";
import { Mail } from "lucide-react";

export function StayUpdatedCTA() {
  return (
    <section className="relative border-t border-gray-200 bg-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#eb0339]/40 to-transparent" />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eb0339]/10 text-[#eb0339] ring-1 ring-[#eb0339]/20">
            <Mail className="h-7 w-7" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Stay updated</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">
            News on gradings, holiday hours, and special events — straight to your inbox.
          </p>
          <form className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row sm:items-stretch">
            <input
              type="email"
              name="email"
              placeholder="you@email.com"
              className="min-h-[48px] flex-1 rounded-full border border-gray-200 bg-gray-50 px-5 text-sm text-gray-900 shadow-inner placeholder:text-gray-400 focus:border-[#eb0339] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#eb0339]/20"
            />
            <button
              type="submit"
              className="min-h-[48px] rounded-full bg-[#eb0339] px-8 text-sm font-semibold text-white shadow-md shadow-[#eb0339]/20 transition-all hover:bg-[#c70230] hover:shadow-lg"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-xs text-gray-400">We respect your privacy. Unsubscribe anytime.</p>
        </motion.div>
      </div>
    </section>
  );
}
