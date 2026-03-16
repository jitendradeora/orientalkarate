import { motion } from "motion/react";
import { Link } from "react-router";
import { InnerPageBanner } from "../components/InnerPageBanner";
import { BookOpen } from "lucide-react";
type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
};

const mockPosts: BlogPost[] = [
  {
    id: "building-discipline-through-karate",
    title: "Building Discipline Through Traditional Karate Training",
    excerpt:
      "Discover how consistent training, traditional etiquette and goal-based belt progression build discipline in children and adults.",
    image:
    "https://www.orientalkarate.com/wp-content/uploads/2020/02/DSC6218-scaled.jpg",
    date: "March 2026",
    readTime: "6 min read",
    tags: ["Discipline", "Kids", "Adults"],
  },
  {
    id: "why-kids-benefit-from-karate",
    title: "Why Kids Benefit from Karate More Than Any Other Activity",
    excerpt:
      "From focus and confidence to fitness and respect, learn why karate is one of the best activities you can choose for your child.",
    image:
      "https://www.orientalkarate.com/wp-content/uploads/2020/02/DSC6218-scaled.jpg",
    date: "February 2026",
    readTime: "5 min read",
    tags: ["Kids Program", "Parent Guide"],
  },
  {
    id: "corporate-martial-arts-programs",
    title: "Corporate Martial Arts Programs for Team Building",
    excerpt:
      "How companies in Abu Dhabi use martial arts-based workshops to improve team bonding, stress management and productivity.",
    image:
      "https://www.orientalkarate.com/wp-content/uploads/2020/12/HQ-Group-photo-scaled.jpg",
    date: "January 2026",
    readTime: "4 min read",
    tags: ["Corporate", "Wellness"],
  },
];

export function Blog() {
  return (
    <div className="min-h-screen pt-[130px] bg-black text-white">
      <InnerPageBanner
        badge={
          <>
            <BookOpen size={14} className="text-[#FFD700]" />
            <span className="text-sm text-gray-300">Dojo Stories & Martial Arts Insights</span>
          </>
        }
        title={
          <>
            Oriental Karate <span className="text-[#eb0339]">Blog</span>
          </>
        }
        subtitle="Articles, tips and stories from our dojos in Abu Dhabi – for students, parents, companies and schools."
      />

      <section className="bg-gray-900/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl overflow-hidden border bg-gray-900 border-gray-800"
              >
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="text-gray-400">{post.date}</span>
                      <span className="text-[#eb0339] font-medium">{post.readTime}</span>
                    </div>
                    <h2 className="text-lg font-bold mb-2 line-clamp-2">{post.title}</h2>
                    <p className="text-gray-300 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded-full text-xs bg-gray-800 text-gray-200"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-[#eb0339]">Read article →</span>
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
