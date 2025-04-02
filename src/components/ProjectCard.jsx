import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative bg-[#1c1c1c] rounded-xl overflow-hidden cursor-pointer group transition-all duration-300 z-0">
      {/* Image Container */}
      <div className="w-full h-48 md:h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Text Section */}
      <div className="p-4 bg-[#232323]">
        <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[#f46000]">
          {project.name}
        </h3>
        <p className="text-gray-400 text-sm">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
