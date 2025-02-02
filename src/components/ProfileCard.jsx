import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen mt-10 md:mt-0">
      <div className="bg-[#232323] p-10 rounded-2xl shadow-lg w-full max-w-sm md:max-w-full lg:w-96 flex flex-col items-center box-border">
        {/* Profile Image */}
        <div className="text-center max-w-sm">
          <div className="overflow-hidden rounded-xl">
            <img
              src="profile.png"
              alt="Muqeet Ahmad"
              className="w-full rounded-xl"
            />
          </div>

          {/* Name & Title */}
          <h2 className="text-white text-2xl font-bold mt-4">Muqeet Ahmad</h2>
          <p className="text-white text-sm mt-1">Senior Software Engineer</p>
          <p className="text-white text-sm">Lahore, Pakistan</p>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4 mt-4">
            <div className="p-2 bg-transparent rounded hover:bg-[#904CEC] transition duration-400 ease-in-out cursor-pointer">
              <Github size={18} className="text-white" />
            </div>
            <div className="p-2 bg-transparent rounded hover:bg-[#904CEC] transition duration-400 ease-in-out cursor-pointer">
              <Linkedin size={18} className="text-white" />
            </div>
            <div className="p-2 bg-transparent rounded hover:bg-[#904CEC] transition duration-400 ease-in-out cursor-pointer">
              <Mail size={18} className="text-white" />
            </div>
          </div>

          {/* CTA Button */}
          <button
            className="bg-[#904CEC] text-white text-sm font-medium px-12 py-2 rounded-lg mt-12 
            hover:bg-[#7A3CC9] transition duration-300 ease-in-out cursor-pointer !important"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
