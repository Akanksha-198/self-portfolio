import Image from "next/image";
import React from "react";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RiNextjsFill, RiNodejsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import cpp from "@/assets/cpp.png"
import problemSolving from "@/assets/cpp1.png";
import webDevelopment from "@/assets/cpp2.png";

type SpecializationItem = {
  title: string;
  description: string;
  image: any;
};

type TechItem = {
  icon: React.ReactNode;
  name: string;
};

const Technologies: TechItem[] = [
  { icon: <FaReact className="text-[#61DAFB] text-5xl" />, name: "React" },
  { icon: <RiNextjsFill className="text-white text-5xl" />, name: "Next.js" },
  { icon: <RiTailwindCssFill className="text-[#06B6D4] text-5xl" />, name: "Tailwind CSS" },
  { icon: <RiNodejsLine className="text-[#339933] text-5xl" />, name: "Node.js" },
  { icon: <SiMongodb className="text-[#47A248] text-5xl" />, name: "MongoDB" },
  { icon: <GrMysql className="text-[#4479A1] text-5xl" />, name: "MySQL" },
  { icon: <DiJavascript className="text-[#F7DF1E] text-5xl" />, name: "JavaScript" },
];

const specializations: SpecializationItem[] = [
  {
    title: "Data Structures & Algorithms",
    description:
      "Skilled in solving complex DSA problems using C++ to create efficient, scalable, and optimized solutions.",
    image: cpp,
  },
  {
    title: "Problem Solving",
    description:
      "Expert in solving algorithmic problems across various platforms like Codeforces, CodeChef, and LeetCode.",
    image: problemSolving,
  },
  {
    title: "Web Development",
    description:
      "Experienced in building scalable full-stack web applications using MongoDB, Express.js, React, Node.js,Next.js and Tailwind CSS.",
    image: webDevelopment,
  },
];

const Hero2: React.FC = () => {
  return (
    <div className="text-white py-20 px-4 ">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-5xl font-extrabold text-yellow-300 mb-16 text-center ">
          Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 mb-20 items-center ">
          {Technologies.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center p-6 rounded-lg border-2 border-gray-500 bg-gray-800 
              transition-transform duration-500 hover:scale-110 hover:shadow-lg hover:shadow-gray-900/40 animate-float"
            >
              <div>{item.icon}</div>
              <h4 className="mt-4 text-lg font-semibold">{item.name}</h4>
            </div>
          ))}
        </div>

        {/* Specializations Section */}
        <section id="specializations" className="py-16 bg-gray-900 text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-500 mb-8 flex items-center justify-center">
        My Specialization
      </h2>
      <div className="grid grid-rows-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {specializations.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-6 p-10 rounded-xl bg-gray-800 
              transition-transform duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-gray-900/40 animate-float"
          >
            {/* Image Section */}
            <div className="w-24 h-24 rounded-full bg-gray-700 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            {/* Title */}
            <h3 className="text-3xl font-semibold text-yellow-400">
              {item.title}
            </h3>
            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
      </div>
    </div>
  );
};

// Floating Animation CSS
const styles = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
`;

const AddStyles = () => <style>{styles}</style>;

export default () => (
  <>
    <AddStyles />
    <Hero2 />
  </>
);
