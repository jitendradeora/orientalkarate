import { motion } from "motion/react";
import { Link } from "react-router";
import { Swords, History, Trophy, Target } from "lucide-react";
import { InnerPageBanner } from "../components/InnerPageBanner";

export function Kobudo() {
  const weapons = [
    {
      name: "Bo Staff",
      description: "A 6-foot wooden staff, one of the most fundamental weapons",
    },
    {
      name: "Nunchaku",
      description:
        "Two sticks connected by a chain or rope, requiring precision and speed",
    },
    {
      name: "Sai",
      description:
        "A trident-shaped weapon used for defensive and offensive techniques",
    },
    {
      name: "Tonfa",
      description:
        "A side-handled baton with versatile blocking and striking capabilities",
    },
    {
      name: "Kama",
      description: "A traditional sickle weapon requiring advanced control",
    },
    {
      name: "Eku",
      description: "An oar weapon that emphasizes fluid movements",
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: "Enhanced Coordination",
      description:
        "Weapon training improves hand-eye coordination and spatial awareness",
    },
    {
      icon: Trophy,
      title: "Advanced Skills",
      description: "Complements empty-hand karate with weapons mastery",
    },
    {
      icon: Swords,
      title: "Traditional Art",
      description: "Preserves ancient Okinawan martial traditions",
    },
    {
      icon: History,
      title: "Cultural Understanding",
      description:
        "Deepens appreciation for martial arts history and philosophy",
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-24 text-white">
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

      {/* Understanding — light, shorter image */}
      <section className="border-b border-gray-200 bg-white py-20 text-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 md:grid-cols-2 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Understanding <span className="text-[#eb0339]">Kobudo</span>
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-gray-600">
                Kobudo (古武道) literally means &quot;old martial way&quot; in
                Japanese. It refers to the traditional weapon systems of
                Okinawa, developed centuries ago by the Okinawan people to
                defend themselves.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-gray-600">
                These weapons were originally farming and fishing tools adapted
                for self-defense when traditional arms were forbidden — leading
                to highly effective techniques using everyday implements.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                Today, Kobudo complements karate with discipline, precision, and
                respect for ancient traditions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1550759807-6419ff64a5e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjBpbnN0cnVjdG9yJTIwdGVhY2hpbmd8ZW58MXx8fHwxNzczMjk1MDkwfDA&ixlib=rb-4.1.0&q=50&w=1080"
                alt="Kobudo training"
                className="max-h-64 w-full rounded-2xl object-cover shadow-lg sm:max-h-72 md:ml-auto md:max-w-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* History — light */}
      <section className="bg-gray-50 py-20 text-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <History className="mx-auto mb-6 h-14 w-14 text-[#eb0339]" />
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              History & <span className="text-[#eb0339]">Origins</span>
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-gray-600">
              Kobudo traces back to the 17th century in the Ryukyu Kingdom. When
              the Satsuma clan invaded in 1609, weapons were banned for
              Okinawans — spurring ingenious systems using tools from daily
              life.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Techniques were passed down in secret, evolving into the
              systematic art practiced worldwide today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Weapons — light */}
      <section className="border-y border-gray-200 bg-white py-20 text-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-3xl font-bold md:text-4xl"
          >
            Traditional <span className="text-[#eb0339]">Weapons</span>
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {weapons.map((weapon, index) => (
              <motion.div
                key={weapon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-8 transition-shadow hover:border-[#eb0339]/30 hover:shadow-md"
              >
                <Swords className="mb-4 h-10 w-10 text-[#eb0339]" />
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {weapon.name}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {weapon.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits — light */}
      <section className="bg-gray-50 py-20 text-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-3xl font-bold md:text-4xl"
          >
            Benefits of <span className="text-[#eb0339]">Learning Kobudo</span>
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm"
              >
                <benefit.icon className="mx-auto mb-4 h-12 w-12 text-[#eb0339]" />
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Complements Karate — light */}
      <section className="border-t border-gray-200 bg-white py-20 text-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              How Kobudo <span className="text-[#eb0339]">Complements</span>{" "}
              Karate
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-gray-600">
              Kobudo and karate reinforce each other: empty-hand principles
              apply to weapons, and weapon work deepens timing, distance, and
              body mechanics for karate.
            </p>
            <div className="grid gap-6 text-left md:grid-cols-3 md:text-center">
              {[
                {
                  t: "Same principles",
                  d: "Shared stances, footwork, and body mechanics across both arts.",
                },
                {
                  t: "Sharper skills",
                  d: "Weapon training refines reflexes and overall martial ability.",
                },
                {
                  t: "Complete system",
                  d: "Together they form a fuller traditional education.",
                },
              ].map((item) => (
                <div
                  key={item.t}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
                >
                  <h3 className="mb-2 font-bold text-[#eb0339]">{item.t}</h3>
                  <p className="text-sm text-gray-600">{item.d}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
