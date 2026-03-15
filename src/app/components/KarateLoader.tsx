import { motion } from "motion/react";

export function KarateLoader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-20 h-20 mx-auto mb-6"
        >
          <div className="w-full h-full border-4 border-[#eb0339] border-t-[#FFD700] rounded-full" />
        </motion.div>
        <motion.h2
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-2xl font-bold"
        >
          <span className="text-[#eb0339]">Loading</span>
          <span className="text-[#FFD700]">...</span>
        </motion.h2>
      </motion.div>
    </div>
  );
}
