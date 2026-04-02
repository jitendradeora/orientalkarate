import { motion } from "motion/react";
import { Link } from "react-router";
import { InnerPageBanner } from "../components/InnerPageBanner";
import {
  Gift,
  ArrowRight,
  Check,
  DollarSign,
  FileText,
  Sparkles,
  Phone,
  Calendar,
  User,
  MapPin,
  Mail,
} from "lucide-react";
import { branches } from "../data/branches";

const admissionSteps = [
  {
    step: 1,
    title: "Enquire or book a trial",
    desc: "Call +971 (2) 677 1611, WhatsApp +971 50 677 16 89, or book a free trial online. We’ll suggest the best branch and class time.",
    icon: Phone,
  },
  {
    step: 2,
    title: "Visit the branch",
    desc: "Meet the team, see the dojo, and confirm the program (kids, adults, or Kobudo) that fits your goals.",
    icon: MapPin,
  },
  {
    step: 3,
    title: "Complete registration",
    desc: "Submit your details and choose your fee plan. We explain uniforms, grading, and the training calendar.",
    icon: FileText,
  },
  {
    step: 4,
    title: "Start training",
    desc: "Attend your first class, get your syllabus track, and begin your belt journey with our instructors.",
    icon: Sparkles,
  },
];

export function FeeAdmission() {
  return (
    <div className="min-h-screen pt-24 bg-black text-white">
      <InnerPageBanner
        badge={
          <>
            <DollarSign size={14} className="text-[#FFD700]" />
            <span className="text-sm text-gray-300">Fee &amp; Admission</span>
          </>
        }
        title={
          <>
            Fee &amp;{" "}
            <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
              Admission
            </span>
          </>
        }
        subtitle="Transparent pricing and a clear path to your first class. Recognised by UAE Karate Federation and Ministry of Youth and Sports."
      />

      <section className="relative overflow-hidden py-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#eb0339] via-[#ff1a4f] to-[#eb0339]" />
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 text-center sm:flex-row sm:px-6 lg:px-8">
          <Gift size={28} className="shrink-0 text-white" />
          <div>
            <p className="text-lg font-bold text-white md:text-xl">
              Special offer: get 50% OFF your first month + FREE uniform
            </p>
            <p className="mt-1 text-sm text-white/90">
              Limited time. New members only — see current enrolment offers.
            </p>
          </div>
          <Link
            to="/offers"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#eb0339] transition-colors hover:bg-gray-100"
          >
            View offers
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white py-24 text-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-200 bg-gray-50/80 p-8 shadow-sm lg:p-10"
          >
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900 lg:text-3xl">
              <FileText size={28} className="text-[#eb0339]" />
              Fee structure &amp; discounts
            </h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              The Oriental Karate &amp; Kobudo Club offers flexible fee options.
              Contact any of our 9 branches for current rates. We conduct
              classes twice a week for regular karate and once a week for
              Kobudo.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#eb0339]" />
                <span>
                  <strong className="text-gray-900">Sibling discount</strong> —
                  when more than one family member joins.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#eb0339]" />
                <span>
                  <strong className="text-gray-900">
                    Advance payment discount
                  </strong>{" "}
                  — pay in advance for reduced fees.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#eb0339]" />
                <span>
                  <strong className="text-gray-900">Conveyance</strong> — available
                  for students who need transport support.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-gray-950 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-center text-3xl font-bold text-white lg:text-4xl"
          >
            Admission <span className="text-[#eb0339]">process</span>
          </motion.h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-gray-400">
            From your first call to your first class — here is how joining
            Oriental Karate works.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {admissionSteps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-gray-900/60 p-6"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#eb0339]/20">
                  <item.icon className="h-6 w-6 text-[#eb0339]" />
                </div>
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#FFD700]">
                  Step {item.step}
                </p>
                <h3 className="mb-2 text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full border-y border-gray-200 bg-white py-0 text-gray-900">
        <div className="grid min-h-[min(100vh,720px)] lg:grid-cols-2">
          <div className="relative min-h-[280px] lg:min-h-[560px]">
            <img
              src="https://www.orientalkarate.com/wp-content/uploads/2020/02/DSC6210a-scaled.jpg"
              alt="Training at Oriental Karate"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent lg:bg-gradient-to-r" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-14 xl:px-20"
          >
            <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-[#eb0339]/20 bg-[#eb0339]/5 px-3 py-1 text-xs font-semibold text-[#eb0339]">
              <User size={12} />
              Registration
            </div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Start your registration
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              We’ll follow up with fee details for your chosen branch.
            </p>
            <form className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    className="mb-2 block text-sm font-medium text-gray-700"
                    htmlFor="reg-first"
                  >
                    First name <span className="text-[#eb0339]">*</span>
                  </label>
                  <input
                    id="reg-first"
                    required
                    className="w-full rounded-full border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 shadow-inner transition-all placeholder:text-gray-400 focus:border-[#eb0339] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#eb0339]/20"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label
                    className="mb-2 block text-sm font-medium text-gray-700"
                    htmlFor="reg-last"
                  >
                    Last name <span className="text-[#eb0339]">*</span>
                  </label>
                  <input
                    id="reg-last"
                    required
                    className="w-full rounded-full border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 shadow-inner transition-all placeholder:text-gray-400 focus:border-[#eb0339] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#eb0339]/20"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-gray-700"
                  htmlFor="reg-email"
                >
                  Email <span className="text-[#eb0339]">*</span>
                </label>
                <input
                  id="reg-email"
                  type="email"
                  required
                  className="w-full rounded-full border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 shadow-inner transition-all placeholder:text-gray-400 focus:border-[#eb0339] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#eb0339]/20"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-gray-700"
                  htmlFor="reg-phone"
                >
                  WhatsApp / phone <span className="text-[#eb0339]">*</span>
                </label>
                <input
                  id="reg-phone"
                  type="tel"
                  required
                  className="w-full rounded-full border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 shadow-inner transition-all placeholder:text-gray-400 focus:border-[#eb0339] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#eb0339]/20"
                  placeholder="+971 50 000 0000"
                />
              </div>
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-gray-700"
                  htmlFor="reg-branch"
                >
                  Preferred branch <span className="text-[#eb0339]">*</span>
                </label>
                <select
                  id="reg-branch"
                  required
                  className="w-full cursor-pointer appearance-none rounded-full border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-all focus:border-[#eb0339] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#eb0339]/20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 0.75rem center",
                    backgroundSize: "1.25rem",
                  }}
                >
                  <option value="">Select branch</option>
                  {branches.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-gray-700"
                  htmlFor="reg-program"
                >
                  Program interest
                </label>
                <select
                  id="reg-program"
                  className="w-full cursor-pointer appearance-none rounded-full border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-all focus:border-[#eb0339] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#eb0339]/20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 0.75rem center",
                    backgroundSize: "1.25rem",
                  }}
                >
                  <option>Kids (5–14)</option>
                  <option>Adults (15–60)</option>
                  <option>Kobudo</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-gray-700"
                  htmlFor="reg-notes"
                >
                  Message
                </label>
                <textarea
                  id="reg-notes"
                  rows={4}
                  className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 shadow-inner transition-all placeholder:text-gray-400 focus:border-[#eb0339] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#eb0339]/20"
                  placeholder="Age of student, preferred days, or questions…"
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#eb0339] to-[#ff1a4f] py-3.5 font-semibold text-white shadow-md shadow-[#eb0339]/25 transition-opacity hover:opacity-95"
              >
                <Mail size={18} />
                Submit registration request
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
