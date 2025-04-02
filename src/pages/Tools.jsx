import React from "react";
import { skills } from "../constants/SkillsConstants";

import FAQSection from "../components/FAQSection";

export default function SkillsSection() {
  const isHomePage = window.location.pathname === "/";

  return (
    <div className="flex flex-col items-center justify-center mt-15 sm:mt-15 md:mt-15 lg:mt-6">
      <div className="max-w-5xl mx-auto px-0 sm:px-4 md:px-4 lg:px-0 lg:mt-10">
        <h2 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-3 text-center lg:text-start">
          Technologies I use for{" "}
          <span className="text-[#f46000]">Exceptional Results</span>
        </h2>
        <p className="text-lg font-medium text-gray-300 mb-5 text-center lg:text-start">Over the years, I have worked with a variety of technologies. Here are some of the technologies I have experience with:</p>

        {skills.map((category, index) => (
          <div
            key={index}
            className={`${index !== skills.length - 1 ? "mb-8" : ""}`}
          >
            <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map((skill, i) => {
                const IconComponent = skill.icon; // Get the stored icon reference
                return (
                  <div
                    key={i}
                    className="flex items-center bg-[#1c1c1c] p-4 rounded-xl transition-all hover:scale-105 cursor-pointer"
                  >
                    <span className="text-3xl">
                      <IconComponent color={skill.color} /> {/* Render Icon */}
                    </span>
                    <p className="ml-3 text-lg font-medium text-white">
                      {skill.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {!isHomePage && <FAQSection />}
    </div>
  );
}
