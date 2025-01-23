import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import { SiJavascript, SiBootstrap, SiCplusplus, SiC } from "react-icons/si";

const languages = [
  { name: "C", icon: <SiC className="text-blue-600 text-6xl" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-400 text-6xl" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400 text-6xl" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-6xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-300 text-6xl" /> },
];

const LanguagesSection: React.FC = () => {
  return (
    <div className="text-white py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-yellow-300 mb-16 text-center">
          My Languages
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 items-center">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center p-6 rounded-lg border-2 border-gray-500 bg-gray-800 
              transition-transform duration-500 hover:scale-110 hover:shadow-lg hover:shadow-gray-900/40"
            >
              <div>{lang.icon}</div>
              <h4 className="mt-4 text-lg font-semibold">{lang.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguagesSection;
