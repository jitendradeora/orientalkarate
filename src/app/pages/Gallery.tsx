import { motion, AnimatePresence } from "motion/react";
import { Instagram, ExternalLink, X, Camera, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { InnerPageBanner } from "../components/InnerPageBanner";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    "https://images.unsplash.com/photo-1764616211830-993b5e360d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjB0cmFpbmluZyUyMGRvam98ZW58MXx8fHwxNzczMjk0OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1529630218527-7df22fc2d4ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjBhY3Rpb24lMjBraWNrfGVufDF8fHx8MTc3MzI5NDk4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1771909720903-c4567a890a6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGRvam8lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzMyMTU5MTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1738835935023-ebff4a85bc7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjBzdHVkZW50cyUyMHRyYWluaW5nfGVufDF8fHx8MTc3MzI5NDk4NHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1550759807-6419ff64a5e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjBpbnN0cnVjdG9yJTIwdGVhY2hpbmd8ZW58MXx8fHwxNzczMjk1MDkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1769095216189-0ae27b6cc726?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjBraWRzJTIwY2xhc3N8ZW58MXx8fHwxNzczMjk1MDkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1602827115146-853fa12ba155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGJsYWNrJTIwYmVsdHxlbnwxfHx8fDE3NzMyOTUwOTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1764616211830-993b5e360d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjB0cmFpbmluZyUyMGRvam98ZW58MXx8fHwxNzczMjk0OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1529630218527-7df22fc2d4ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjBhY3Rpb24lMjBraWNrfGVufDF8fHx8MTc3MzI5NDk4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1771909720903-c4567a890a6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGRvam8lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzMyMTU5MTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1738835935023-ebff4a85bc7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjBzdHVkZW50cyUyMHRyYWluaW5nfGVufDF8fHx8MTc3MzI5NDk4NHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1550759807-6419ff64a5e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjBpbnN0cnVjdG9yJTIwdGVhY2hpbmd8ZW58MXx8fHwxNzczMjk1MDkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  return (
    <div className="min-h-screen pt-[130px] bg-black text-white">
      <InnerPageBanner
        badge={
          <>
            <Camera size={14} className="text-pink-400" />
            <span className="text-sm text-gray-300">@orientalkarate</span>
          </>
        }
        title={
          <>
            Our{" "}
            <span className="bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] bg-clip-text text-transparent">
              Gallery
            </span>
          </>
        }
        subtitle="Moments captured from our dojo - training, achievements, and community"
      />

      <section className="bg-gray-900/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <a
            href="https://instagram.com/orientalkarate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-all hover:scale-[1.02]"
          >
            <Instagram size={18} />
            Follow Us on Instagram
            <ExternalLink size={14} />
          </a>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gray-400 text-lg flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-gradient-to-r from-transparent to-gray-600" />
              Latest posts from @orientalkarate
              <span className="w-8 h-px bg-gradient-to-l from-transparent to-gray-600" />
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedImage(img)}
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Instagram className="text-white" size={24} />
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
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-[#eb0339] to-[#ff1a4f] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#eb0339]/30 hover:scale-[1.02]">
              Load More Photos
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Instagram Feed Info */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f09433]/5 via-transparent to-[#bc1888]/5" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD700]/10 text-[#FFD700] text-sm font-semibold mb-6">
              <Sparkles size={14} />
              STAY CONNECTED
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Join Our{" "}
              <span className="bg-gradient-to-r from-[#FFD700] to-[#ffa500] bg-clip-text text-transparent">
                Community
              </span>
            </h2>
            <p className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto">
              Follow us on Instagram for daily training tips, student achievements, event updates, 
              and behind-the-scenes content from our dojos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://instagram.com/orientalkarate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-all"
              >
                <Instagram size={20} />
                @orientalkarate
              </a>
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 bg-[#FFD700] text-black px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#FFD700]/90 transition-all"
              >
                Book Free Trial
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Gallery"
                className="w-full max-h-[85vh] object-contain rounded-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
