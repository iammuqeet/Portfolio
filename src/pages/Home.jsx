import React from "react";

import { MoveRight } from "lucide-react";
import FAQSection from "../components/FAQSection";

import Projects from "../pages/Projects";
import Tools from "../pages/Tools";
import Experience from "./Experience";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:mt-20">
      <section className="flex flex-col items-center text-center lg:items-start lg:text-start text-white px-0 sm:px-6 md:px-12 lg:px-0 md:py-0 ">
        <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mt-6 lg:mt-0">
          Transforming Your Ideas into{" "}
          <span className="text-[#f46000]">Reality</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl">
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </p>

        {/* Stats Section */}
        <div className="flex flex-nowrap sm:flex-nowrap justify-center gap-12 mt-10">
          <div className="text-center">
            <span className="text-[50px] md:text-[70px] font-bold">+4</span>
            <p className="text-white text-sm md:text-base">
              YEARS OF EXPERIENCE
            </p>
          </div>
          <div className="text-center">
            <span className="text-[50px] md:text-[70px] font-bold">+11</span>
            <p className="text-white text-sm md:text-base">
              PROJECTS COMPLETED
            </p>
          </div>
          <div className="text-center">
            <span className="text-[50px] md:text-[70px] font-bold">+7</span>
            <p className="text-white text-sm md:text-base">WORLDWIDE CLIENTS</p>
          </div>
        </div>
      </section>
      <Experience />
      <Projects />
      <Tools />
      <FAQSection />
    </div>
  );
};

export default Home;
