// components/Experience.js
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Experience() {
  const experiences = [
    {
      role: "Front-End Developer Intern",
      company: "Apna Consultant ",
      duration: "December 2024 -February 2025",
      description:
        "Developed responsive user interfaces using Next.js and Tailwind CSS, optimized performance, and collaborated with the design team.",
      link:"https://drive.google.com/file/d/1LpPtB8ndkWErVXOeRop8_KnsEKYQFNtM/view?usp=sharing",
    },
   
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="experience" className=" py-16 px-6 md:px-12 lg:px-20 sm:p-0">
      <div className="max-w-7xl mx-auto ">
      <h2 className="text-5xl font-extrabold text-yellow-300 mb-16 text-center ">
      My Experience
        </h2>
        
        <div className="flex justify-center items-center ">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md p-6 hover:scale-105 transform transition duration-300 hover:shadow-xl"
              data-aos="zoom-in" 
             
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2" onClick={() => window.open(exp.link)}>
                {exp.role}
              </h3>
              <h4 className="text-lg text-gray-300 mb-4" onClick={() => window.open("https://apnaconsultant.in/")}>{exp.company}</h4>
              <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>
              <p className="text-gray-300 sm:text-[0.5rem]">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
