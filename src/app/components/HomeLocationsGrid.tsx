import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, ChevronDown, ExternalLink, Search } from "lucide-react";
import { branches } from "../data/branches";
import { findNearestBranchId } from "../utils/geo";

type Props = {
  variant?: "home" | "contact";
};

export function HomeLocationsGrid({ variant = "home" }: Props) {
  const [nearestId, setNearestId] = useState<string | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

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

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return ordered;
    return ordered.filter(
      (b) =>
        b.name.toLowerCase().includes(q) ||
        b.address.toLowerCase().includes(q) ||
        b.phone.replace(/\s/g, "").includes(q.replace(/\s/g, "")),
    );
  }, [ordered, searchQuery]);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={`py-20 ${variant === "home" ? "bg-white" : "bg-gray-50"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
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
            <p className="mx-auto mt-3 max-w-xl text-gray-600 md:mx-0">
              {nearestId
                ? "We highlighted the branch closest to you. Tap a location for phone and directions."
                : "Enable location to see your nearest branch. Tap any row for details."}
            </p>
          </motion.div>

          <div className="relative w-full shrink-0 md:max-w-sm">
            <label htmlFor="locations-search" className="sr-only">
              Search locations
            </label>
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              aria-hidden
            />
            <input
              id="locations-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search branches…"
              className="w-full rounded-full border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#eb0339] focus:outline-none focus:ring-2 focus:ring-[#eb0339]/20"
            />
          </div>
        </div>

        {/* items-start + self-start: expanding one card must not stretch its row partner */}
        <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
          {filtered.map((branch, index) => {
            const isNearest = branch.id === nearestId;
            const open = openId === branch.id;

            return (
              <article
                key={branch.id}
                className={`self-start w-full rounded-2xl border bg-white shadow-sm transition-shadow ${
                  isNearest
                    ? "border-[#eb0339] shadow-md shadow-[#eb0339]/10 ring-2 ring-[#eb0339]/15"
                    : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                }`}
              >
                <motion.div
                  layout={false}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
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
                </motion.div>
              </article>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="mt-8 text-center text-sm text-gray-500">No branches match your search.</p>
        )}
      </div>
    </section>
  );
}
