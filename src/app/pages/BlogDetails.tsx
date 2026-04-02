import { motion } from "motion/react";
import { useParams, Link } from "react-router";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { blogPosts } from "../data/blogPosts";

const defaultBody =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae augue euismod, tempus orci a, bibendum mi. " +
  "Praesent a magna ac elit vestibulum lacinia.\n\n" +
  "Aliquam erat volutpat. Cras sed ipsum vitae lacus finibus elementum. Etiam at lorem non justo malesuada tempor.\n\n" +
  "Suspendisse potenti. Quisque ac interdum arcu. Phasellus nec lectus nec sapien tempus varius.";

export function BlogDetails() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.id === slug);

  const title = post?.title ?? (slug ? slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") : "Blog article");
  const cover = post?.image ?? "https://www.orientalkarate.com/wp-content/uploads/2020/02/DSC6218-scaled.jpg";
  const meta = post ? `${post.date} · ${post.readTime}` : "Oriental Karate & Kobudo Club";
  const tags = post?.tags ?? ["Karate", "Training", "Abu Dhabi"];

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="min-h-screen bg-white pt-24 text-gray-900">
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <Link
            to="/blog"
            className="inline-flex items-center text-xs font-semibold mb-6 text-gray-500 hover:text-[#eb0339]"
          >
            ← Back to Blog
          </Link>
          <div className="space-y-4 mb-8">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-[#eb0339]/10 text-[#eb0339]">
              ORIENTAL KARATE · BLOG
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">{title}</h1>
            <p className="text-gray-500 text-sm">
              {meta} · Oriental Karate &amp; Kobudo Club
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <img src={cover} alt="" className="w-full h-full max-h-[420px] object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid md:grid-cols-[minmax(0,1.7fr)_minmax(0,0.9fr)] gap-10 lg:gap-16 items-start">
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-neutral max-w-none text-gray-700"
            >
              <p className="lead text-lg text-gray-600">{post?.excerpt ?? ""}</p>
              {defaultBody.split("\n\n").map((para) => (
                <p key={para}>{para}</p>
              ))}
            </motion.article>

            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="rounded-2xl p-5 border border-gray-200 bg-white shadow-sm">
                <h2 className="text-sm font-semibold mb-3 text-gray-900">Share this article</h2>
                <p className="text-gray-500 text-xs mb-4">
                  Share with friends, students or colleagues who would benefit from this.
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="p-2.5 rounded-full bg-[#1877F2] text-white hover:opacity-90 transition-opacity"
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={16} />
                  </button>
                  <button
                    type="button"
                    className="p-2.5 rounded-full bg-[#1DA1F2] text-white hover:opacity-90 transition-opacity"
                    aria-label="Share on X / Twitter"
                  >
                    <Twitter size={16} />
                  </button>
                  <button
                    type="button"
                    className="p-2.5 rounded-full bg-[#0A66C2] text-white hover:opacity-90 transition-opacity"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={16} />
                  </button>
                  <button
                    type="button"
                    className="p-2.5 rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white hover:opacity-90 transition-opacity"
                    aria-label="Share on Instagram"
                  >
                    <Instagram size={16} />
                  </button>
                </div>
                {shareUrl && (
                  <p className="text-gray-400 text-[10px] mt-3 break-all">{shareUrl}</p>
                )}
              </div>

              <div className="rounded-2xl p-5 border border-gray-200 bg-white shadow-sm">
                <h2 className="text-sm font-semibold mb-3 text-gray-900">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[#eb0339]/10 text-[#eb0339]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </div>
  );
}
