import { useState } from "react";
import { motion } from "motion/react";
import { Check, Users, Sparkles, ArrowRight, Calendar, Clock, Gift, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router";
import { InnerPageBanner } from "../components/InnerPageBanner";
import { branchSchedules } from "../data/schedule";
import { branches } from "../data/branches";

export function JoinUs() {
  const [selectedBranchId, setSelectedBranchId] = useState(branchSchedules[0].branchId);
  const selectedSchedule = branchSchedules.find((s) => s.branchId === selectedBranchId)!;
  const selectedBranchInfo = branches.find((b) => b.id === selectedBranchId);

  const membershipPlans = [
    {
      name: "Basic",
      price: "99",
      period: "month",
      features: [
        "2 classes per week",
        "Access to beginner programs",
        "Training uniform included",
        "Progress tracking",
        "Community events access",
      ],
      popular: false,
      gradient: "from-gray-900 to-gray-900/50",
    },
    {
      name: "Premium",
      price: "149",
      period: "month",
      features: [
        "Unlimited classes",
        "All program levels",
        "Training uniform & equipment",
        "Priority class booking",
        "Competition preparation",
        "Personal progress reviews",
        "Guest passes (2/month)",
      ],
      popular: true,
      gradient: "from-[#eb0339] to-[#c70230]",
    },
    {
      name: "Elite",
      price: "199",
      period: "month",
      features: [
        "Everything in Premium",
        "Private training sessions (2/month)",
        "Kobudo weapons training",
        "Advanced seminars access",
        "Tournament coaching",
        "Nutrition guidance",
        "Family discount available",
      ],
      popular: false,
      gradient: "from-gray-900 to-gray-900/50",
    },
  ];

  const admissionSteps = [
    { step: 1, title: "Book Free Trial", description: "Experience a class with no commitment", icon: Calendar },
    { step: 2, title: "Choose Your Plan", description: "Select the membership that fits your goals", icon: Gift },
    { step: 3, title: "Complete Registration", description: "Fill out our simple online form", icon: Check },
    { step: 4, title: "Start Training", description: "Begin your martial arts journey!", icon: Sparkles },
  ];

  return (
    <div className="min-h-screen pt-[130px] bg-black text-white">
      <InnerPageBanner
        badge={
          <>
            <Users size={14} className="text-[#FFD700]" />
            <span className="text-sm text-gray-300">Join 1,500+ Active Students</span>
          </>
        }
        title={
          <>
            Join{" "}
            <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
              Oriental Karate
            </span>
          </>
        }
        subtitle="Start your martial arts journey today. Choose the plan that's right for you."
      />

      <section className="bg-gray-900/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#eb0339] to-[#ff1a4f] text-white px-8 py-3 rounded-xl font-bold text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#eb0339]/30 hover:scale-[1.02]"
          >
            Book Free Trial First
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="relative py-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#eb0339] via-[#ff1a4f] to-[#eb0339]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-bold text-white flex items-center justify-center gap-3">
            <Gift size={20} />
            <span>Special Offer: Get 50% OFF your first month + FREE uniform! Limited time only.</span>
            <Gift size={20} />
          </p>
        </div>
      </section>

    

      {/* Class Schedule — Bento grid + dropdown view */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#eb0339]/10 text-[#eb0339] text-sm font-semibold mb-6">
              <Clock size={14} />
              CLASS SCHEDULE
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-3">
              Weekly{" "}
              <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
                Schedule
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm">
              Recognized by UAE Karate Federation and Ministry of Youth and Sports.
            </p>
          </motion.div>

          {/* Branch dropdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <label className="text-sm font-medium text-gray-400">Choose your branch</label>
            <select
              value={selectedBranchId}
              onChange={(e) => setSelectedBranchId(e.target.value)}
              className="w-full sm:w-auto min-w-[200px] pl-4 pr-10 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#eb0339]/50 appearance-none cursor-pointer bg-no-repeat bg-[length:1.25rem] bg-[right_0.75rem_center] text-sm font-medium"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")` }}
            >
              {branchSchedules.map((schedule) => (
                <option key={schedule.branchId} value={schedule.branchId} className="bg-gray-900">
                  {schedule.branchName}
                </option>
              ))}
            </select>
          </motion.div>

          {/* Bento-style grid: 3 class blocks side by side on desktop */}
          <motion.div
            key={selectedBranchId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {selectedSchedule.classes.map((classBlock, blockIndex) => {
              const accent = blockIndex === 0 ? "border-l-[#eb0339]" : blockIndex === 1 ? "border-l-[#FFD700]" : "border-l-emerald-500";
              return (
                <motion.div
                  key={classBlock.type}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: blockIndex * 0.05 }}
                  className={`rounded-2xl bg-gray-900/80 border border-white/10 border-l-4 ${accent} overflow-hidden shadow-xl`}
                >
                  <div className="px-4 py-3 border-b border-white/10">
                    <h3 className="font-bold text-white">{classBlock.type}</h3>
                  </div>
                  <ul className="divide-y divide-white/5">
                    {classBlock.rows.map((row, i) => (
                      <li key={i} className="px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <span className="text-gray-300 text-sm font-medium">{row.days}</span>
                        <span className="text-[#FFD700] text-xs sm:text-sm font-semibold flex items-center gap-1">
                          <Clock size={12} />
                          {row.timings}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Branch address */}
          {selectedBranchInfo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-400"
            >
              <MapPin size={18} className="text-[#eb0339] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-white">{selectedBranchInfo.name}</p>
                <p>{selectedBranchInfo.address}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-[#eb0339] hover:text-[#ff4d6d] font-medium mt-1"
                >
                  View contact & map
                  <ExternalLink size={12} />
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD700]/10 text-[#FFD700] text-sm font-semibold mb-6">
              <Check size={14} />
              SIMPLE PROCESS
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Admission{" "}
              <span className="bg-gradient-to-r from-[#FFD700] to-[#ffa500] bg-clip-text text-transparent">
                Process
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {admissionSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center p-6 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-white/5"
              >
                {index < admissionSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#eb0339] to-transparent z-10" />
                )}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#eb0339] to-[#c70230] flex items-center justify-center mx-auto mb-6">
                  <item.icon size={28} className="text-white" />
                </div>
                <div className="text-[#FFD700] font-bold text-sm mb-2">STEP {item.step}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-white/5"
          >
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#eb0339]/10 text-[#eb0339] text-sm font-semibold mb-4">
                <Users size={14} />
                GET STARTED
              </span>
              <h2 className="text-3xl font-bold">
                Registration{" "}
                <span className="bg-gradient-to-r from-[#FFD700] to-[#ffa500] bg-clip-text text-transparent">
                  Form
                </span>
              </h2>
            </div>
            
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">First Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-black/50 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#eb0339]/50 focus:border-[#eb0339]/50 transition-all placeholder:text-gray-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Last Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-black/50 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#eb0339]/50 focus:border-[#eb0339]/50 transition-all placeholder:text-gray-500"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-black/50 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#eb0339]/50 focus:border-[#eb0339]/50 transition-all placeholder:text-gray-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-black/50 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#eb0339]/50 focus:border-[#eb0339]/50 transition-all placeholder:text-gray-500"
                    placeholder="+971 50 000 0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Age *</label>
                <input
                  type="number"
                  required
                  className="w-full bg-black/50 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#eb0339]/50 focus:border-[#eb0339]/50 transition-all placeholder:text-gray-500"
                  placeholder="Your age"
                />
              </div>
 

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Select Branch *</label>
                <select
                  required
                  className="w-full bg-black/50 border border-white/10 text-white rounded-xl pl-4 pr-10 py-3 focus:outline-none focus:ring-2 focus:ring-[#eb0339]/50 focus:border-[#eb0339]/50 transition-all appearance-none cursor-pointer bg-no-repeat bg-[length:1.25rem] bg-[right_0.75rem_center]"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")` }}
                >
                  <option value="" className="bg-gray-900">Choose a branch</option>
                  <option value="khalidiya-ho" className="bg-gray-900">Khalidiya Head Office</option>
                  <option value="mussaffa" className="bg-gray-900">Mussaffa</option>
                  <option value="electra" className="bg-gray-900">Electra Salam Corner</option>
                  <option value="al-reem" className="bg-gray-900">Al Reem Island</option>
                  <option value="khalifa-street" className="bg-gray-900">Khalifa Street</option>
                  <option value="khalidiya" className="bg-gray-900">Khalidiya</option>
                  <option value="madina-zayed" className="bg-gray-900">Madina Zayed</option>
                  <option value="airport-road" className="bg-gray-900">Airport Road</option>
                  <option value="mushrif" className="bg-gray-900">Mushrif Mall</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Additional Notes</label>
                <textarea
                  rows={4}
                  className="w-full bg-black/50 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#eb0339]/50 focus:border-[#eb0339]/50 transition-all placeholder:text-gray-500 resize-none"
                  placeholder="Any questions or special requirements?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#eb0339] to-[#ff1a4f] text-white py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#eb0339]/30 hover:scale-[1.01]"
              >
                Complete Registration
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
