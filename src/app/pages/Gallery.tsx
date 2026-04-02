import { motion, AnimatePresence } from "motion/react";
import { Instagram, ExternalLink, X, Camera, ArrowRight } from "lucide-react";
import { useState } from "react";
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
    <div className="min-h-screen bg-white pt-24 text-gray-900">
      <InnerPageBanner
        badge={
          <>
            <Camera size={14} className="text-pink-400" />
            <span className="text-sm text-gray-300">@orientalkarate</span>
          </>
        }
        title={
          <>
            <span className="text-[#ffffff]">Our</span>{" "}
            <span className="bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] bg-clip-text text-transparent">
              Gallery
            </span>
          </>
        }
        subtitle="Moments captured from our dojo - training, achievements, and community"
      />

      <section className="border-t border-gray-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
          >
            <div>
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-semibold text-pink-700">
                <Instagram size={14} />
                @orientalkarate
              </span>
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
                <span className="bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] bg-clip-text text-transparent">
                  Instagram
                </span>{" "}
                highlights
              </h2>
              <p className="mt-2 max-w-xl text-gray-600">
                Latest visuals from training and events — follow us for daily
                updates.
              </p>
            </div>
            <a
              href="https://instagram.com/orientalkarate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] px-6 py-3 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-95"
            >
              <Instagram size={18} />
              Follow us on Instagram
              <ExternalLink size={14} />
            </a>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(img)}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl border border-gray-200 shadow-sm"
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/25 backdrop-blur-sm">
                    <Instagram className="text-white" size={22} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a
              href="https://www.instagram.com/orientalkarate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:border-[#eb0339] hover:text-[#eb0339]"
            >
              <Instagram size={18} />
              View full gallery on Instagram
              <ExternalLink size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Gallery"
                className="max-h-[85vh] w-full rounded-2xl object-contain"
              />
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute -right-2 -top-2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
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
