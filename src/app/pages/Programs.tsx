import { motion } from "motion/react";
import { Link } from "react-router";
import { InnerPageBanner } from "../components/InnerPageBanner";
import { ArrowRight, Sparkles } from "lucide-react";

const items = [
  {
    title: "Kids Program",
    subtitle: "Ages 5-14",
    desc: "Fun, structured classes that build confidence, focus, and fitness.",
    href: "/programs/kids",
    image:
      "https://images.unsplash.com/photo-1738835935023-ebff4a85bc7e?auto=format&fit=crop&w=800&q=80",
    accent: "from-[#eb0339]/20 to-transparent",
  },
  {
    title: "Karate for Adults",
    subtitle: "Ages 15-60",
    desc: "Executive-style training with yoga elements and traditional syllabus.",
    href: "/programs/adults",
    image:
      "https://images.unsplash.com/photo-1529630218527-7df22fc2d4ee?auto=format&fit=crop&w=800&q=80",
    accent: "from-[#FFD700]/15 to-transparent",
  },
  {
    title: "Kobudo Class",
    subtitle: "Traditional weapons",
    desc: "BO, nunchaku, sai, tonfa, and more under certified masters.",
    href: "/programs/kobudo",
    image:
      "https://www.orientalkarate.com/wp-content/uploads/2020/02/DSC6218-scaled.jpg",
    accent: "from-emerald-500/15 to-transparent",
  },
  {
    title: "Classes & Custom Program",
    subtitle: "Schools & organisations",
    desc: "School programs, halls, and tailored group training — we adapt to you.",
    href: "/programs/classes-custom",
    image:
      "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80",
    accent: "from-[#eb0339]/15 to-transparent",
  },
];

export function Programs() {
  return (
    <div className="min-h-screen pt-24 bg-black text-white">
      <InnerPageBanner
        badge={
          <>
            <Sparkles size={14} className="text-[#FFD700]" />
            <span className="text-sm text-gray-300">All ages &amp; levels</span>
          </>
        }
        title={
          <>
            Our{" "}
            <span className="bg-gradient-to-r from-[#eb0339] to-[#ff4d6d] bg-clip-text text-transparent">
              Programs
            </span>
          </>
        }
        subtitle="Choose the path that fits you — from kids’ karate to adults, Kobudo, and custom partnerships."
      />
      {/* Programs List */}
      <section className="border-t border-gray-200 bg-white py-20 text-gray-900">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {items.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md sm:flex-row"
            >
              <div className="relative aspect-[16/10] w-full shrink-0 sm:aspect-auto sm:w-[42%] sm:min-h-[220px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-50 sm:opacity-60 ${item.accent}`}
                  aria-hidden
                />
              </div>
              <div className="relative flex flex-1 flex-col justify-center p-6 sm:p-8">
                <p className="text-sm font-semibold text-[#eb0339]">
                  {item.subtitle}
                </p>
                <h2 className="mt-1 text-2xl font-bold text-gray-900">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {item.desc}
                </p>
                <Link
                  to={item.href}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 px-5 py-2 text-sm font-semibold text-gray-900 transition-all group-hover:border-[#eb0339] group-hover:text-[#eb0339] group-hover:gap-3"
                >
                  Learn more
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
