import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, ExternalLink, Sparkles, ArrowRight } from "lucide-react";
import { branches } from "../data/branches";
import { Link } from "react-router";
import { InnerPageBanner } from "../components/InnerPageBanner";

export function Contact() {
  return (
    <div className="min-h-screen pt-[130px] bg-black text-white">
      <InnerPageBanner
        badge={
          <>
            <Mail size={14} className="text-[#FFD700]" />
            <span className="text-sm text-gray-300">We'd Love to Hear From You</span>
          </>
        }
        title={
          <>
            Contact{" "}
            <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
              Us
            </span>
          </>
        }
        subtitle="Get in touch with us. We're here to answer your questions and help you start your martial arts journey."
      />

      {/* Contact Form & Info */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-white/5"
            >
              <h2 className="text-3xl font-bold mb-8">
                Send Us a{" "}
                <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
                  Message
                </span>
              </h2>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
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
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full bg-black/50 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#eb0339]/50 focus:border-[#eb0339]/50 transition-all placeholder:text-gray-500"
                    placeholder="+971 50 000 0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-black/50 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#eb0339]/50 focus:border-[#eb0339]/50 transition-all placeholder:text-gray-500"
                    placeholder="Inquiry about classes"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-black/50 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#eb0339]/50 focus:border-[#eb0339]/50 transition-all placeholder:text-gray-500 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#eb0339] to-[#ff1a4f] text-white py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#eb0339]/30 hover:scale-[1.01] flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold mb-8">
                Get in{" "}
                <span className="bg-gradient-to-r from-[#FFD700] to-[#ffa500] bg-clip-text text-transparent">
                  Touch
                </span>
              </h2>

              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  lines: ["Tel 1: +971 (2) 6771611", "Tel 2: +971 (2) 6778878"],
                  color: "#eb0339"
                },
                {
                  icon: MessageCircle,
                  title: "WhatsApp",
                  lines: ["+971 50 677 16 89", "Message us anytime"],
                  color: "#25D366"
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  lines: ["karate@emirates.net.ae", "We typically respond within 24 hours"],
                  color: "#FFD700"
                },
                {
                  icon: Clock,
                  title: "Working Hours",
                  lines: ["Monday - Friday: 6:00 AM - 9:00 PM", "Saturday - Sunday: 8:00 AM - 6:00 PM"],
                  color: "#eb0339"
                }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-white/5 hover:border-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
                      {item.lines.map((line, j) => (
                        <p key={j} className={j === item.lines.length - 1 && item.lines.length > 1 ? "text-sm text-gray-500" : "text-gray-400"}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#eb0339] to-[#c70230] text-white"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={18} />
                  <h3 className="font-bold text-lg">Prefer to Visit?</h3>
                </div>
                <p className="mb-4 text-white/80">
                  Book a free trial class or schedule a dojo tour today!
                </p>
                <Link
                  to="/booking"
                  className="inline-flex items-center gap-2 bg-white text-[#eb0339] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-all"
                >
                  Book Free Trial
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#eb0339]/10 text-[#eb0339] text-sm font-semibold mb-6">
              <MapPin size={14} />
              9 LOCATIONS
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
                Locations
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Visit any of our sophisticated training centers across Abu Dhabi
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-white/5 hover:border-[#eb0339]/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#eb0339] transition-colors">
                    {branch.name}
                  </h3>
                  {index === 0 && (
                    <span className="text-xs bg-gradient-to-r from-[#eb0339] to-[#ff1a4f] text-white px-3 py-1 rounded-full font-semibold">
                      HQ
                    </span>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#eb0339]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin size={14} className="text-[#eb0339]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400">{branch.address}</p>
                      <a
                        href={branch.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#eb0339] hover:text-[#ff4d6d] text-sm mt-1 transition-colors font-medium"
                      >
                        <ExternalLink size={12} />
                        Get Directions
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#eb0339]/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={14} className="text-[#eb0339]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{branch.phone}</p>
                      {branch.phone2 && (
                        <p className="text-sm text-gray-400">{branch.phone2}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                      <MessageCircle size={14} className="text-[#25D366]" />
                    </div>
                    <a href={`https://wa.me/${(branch.whatsapp ?? '').replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-[#25D366] transition-colors">{branch.whatsapp ?? ''}</a>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#eb0339]/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={14} className="text-[#eb0339]" />
                    </div>
                    <p className="text-sm text-gray-400">{branch.email}</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#eb0339]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock size={14} className="text-[#eb0339]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Mon-Fri: {branch.hours.weekday}</p>
                      <p className="text-sm text-gray-400">Sat-Sun: {branch.hours.weekend}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href={`tel:${branch.phone}`}
                    className="flex items-center justify-center gap-2 w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl font-semibold hover:bg-[#eb0339] hover:border-[#eb0339] transition-all duration-300"
                  >
                    <Phone size={16} />
                    Call This Branch
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD700]/10 text-[#FFD700] text-sm font-semibold mb-6">
              <Sparkles size={14} />
              CONNECT WITH US
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Follow Us on{" "}
              <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
                Social Media
              </span>
            </h2>
            <p className="text-gray-400 mb-10">
              Stay updated with our latest news, events, and training tips
            </p>
            <div className="flex justify-center gap-4">
              {[
                { 
                  href: "https://www.facebook.com/orientalkarate/", 
                  label: "Facebook",
                  hoverBg: "hover:bg-[#1877F2]",
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  )
                },
                { 
                  href: "https://www.instagram.com/orientalkarate", 
                  label: "Instagram",
                  hoverBg: "hover:bg-gradient-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]",
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )
                },
                { 
                  href: "https://www.youtube.com/channel/UCqQd9ZlQQfYeZWzynGkRCJg", 
                  label: "YouTube",
                  hoverBg: "hover:bg-[#FF0000]",
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  )
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:scale-105 hover:border-transparent ${social.hoverBg}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
