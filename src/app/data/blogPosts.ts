export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    id: "building-discipline-through-karate",
    title: "Building Discipline Through Traditional Karate Training",
    excerpt:
      "Discover how consistent training, traditional etiquette and goal-based belt progression build discipline in children and adults.",
    image: "https://www.orientalkarate.com/wp-content/uploads/2020/02/DSC6218-scaled.jpg",
    date: "March 2026",
    readTime: "6 min read",
    tags: ["Discipline", "Kids", "Adults"],
  },
  {
    id: "why-kids-benefit-from-karate",
    title: "Why Kids Benefit from Karate More Than Any Other Activity",
    excerpt:
      "From focus and confidence to fitness and respect, learn why karate is one of the best activities you can choose for your child.",
    image: "https://www.orientalkarate.com/wp-content/uploads/2020/02/DSC6218-scaled.jpg",
    date: "February 2026",
    readTime: "5 min read",
    tags: ["Kids Program", "Parent Guide"],
  },
  {
    id: "corporate-martial-arts-programs",
    title: "Corporate Martial Arts Programs for Team Building",
    excerpt:
      "How companies in Abu Dhabi use martial arts-based workshops to improve team bonding, stress management and productivity.",
    image: "https://www.orientalkarate.com/wp-content/uploads/2020/12/HQ-Group-photo-scaled.jpg",
    date: "January 2026",
    readTime: "4 min read",
    tags: ["Corporate", "Wellness"],
  },
  {
    id: "karate-for-busy-professionals",
    title: "Karate for Busy Professionals in Abu Dhabi",
    excerpt:
      "How twice-weekly classes fit around work schedules and why adults choose structured Okinawan karate for stress and fitness.",
    image: "https://images.unsplash.com/photo-1529630218527-7df22fc2d4ee?auto=format&fit=crop&w=1080&q=80",
    date: "December 2025",
    readTime: "5 min read",
    tags: ["Adults", "Lifestyle"],
  },
];

/**
 * Homepage featured posts — change this list to control which three articles appear on the home page.
 * Order is preserved; invalid ids are skipped.
 */
export const FEATURED_HOME_SLUGS: string[] = [
  "building-discipline-through-karate",
  "why-kids-benefit-from-karate",
  "corporate-martial-arts-programs",
];

export function getFeaturedHomePosts(): BlogPost[] {
  return FEATURED_HOME_SLUGS.map((id) => blogPosts.find((p) => p.id === id)).filter(
    (p): p is BlogPost => Boolean(p)
  );
}
