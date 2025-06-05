import { useState } from "react";
import { motion } from "framer-motion";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import { FiHelpCircle, FiCheckCircle } from "react-icons/fi"; // icons for labels

import flashcards from "./flashcardsdetails.json";

export default function FlashcardApp() {
  const [subject, setSubject] = useState(() => {
    const saved = localStorage.getItem("selectedSubject");
    return saved && flashcards[saved] ? saved : Object.keys(flashcards)[0];
  });
  const [index, setIndex] = useState(() =>
    Math.floor(Math.random() * flashcards[Object.keys(flashcards)[0]].length)
  );
  const [flipped, setFlipped] = useState(false);

  const cards = flashcards[subject];
  const card = cards[index];
  const subjects = Object.keys(flashcards);

  const getRandomIndex = () => {
    let newIndex = index;
    while (newIndex === index) {
      newIndex = Math.floor(Math.random() * cards.length);
    }
    return newIndex;
  };

  const handleNext = () => {
    const randomIndex = getRandomIndex();
    setIndex(randomIndex);
    setFlipped(false);
  };

  const handlePrevious = () => {
    setIndex((index - 1 + cards.length) % cards.length);
    setFlipped(false);
  };

  return (
    <>
      <style>{`
        @keyframes frontGradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes backGradientShift {
          0% { background-position: 100% 50%; }
          50% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>

      <div className="gap-1 h-full bg-gradient-to-tr from-blue-100 to-indigo-200 flex flex-col items-center justify-center p-4 overflow-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-800 select-none text-center leading-tight">
          <span className="text-indigo-600">SmartCards</span> - Flashcard Study
        </h1>

        <div className="mt-2 mb-4 mx-3 max-w-full">
          <div className="flex space-x-2 overflow-x-auto scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-indigo-100 md:overflow-visible md:space-x-2 md:flex-wrap md:justify-center">
            {subjects.map((subj) => (
              <button
                key={subj}
                onClick={() => {
                  setSubject(subj);
                  localStorage.setItem("selectedSubject", subj); // ✅ Save to localStorage
                  setIndex(0);
                  setFlipped(false);
                }}

                className={`
      px-4 py-1 rounded-2xl text-sm shadow-sm flex-shrink-0 transition-all duration-300 ease-in-out
      ${subject === subj
                    ? `bg-gradient-to-r from-indigo-700 via-indigo-700 to-indigo-800
             text-white
             shadow-lg shadow-indigo-700/60
             filter brightness-110
             ring-2 ring-indigo-400
             `
                    : `bg-white border border-indigo-400 text-indigo-600
             hover:bg-gradient-to-r hover:from-indigo-100 hover:via-indigo-50 hover:to-indigo-100
             hover:text-indigo-700
             hover:shadow-md hover:shadow-indigo-300
             active:scale-95 active:brightness-90
             `
                  }
      md:mb-2
      select-none
      cursor-pointer
      focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1
    `}
              >
                {subj.charAt(0).toUpperCase() + subj.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="relative w-96 h-60 perspective-1000">
          <motion.div
            className="absolute w-full h-full rounded-xl shadow-2xl cursor-pointer"
            onClick={() => setFlipped(!flipped)}
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ transformStyle: "preserve-3d" }}
          >

       <div
  className={`absolute top-3 left-1/3 px-4 py-1 rounded-full text-sm font-semibold select-none shadow-lg
    ${
      flipped
        ? "bg-gradient-to-r from-purple-600 to-purple-800 text-white"
        : "bg-gradient-to-r from-indigo-400 to-indigo-600 text-white"
    }
  `}
  style={{
    zIndex: 10,
    userSelect: "none",
    transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
    minWidth: "120px",
    maxWidth: "160px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  }}
>
  {flipped ? (
    <>
      <FiCheckCircle className="w-5 h-5 mr-2" />
      <span>Answer</span>
    </>
  ) : (
    <>
      <FiHelpCircle className="w-5 h-5 mr-2" />
      <span>Question</span>
    </>
  )}
</div>


            <div
              className="absolute w-full h-full rounded-xl flex items-center justify-center text-center text-xl font-semibold text-indigo-900 p-6 whitespace-pre-wrap break-words overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #d8b4fe 0%, #93c5fd 100%)",
                backgroundSize: "200% 200%",
                animation: "frontGradientShift 6s ease infinite",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              {card.question}
            </div>

            <div
              className="absolute w-full h-full rounded-xl flex items-center justify-center text-center text-white text-xl font-semibold text-indigo-900 p-6 whitespace-pre-wrap break-words overflow-hidden"
              style={{
                transform: "rotateY(180deg)",
                background:
                  "linear-gradient(135deg,rgb(139, 103, 248) 0%,rgb(86, 160, 250) 100%)",
                backgroundSize: "200% 200%",
                animation: "backGradientShift 6s ease infinite",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              {card.answer}
            </div>
          </motion.div>
        </div>

        <div className="mt-6 flex space-x-6">
          <button
            onClick={handlePrevious}
            className="
              flex items-center space-x-2 px-4 py-2 rounded-full border-2 border-gray-700 text-gray-700
              hover:bg-gray-100 hover:border-indigo-500 hover:shadow-lg hover:scale-105
              active:scale-95 active:shadow-sm
              transition-transform transition-shadow transition-colors duration-200
              select-none
            "
          >
            <GrFormPreviousLink className="h-5 w-5 text-indigo-500" />
            <span className="font-medium text-indigo-500 ">Previous</span>
          </button>

          <button
            onClick={handleNext}
            className="
              flex items-center space-x-3 px-6 py-2 rounded-full bg-indigo-600 text-white border-2 border-indigo-600 font-semibold
              hover:bg-indigo-800 hover:shadow-lg hover:border-white hover:scale-105
              active:scale-95 active:shadow-md
              transition-transform transition-shadow transition-colors duration-200
              select-none
            "
          >
            <span>Next</span>
            <GrFormNextLink size={24} />
          </button>
        </div>
      </div>
    </>
  );
}
