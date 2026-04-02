import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, ChevronDown, ExternalLink } from "lucide-react";
import { branches } from "../data/branches";
import { findNearestBranchId } from "../utils/geo";

type Props = {
  variant?: "home" | "contact";
};

export function HomeLocationsGrid({ variant = "home" }: Props) {
  const [nearestId, setNearestId] = useState<string | null>(null);
  /** Single open accordion id — only one branch expanded at a time */
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const id = findNearestBranchId(branches, pos.coords.latitude, pos.coords.longitude);
        setNearestId(id);
      },
      () => {},
      { enableHighAccuracy: false, maximumAge: 60_000, timeout: 10_000 },
    );
  }, []);

  const ordered = useMemo(() => {
    if (!nearestId) return branches;
    const n = branches.find((b) => b.id === nearestId);
    const rest = branches.filter((b) => b.id !== nearestId);
    return n ? [n, ...rest] : branches;
  }, [nearestId]);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={`py-20 ${variant === "home" ? "bg-white" : "bg-gray-50"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#eb0339]/10 px-4 py-2 text-sm font-semibold text-[#eb0339]">
            <MapPin size={14} />
            9 LOCATIONS
          </span>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Our{" "}
            <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
              Locations
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            {nearestId
              ? "We highlighted the branch closest to you. Tap a location for phone and directions."
              : "Enable location to see your nearest branch. Tap any row for details."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start">
          {ordered.map((branch, index) => {
            const isNearest = branch.id === nearestId;
            const open = openId === branch.id;

            return (
              <motion.article
                key={branch.id}
                layout={false}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className={`rounded-2xl border bg-white shadow-sm transition-shadow ${
                  isNearest
                    ? "border-[#eb0339] shadow-md shadow-[#eb0339]/10 ring-2 ring-[#eb0339]/15"
                    : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                }`}
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleToggle(branch.id);
                  }}
                  className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left transition-colors hover:bg-gray-50/80 sm:px-6 sm:py-5"
                  aria-expanded={open}
                  aria-controls={`location-panel-${branch.id}`}
                  id={`location-trigger-${branch.id}`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-bold text-gray-900 sm:text-lg">{branch.name}</h3>
                      {isNearest && (
                        <span className="rounded-full bg-[#eb0339] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white sm:text-xs">
                          Nearest
                        </span>
                      )}
                      {branch.id === "khalidiya-ho" && (
                        <span className="rounded-full bg-gray-900 px-2.5 py-0.5 text-[10px] font-semibold text-white sm:text-xs">
                          Head office
                        </span>
                      )}
                    </div>
                    {!open && (
                      <p className="mt-1 line-clamp-1 text-sm text-gray-500">{branch.address}</p>
                    )}
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>

                <AnimatePresence initial={false} mode="sync">
                  {open && (
                    <motion.div
                      key={`panel-${branch.id}`}
                      id={`location-panel-${branch.id}`}
                      role="region"
                      aria-labelledby={`location-trigger-${branch.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden border-t border-gray-100"
                    >
                      <div className="space-y-4 px-5 pb-5 pt-2 sm:px-6 sm:pb-6">
                        <p className="text-sm text-gray-600">{branch.address}</p>

                        <div className="flex flex-wrap items-center gap-3">
                          <a
                            href={`tel:${branch.phone.replace(/\s/g, "")}`}
                            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900 transition-colors hover:border-[#eb0339] hover:text-[#eb0339]"
                          >
                            <Phone className="h-4 w-4 text-[#eb0339]" />
                            {branch.phone}
                          </a>
                          {branch.phone2 && (
                            <a
                              href={`tel:${branch.phone2.replace(/\s/g, "")}`}
                              className="text-sm font-medium text-[#eb0339] hover:underline"
                            >
                              {branch.phone2}
                            </a>
                          )}
                        </div>

                        <a
                          href={branch.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#eb0339] bg-white px-5 py-3 text-sm font-semibold text-[#eb0339] transition-colors hover:bg-[#eb0339] hover:text-white sm:w-auto"
                        >
                          <ExternalLink className="h-4 w-4" />
                          View on Map
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
