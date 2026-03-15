import { motion } from "motion/react";
import { Link } from "react-router";
import { InnerPageBanner } from "../components/InnerPageBanner";
import { Gift, ArrowRight, Check, DollarSign, FileText, Sparkles, Phone } from "lucide-react";

export function FeeAdmission() {
  return (
    <div className="min-h-screen pt-[130px] bg-black text-white">
      <InnerPageBanner
        badge={
          <>
            <DollarSign size={14} className="text-[#FFD700]" />
            <span className="text-sm text-gray-300">Fee & Admission</span>
          </>
        }
        title={
          <>
            Fee &{" "}
            <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
              Admission
            </span>
          </>
        }
        subtitle="Transparent pricing and simple admission process. Recognized by UAE Karate Federation and Ministry of Youth and Sports."
      />

      {/* Special Offer Section — from live site / Join Us */}
      <section className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#eb0339] via-[#ff1a4f] to-[#eb0339]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Gift size={28} className="text-white shrink-0" />
            <div>
              <p className="text-lg md:text-xl font-bold text-white">
                Special Offer: Get 50% OFF your first month + FREE uniform!
              </p>
              <p className="text-white/90 text-sm mt-1">Limited time only. New members only.</p>
            </div>
            <Link
              to="/join-us"
              className="inline-flex items-center gap-2 bg-white text-[#eb0339] px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-gray-100 transition-all shrink-0"
            >
              Join Now
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Fee structure & discounts — content from live site */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-gray-900/80 p-8 lg:p-10"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-white flex items-center gap-2">
              <FileText size={28} className="text-[#eb0339]" />
              Fee Structure & Discounts
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The Oriental Karate & Kobudo Club offers flexible fee options. Contact any of our 9 branches for current rates. We conduct classes twice a week for regular karate and once a week for Kobudo.
            </p>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#eb0339] shrink-0 mt-0.5" />
                <span><strong className="text-white">Sibling discount</strong> — Available when more than one family member joins.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#eb0339] shrink-0 mt-0.5" />
                <span><strong className="text-white">Advance payment discount</strong> — Pay in advance to avail reduced fees. Contact us for details.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#eb0339] shrink-0 mt-0.5" />
                <span><strong className="text-white">Conveyance</strong> — We arrange conveyance for students who require it.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Admission process */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl lg:text-3xl font-bold mb-8 text-white text-center"
          >
            How to Join
          </motion.h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: 1, title: "Book a free trial", desc: "Experience a class with no commitment. Call +971 (2) 677 1611 or book online.", icon: Phone },
              { step: 2, title: "Choose your plan", desc: "Select the membership that fits your goals. See our plans on the Join Us page.", icon: FileText },
              { step: 3, title: "Start training", desc: "Complete registration and begin your martial arts journey.", icon: Sparkles },
            ].map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gray-900/50 border border-white/10 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-[#eb0339]/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-[#eb0339]" />
                </div>
                <p className="text-[#FFD700] font-bold text-sm mb-2">STEP {item.step}</p>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-6">
            For exact fees, schedules and branch-specific offers, get in touch with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/join-us"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#eb0339] to-[#ff1a4f] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#eb0339]/30 transition-all"
            >
              View Plans & Register
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
