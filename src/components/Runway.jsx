import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Runway = () => {
  const [scrollY, setScrollY] = useState(0);
  const [maxScroll, setMaxScroll] = useState(1);
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const numLines = 20;

  useEffect(() => {
    const updateMaxScroll = () => {
      setMaxScroll(document.documentElement.scrollHeight - window.innerHeight);
    };

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const speed = Math.abs(currentScroll - lastScrollY);
      setScrollSpeed(speed);
      setScrollY(currentScroll);
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateMaxScroll);
    updateMaxScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateMaxScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    setTimeout(() => {
      setScrollY(0);
      setMaxScroll(document.documentElement.scrollHeight - window.innerHeight);
    }, 200);
  }, [location.pathname]);

  const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
  const planeY = (1 - progress) * window.innerHeight;

  return (
    <div className="fixed left-8 top-0 h-screen flex flex-col items-center justify-between">
      <div className="flex flex-col items-center h-full justify-between bg-[#1c1c1c]">
        {Array.from({ length: numLines }).map((_, index) => {
          const lineY = (index / numLines) * window.innerHeight;
          const isHovered = planeY <= lineY + 10;

          return (
            <div key={index} className="flex items-center gap-1">
              <div className="w-1.5 bg-[#1c1c1c]"></div>
              <div
                className={`w-1 h-6 transition-colors duration-300 ${
                  isHovered ? "bg-[#f46000]" : "bg-[#1c1c1c]"
                }`}
              ></div>
              <div className="w-1.5 bg-[#1c1c1c]"></div>
            </div>
          );
        })}
      </div>

      {/* Airplane Animation */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -progress * (window.innerHeight - 80) }}
        transition={{ type: "tween", ease: "linear" }}
        className="absolute bottom-0 flex flex-col items-center"
      >
        {/* Fire Animation */}
        <div
          className="w-10 h-10 bg-orange-500 rounded-full absolute bottom-[-30px] opacity-80 animate-fire"
          style={{
            transform: `scale(${Math.min(1, scrollSpeed / 20)})`,
            filter: `blur(${Math.min(10, scrollSpeed / 5)}px)`,
          }}
        ></div>

        {/* Airplane */}
        <img
          src="/aeroplane.svg"
          alt="Aeroplane"
          className="w-[80px] h-[80px] max-w-none"
        />
      </motion.div>
    </div>
  );
};

export default Runway;
