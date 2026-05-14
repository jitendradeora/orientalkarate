import { useState } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import {
  Award,
  Users,
  Trophy,
  Instagram,
  ExternalLink,
  ArrowRight,
  Star,
  Shield,
  ChevronRight,
  Play,
  X,
  UserCheck,
  BookOpen,
} from "lucide-react";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { ReviewSlider } from "../components/ReviewSlider";
import { HomeLocationsGrid } from "../components/HomeLocationsGrid";
import { getFeaturedHomePosts } from "../data/blogPosts";
import { useRef } from "react";

import OurResults from "../components/OurResults";

const HERO_VIDEO_ID = "R-y9mEOfUnc"; // Replace with your YouTube video ID

export function Home() {
  const heroRef = useRef(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const galleryImages = [
    "https://images.unsplash.com/photo-1764616211830-993b5e360d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjB0cmFpbmluZyUyMGRvam98ZW58MXx8fHwxNzczMjk0OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1529630218527-7df22fc2d4ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjBhY3Rpb24lMjBraWNrfGVufDF8fHx8MTc3MzI5NDk4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1771909720903-c4567a890a6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGRvam8lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzMyMTU5MTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1738835935023-ebff4a85bc7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjBzdHVkZW50cyUyMHRyYWluaW5nfGVufDF8fHx8MTc3MzI5NDk4NHww&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  const whyJoinItems = [
    {
      title: "Training with Purpose",
      desc: "Every class follows a clear plan for focused, consistent progress.",
      img: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Safe & Supervised",
      desc: " CCTV monitoring with multiple instructors in every class.",
      img: "https://images.unsplash.com/photo-1529630218527-7df22fc2d4ee?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Growth, Not Just Training",
      desc: "Belt progression and in-house tournaments that build real confidence.",
      img: "https://images.unsplash.com/photo-1738835935023-ebff4a85bc7e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "More Than Karate",
      desc: "Flexibility, coordination, and mental focus built into every class.",
      img: "https://images.unsplash.com/photo-1771909720903-c4567a890a6f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Real Growth",
      desc: "Turning energy into focus, confidence, and discipline.",
      img: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const featuredPosts = getFeaturedHomePosts();

  return (
    <div className="min-h-screen overflow-hidden">
      <section
        ref={heroRef}
        className="relative flex min-h-[100svh] flex-col overflow-hidden pt-24"
      >
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img
            src="https://www.orientalkarate.com/wp-content/uploads/2020/02/DSC6210a-scaled.jpg"
            alt="Karate training at Oriental Karate"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-y-0 left-0 w-full max-w-[min(100%,52rem)] bg-gradient-to-r from-black/92 via-black/55 to-transparent"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 md:from-black/40"
            aria-hidden
          />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 flex min-h-0 flex-1 flex-col"
        >
          {/* Main copy column centered in hero; text left-aligned inside column; stats at bottom */}
          <div className="flex min-h-0 flex-1 flex-col justify-center px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
            <div className="mx-auto w-full max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="mx-0 flex w-full max-w-xl flex-col items-start text-left"
              >
                <h1 className="mb-5 text-3xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl xl:text-5xl">
                  More Than a Sport{" "}
                  <span className="bg-gradient-to-r from-[#eb0339] to-[#ff6b86] bg-clip-text text-transparent"></span>
                </h1>

                <p className="mb-8 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
                  Confidence and Discipline for Life
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start">
                  <Link
                    to="/booking"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#eb0339] to-[#ff1a4f] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#eb0339]/25 transition-all hover:scale-[1.02] hover:shadow-[#eb0339]/35"
                  >
                    Book Free Trial
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setVideoOpen(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/15"
                  >
                    <Play size={18} className="text-[#eb0339]" />
                    Watch Class
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          <OurResults />
          {/* Import Our Results in Numbers components */}
        </motion.div>
      </section>

      {/* About — light theme (layout preserved) */}
      {/* <section className="relative overflow-hidden border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-[#eb0339]/[0.06] to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm lg:col-span-3 lg:p-10"
            >
              <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#eb0339]/10 px-3 py-1.5 text-xs font-semibold text-[#eb0339]">
                <Star size={12} />
                SINCE 1987
              </span>
              <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
                  Oriental Karate
                </span>
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Oriental Karate has been the premier destination for martial
                arts excellence in Abu Dhabi. Our dojo is built on the
                foundation of traditional values combined with modern training
                techniques.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                We believe in developing not just skilled martial artists, but
                well-rounded individuals who embody discipline, respect, and
                perseverance in all aspects of life.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Traditional Okinawan Karate",
                  "Certified Black Belt Instructors",
                  "All Ages & Levels",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-[#eb0339]" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-6 lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-3xl border border-gray-200 shadow-sm"
              >
                <img
                  src="https://images.unsplash.com/photo-1771909720903-c4567a890a6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGRvam8lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzMyMTU5MTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Dojo interior"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/85 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-lg font-bold text-white">
                    Modern training facilities
                  </p>
                  <p className="text-sm text-gray-200">
                    9 locations across Abu Dhabi
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-3xl bg-gradient-to-br from-[#eb0339] to-[#c70230] p-6 text-white shadow-lg"
              >
                <div className="mb-4 flex items-center justify-between">
                  <Award className="h-10 w-10 text-white/80" />
                  <span className="text-5xl font-bold">39+</span>
                </div>
                <p className="text-xl font-bold">Years of excellence</p>
                <p className="text-white/85">Training champions since 1987</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Why Join Oriental Karate — 8 items; 1 col mobile, 2 sm+, 4 lg+ */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Why Families choose{" "}
              <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
                Oriental Karate
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Tradition, safety, and results — built for families and
              individuals across Abu Dhabi.
            </p>
          </motion.div>
          <div className="space-y-4 sm:space-y-6">
            {/* First row - 3 items */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {whyJoinItems.slice(0, 3).map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:border-[#eb0339]/20 transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.img}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Second row - 2 items at 50% width, centered */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2 lg:w-2/2 lg:mx-auto">
              {whyJoinItems.slice(3).map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i + 3) * 0.05 }}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:border-[#eb0339]/20 transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.img}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#eb0339]/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Start in three <span className="text-[#eb0339]">simple</span>{" "}
                steps
              </h2>
              <ol className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Book Free Trial",
                    text: "Schedule a class at your nearest branch.",
                  },
                  {
                    step: "02",
                    title: "Visit & Experience",
                    text: "See how classes run and meet our instructors.",
                  },
                  {
                    step: "03",
                    title: "Start Training",
                    text: "Join when you feel ready.",
                  },
                ].map((s) => (
                  <li key={s.step} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eb0339]/20 text-[#eb0339] font-bold text-sm">
                      {s.step}
                    </span>
                    <div>
                      <h3 className="font-bold text-white mb-1">{s.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {s.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <Link
                to="/booking"
                className="inline-flex mt-8 items-center gap-2 rounded-full bg-gradient-to-r from-[#eb0339] to-[#ff1a4f] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-95"
              >
                Book free trial
                <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] lg:aspect-auto lg:min-h-[420px]"
            >
              <img
                src="https://images.unsplash.com/photo-1529630218527-7df22fc2d4ee?auto=format&fit=crop&w=1200&q=80"
                alt="Karate training at Oriental Karate"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold text-lg">
                  Same syllabus — every branch
                </p>
                <p className="text-gray-300 text-sm mt-1">
                  Consistent coaching from 35+ instructors city-wide.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <HomeLocationsGrid variant="home" />

      {/* Google Reviews */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold">
              What Our{" "}
              <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
                Students
              </span>{" "}
              Say
            </h2>
          </motion.div>
          <ReviewSlider />
        </div>
      </section>

      {/* Gallery Preview - Modern Grid */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#f09433]/10 to-[#bc1888]/10 border border-white/10 text-white text-sm font-semibold mb-4">
                <Instagram size={14} className="text-pink-400" />
                @ORIENTALKARATE
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] bg-clip-text text-transparent">
                  Instagram
                </span>{" "}
                Gallery
              </h2>
            </div>
            <a
              href="https://instagram.com/orientalkarate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] px-6 py-3 font-semibold text-white transition-all hover:opacity-90"
            >
              <Instagram size={18} />
              Follow Us
              <ExternalLink size={14} />
            </a>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <a
              href="https://www.instagram.com/orientalkarate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-95"
            >
              <Instagram size={18} />
              View full gallery on Instagram
              <ExternalLink size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Latest from the blog — light */}
      <section className="border-t border-gray-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
          >
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#eb0339]/20 bg-[#eb0339]/5 px-4 py-2 text-sm font-semibold text-[#eb0339]">
                <BookOpen size={14} />
                Blog
              </span>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                Latest{" "}
                <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
                  articles
                </span>
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:border-[#eb0339] hover:text-[#eb0339]"
            >
              View all posts
              <ArrowRight size={18} />
            </Link>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 flex items-center justify-between text-xs text-gray-500">
                      <span>{post.date}</span>
                      <span className="font-medium text-[#eb0339]">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="mb-2 line-clamp-2 text-lg font-bold text-gray-900">
                      {post.title}
                    </h3>
                    <p className="line-clamp-2 text-sm text-gray-600">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-block text-sm font-semibold text-[#eb0339]">
                      Read article →
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Video Popup - Learn More */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                aria-label="Close video"
              >
                <X size={22} />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1`}
                title="Oriental Karate - Learn More"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
