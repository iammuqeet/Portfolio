import React from "react";

import { Link } from "react-router-dom";

import FAQSection from "../components/FAQSection";

const experiences = [
  {
    id: "devsinc",
    company: "Devsinc",
    description:
      "Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.",
    date: "Jan 2022 – Present",
  },
  {
    id: "mapleHR",
    company: "Maple HR",
    description:
      "Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers.",
    date: "Jun 2020 – Dec 2022",
  },
  {
    id: "brightChamps",
    company: "BrightChamps",
    description:
      "Coding Instructor - help students learn coding skills, and also assist in the development of the curriculum.",
    date: "Jun 2020 – Dec 2022",
  },
];

const Experience = () => {
  const isHomePage = window.location.pathname === "/";
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto mt-15 sm:mt-15 md:mt-15 lg:mt-15">
        <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-center lg:text-start">
          Over 4 Years of Development{" "}
          <span className="text-[#f46000]">Expertise</span>
        </h1>

        <div className="mt-6 space-y-4">
          {experiences.map((exp, index) => (
            <Link
              key={exp.id}
              to={`/experience/${exp.id}`}
              className="block rounded-xl p-6 transition duration-300 ease-in-out
                        bg-[#1c1c1c] hover:bg-[#f46000] hover:shadow-lg text-white"
            >
              <h2 className="text-2xl font-bold">{exp.company}</h2>
              <p className="mt-2 text-sm">{exp.description}</p>
              <p className="mt-2 text-xs opacity-70">{exp.date}</p>
            </Link>
          ))}
        </div>
      </div>

      {!isHomePage && <FAQSection />}
    </div>
  );
};

export default Experience;
