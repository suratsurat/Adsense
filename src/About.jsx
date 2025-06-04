export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8 md:p-12 transition-all duration-300">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-900 text-center mb-6">
          About <span className="text-indigo-600">SmartCards</span> Study
        </h1>

        <p className="text-lg md:text-xl text-indigo-700 text-center mb-8 leading-relaxed max-w-3xl mx-auto">
          SmartCards is a modern flashcard web app that transforms the way you study.
          <br />
          Our mission is to help learners of all ages retain knowledge faster, longer, and with less stress.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-indigo-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-indigo-800 mb-2">What You Get</h2>
            <ul className="list-disc list-inside text-indigo-700 space-y-2">
              <li>Distraction-free and minimal interface</li>
              <li>Mobile & Web-first, fully responsive design</li>
              <li>Questions from various subjects and topics</li>
              <li>Support for different languages.</li>
              <li>Fast, smooth performance</li>
            </ul>
          </div>

          <div className="bg-indigo-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-indigo-800 mb-2">Features You’ll Love</h2>
            <ul className="list-disc list-inside text-indigo-700 space-y-2">
              <li>Flip animations that simulate real flashcards</li>
              <li>One-click navigation with previous/next buttons</li>
              <li>Frequent improvements & new features</li>
              <li>Instant subject switching without page reload</li>
              <li>Responsive design optimized for mobile & desktop</li>
            </ul>

          </div>
        </div>

        <div className="bg-white border border-indigo-100 rounded-2xl p-6 md:p-8 text-center mb-12">
          <h3 className="text-2xl font-bold text-indigo-900 mb-4">Why SmartCards?</h3>
          <p className="text-indigo-700 text-base md:text-lg leading-relaxed">
            We believe that learning should be enjoyable, not overwhelming.
            SmartCards uses cognitive science principles to make revision sessions more effective.
            Our goal is to empower you with tools that enhance memory retention using active recall and spaced repetition strategies.
          </p>
        </div>

        <div className="text-center mt-10">
          <p className="text-lg md:text-xl font-semibold text-indigo-800 mb-1">
            Built with love by <span className="text-indigo-600">SmartCards Study</span>
          </p>
          <p className="text-sm md:text-base italic text-indigo-600 opacity-80">
            Making learning smarter, one card at a time.
          </p>
        </div>
      </div>
    </div>
  );
}
