import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
}

const reviewsByBranch: Record<string, Review[]> = {
  "khalidiya-ho": [
    { name: "John Smith", rating: 5, text: "Excellent dojo! My son has learned discipline and confidence. Highly recommend!", date: "2 weeks ago" },
    { name: "Sarah Johnson", rating: 5, text: "The instructors are top-notch. Best karate school in the city!", date: "1 month ago" },
    { name: "Michael Chen", rating: 5, text: "Amazing experience! The training is intense but rewarding.", date: "3 weeks ago" },
    { name: "Emily Davis", rating: 5, text: "Great facility and wonderful community. My daughter loves it here!", date: "1 week ago" },
    { name: "Robert Wilson", rating: 5, text: "Professional instructors and excellent curriculum. Highly recommended!", date: "2 months ago" },
  ],
  "mussaffa": [
    { name: "Lisa Anderson", rating: 5, text: "My kids absolutely love this place! Great instructors and atmosphere.", date: "3 weeks ago" },
    { name: "David Martinez", rating: 5, text: "Best decision I made for my fitness and self-defense training.", date: "1 month ago" },
    { name: "Jennifer Lee", rating: 5, text: "Fantastic dojo with a strong sense of community and tradition.", date: "2 weeks ago" },
    { name: "Thomas Brown", rating: 5, text: "Highly professional and family-friendly environment. 5 stars!", date: "4 weeks ago" },
    { name: "Amanda Garcia", rating: 5, text: "The instructors are patient and knowledgeable. Excellent for all ages!", date: "1 week ago" },
  ],
  "electra": [
    { name: "Christopher Taylor", rating: 5, text: "Outstanding training facility. My confidence has improved tremendously!", date: "2 weeks ago" },
    { name: "Michelle White", rating: 5, text: "Great place for kids and adults. Highly recommend for anyone interested in martial arts.", date: "3 weeks ago" },
    { name: "Daniel Harris", rating: 5, text: "Professional instructors who genuinely care about their students' progress.", date: "1 month ago" },
    { name: "Jessica Clark", rating: 5, text: "Excellent dojo with a welcoming atmosphere. My family loves it!", date: "2 weeks ago" },
    { name: "Kevin Rodriguez", rating: 5, text: "Top-quality instruction and great values. Couldn't ask for more!", date: "1 week ago" },
  ],
  "al-reem": [
    { name: "Christopher Taylor", rating: 5, text: "Outstanding training facility. My confidence has improved tremendously!", date: "2 weeks ago" },
    { name: "Michelle White", rating: 5, text: "Great place for kids and adults. Highly recommend for anyone interested in martial arts.", date: "3 weeks ago" },
    { name: "Daniel Harris", rating: 5, text: "Professional instructors who genuinely care about their students' progress.", date: "1 month ago" },
    { name: "Jessica Clark", rating: 5, text: "Excellent dojo with a welcoming atmosphere. My family loves it!", date: "2 weeks ago" },
    { name: "Kevin Rodriguez", rating: 5, text: "Top-quality instruction and great values. Couldn't ask for more!", date: "1 week ago" },
  ],
  "khalifa-street": [
    { name: "Christopher Taylor", rating: 5, text: "Outstanding training facility. My confidence has improved tremendously!", date: "2 weeks ago" },
    { name: "Michelle White", rating: 5, text: "Great place for kids and adults. Highly recommend for anyone interested in martial arts.", date: "3 weeks ago" },
    { name: "Daniel Harris", rating: 5, text: "Professional instructors who genuinely care about their students' progress.", date: "1 month ago" },
    { name: "Jessica Clark", rating: 5, text: "Excellent dojo with a welcoming atmosphere. My family loves it!", date: "2 weeks ago" },
    { name: "Kevin Rodriguez", rating: 5, text: "Top-quality instruction and great values. Couldn't ask for more!", date: "1 week ago" },
  ],
  "khalidiya": [
    { name: "Christopher Taylor", rating: 5, text: "Outstanding training facility. My confidence has improved tremendously!", date: "2 weeks ago" },
    { name: "Michelle White", rating: 5, text: "Great place for kids and adults. Highly recommend for anyone interested in martial arts.", date: "3 weeks ago" },
    { name: "Daniel Harris", rating: 5, text: "Professional instructors who genuinely care about their students' progress.", date: "1 month ago" },
    { name: "Jessica Clark", rating: 5, text: "Excellent dojo with a welcoming atmosphere. My family loves it!", date: "2 weeks ago" },
    { name: "Kevin Rodriguez", rating: 5, text: "Top-quality instruction and great values. Couldn't ask for more!", date: "1 week ago" },
  ],
  "madina-zayed": [
    { name: "Christopher Taylor", rating: 5, text: "Outstanding training facility. My confidence has improved tremendously!", date: "2 weeks ago" },
    { name: "Michelle White", rating: 5, text: "Great place for kids and adults. Highly recommend for anyone interested in martial arts.", date: "3 weeks ago" },
    { name: "Daniel Harris", rating: 5, text: "Professional instructors who genuinely care about their students' progress.", date: "1 month ago" },
    { name: "Jessica Clark", rating: 5, text: "Excellent dojo with a welcoming atmosphere. My family loves it!", date: "2 weeks ago" },
    { name: "Kevin Rodriguez", rating: 5, text: "Top-quality instruction and great values. Couldn't ask for more!", date: "1 week ago" },
  ],
  "airport-road": [
    { name: "Christopher Taylor", rating: 5, text: "Outstanding training facility. My confidence has improved tremendously!", date: "2 weeks ago" },
    { name: "Michelle White", rating: 5, text: "Great place for kids and adults. Highly recommend for anyone interested in martial arts.", date: "3 weeks ago" },
    { name: "Daniel Harris", rating: 5, text: "Professional instructors who genuinely care about their students' progress.", date: "1 month ago" },
    { name: "Jessica Clark", rating: 5, text: "Excellent dojo with a welcoming atmosphere. My family loves it!", date: "2 weeks ago" },
    { name: "Kevin Rodriguez", rating: 5, text: "Top-quality instruction and great values. Couldn't ask for more!", date: "1 week ago" },
  ],
  "mushrif": [
    { name: "Christopher Taylor", rating: 5, text: "Outstanding training facility. My confidence has improved tremendously!", date: "2 weeks ago" },
    { name: "Michelle White", rating: 5, text: "Great place for kids and adults. Highly recommend for anyone interested in martial arts.", date: "3 weeks ago" },
    { name: "Daniel Harris", rating: 5, text: "Professional instructors who genuinely care about their students' progress.", date: "1 month ago" },
    { name: "Jessica Clark", rating: 5, text: "Excellent dojo with a welcoming atmosphere. My family loves it!", date: "2 weeks ago" },
    { name: "Kevin Rodriguez", rating: 5, text: "Top-quality instruction and great values. Couldn't ask for more!", date: "1 week ago" },
  ],
    };

export function ReviewSlider() {
  const [selectedBranch, setSelectedBranch] = useState("khalidiya-ho");
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = reviewsByBranch[selectedBranch];

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length],
    reviews[(currentIndex + 3) % reviews.length],
  ];

  return (
    <div>
      {/* Branch Selector */}
      <div className="mb-8 flex justify-center">
        <select
          value={selectedBranch}
          onChange={(e) => {
            setSelectedBranch(e.target.value);
            setCurrentIndex(0);
          }}
          className="bg-gray-900 text-white border border-gray-700 rounded-lg pl-5 pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#eb0339] appearance-none cursor-pointer bg-no-repeat bg-[length:1.25rem] bg-[right_0.75rem_center]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")` }}
        >
          <option value="khalidiya-ho">Khalidiya Head Office</option>
          <option value="mussaffa">Mussaffa</option>
          <option value="electra">Electra Salam Corner</option>
          <option value="al-reem">Al Reem Island</option>
          <option value="khalifa-street">Khalifa Street</option>
          <option value="khalidiya">Khalidiya</option>
          <option value="madina-zayed">Madina Zayed</option>
          <option value="airport-road">Airport Road</option>
          <option value="mushrif">Mushrif Mall</option>
        </select>
      </div>

      {/* Review Cards */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div 
            key={`${selectedBranch}-${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {visibleReviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-900 p-6 rounded-lg border border-gray-800"
              >
                <div className="flex items-center mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 text-sm">{review.text}</p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={prevReview}
            className="bg-[#eb0339] text-white p-3 rounded-full hover:bg-[#c70230] transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextReview}
            className="bg-[#eb0339] text-white p-3 rounded-full hover:bg-[#c70230] transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}