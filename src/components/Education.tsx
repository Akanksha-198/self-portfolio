"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGraduationCap, FaSchool, FaBook } from "react-icons/fa";

export default function Education() {
  const educationDetails = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Institute of Engineering and Technology, Lucknow",
      duration: "2021 - 2025",
      description:
        "Focused on core computer science concepts including algorithms, data structures, and web development. Achieved a strong academic record with a SGPA of 8.55.",
      icon: <FaGraduationCap className="text-5xl text-cyan-400" />,
    },
    {
      degree: "Senior Secondary Education (12th Grade)",
      institution: "DAV Public School",
      duration: "2019 - 2021",
      description:
        "Studied core subjects including Mathematics, Physics, and Chemistry, achieving excellent grades.",
      icon: <FaBook className="text-5xl text-cyan-400" />,
    },
    {
      degree: "Secondary Education (10th Grade)",
      institution: "DAV Public School",
      duration: "2017 - 2019",
      description:
        "Completed foundational studies with a focus on Science and Mathematics, earning distinction grades.",
      icon: <FaSchool className="text-5xl text-cyan-400" />,
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="education" className="py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 text-center mb-16 flex items-center justify-center"
          data-aos="fade-up"
        >
          <FaGraduationCap className="mr-4 text-yellow-400" />
          My Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {educationDetails.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg p-8 transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gray-750"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center mb-6">
                {edu.icon}
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-300 ml-4">
                  {edu.degree}
                </h3>
              </div>
              <h4 className="text-lg text-blue-300 mb-4">{edu.institution}</h4>
              <p className="text-sm text-yellow-400 mb-4">{edu.duration}</p>
              <p className="text-gray-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
