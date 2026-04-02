import { motion } from "motion/react";
import { Link } from "react-router";
import { InnerPageBanner } from "../components/InnerPageBanner";
import { BookOpen } from "lucide-react";
import { blogPosts } from "../data/blogPosts";

export function Blog() {
  return (
    <div className="min-h-screen bg-white pt-24 text-gray-900">
      <InnerPageBanner
        badge={
          <>
            <BookOpen size={14} className="text-[#FFD700]" />
            <span className="text-sm text-gray-300">
              Dojo Stories & Martial Arts Insights
            </span>
          </>
        }
        title={
          <>
            <span className="text-[#ffffff]">Oriental Karate</span>{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#ffa500] bg-clip-text text-transparent">
              Blog
            </span>
          </>
        }
        subtitle="Articles, tips and stories from our dojos in Abu Dhabi – for students, parents, companies and schools."
      />

      <section className="border-t border-gray-200 bg-white py-16 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="text-gray-500">{post.date}</span>
                      <span className="text-[#eb0339] font-medium">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold mb-2 line-clamp-2 text-gray-900">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full text-xs bg-[#eb0339]/10 text-[#eb0339] font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-[#eb0339]">
                      Read article →
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
