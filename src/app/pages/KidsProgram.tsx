import { motion } from "motion/react";
import { Heart, Shield, Star, Users, Trophy, Smile, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router";
import { InnerPageBanner } from "../components/InnerPageBanner";

export function KidsProgram() {
  const benefits = [
    { icon: Shield, title: "Confidence", description: "Build self-esteem through achievement and mastery", color: "#eb0339" },
    { icon: Star, title: "Discipline", description: "Learn self-control and respect for authority", color: "#FFD700" },
    { icon: Heart, title: "Fitness", description: "Develop healthy habits and physical fitness", color: "#eb0339" },
    { icon: Users, title: "Social Skills", description: "Make friends and learn teamwork", color: "#FFD700" },
    { icon: Trophy, title: "Goal Setting", description: "Work towards belt rankings and achievements", color: "#eb0339" },
    { icon: Smile, title: "Fun!", description: "Enjoy exciting and engaging classes", color: "#FFD700" },
  ];

  const safetyMeasures = [
    "Age-appropriate curriculum designed for young learners",
    "Certified instructors trained in child development",
    "Small class sizes for individual attention",
    "Padded training areas and safety equipment",
    "Positive reinforcement teaching methods",
    "Regular progress reports for parents",
    "Parent observation areas in all dojos",
    "Emergency protocols and first aid certified staff",
  ];

  const ageGroups = [
    {
      age: "5-7 Years",
      name: "Little Warriors",
      description: "Introduction to basic movements, coordination, and discipline through fun games and activities",
      focus: ["Basic techniques", "Balance & coordination", "Following instructions", "Making friends"],
      color: "#eb0339"
    },
    {
      age: "8-11 Years",
      name: "Junior Karate",
      description: "Structured training with focus on technique development and character building",
      focus: ["Traditional kata", "Partner drills", "Belt progression", "Leadership skills"],
      color: "#FFD700"
    },
    {
      age: "12-14 Years",
      name: "Teen Program",
      description: "Advanced training preparing students for adult classes and competitions",
      focus: ["Advanced techniques", "Competition training", "Self-defense", "Mentorship"],
      color: "#eb0339"
    },
  ];

  return (
    <div className="min-h-screen pt-[130px] bg-black text-white">
      <InnerPageBanner
        badge={
          <>
            <Smile size={14} className="text-[#FFD700]" />
            <span className="text-sm text-gray-300">Ages 5-14 • Fun & Engaging Classes</span>
          </>
        }
        title={
          <>
            <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
              Karate
            </span>{" "}
            for Kids
          </>
        }
        subtitle="Building confident, disciplined, and healthy young martial artists"
      />

      {/* Overview */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#eb0339]/10 text-[#eb0339] text-sm font-semibold mb-6">
                <Heart size={14} />
                WHY KIDS LOVE US
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Why{" "}
                <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
                  Kids Love
                </span>{" "}
                Our Program
              </h2>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                Our kids' karate program is designed to be fun, engaging, and educational. We understand that 
                children learn best when they're enjoying themselves, so we've created a curriculum that balances 
                martial arts training with games, activities, and positive reinforcement.
              </p>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Every class is structured to build physical skills, mental discipline, and character development 
                in an age-appropriate way. Your child will learn valuable life skills while having a blast!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#eb0339] to-[#ff1a4f] text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-[#eb0339]/30 hover:scale-[1.02]"
                >
                  Book Free Trial
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/join-us"
                  className="inline-flex items-center justify-center gap-2 bg-[#FFD700] text-black px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:bg-[#FFD700]/90"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="../../src/assets/kids-program.jpg"
                  alt="Kids Karate Class"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -z-10 top-4 right-4 w-full h-full rounded-3xl border-2 border-[#FFD700]/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD700]/10 text-[#FFD700] text-sm font-semibold mb-6">
              <Star size={14} />
              BENEFITS
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Benefits for{" "}
              <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
                Your Child
              </span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-white/5 hover:border-white/10 transition-all duration-300 text-center"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${benefit.color}20` }}
                >
                  <benefit.icon size={28} style={{ color: benefit.color }} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#eb0339]/10 text-[#eb0339] text-sm font-semibold mb-6">
              <Users size={14} />
              AGE GROUPS
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Programs by{" "}
              <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
                Age Group
              </span>
            </h2>
          </motion.div>
          
          <div className="space-y-6">
            {ageGroups.map((group, index) => (
              <motion.div
                key={group.age}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <span 
                      className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
                      style={{ backgroundColor: `${group.color}20`, color: group.color }}
                    >
                      {group.age}
                    </span>
                    <h3 className="text-2xl font-bold mb-3 text-white">{group.name}</h3>
                    <p className="text-gray-400 leading-relaxed">{group.description}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-bold mb-4 text-gray-300">Program Focus:</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {group.focus.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                          <CheckCircle size={16} style={{ color: group.color }} />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Measures */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD700]/10 text-[#FFD700] text-sm font-semibold mb-6">
              <Shield size={14} />
              SAFETY FIRST
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Your Child's{" "}
              <span className="bg-gradient-to-r from-[#FFD700] to-[#ffa500] bg-clip-text text-transparent">
                Safety
              </span>{" "}
              Matters
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {safetyMeasures.map((measure, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-white/5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FFD700]/10 flex items-center justify-center flex-shrink-0">
                  <Shield size={18} className="text-[#FFD700]" />
                </div>
                <span className="text-gray-300 pt-2">{measure}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#eb0339] via-[#c70230] to-[#7b021d]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 text-white text-sm font-semibold mb-6">
              <Sparkles size={14} />
              START THEIR JOURNEY
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Give Your Child the Gift of Martial Arts
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Join hundreds of happy families. Book a free trial class today and watch your child thrive!
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 bg-white text-[#eb0339] px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-[#FFD700] hover:text-black hover:scale-[1.02]"
            >
              Book Free Kids Trial
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
