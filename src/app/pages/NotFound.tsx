import { Link } from "react-router";
import { motion } from "motion/react";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-950 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="text-9xl font-bold mb-8"
        >
          <span className="text-[#eb0339]">4</span>
          <span className="text-[#FFD700]">0</span>
          <span className="text-[#eb0339]">4</span>
        </motion.div>
        
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="flex items-center justify-center space-x-2 bg-[#eb0339] text-white px-8 py-3 rounded-full font-bold hover:bg-[#c70230] transition-all"
          >
            <Home size={20} />
            <span>Go Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center space-x-2 bg-gray-800 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-700 transition-all"
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
