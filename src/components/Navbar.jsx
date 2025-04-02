import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Folder, Briefcase, Edit, Mail, Wrench } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-screen sm:w-9/12 flex justify-center">
      <nav className="bg-[#101112] lg:bg-transparent py-8 lg:py-0 fixed top-0 left-0 right-0 mx-auto w-full flex justify-center z-10">
        <div className="bg-[#1c1c1c] p-2 lg:py-1 lg:px-3 rounded-lg lg:rounded-xl lg:rounded-t-none">
          <ul className="flex space-x-6 list-none">
            {[
              {
                to: "/",
                icon: <Home size={24} color="white" />,
                label: "Home",
              },
              {
                to: "/experience",
                icon: <Briefcase size={24} color="white" />,
                label: "Experience",
              },
              {
                to: "/projects",
                icon: <Folder size={24} color="white" />,
                label: "Projects",
              },
              {
                to: "/tools",
                icon: <Wrench size={24} color="white" />,
                label: "Tools",
              },
              {
                to: "/blogs",
                icon: <Edit size={24} color="white" />,
                label: "Blogs",
              },
              {
                to: "/contact",
                icon: <Mail size={24} color="white" />,
                label: "Contact",
              },
            ].map((item, index) => (
              <li
                key={index}
                className="group relative flex items-center justify-center rounded-lg cursor-pointer transition-all duration-300 mx-1.25 md:mx-2"
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center justify-center p-2 rounded-lg cursor-pointer transition-all duration-300 ${
                      isActive ? "bg-[#f46000]" : ""
                    }`
                  }
                >
                  {item.icon}
                </NavLink>
                {/* Tooltip */}
                <span className="bg-[#272829] absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 text-white text-xs px-2 py-1 rounded-md">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
