import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfServices from "./TermsOfServices";
import Flashcards from "./Flashcards.jsx";
import Blogs from "./Blogs.jsx";

function App() {
  const location = useLocation();

  // Hide Navbar on Home page (path '/'), show everywhere else
  const showNavbar = location.pathname !== "/";

  return (
    <div className="flex flex-col h-screen">
      {showNavbar && <Navbar />}
      <main className="flex-grow overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-services" element={<TermsOfServices />} />
          <Route path="/learnwithflashcards" element={<Flashcards />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
