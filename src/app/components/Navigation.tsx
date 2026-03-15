import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Facebook, Instagram, Youtube, ChevronDown, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoImage from "../../assets/logo-white.png";

const TAGLINE = "Discipline • Strength • Excellence — Since 1987";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  /** Which dropdown is open in the slide-out menu: link.path or null */
  const [openDropdownPath, setOpenDropdownPath] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdownPath(null);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { 
      name: "About", 
      path: "/about",
      dropdown: [
        { name: "About Us", path: "/about" },
        { name: "Instructors", path: "/instructors" },
        { name: "Kobudo", path: "/kobudo" },
      ]
    },
    { name: "Benefits", path: "/benefits" },
    {
      name: "Join Us",
      path: "/join-us",
      dropdown: [
        { name: "Join Us", path: "/join-us" },
        { name: "Fee & Admission", path: "/fee-admission" },
        { name: "Book Free Trial", path: "/booking" },
      ],
    },
    { name: "Karate for Kids", path: "/kids" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact",
        dropdown: [
          { name: "FAQ", path: "/faq" },
      ] 
    },
    { name: "Blog", path: "/blog" }, 
    { name: "Classes & Halls", path: "/classes-available" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[height,background-color,border-color,box-shadow] duration-300 ease-out ${
        isScrolled 
          ? "h-[72px] bg-gray-900 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20" 
          : "h-[130px] bg-gray-900 backdrop-blur-sm"
      }`}
    >
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#eb0339]/50 to-transparent opacity-60" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <Link to="/" className="flex items-center group flex-shrink-0 h-full">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="h-full flex items-center"
            >
              <img 
                src={logoImage} 
                alt="Oriental Karate" 
                className={`w-auto max-h-full object-contain object-left transition-[height,max-height] duration-300 ease-out group-hover:drop-shadow-[0_0_15px_rgba(235,3,57,0.4)] ${
                  isScrolled ? "h-10" : "h-[100px]"
                }`}
              />
            </motion.div>
          </Link>

          {/* Center tagline - hidden on small screens */}
          <p className="hidden lg:block text-center text-gray-400 text-sm font-medium tracking-wide flex-1 px-4 max-w-2xl mx-auto">
            {TAGLINE}
          </p>

          {/* Join Now + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <Link
              to="/join-us"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#eb0339] to-[#ff1a4f] text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl font-semibold text-sm shadow-lg shadow-[#eb0339]/20 hover:shadow-[#eb0339]/30 transition-all duration-200 hover:scale-[1.02]"
            >
              <Sparkles size={16} />
              Join Now
            </Link>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Full-height overlay menu: 100% width on mobile, 40% on desktop */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[60] min-h-screen"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 min-h-full bg-gray-900/60 backdrop-blur-sm "
              aria-hidden="true"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-0 right-0 bottom-0 min-h-screen w-full lg:w-[40%] max-w-full z-[70] bg-gray-900/98 backdrop-blur-2xl border-l border-white/10 flex flex-col shadow-2xl "
            >
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <img 
                  src={logoImage} 
                  alt="Oriental Karate" 
                  className="h-12 w-auto"
                />
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-white"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </motion.button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
                {navLinks.map((link, index) => (
                  link.dropdown ? (
                    <motion.div 
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                    >
                      <button
                        onClick={() => setOpenDropdownPath(prev => prev === link.path ? null : link.path)}
                        className={`w-full flex items-center justify-between text-base font-medium transition-all duration-300 py-3 px-4 rounded-xl ${
                          location.pathname === link.path || link.dropdown.some(item => item.path === location.pathname)
                            ? "text-[#eb0339] bg-[#eb0339]/10" 
                            : "text-gray-300 hover:bg-white/5"
                        }`}
                      >
                        {link.name}
                        <ChevronDown size={16} className={`transition-transform duration-300 ${openDropdownPath === link.path ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openDropdownPath === link.path && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 py-2 space-y-1">
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  onClick={() => setIsMenuOpen(false)}
                                  className={`block text-sm font-medium transition-all py-2.5 px-4 rounded-xl ${
                                    location.pathname === item.path 
                                      ? "text-[#eb0339] bg-[#eb0339]/10" 
                                      : "text-gray-400 hover:text-white hover:bg-white/5"
                                  }`}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block text-base font-medium transition-all duration-300 py-3 px-4 rounded-xl ${
                          location.pathname === link.path 
                            ? "text-[#eb0339] bg-[#eb0339]/10" 
                            : "text-gray-300 hover:bg-white/5"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  )
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.03 }}
                  className="pt-6"
                >
                  <Link
                    to="/join-us"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#eb0339] to-[#ff1a4f] text-white px-4 py-2.5 rounded-lg font-semibold text-sm text-center shadow-lg shadow-[#eb0339]/20"
                  >
                    <Sparkles size={16} />
                    Join Now
                  </Link>
                </motion.div>
              </div>

              <div className="px-5 py-5 border-t border-white/10 bg-black/30">
                <p className="text-xs font-semibold mb-3 text-gray-500 uppercase tracking-wider">
                  Follow Us
                </p>
                <div className="flex gap-2">
                  <a 
                    href="https://www.facebook.com/orientalkarate/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl transition-all duration-300 hover:scale-105 bg-white/5 border border-white/10 text-white hover:bg-[#1877F2] hover:border-[#1877F2]"
                  >
                    <Facebook size={18} />
                  </a>
                  <a 
                    href="https://www.instagram.com/orientalkarate" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl transition-all duration-300 hover:scale-105 bg-white/5 border border-white/10 text-white hover:bg-gradient-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:border-transparent"
                  >
                    <Instagram size={18} />
                  </a>
                  <a 
                    href="https://www.youtube.com/channel/UCqQd9ZlQQfYeZWzynGkRCJg" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl transition-all duration-300 hover:scale-105 bg-white/5 border border-white/10 text-white hover:bg-[#FF0000] hover:border-[#FF0000]"
                  >
                    <Youtube size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
