import { useState } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { Award, Users, Trophy, MapPin, Clock, Phone, Mail, Instagram, ExternalLink, ArrowRight, Star, Zap, Shield, ChevronRight, Play, MessageCircle, X } from "lucide-react";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { ReviewSlider } from "../components/ReviewSlider";
import { branches } from "../data/branches";
import { useRef } from "react";
 

const HERO_VIDEO_ID = "XYwE8Gn61qM"; // Replace with your YouTube video ID

export function Home() {
  const heroRef = useRef(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const galleryImages = [
    "https://images.unsplash.com/photo-1764616211830-993b5e360d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjB0cmFpbmluZyUyMGRvam98ZW58MXx8fHwxNzczMjk0OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1529630218527-7df22fc2d4ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjBhY3Rpb24lMjBraWNrfGVufDF8fHx8MTc3MzI5NDk4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1771909720903-c4567a890a6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGRvam8lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzMyMTU5MTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1738835935023-ebff4a85bc7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjBzdHVkZW50cyUyMHRyYWluaW5nfGVufDF8fHx8MTc3MzI5NDk4NHww&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  const features = [
    { icon: Shield, title: "Traditional Training", desc: "Authentic Okinawan techniques", color: "#eb0339" },
    { icon: Users, title: "All Ages Welcome", desc: "Programs for 5 to 60+ years", color: "#FFD700" },
    { icon: Award, title: "Expert Instructors", desc: "Certified black belt masters", color: "#10b981" },
    { icon: Zap, title: "Modern Facilities", desc: "9 locations across Abu Dhabi", color: "#f59e0b" },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section - Light Background Design */}
      
      <section ref={heroRef} className="relative min-h-screen flex items-stretch overflow-hidden pt-[130px] bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Light background decorative elements */}
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-white" />
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </motion.div>
        
        {/* Animated accent elements - light theme */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#eb0339]/8 rounded-full blur-[150px] animate-pulse z-0" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-[100px] animate-pulse z-0" style={{ animationDelay: "700ms" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#eb0339]/5 via-transparent to-[#FFD700]/5 rounded-full blur-3xl z-0" />
        
        {/* Content */}
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-20 w-full h-full"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-stretch h-full min-h-[calc(100vh-130px)]">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-2 lg:order-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pr-12 py-20 flex flex-col justify-center h-full"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r backdrop-blur-sm mb-6 border border-gray-200 bg-gray-100"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#eb0339] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#eb0339]"></span>
                </span>
                <span className="text-sm font-medium text-gray-700">Enrolling Now for 2026</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]">
                <span className="text-gray-900">Master the</span>
                <br />
                <span className="text-gray-900">Art of </span>
                <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
                  Discipline
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                Transform your body and mind through traditional Oriental Karate. 
                Join Abu Dhabi's premier martial arts academy with 39+ years of excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  to="/booking"
                  className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#eb0339] to-[#ff1a4f] text-white px-6 py-3.5 rounded-xl font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#eb0339]/30 hover:scale-[1.02]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book Free Trial
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => setVideoOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-700 px-6 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 hover:border-[#eb0339] hover:text-[#eb0339] hover:bg-gray-50 hover:scale-[1.02] shadow-sm"
                >
                  <Play size={18} className="text-[#eb0339] group-hover:scale-110 transition-transform" />
                  Learn More
                </button>
              </div>

             
            </motion.div>

            {/* Right side - Hero Image Full View */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative order-1 lg:order-2 h-full w-full"
            >
              <div className="relative h-full w-full">
                {/* Decorative gradient circles - light theme */}
                <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-[#eb0339]/10 to-[#ff4d6d]/5 rounded-full blur-3xl z-0" />
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gradient-to-tr from-[#FFD700]/10 to-transparent rounded-full blur-3xl z-0" />
                
                {/* Full view image container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative z-10 h-full w-full"
                >
                  {/* Full view image */}
                  <img
                    src="https://www.orientalkarate.com/wp-content/uploads/2020/02/DSC6210a-scaled.jpg"
                    alt="Karate Training"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Floating badge on image - light theme */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute bottom-6 left-6 right-6 lg:right-8 lg:left-auto lg:max-w-sm"
                  >
                   
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Dojo Introduction - Bento Grid Style */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#eb0339]/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Main content - Large card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-white/5"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#eb0339]/10 text-[#eb0339] text-xs font-semibold mb-6">
                <Star size={12} />
                SINCE 1987
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
                  Oriental Karate
                </span>
              </h2>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                Oriental Karate has been the premier destination for martial arts excellence in Abu Dhabi. 
                Our dojo is built on the foundation of traditional values combined with modern training techniques.
              </p>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                We believe in developing not just skilled martial artists, but well-rounded individuals who embody 
                discipline, respect, and perseverance in all aspects of life.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Traditional Okinawan Karate", "Certified Black Belt Instructors", "All Ages & Levels"].map((item) => (
                  <div key={item} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#eb0339]" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Side cards */}
            <div className="lg:col-span-2 grid gap-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-3xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1771909720903-c4567a890a6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGRvam8lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzMyMTU5MTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Dojo Interior"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-lg">Modern Training Facilities</p>
                  <p className="text-gray-300 text-sm">9 locations across Abu Dhabi</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-3xl bg-gradient-to-br from-[#eb0339] to-[#c70230] text-white"
              >
                <div className="flex items-center justify-between mb-4">
                  <Award className="w-10 h-10 text-white/80" />
                  <span className="text-5xl font-bold">39+</span>
                </div>
                <p className="text-xl font-bold">Years of Excellence</p>
                <p className="text-white/80">Training champions since 1987</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Offers - Modern Cards */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#eb0339] via-[#c70230] to-[#7b021d]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 text-[#FFD700] text-sm font-semibold mb-6">
              <Zap size={14} />
              LIMITED TIME ENROLMENT OFFERS
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
              Train More, <span className="text-[#FFD700]">Save More</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Choose the plan that fits your journey – perfect for new students, families and long-term members.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: "3 Months", 
                discount: "10%", 
                subtitle: "SHORT COMMITMENT",
                desc: "Great for new students who want to begin their karate journey with focus and consistency.",
                features: ["Access to regular classes", "Grading eligibility included"],
                popular: false
              },
              { 
                title: "6 Months", 
                discount: "15%", 
                subtitle: "BEST VALUE",
                bonus: "+ FREE uniform",
                desc: "Ideal for students committed to real progress in fitness, technique and belt level.",
                features: ["Full access to your program", "Free official dojo uniform", "Perfect for families"],
                popular: true
              },
              { 
                title: "12 Months", 
                discount: "25%", 
                subtitle: "FOR DEDICATED STUDENTS",
                bonus: "+ FREE uniform",
                desc: "Perfect for long-term students and families who want to fully commit to martial arts.",
                features: ["Maximum yearly savings", "Free official dojo uniform", "Full-year commitment benefits"],
                popular: false
              }
            ].map((plan, i) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-3xl p-8 flex flex-col ${
                  plan.popular 
                    ? "bg-black/30 border-2 border-[#FFD700] shadow-2xl shadow-black/30" 
                    : "bg-black/20 border border-white/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FFD700] text-black text-xs font-bold">
                    MOST POPULAR
                  </div>
                )}
                
                <span className="text-[#FFD700] text-sm font-semibold mb-2">{plan.subtitle}</span>
                <h3 className="text-2xl font-bold text-white mb-1">Pay {plan.title}</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-bold text-[#FFD700]">{plan.discount}</span>
                  <span className="text-2xl text-[#FFD700]">OFF</span>
                </div>
                {plan.bonus && (
                  <span className="text-white font-semibold mb-4">{plan.bonus}</span>
                )}
                
                <p className="text-white/70 text-sm mb-6 flex-grow">{plan.desc}</p>
                
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-white/80 text-sm">
                      <ChevronRight size={14} className="text-[#FFD700]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/join-us"
                  className={`w-full py-3.5 rounded-xl font-semibold text-center transition-all duration-300 hover:scale-[1.02] ${
                    plan.popular
                      ? "bg-[#FFD700] text-black hover:bg-[#f7e07a]"
                      : "bg-white text-[#eb0339] hover:bg-gray-100"
                  }`}
                >
                  Choose {plan.title} Plan
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results in Numbers - Modern Stats */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#eb0339]/5 blur-[120px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold">
              Our <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">Results</span> in Numbers
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Award, value: 39, suffix: "+", label: "Years of Experience", color: "#FFD700" },
              { icon: Users, value: 10000, suffix: "+", label: "Students Trained", color: "#eb0339" },
              { icon: Trophy, value: 9, suffix: "", label: "Branches in Abu Dhabi", color: "#FFD700" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-white/5 hover:border-white/10 transition-all duration-300 text-center"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div 
                    className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
                  </div>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  <p className="text-lg text-gray-400 mt-2">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches - Modern Cards */}
      <section className="py-24 bg-gray-900/50">
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
              Our <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">Locations</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Find a branch near you across Abu Dhabi
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
                className="group p-6 rounded-2xl bg-gray-900/50 border border-white/5 hover:border-[#eb0339]/30 hover:bg-gray-900 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#eb0339] transition-colors">{branch.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#eb0339]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin size={14} className="text-[#eb0339]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm">{branch.address}</p>
                      <a
                        href={branch.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#eb0339] hover:text-[#ff4d6d] text-sm mt-2 transition-colors font-medium"
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
                    <p className="text-gray-400 text-sm">{branch.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                      <MessageCircle size={14} className="text-[#25D366]" />
                    </div>
                    <a href={`https://wa.me/${(branch.whatsapp ?? '').replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-[#25D366] transition-colors">{branch.whatsapp ?? ''}</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#eb0339] to-[#ff1a4f] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#eb0339]/30 hover:scale-[1.02]"
            >
              View All Locations
              <ArrowRight size={18} />
            </Link>
          </motion.div>
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
                <span className="bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] bg-clip-text text-transparent">Instagram</span> Gallery
              </h2>
            </div>
            <a
              href="https://instagram.com/orientalkarate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all"
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
                <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
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
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-[#eb0339] font-semibold hover:text-[#ff4d6d] transition-colors"
            >
              View Full Gallery
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD700]/10 text-[#FFD700] text-sm font-semibold mb-6">
              <Star size={14} />
              5-STAR REVIEWS
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold">
              What Our <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">Students</span> Say
            </h2>
          </motion.div>
          <ReviewSlider />
        </div>
      </section>

      {/* Contact Preview - Modern Split Layout */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#eb0339]/10 text-[#eb0339] text-sm font-semibold mb-6">
                <Phone size={14} />
                GET IN TOUCH
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Ready to Start Your{" "}
                <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">Journey?</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  { icon: Clock, title: "Working Hours", lines: ["Monday - Friday: 6:00 AM - 9:00 PM", "Saturday - Sunday: 8:00 AM - 6:00 PM"] },
                  { icon: Phone, title: "Phone", lines: ["+971 (2) 6771611"] },
                  { icon: Mail, title: "Email", lines: ["karate@emirates.net.ae"] },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-900/50 border border-white/5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#FFD700]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#FFD700]" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">{item.title}</p>
                      {item.lines.map((line, j) => (
                        <p key={j} className="text-gray-400 text-sm">{line}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-white/5"
            >
              <h3 className="text-2xl font-bold mb-6">Quick Inquiry</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-black/50 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#eb0339]/50 focus:border-[#eb0339]/50 transition-all placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-black/50 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#eb0339]/50 focus:border-[#eb0339]/50 transition-all placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full bg-black/50 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#eb0339]/50 focus:border-[#eb0339]/50 transition-all placeholder:text-gray-500 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#eb0339] to-[#ff1a4f] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#eb0339]/30 hover:scale-[1.01]"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
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
