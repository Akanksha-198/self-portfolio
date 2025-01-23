// components/Experience.js
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Experience() {
  const experiences = [
    {
      role: "Front-End Developer Intern",
      company: "Tech Solutions",
      duration: "Jan 2024 - Jun 2024",
      description:
        "Developed responsive user interfaces using React.js and Tailwind CSS, optimized performance, and collaborated with the design team.",
    },
    {
      role: "Back-End Developer Intern",
      company: "Innovate Hub",
      duration: "Jul 2023 - Dec 2023",
      description:
        "Designed and implemented RESTful APIs using Node.js and Express.js, and integrated databases with MongoDB.",
    },
    {
      role: "Web Development Trainee",
      company: "SkillUp Academy",
      duration: "Feb 2023 - May 2023",
      description:
        "Completed hands-on training in HTML, CSS, JavaScript, and React, building multiple projects for real-world applications.",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="experience" className=" py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          data-aos="fade-up"
        >
          My Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md p-6 hover:scale-105 transform transition duration-300 hover:shadow-xl"
              data-aos="zoom-in"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {exp.role}
              </h3>
              <h4 className="text-lg text-gray-300 mb-4">{exp.company}</h4>
              <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
