import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [showText, setShowText] = useState(true);
  const navigate = useNavigate();

  const progressDuration = 2500;

  useEffect(() => {
    const timer = setTimeout(() => setShowText(false), progressDuration);
    return () => clearTimeout(timer);
  }, [progressDuration]);

  useEffect(() => {
    if (!showText) {
      const redirectTimer = setTimeout(() => navigate("/learnwithflashcards"), 600);
      return () => clearTimeout(redirectTimer);
    }
  }, [showText, navigate]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 overflow-hidden px-6">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 opacity-30 rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-300 opacity-25 rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.05, 1], opacity: [0.25, 0.5, 0.25] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
      </div>

      <AnimatePresence>
        {showText && (
          <motion.div
            className="relative z-10 w-full max-w-4xl bg-white bg-opacity-90 backdrop-blur-md border border-blue-300 rounded-3xl p-8 md:p-12 shadow-xl text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-800 mb-6 select-none leading-tight"
              aria-label="Welcome to SmartCards Study"
            >
              👋 Welcome to <br />
              <span className="text-blue-900">SmartCards Study</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-900 font-medium max-w-xl mx-auto leading-relaxed mb-8">
              Master any subject with our interactive flashcards with different languages. Flip cards to
              learn, revise quickly, and strengthen your memory — anytime,
              anywhere.
            </p>

            <motion.div
              className="h-2 rounded-full bg-blue-300 mx-auto max-w-xl"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: progressDuration / 1000, ease: "linear" }}
              style={{ transformOrigin: "left" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
