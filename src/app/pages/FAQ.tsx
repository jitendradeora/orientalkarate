import { motion } from "motion/react";
import { HelpCircle, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { InnerPageBanner } from "../components/InnerPageBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      category: "How to Choose the Best Karate Club",
      questions: [
        {
          q: "How does one know which karate club is the best one in the city?",
          a: "Ask the students who have been learning in the concerned club. Check the years of experience and reputation of the club in the city. Ask the parents whose children are enrolled in the Club. Oriental Karate & Kobudo Club has been serving Abu Dhabi since 1987 with over 24,000 students trained and more than 1,500 currently active students across 9 locations.",
        },
      ],
    },
    {
      category: "Getting Started",
      questions: [
        {
          q: "What is the minimum age to join for Karate classes?",
          a: "A child should be minimum 5 years old in order to get admission in the club.",
        },
        {
          q: "What is the medium of Instruction?",
          a: "English & Japanese.",
        },
        {
          q: "What should I wear to my first class?",
          a: "For your first trial class, wear comfortable athletic clothing that allows free movement (t-shirt and sweatpants work great). Once you join, you'll receive a training uniform (gi) as part of your membership.",
        },
        {
          q: "How do I book a free trial class?",
          a: "You can book your free trial class through our online booking system, by calling any of our branches at +971 (2) 6771611 or WhatsApp at +971 50 677 16 89, or using the chat assistant on this website. It's completely free with no obligation to join.",
        },
      ],
    },
    {
      category: "Belt System & Progress",
      questions: [
        {
          q: "How long does it take to get promotion to higher belt?",
          a: "It depends on how good is a student in his belt syllabus. Students will be evaluated to verify if he/she is eligible to appear for the test and circular will be given to appear for the test.",
        },
        {
          q: "How long does it take to get a black belt degree?",
          a: "An average student takes 2 to 3 years of regular training to appear for the black belt test.",
        },
        {
          q: "What is the order of the belt system in Karate?",
          a: "White, Yellow, Green, Blue, Purple, Brown-4, Brown-3, Brown-2, Brown-1, Black (after Black, there are higher degrees like 2nd degree, 3rd degree etc.).",
        },
      ],
    },
    {
      category: "Membership & Pricing",
      questions: [
        {
          q: "Is there any option to avail a discount on the fee structure?",
          a: "Yes! Siblings discounts and advance payment discounts are available. Contact us for more details on our discount programs.",
        },
        {
          q: "Does the club provide any conveyance?",
          a: "Yes, we do arrange conveyance for those who require it.",
        },
      ],
    },
    {
      category: "Kobudo & Special Training",
      questions: [
        {
          q: "When can I join for kobudo course?",
          a: "After appearing for the first grading test in Karate. Kobudo is an ancient martial art from Okinawa, Japan. We are proud to have Ali Mohammed Kyoshi, a 7th Degree Black Belt holder in Kobudo, as our chief instructor.",
        },
        {
          q: "Can I practice any other kind of martial arts/yoga while practicing karate?",
          a: "All kinds of martial arts & many of the Yoga exercises are included in our Curriculum, so you'll get a comprehensive training experience.",
        },
      ],
    },
    {
      category: "Safety & Facilities",
      questions: [
        {
          q: "Is it ensured that my child does not get a physical injury while practicing?",
          a: "As it is there in any other sports, Karate is not an exemption. However, we emphasize safety with age-appropriate techniques, padded equipment, small class sizes, and instructors trained in child development. We focus on control and discipline to minimize risks.",
        },
        {
          q: "Are parents allowed to watch classes?",
          a: "Absolutely! All our dojos have comfortable viewing areas where parents can watch their children's classes. We encourage parent involvement and observation.",
        },
        {
          q: "Do you have changing rooms and showers?",
          a: "Yes, all our locations have changing rooms and shower facilities for your convenience.",
        },
      ],
    },
    {
      category: "Classes & Training",
      questions: [
        {
          q: "How often should I train?",
          a: "We conduct classes twice a week for regular karate training and once a week for Kobudo. We recommend consistent attendance for steady progress.",
        },
        {
          q: "What will I learn in classes?",
          a: "You'll learn traditional Okinawan karate including stances, blocks, strikes, kicks, kata (forms), kumite (sparring), and self-defense techniques. Our children's classes also include additional skills like somersault, tumbling, gymnastic stretching, front & back midair rolls, and many special skills. Adults classes include Yoga exercises for a relaxed lifestyle.",
        },
        {
          q: "Can I visit and tour the dojo before joining?",
          a: "Of course! We encourage prospective students to visit any of our 9 locations across Abu Dhabi. You can also book a free trial class to experience training firsthand.",
        },
        {
          q: "Can I switch between different branches?",
          a: "Yes! We have 9 locations across Abu Dhabi: Khalidiya Head Office, Mussaffa, Electra Salam Corner, Al Reem, Khalifa Street, Khalidiya, Madina Zayed, Airport Road, and Mushrif Mall. Contact us for branch transfer arrangements.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 text-gray-900">
      <InnerPageBanner
        badge={
          <>
            <HelpCircle size={14} className="text-[#FFD700]" />
            <span className="text-sm text-gray-300">
              Got Questions? We've Got Answers
            </span>
          </>
        }
        title={
          <>
            <span className="text-[#ffffff]">Frequently Asked</span>{" "}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#ffa500] bg-clip-text text-transparent">
              Questions
            </span>
          </>
        }
        subtitle="Find answers to common questions about our programs, membership, and training"
      />

      {/* FAQ Content — light */}
      <section className="border-t border-gray-200 bg-white py-24 text-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {faqs.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.05 }}
              className="mb-12"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="h-8 w-1 rounded-full bg-gradient-to-b from-[#eb0339] to-[#ff4d6d]" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {category.category}
                </h2>
              </div>

              <Accordion type="single" collapsible className="space-y-3">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${catIndex}-${faqIndex}`}
                    className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50/80 px-6 shadow-sm"
                  >
                    <AccordionTrigger className="py-5 text-left text-gray-900 transition-colors hover:text-[#eb0339] hover:no-underline">
                      <span className="pr-4 font-medium">{faq.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 leading-relaxed text-gray-600">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
