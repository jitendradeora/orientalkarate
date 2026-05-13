export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
  /** Full article HTML for the detail page */
  body?: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "why-kata-exists-in-karate",
    title: "Why Kata Exists in Karate",
    excerpt:
      "From the outside, it can appear repetitive. The same sequence practiced repeatedly, without the variation or interaction seen in sparring. Compared to more dynamic forms of training, it may seem less engaging.",
    image: "https://www.orientalkarate.com/wp-content/uploads/2020/02/DSC6218-scaled.jpg",
    date: "March 2026",
    readTime: "6 min read",
    tags: ["Kata", "karate", "training"],
    body: `<p>Kata is often the part of karate that raises the most questions.</p>
    <p>From the outside, it can appear repetitive. The same sequence practiced repeatedly, without the variation or interaction seen in sparring. Compared to more dynamic forms of training, it may seem less engaging.</p>
    <p>So the question is natural: why is it necessary?</p>
    <p>In sparring, attention is supported by the situation. There is movement, unpredictability, and an opponent to respond to. In kata, that support is absent. The sequence is fixed. Nothing changes externally.</p>
    <p>What changes, if anything, has to come from within.</p>
    <ul class="list-disc list-inside indent-3">
      <li>In kata, there is nothing external to react to. The reaction is internal—adjusting to one’s own timing, control, and pace.</li>
    </ul>
     <p>This is where the training becomes different.</p>
     <p>In some cases, sparring can allow individuals with strong athletic ability to perform well relatively quickly. The feedback is immediate, and reaction can compensate for refinement.</p>
     <p>Kata works differently. Because the structure does not change, what becomes visible over time is not just the movement, but the accumulation of refinement.</p>

     <ul class="list-disc list-inside indent-3">
      <li>A well-performed kata is less like a performance and more like a sculpture—it reflects the time spent shaping it.</li>
    </ul>
    <p>Each movement is an opportunity to adjust, but the adjustment is not prompted. Timing, balance, and control have to be noticed and refined without urgency or external pressure.</p>
    <p>As the sequence becomes physically demanding, it is possible to lose oneself in it. The challenge then is not just to complete it, but to regulate it—to maintain timing, manage effort, and finish with control.</p>
    <p>There is also a quieter aspect to it. Staying with the same sequence, especially when it stops being interesting, creates a different kind of effort. A constant pull between distraction and attention, between rushing and control.
    </p>
    <p>Over time, the movement becomes familiar. What remains is how it is done.</p>
    <p>The ability to do something well without being pushed is not commonly developed.
 In that sense, kata is not only about movement. It is about how a person works when nothing is demanding that they do so.</p>
    <p><em>— Oriental Karate Team</em><br> Observations from training and learning</p>
  `,
  },

  {
    id: "will-my-child-lose-interest-in-karate-after-a-few-classes",
    title: "Will My Child Lose Interest in Karate After a Few Classes?",
    excerpt:
      "Children often begin with curiosity. The question is whether that interest will last once the novelty fades.",
    image: "https://www.orientalkarate.com/wp-content/uploads/2020/02/DSC6218-scaled.jpg",
    date: "March 2026",
    readTime: "6 min read",
    tags: ["Kids Program", "Parent Guide"],
    body: `<p>This is a common uncertainty in the early stages.</p>
    <p>Children often begin with curiosity. The question is whether that interest will last once the novelty fades.</p>
    <p>In practice, long-term engagement is not driven by motivation alone.</p>

    <ul class="list-disc list-inside indent-3">
      <li>Children rarely continue because they are constantly motivated. They continue because they feel part of something, and the environment makes it easy to return.</li>
    </ul>

    <p>When training is consistent, children begin to settle into a rhythm. The same class, familiar faces, and a predictable structure help them feel connected. Over time, this connection becomes important—friends to train with, seniors to look up to, and younger students to guide.</p>


    <p>Communication between parents and instructors also plays a role. When there is clarity around what the child is working on and what to expect next, it becomes easier to maintain continuity.</p>

    <p>Drop-off, in many cases, is not about loss of interest, but disruption. Frequent changes in batches, long gaps between sessions, or even shifts in instructors can interrupt this rhythm.</p>

    <p>This is not always avoidable. Schedules change, and families are busy.</p>
    <p>But when continuity is maintained, interest tends to stabilize—not through excitement, but through familiarity and belonging.</p>
    <p><em>— Oriental Karate Team</em></p>
    `,
  },
  {
    id: "why-some-children-improve-faster-than-others-in-training",
    title: "Why Some Children Improve Faster Than Others in Training",
    excerpt:
      "Parents notice when other children move ahead—especially after periods like school breaks or travel—and naturally begin to question why.",
    image: "https://www.orientalkarate.com/wp-content/uploads/2020/02/DSC6218-scaled.jpg",
    date: "March 2026",
    readTime: "6 min read",
    tags: ["Training", "Kids", "Adults"],
    body: `<p>Progress in training is often compared.</p>
    <p>Parents notice when other children move ahead—especially after periods like school breaks or travel—and naturally begin to question why.</p>
    <p>In practice, improvement is less about ability and more about continuity.</p>
    <ul class="list-disc list-inside indent-3">
      <li>Progress in children's training is less about how quickly they learn, and more about how consistently they return.</li>
    </ul>

    <p>When sessions are missed for weeks at a stretch, progress does not just pause—it disrupts the rhythm children rely on.</p>
    <p>This situation is more common than it appears. When children return after a gap, the difference becomes visible, even if it is temporary.</p>
    <p>In most cases, progress stabilizes again once regular training resumes.</p>
    <p>There are also phases within training that are not always obvious. Some children, especially at very early levels, take longer to settle. With the right attention and repetition, this often shifts—and many of these same children move through later stages more easily.</p>
    <p>At other times, progression is held back for a different reason. Certain aspects of training need to be understood internally before they are shown externally.</p>
    <p>Progress, in this sense, is not always visible in the short term. It often appears as stability—better attention, cleaner movement, and a child settling into the rhythm of training.</p>
    <p>Over time, the difference becomes less about speed, and more about consistency.</p>
    <p><em>— Oriental Karate Team</em></p>
`,
  },
  {
    id: "is-karate-safe-for-kids-a-practical-perspective",
    title: "Is Karate Safe for Kids? A Practical Perspective",
    excerpt:
      "Safety is one of the first considerations parents have when looking at karate training.",
    image: "https://www.orientalkarate.com/wp-content/uploads/2020/12/HQ-Group-photo-scaled.jpg",
    date: "March 2026",
    readTime: "6 min read",
    tags: ["Safety", "Kids", "Adults"],
    body: `<p>Safety is one of the first considerations parents have when looking at karate training.</p>
<p>Two concerns tend to come up consistently. One is whether training may encourage aggressive behaviour. The other is the risk of injury during practice.</p>
<p>In our experience, children do not become more aggressive through structured training. Most already have energy or impulsive tendencies—they simply lack a consistent way to manage it.</p>
<p>Training provides that structure.</p>
    <ul class="list-disc list-inside indent-3">
      <li>Knowing one's own strength often reduces the need to use it.</li>
    </ul>
<p>This becomes more apparent over time. Students who train consistently, particularly at higher levels, rarely initiate conflict. The emphasis shifts from expression to control.</p>
<p>A useful way to look at it is this: unstructured environments often carry more risk than structured ones.</p>
<p>Injury, in most cases, is not a result of training itself, but of how sparring is designed.</p>

<p>At the children's level, rules are based on control rather than impact. Techniques to the face are evaluated on distance, timing, and precision. Contact is not required—and in many cases, is considered a foul.</p>

<p>The training environment reflects this approach. Protective equipment such as shin guards, chest guards, headgear, and gloves are used, and WKF-standard mats reduce the risk associated with falls.</p>
<p>Safety, in this context, is not treated as a separate concern. It is built into the structure of training itself.</p>
<p><em>— Oriental Karate Team</em></p>
`,
  },
   {
    id: "how-confidence-in-children-actually-develops",
    title: "How Confidence in Children Actually Develops",
    excerpt:
      "Confidence in children is often misunderstood.",
    image: "https://images.unsplash.com/photo-1529630218527-7df22fc2d4ee?auto=format&fit=crop&w=1080&q=80",
    date: "March 2026",
    readTime: "6 min read",
    tags: ["Discipline", "Kids", "Adults"],
    body: `<p>Confidence in children is often misunderstood.</p> 
<p>Many parents describe it in similar ways:</p> 
<ul class="list-disc list-inside indent-3">
  <li>“My child is very shy,”</li>
  <li>“He avoids trying new things,”</li>
  <li>“She knows what to do, but hesitates.”</li>
</ul>
<p>Underneath these is often a quieter concern — <em>Will my child be able to handle situations on their own?</em></p>
<p>In practice, confidence is not about being outgoing or expressive. It is about how a child responds to difficulty.</p>
<p>Some of the most confident children are not the loudest. They are the ones who:</p>
<ul class="list-disc list-inside indent-3">
  <li>Attempt without hesitation</li>
  <li>Accept correction without resistance</li>
  <li>Continue even when something feels uncomfortable</li>
</ul>
<p>A small but reliable step towards confidence is reduced hesitation — the moment a child chooses to try, without needing to be pushed.
</p>
<p>Telling a child to “be confident” rarely helps if they have not built the ability to handle small challenges.</p>
<p>A more reliable approach is to reduce the size of the challenge and build gradually.</p>
<p>For example, we used to introduce kumite (sparring) only at higher belt levels, assuming beginners were not ready. Over time, we found the opposite. When introduced earlier—through basic, no-contact drills—children became more comfortable. There was less fear, and more willingness to try.</p>

<p>Even beginners began to look forward to it.</p>
<p>In many cases, progress does not begin with confidence.<br> It begins with a child hesitating slightly less than before. <br> Similar patterns can be observed in learning more broadly, beyond training.</p>
<p><em>— Oriental Karate Team</em></p>
`,
  },
   
];

const HOME_LATEST_POST_COUNT = 3;

/**
 * Latest posts for the home page: last entries in `blogPosts` (newest assumed appended), newest first.
 */
export function getFeaturedHomePosts(): BlogPost[] {
  if (blogPosts.length === 0) return [];
  return blogPosts.slice(-HOME_LATEST_POST_COUNT).reverse();
}
