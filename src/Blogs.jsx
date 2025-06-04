import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "5 Proven Techniques to Remember Anything Faster",
      excerpt:
        "Discover effective study hacks that boost your memory and help you retain information longer.",
      description: [
        "Visualization – Creating vivid mental images helps you associate abstract information with tangible visuals.",
        "Chunking – Break large data sets into smaller, manageable units (e.g., phone numbers).",
        "Mnemonics – Use acronyms, rhymes, or phrases to encode data efficiently.",
        "Active Recall – Test yourself repeatedly instead of re-reading notes.",
        "Teach What You Learn – Explaining a topic aloud reinforces your understanding and uncovers gaps."
      ],
      date: "May 15, 2025",
      author: "Admin",
      category: "Study Tips",
    },
    {
      id: 2,
      title: "How to Use Flashcards for Exam Success",
      excerpt:
        "Learn how to maximize your study sessions with interactive flashcards designed for quick recall.",
      description: [
        "Create one concept per card — question or term on the front, answer or definition on the back.",
        "Shuffle regularly to avoid memorizing order.",
        "Practice in both directions (term ➝ definition and vice versa).",
        "Incorporate images and colors to make cards visually engaging.",
        "Use digital tools like Anki or Quizlet for automated spaced repetition."
      ],
      date: "April 30, 2025",
      author: "Admin",
      category: "Flashcards",
    },
    {
      id: 3,
      title: "The Science Behind Spaced Repetition",
      excerpt:
        "Understand why spaced repetition is a game-changer in learning and how to apply it effectively.",
      description: [
        "Spaced repetition leverages the spacing effect — review material over increasing time intervals to boost long-term memory.",
        "Suggested review schedule:",
        " - 1st review: same day",
        " - 2nd: next day",
        " - 3rd: 3 days later",
        " - 4th: 1 week later",
        "Use apps like Anki that calculate optimal review intervals."
      ],
      date: "April 10, 2025",
      author: "Admin",
      category: "Learning Science",
    },
    {
      id: 4,
      title: "Top 10 Apps Every Student Should Use",
      excerpt:
        "A curated list of must-have apps to boost your productivity and learning experience.",
      description: [
        "Notion – All-in-one workspace for notes and project management.",
        "Grammarly – Real-time grammar and spell check.",
        "Forest – Stay focused by growing virtual trees while avoiding distractions.",
        "Anki – Powerful flashcard app for spaced repetition.",
        "Google Keep – Simple, color-coded note-taking.",
        "Wolfram Alpha – A computational powerhouse for math and science.",
        "Duolingo – Fun language learning.",
        "Todoist – Task manager with reminders and priority levels.",
        "Khan Academy – Free courses in various subjects.",
        "Coursera – University-level courses from top institutions."
      ],
      date: "March 25, 2025",
      author: "Admin",
      category: "Tech",
    },
    {
      id: 5,
      title: "Mind Mapping: A Visual Approach to Learning",
      excerpt:
        "Explore how mind mapping techniques can help organize your thoughts and improve recall.",
      description: [
        "Mind mapping visually organizes information around a central concept, mimicking brain structure.",
        "Benefits:",
        " - Encourages brainstorming and idea generation.",
        " - Connects related concepts intuitively.",
        " - Aids visual memory through diagrams, colors, and shapes.",
        "Tools: XMind, MindMeister, or pen and paper."
      ],
      date: "March 10, 2025",
      author: "Admin",
      category: "Study Tips",
    },
    {
      id: 6,
      title: "Balancing Study and Rest for Better Focus",
      excerpt:
        "Learn why taking breaks and proper rest are essential to effective studying and retention.",
      description: [
        "Pomodoro Technique: 25 mins study + 5 mins break.",
        "Sleep: Aim for 7–8 hours per night; memory consolidation occurs during REM sleep.",
        "Microbreaks: Short pauses for stretching or walking reduce cognitive overload.",
        "Remember: Rest is part of productivity, not the opposite of it."
      ],
      date: "February 28, 2025",
      author: "Admin",
      category: "Health & Study",
    },
    {
      id: 7,
      title: "Using Color Coding to Enhance Memory",
      excerpt:
        "Discover simple ways to use colors in your notes and flashcards to improve memory retention.",
      description: [
        "Use red for critical points, blue for facts, green for examples.",
        "Stick to a consistent system to avoid confusion.",
        "Combine colors with diagrams or mind maps for better results.",
        "Studies show colored visuals are more easily remembered than black-and-white ones."
      ],
      date: "February 15, 2025",
      author: "Admin",
      category: "Learning Science",
    },
    {
      id: 8,
      title: "Creating Effective Study Schedules That Stick",
      excerpt:
        "Tips and tricks to build a study timetable that fits your lifestyle and helps you stay consistent.",
      description: [
        "Identify your most productive hours.",
        "Set realistic goals and break subjects into topics.",
        "Use tools like Google Calendar or Notion to track sessions.",
        "Include time for revision, rest, and flexibility.",
        "Review and adjust weekly to stay aligned with your progress."
      ],
      date: "January 30, 2025",
      author: "Admin",
      category: "Productivity",
    },
    {
      id: 9,
      title: "How to Stay Motivated During Long Study Sessions",
      excerpt:
        "Strategies to keep your motivation high and avoid burnout during intensive study periods.",
      description: [
        "Set small milestones and reward yourself.",
        "Study with peers to stay accountable.",
        "Remind yourself of long-term goals.",
        "Use music or ambient sounds to stay engaged.",
        "Alternate between subjects to avoid boredom.",
        "Intrinsic motivation (passion, goals) works better than external pressure in the long term."
      ],
      date: "January 15, 2025",
      author: "Admin",
      category: "Motivation",
    },
  ];

  const handleBlogClick = (blog) => setSelectedBlog(blog);
  const handleBack = () => setSelectedBlog(null);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 to-indigo-100 px-4 py-12 flex justify-center">
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8 md:p-12">
        {selectedBlog ? (
          <div className="animate-fade-in max-w-4xl mx-auto py-4">
            <button
              onClick={handleBack}
              className="mb-8 inline-flex items-center gap-3 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full shadow-md hover:bg-indigo-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400"
              aria-label="Back to all blogs"
            >
              <FaArrowLeft className="text-lg" />
              <span className="font-semibold text-lg">Back to All Blogs</span>
            </button>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
              <time
                className="text-indigo-500 text-sm italic tracking-wide"
                dateTime={new Date(selectedBlog.date).toISOString()}
              >
                {selectedBlog.date}
              </time>
              <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold uppercase px-4 py-1 rounded-full tracking-wide select-none">
                {selectedBlog.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-900 leading-tight mb-3">
              {selectedBlog.title}
            </h1>
            <p className="text-indigo-600 italic mb-8 text-sm md:text-base">
              By <span className="font-semibold">{selectedBlog.author}</span>
            </p>
            <article className="prose prose-indigo max-w-none text-indigo-900 leading-relaxed">
              <p className="mb-6 text-lg">{selectedBlog.excerpt}</p>

              <ul className="list-disc list-inside space-y-2 text-base md:text-lg">
                {selectedBlog.description.map((point, i) => (
                  <li key={i} className="text-indigo-800">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        ) : (
          <>
            <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-900 text-center mb-12">
              SmartCards Study <span className="text-indigo-600">Blogs</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {blogPosts.map((blog) => (
                <article
                  key={blog.id}
                  onClick={() => handleBlogClick(blog)}
                  className="relative border border-indigo-200 rounded-xl p-6 shadow-sm hover:shadow-md transition cursor-pointer min-h-[220px]"
                >
                  <div className="flex justify-between items-center mb-3">
                    <time className="text-indigo-500 text-xs italic">{blog.date}</time>
                    <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold uppercase px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                  </div>

                  <h2 className="text-2xl font-semibold text-indigo-800 mb-2 hover:text-indigo-600 transition">
                    {blog.title}
                  </h2>

                  <p className="text-indigo-700 mb-12">{blog.excerpt}</p>

                  <span className="absolute bottom-3 left-6 text-indigo-600 text-sm font-medium">
                    By {blog.author}
                  </span>
                </article>
              ))}
            </div>

            <div className="text-center mt-14 text-indigo-600 italic text-sm md:text-base">
              Stay tuned for more insightful articles to help you study smarter!
            </div>
          </>
        )}
      </div>
    </div>
  );
}