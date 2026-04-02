import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import {
  Menu,
  X,
  Facebook,
  Instagram,
  Youtube,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoImage from "../../assets/logo-red.png";
import { cn } from "./ui/utils";

type NavItem =
  | { name: string; path: string }
  | {
      name: string;
      path: string;
      dropdown: { name: string; path: string }[];
    };

const navLinks: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Programs",
    path: "/programs",
    dropdown: [
      { name: "All Programs", path: "/programs" },
      { name: "Kids Program(5–14)", path: "/programs/kids" },
      { name: "Adults Program(15–60)", path: "/programs/adults" },
      { name: "Kobudo", path: "/programs/kobudo" },
      { name: "Classes & Custom", path: "/programs/classes-custom" },
    ],
  },
  { name: "Gallery", path: "/gallery" },
  {
    name: "Join",
    path: "/fee-admission",
    dropdown: [
      { name: "Fee & Admission", path: "/fee-admission" },
      { name: "Book Free Trial", path: "/booking" },
      { name: "Test Results", path: "/test-results" },
      { name: "Offers", path: "/offers" },
    ],
  },
  {
    name: "Contact",
    path: "/contact",
    dropdown: [
      { name: "Contact Us", path: "/contact" },
      { name: "FAQ", path: "/faq" },
    ],
  },
  { name: "Blog", path: "/blog" },
];

function pathActive(pathname: string, path: string) {
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

function itemActive(pathname: string, item: NavItem) {
  if ("dropdown" in item) {
    return (
      item.dropdown.some((d) => pathActive(pathname, d.path)) ||
      pathActive(pathname, item.path)
    );
  }
  return pathActive(pathname, item.path);
}

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdownPath, setOpenDropdownPath] = useState<string | null>(null);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const desktopLeaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdownPath(null);
    setDesktopOpen(null);
  }, [location]);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const closeIfDesktop = () => {
      if (mq.matches) setIsMenuOpen(false);
    };
    closeIfDesktop();
    mq.addEventListener("change", closeIfDesktop);
    return () => mq.removeEventListener("change", closeIfDesktop);
  }, []);

  const clearDesktopTimer = () => {
    if (desktopLeaveTimer.current) {
      clearTimeout(desktopLeaveTimer.current);
      desktopLeaveTimer.current = null;
    }
  };

  const openDesktop = (path: string) => {
    clearDesktopTimer();
    setDesktopOpen(path);
  };

  const scheduleCloseDesktop = () => {
    clearDesktopTimer();
    desktopLeaveTimer.current = setTimeout(() => setDesktopOpen(null), 120);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200/80 transition-[height,box-shadow] duration-300 ease-out",
        scrolled
          ? "h-16 shadow-md shadow-gray-900/8"
          : "h-24 shadow-lg shadow-gray-900/10",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full gap-4">
          <Link to="/" className="flex items-center group flex-shrink-0 h-full">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="h-full flex items-center"
            >
              <img
                src={logoImage}
                alt="Oriental Karate"
                className={cn(
                  "w-auto shrink-0 object-contain object-left   transition-all duration-300 group-hover:opacity-90",
                  scrolled
                    ? "h-10 max-h-10 max-w-[min(100%,10.5rem)] sm:h-11 sm:max-h-11 sm:max-w-[12rem] md:max-w-[13rem]"
                    : "h-12 max-h-12 max-w-[min(100%,12.5rem)] sm:h-14 sm:max-h-14 sm:max-w-[15rem] md:h-16 md:max-h-16 md:max-w-[17rem] lg:h-[4.25rem] lg:max-h-[4.25rem] lg:max-w-[19rem]",
                )}
              />
            </motion.div>
          </Link>

          {/* Desktop — centered menu */}
          <div className="hidden lg:flex flex-1 items-center justify-center min-w-0">
            <div className="flex items-center gap-0.5 xl:gap-1">
              {navLinks.map((link) =>
                "dropdown" in link ? (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => openDesktop(link.path)}
                    onMouseLeave={scheduleCloseDesktop}
                  >
                    <button
                      type="button"
                      className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                        itemActive(location.pathname, link)
                          ? "text-[#eb0339] bg-[#eb0339]/8"
                          : "text-gray-700 hover:text-[#eb0339] hover:bg-gray-50"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${desktopOpen === link.path ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {desktopOpen === link.path && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-1/2 top-full z-[80] pt-2 -translate-x-1/2 min-w-[220px]"
                          onMouseEnter={() => openDesktop(link.path)}
                          onMouseLeave={scheduleCloseDesktop}
                        >
                          <div className="rounded-xl border border-gray-100 bg-white py-2 shadow-xl shadow-gray-900/10">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                                  location.pathname === item.path
                                    ? "text-[#eb0339] bg-[#eb0339]/5"
                                    : "text-gray-700 hover:bg-gray-50 hover:text-[#eb0339]"
                                }`}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors whitespace-nowrap ${
                      location.pathname === link.path
                        ? "text-[#eb0339] bg-[#eb0339]/8"
                        : "text-gray-700 hover:text-[#eb0339] hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                ),
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <Link
              to="/booking"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#eb0339] to-[#ff1a4f] text-white px-2.5 py-2 sm:gap-2 sm:px-5 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm shadow-lg shadow-[#eb0339]/20 hover:shadow-[#eb0339]/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <Sparkles size={14} className="sm:w-4 sm:h-4 shrink-0" />
              <span className="max-[380px]:sr-only">Book Free Trial</span>
              <span className="hidden max-[380px]:inline">Book</span>
            </Link>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full border border-gray-200 bg-gray-100 p-2.5 text-gray-900 transition-colors hover:bg-gray-50 lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </motion.button>
          </div>
        </div>
      </div>

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
              className="fixed inset-0 min-h-full bg-gray-900/40 backdrop-blur-sm"
              aria-hidden="true"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="fixed top-0 right-0 bottom-0 z-[70] flex max-h-[100dvh] min-h-screen w-full max-w-full flex-col border-l border-gray-200 bg-white shadow-2xl lg:w-[40%]"
            >
              <div className="flex items-center justify-between border-b border-gray-200 bg-white p-5">
                <img
                  src={logoImage}
                  alt="Oriental Karate"
                  className="h-14 w-auto max-w-[14rem] object-contain brightness-0 sm:h-16 sm:max-w-[16rem]"
                />
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl border border-gray-200 bg-gray-100 p-2 text-gray-900 hover:bg-gray-200"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </motion.button>
              </div>

              <div className="flex-1 space-y-1 overflow-y-auto bg-white px-4 py-6">
                {navLinks.map((link, index) =>
                  "dropdown" in link ? (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenDropdownPath((prev) =>
                            prev === link.path ? null : link.path,
                          )
                        }
                        className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 ${
                          itemActive(location.pathname, link)
                            ? "bg-[#eb0339]/10 text-[#eb0339]"
                            : "text-gray-800 hover:bg-gray-100"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            openDropdownPath === link.path ? "rotate-180" : ""
                          }`}
                        />
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
                            <div className="space-y-1 py-2 pl-4">
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  onClick={() => setIsMenuOpen(false)}
                                  className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                                    location.pathname === item.path
                                      ? "bg-[#eb0339]/10 text-[#eb0339]"
                                      : "text-gray-600 hover:bg-gray-50 hover:text-[#eb0339]"
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
                        className={`block rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 ${
                          location.pathname === link.path
                            ? "bg-[#eb0339]/10 text-[#eb0339]"
                            : "text-gray-800 hover:bg-gray-100"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ),
                )}

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.03 }}
                  className="pt-6"
                >
                  <Link
                    to="/booking"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#eb0339] to-[#ff1a4f] px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-[#eb0339]/20"
                  >
                    <Sparkles size={16} />
                    Book Free Trial
                  </Link>
                </motion.div>
              </div>

              <div className="border-t border-gray-200 bg-gray-50 px-5 py-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Follow Us
                </p>
                <div className="flex gap-2">
                  <a
                    href="https://www.facebook.com/orientalkarate/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-gray-200 bg-white p-3 text-gray-700 transition-all duration-300 hover:scale-105 hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="https://www.instagram.com/orientalkarate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-gray-200 bg-white p-3 text-gray-700 transition-all duration-300 hover:scale-105 hover:border-pink-500 hover:bg-gradient-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white hover:[border-color:transparent]"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCqQd9ZlQQfYeZWzynGkRCJg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-gray-200 bg-white p-3 text-gray-700 transition-all duration-300 hover:scale-105 hover:border-[#FF0000] hover:bg-[#FF0000] hover:text-white"
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
