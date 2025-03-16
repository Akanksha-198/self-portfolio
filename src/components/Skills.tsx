"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaCode, FaLaptopCode, FaServer, FaTools } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiExpress,  SiFigma, SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  const skills = [
    {
      category: "Front-End",
      icon: <FaLaptopCode />,
      items: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
      ],
    },
    {
      category: "Back-End",
      icon: <FaServer />,
      items: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MySQL", icon: <GrMysql /> },
         { name: "MongoDB", icon: <SiMongodb /> },
      ],
    },
    {
      category: "Tools & Others",
      icon: <FaTools />,
      items: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Figma", icon: <SiFigma /> },
      ],
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="skills" className="py-20 px-6 md:px-12 lg:px-20 ">
     <div className="max-w-7xl mx-auto">
  <h2
    className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 text-center mb-16 flex items-center justify-center"
    data-aos="fade-up"
  >
    <FaCode className="mr-4 text-yellow-400" />
    My Skills
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {skills.map((skill, index) => (
      <div
        key={index}
        className="bg-gray-800 rounded-xl shadow-lg p-8 transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gray-750"
        data-aos="zoom-in"
        data-aos-delay={index * 100}
        onMouseEnter={() => setActiveSkill(index)}
        onMouseLeave={() => setActiveSkill(null)}
      >
        <div className="flex items-center mb-6">
          <span className="text-4xl mr-4 text-cyan-400">{skill.icon}</span>
          <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-300">
            {skill.category}
          </h3>
        </div>
        <ul className="space-y-3">
          {skill.items.map((item, idx) => (
            <li
              key={idx}
              className={`text-gray-300 text-lg flex items-center transition-all duration-300 ${
                activeSkill === index ? 'transform translate-x-2' : ''
              }`}
            >
              <span className="mr-3 text-yellow-500 transition-transform duration-300 transform group-hover:rotate-90">
                ▹
              </span>
              <span className="flex items-center">
                <span className="mr-2 text-xl transition-colors duration-300 group-hover:text-green-400">
                  {item.icon}
                </span>
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
