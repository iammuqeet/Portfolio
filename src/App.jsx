import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Tools from "./pages/Tools";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import Runway from "./components/Runway";
import ExperienceDetail from "./components/ExperienceDetail";
import ProjectDetail from "./components/ProjectDetail";
import NotFound from "./pages/NotFound";

function AppContent() {
  const location = useLocation();
  const isNotFound =
    location.pathname !== "/" &&
    !["/projects", "/experience", "/tools", "/blogs", "/contact"].some((path) =>
      location.pathname.startsWith(path)
    );

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1DgBNiKO0stPgD7JkwT_-16Lyiby4sTRu";
    link.download = "Muqeet_Ahmad_Resume.pdf";
    link.click();
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Show Navbar only if it's NOT the NotFound page */}
      {!isNotFound && <Navbar />}

      <div className="hidden lg:block">
        <Runway />
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-center w-full flex-grow">
        {!isNotFound ? (
          <div className="w-full lg:w-9/12 p-4 lg:mt-8 md:mt-8 flex flex-col lg:flex-row lg:min-w-min">
            {/* ProfileCard Section */}
            <div className="w-full md:w-full lg:w-1/3 px-0 sm:px-4 md:px-4 lg:px-4 md:relative md:mb-6 lg:sticky lg:top-50">
              <ProfileCard />
            </div>

            {/* Page Content - FIXED to not go behind the ProfileCard */}
            <div className="w-full lg:w-2/3 px-0 sm:px-4 md:px-4 lg:px-4 lg:ml-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experience/:id" element={<ExperienceDetail />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        ) : (
          <Routes>
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </div>

      {/* Floating Resume Download Button (Hidden on NotFound) */}
      {!isNotFound && (
        <div className="fixed bottom-0 right-0 m-10">
          <button
            onClick={handleDownload}
            className="bg-[#f46000] text-white text-sm font-medium px-3 py-2 rounded-lg
           hover:bg-[#d94d00] transition duration-300 ease-in-out cursor-pointer"
          >
            Download Resume
          </button>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
