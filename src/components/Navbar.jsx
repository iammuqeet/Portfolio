import React from "react";
import { Home, Folder, Briefcase, Edit, Mail } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-screen flex justify-center">
      <nav className="bg-[#272829] my-8 p-2 fixed top-0 left-0 right-0 mx-auto max-w-[400px] w-full flex justify-center rounded-lg">
        <ul className="flex space-x-6 list-none">
          {[
            { icon: <Home size={24} color="white" />, label: "Home" },
            { icon: <Folder size={24} color="white" />, label: "Projects" },
            {
              icon: <Briefcase size={24} color="white" />,
              label: "Experience",
            },
            { icon: <Edit size={24} color="white" />, label: "Thoughts" },
            { icon: <Mail size={24} color="white" />, label: "Contact" },
          ].map((item, index) => (
            <li
              key={index}
              className="group relative flex items-center justify-center p-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#904CEC]"
            >
              {item.icon}
              {/* Tooltip */}
              <span className="bg-[#272829] absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 text-white text-xs px-2 py-1 rounded-md">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
