import "./App.css";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";

function App() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1DgBNiKO0stPgD7JkwT_-16Lyiby4sTRu";
    link.download = "Muqeet_Ahmad_Resume.pdf";
    link.click();
  };

  return (
    <>
      <Navbar />
      <ProfileCard />
      <button
        onClick={handleDownload}
        className="bg-[#904CEC] text-white text-sm font-medium px-12 py-2 rounded-lg 
          fixed bottom-0 right-0 m-10 hover:bg-[#7A3CC9] transition duration-300 ease-in-out cursor-pointer"
      >
        Download Resume
      </button>
    </>
  );
}

export default App;
