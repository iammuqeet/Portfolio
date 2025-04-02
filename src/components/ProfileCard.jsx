import React from "react";
import { useNavigate } from "react-router-dom";

import { Github, Linkedin, Mail } from "lucide-react";

const ProfileCard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center mt-30 md:mt-28 lg:mt-100">
      <div className="bg-[#1c1c1c] lg:fixed p-10 rounded-2xl shadow-lg w-full max-w-sm md:max-w-full lg:w-96 flex flex-col items-center box-border">
        {/* Profile Image */}
        <div className="text-center max-w-sm">
          <div className="overflow-hidden rounded-xl">
            <img
              src="profile2.png"
              alt="Muqeet Ahmad"
              className="w-full rounded-xl"
            />
          </div>

          {/* Name & Title */}
          <h2 className="text-white text-2xl lg:text-4xl font-bold mt-4">
            Muqeet Ahmad
          </h2>
          <p className="text-white text-m mt-1">Senior Software Engineer</p>
          <p className="text-white text-m">Lahore, Pakistan</p>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://github.com/iammuqeet"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-transparent rounded-lg hover:bg-[#f46000] transition duration-400 ease-in-out cursor-pointer"
            >
              <Github size={18} className="text-white" />
            </a>

            <a
              href="https://www.linkedin.com/in/iammuqeet-ahmad/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-transparent rounded-lg hover:bg-[#f46000] transition duration-400 ease-in-out cursor-pointer"
            >
              <Linkedin size={18} className="text-white" />
            </a>

            <div
              className="p-2 bg-transparent rounded-lg hover:bg-[#f46000] transition duration-400 ease-in-out cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              <Mail size={18} className="text-white" />
            </div>
          </div>

          {/* CTA Button */}
          <button
            className="bg-[#f46000] text-white text-sm font-medium px-12 py-2 rounded-lg mt-12 
            hover:bg-[#d94d00] transition duration-300 ease-in-out cursor-pointer !important"
            onClick={() => navigate("/contact")}
          >
            Let's Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
