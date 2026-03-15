import { Link } from "react-router";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, ChevronDown, ExternalLink, Heart, ArrowUpRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import { branches } from "../data/branches";

export function Footer() {
  const [quickLinksOpen, setQuickLinksOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Our Instructors", path: "/instructors" },
    { name: "Benefits", path: "/benefits" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
    { name: "Blog", path: "/blog" },
    { name: "Classes & Halls", path: "/classes-available" },
  ];

  const programs = [
    { name: "Kids Program (5-14)", path: "/kids" },
    { name: "Adults Program (15-60)", path: "/join-us" },
    { name: "Fee & Admission", path: "/fee-admission" },
    { name: "Kobudo Training", path: "/kobudo" },
    //{ name: "Book Free Trial", path: "/booking" },
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/orientalkarate/",
      label: "Facebook",
      hoverBg: "hover:bg-[#1877F2]"
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/orientalkarate",
      label: "Instagram",
      hoverBg: "hover:bg-gradient-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]"
    },
    { 
      icon: Youtube, 
      href: "https://www.youtube.com/channel/UCqQd9ZlQQfYeZWzynGkRCJg",
      label: "YouTube",
      hoverBg: "hover:bg-[#FF0000]"
    },
  ];

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#eb0339]/50 to-transparent" />
      
      {/* Stay Updated - Different color to match theme */}
      <div className="relative bg-white/5 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2 text-white">Stay Updated</h3>
              <p className="text-gray-300">Get the latest news about classes, events, and special offers.</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#eb0339]/50 focus:border-[#eb0339]/50 min-w-[280px]"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-[#eb0339] text-white font-semibold text-sm hover:bg-[#c70230] transition-all duration-300 hover:scale-[1.02]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <h3 className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">ORIENTAL</span>
                <span className="text-[#FFD700]"> KARATE</span>
              </h3>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building discipline, strength, and character through traditional martial arts training since 1987. Abu Dhabi's premier martial arts academy.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`p-3 rounded-xl bg-white/5 border border-white/10 text-white transition-all duration-300 hover:scale-105 hover:border-transparent ${social.hoverBg}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <button
              onClick={() => setQuickLinksOpen(!quickLinksOpen)}
              className="md:pointer-events-none w-full md:w-auto flex items-center justify-between font-bold text-lg mb-6"
            >
              <span>Quick Links</span>
              <ChevronDown 
                size={18} 
                className={`md:hidden transition-transform duration-300 ${quickLinksOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            <ul className={`space-y-3 ${quickLinksOpen ? 'block' : 'hidden md:block'}`}>
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#eb0339] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <button
              onClick={() => setProgramsOpen(!programsOpen)}
              className="md:pointer-events-none w-full md:w-auto flex items-center justify-between font-bold text-lg mb-6"
            >
              <span>Programs</span>
              <ChevronDown 
                size={18} 
                className={`md:hidden transition-transform duration-300 ${programsOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            <ul className={`space-y-3 ${programsOpen ? 'block' : 'hidden md:block'}`}>
              {programs.map((program) => (
                <li key={program.path}>
                  <Link 
                    to={program.path} 
                    className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#eb0339] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* CTA Button */}
            <div className={`mt-6 ${programsOpen ? 'block' : 'hidden md:block'}`}>
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#eb0339] to-[#ff1a4f] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#eb0339]/20 transition-all"
              >
                Book Free Trial
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Branch Locations */}
          <div>
            <button
              onClick={() => setBranchesOpen(!branchesOpen)}
              className="md:pointer-events-none w-full md:w-auto flex items-center justify-between font-bold text-lg mb-6"
            >
              <span>Locations</span>
              <ChevronDown 
                size={18} 
                className={`md:hidden transition-transform duration-300 ${branchesOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            <div className={`${branchesOpen ? 'block' : 'hidden md:block'}`}>
              <div className="mb-5">
                <select
                  value={selectedBranch.id}
                  onChange={(e) => setSelectedBranch(branches.find(b => b.id === e.target.value) || branches[0])}
                  className="w-full text-sm pl-4 pr-10 py-3 rounded-xl border bg-white/5 border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#eb0339]/50 appearance-none cursor-pointer bg-no-repeat bg-[length:1.25rem] bg-[right_0.75rem_center]"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")` }}
                >
                  {branches.map((branch) => (
                    <option key={branch.id} value={branch.id} className="bg-gray-900">
                      {branch.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-3 text-sm p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-start gap-3 text-gray-400">
                  <div className="w-7 h-7 rounded-lg bg-[#eb0339]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={12} className="text-[#eb0339]" />
                  </div>
                  <div className="flex-1">
                    <p className="leading-relaxed">{selectedBranch.address}</p>
                    <a
                      href={selectedBranch.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#eb0339] hover:text-[#ff4d6d] mt-2 transition-colors font-medium"
                    >
                      <ExternalLink size={10} />
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-7 h-7 rounded-lg bg-[#eb0339]/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={12} className="text-[#eb0339]" />
                  </div>
                  <span>{selectedBranch.phone}</span>
                </div>
                {selectedBranch.phone2 && (
                  <div className="flex items-center gap-3 text-gray-400">
                    <div className="w-7 h-7 rounded-lg bg-[#eb0339]/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={12} className="text-[#eb0339]" />
                    </div>
                    <span>{selectedBranch.phone2}</span>
                  </div>
                )}
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-7 h-7 rounded-lg bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={12} className="text-[#25D366]" />
                  </div>
                  <a href={`https://wa.me/${(selectedBranch.whatsapp ?? '').replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">{selectedBranch.whatsapp ?? ''}</a>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-7 h-7 rounded-lg bg-[#eb0339]/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={12} className="text-[#eb0339]" />
                  </div>
                  <span>{selectedBranch.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 flex items-center gap-1">
              &copy; 2026 Oriental Karate &amp; Kobudo Club L.L.C. Made with 
              <Heart size={12} className="text-[#eb0339] mx-1" fill="#eb0339" />
              in Abu Dhabi
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="hidden md:inline-block text-white/20">|</span>
              <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
