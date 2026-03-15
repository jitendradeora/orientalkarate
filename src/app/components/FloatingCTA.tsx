import { Link } from "react-router";
import { Calendar } from "lucide-react";
import { motion } from "motion/react";

export function FloatingCTA() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Link
        to="/booking"
        className="flex items-center space-x-2 bg-[#eb0339] text-white px-6 py-4 rounded-full shadow-2xl hover:bg-[#c70230] transition-all hover:scale-110 font-bold"
      >
        <Calendar size={24} />
        <span>Book Free Trial</span>
      </Link>
    </motion.div>
  );
}
