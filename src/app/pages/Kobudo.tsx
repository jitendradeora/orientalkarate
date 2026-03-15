import { motion } from "motion/react";
import { Swords, History, Trophy, Target } from "lucide-react";
import { InnerPageBanner } from "../components/InnerPageBanner";

export function Kobudo() {
  const weapons = [
    { name: "Bo Staff", description: "A 6-foot wooden staff, one of the most fundamental weapons" },
    { name: "Nunchaku", description: "Two sticks connected by a chain or rope, requiring precision and speed" },
    { name: "Sai", description: "A trident-shaped weapon used for defensive and offensive techniques" },
    { name: "Tonfa", description: "A side-handled baton with versatile blocking and striking capabilities" },
    { name: "Kama", description: "A traditional sickle weapon requiring advanced control" },
    { name: "Eku", description: "An oar weapon that emphasizes fluid movements" },
  ];

  const benefits = [
    { icon: Target, title: "Enhanced Coordination", description: "Weapon training improves hand-eye coordination and spatial awareness" },
    { icon: Trophy, title: "Advanced Skills", description: "Complements empty-hand karate with weapons mastery" },
    { icon: Swords, title: "Traditional Art", description: "Preserves ancient Okinawan martial traditions" },
    { icon: History, title: "Cultural Understanding", description: "Deepens appreciation for martial arts history and philosophy" },
  ];

  return (
    <div className="min-h-screen pt-[130px] bg-black text-white">
      <InnerPageBanner
        badge={
          <>
            <Swords size={14} className="text-[#FFD700]" />
            <span className="text-sm text-gray-300">Okinawan Weapons</span>
          </>
        }
        title={
          <>
            What is <span className="text-[#eb0339]">Kobudo</span>?
          </>
        }
        subtitle="The ancient art of Okinawan weapon fighting, a perfect complement to traditional karate"
      />

      {/* What is Kobudo */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Understanding <span className="text-[#FFD700]">Kobudo</span>
              </h2>
              <p className="text-gray-300 mb-4 text-lg">
                Kobudo (古武道) literally means "old martial way" in Japanese. It refers to the traditional weapon systems 
                of Okinawa, developed centuries ago by the Okinawan people to defend themselves.
              </p>
              <p className="text-gray-300 mb-4 text-lg">
                These weapons were originally farming and fishing tools adapted for self-defense during a time when 
                the possession of traditional weapons was forbidden. This necessity led to the development of highly 
                effective martial techniques using everyday implements.
              </p>
              <p className="text-gray-300 text-lg">
                Today, Kobudo is practiced as a traditional martial art that complements karate training, teaching 
                discipline, precision, and respect for ancient traditions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1550759807-6419ff64a5e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjBpbnN0cnVjdG9yJTIwdGVhY2hpbmd8ZW58MXx8fHwxNzczMjk1MDkwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Kobudo Training"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <History className="w-16 h-16 text-[#FFD700] mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              History & <span className="text-[#FFD700]">Origins</span>
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              The origins of Kobudo can be traced back to the 17th century in the Ryukyu Kingdom (modern-day Okinawa). 
              When the Satsuma clan of Japan invaded Okinawa in 1609, they banned the possession of weapons by the 
              Okinawan people.
            </p>
            <p className="text-lg text-gray-300">
              In response, the Okinawans developed ingenious fighting systems using agricultural and fishing tools. 
              These techniques were passed down secretly through generations, eventually evolving into the systematic 
              martial art we know today as Kobudo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Weapons */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Traditional <span className="text-[#FFD700]">Weapons</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weapons.map((weapon, index) => (
              <motion.div
                key={weapon.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 border-gray-800 hover:border-[#eb0339] p-8 rounded-lg border transition-all"
              >
                <Swords className="w-12 h-12 text-[#FFD700] mb-4" />
                <h3 className="text-xl font-bold mb-3 text-[#FFD700]">{weapon.name}</h3>
                <p className="text-gray-400">{weapon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Benefits of <span className="text-[#FFD700]">Learning Kobudo</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 p-8 rounded-lg text-center"
              >
                <benefit.icon className="w-16 h-16 text-[#FFD700] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Complements Karate */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8">
              How Kobudo <span className="text-[#FFD700]">Complements</span> Karate
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Kobudo and Karate are deeply interconnected martial arts that enhance each other. The principles learned 
              in empty-hand karate translate directly to weapon work, while Kobudo training strengthens the understanding 
              of body mechanics, distance, and timing in karate.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-[#FFD700]">Same Principles</h3>
                <p className="text-gray-400">Both arts share the same stances, footwork, and body mechanics</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-[#FFD700]">Enhanced Skills</h3>
                <p className="text-gray-400">Weapon training sharpens reflexes and improves overall martial ability</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-[#FFD700]">Complete System</h3>
                <p className="text-gray-400">Together they form a comprehensive martial arts education</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#eb0339] to-[#c70230]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Learn Kobudo?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our Kobudo classes and discover the ancient art of Okinawan weapons. 
              Book your free trial class today!
            </p>
            <a
              href="/booking"
              className="text-black bg-[#FFD700] px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all hover:scale-105 inline-block"
            >
              Book Free Trial
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
