import React from "react";
import { Link } from "react-router-dom";

import ProjectCard from "../components/ProjectCard";
import FAQSection from "../components/FAQSection";

const projects = [
  {
    id: "zedapp",
    name: "ZedApp",
    description: "Luxury Ride-hailing Mobile App.",
    image: "/assets/Projects/project-1.png",
  },
  {
    id: "4wrd",
    name: "4wrd",
    description: "Multi-tenant SaaS platform.",
    image: "/assets/Projects/4wrd/4wrd-1.png",
  },
  {
    id: "maplehr",
    name: "MapleHR",
    description: "HRMS for employees.",
    image: "/assets/Projects/MapleHr/maplehr-1.png",
  },
  {
    id: "ndr",
    name: "NDR",
    description: "Debt Relief System.",
    image: "/assets/Projects/project-4.jpeg",
  },
];

const Projects = () => {
  const isHomePage = window.location.pathname === "/";

  return (
    <div className="max-w-5xl flex flex-col items-center justify-center">
      <section className="p-0 bg-[#111111] text-white text-center lg:text-start my-5">
        <div className="container mx-auto px-0 sm:px-4 md:px-4 lg:px-0">
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mt-12">
            Recent Projects and{" "}
            <span className="text-[#f46000]">Achievements</span>
          </h1>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
            {projects.map((project, index) => (
              <Link key={project.id} to={`/projects/${project.id}`}>
                <ProjectCard key={index} project={project} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {!isHomePage && <FAQSection />}
    </div>
  );
};

export default Projects;
