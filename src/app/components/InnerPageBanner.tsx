import { motion } from "motion/react";

const BANNER_IMAGE = "https://images.unsplash.com/photo-1529630218527-7df22fc2d4ee?auto=format&fit=crop&w=1920&q=80";

interface InnerPageBannerProps {
  badge: React.ReactNode;
  title: React.ReactNode;
  subtitle?: string;
}

export function InnerPageBanner({ badge, title, subtitle }: InnerPageBannerProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={BANNER_IMAGE}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/92 via-gray-900/90 to-gray-900/95" />
      </div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#eb0339]/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
        >
          {badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
