"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Achievements() {
  const achievements = [
    {
      title: "LeetCode Achiever",
      year: "2024",
      description: "Solved 200+ questions on LeetCode with a rating of 1600+.",
    },
    {
      title: "CodeForces Contributor",
      year: "2024",
      description: "Solved 44+ problems on CodeForces with a rating of 956.",
    },
    {
      title: "CodeChef 3-Star Coder",
      year: "2024",
      description: "Achieved a 3-star rating on CodeChef with a rating of 1600+.",
    },
    // {
    //   title: "Best Project Award",
    //   year: "2023",
    //   description:
    //     "Developed a Social Media Platform using React and Redux, recognized for innovation and design.",
    // },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="achievements" className="py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-500 mb-8 flex items-center justify-center"
          data-aos="fade-up"
        >
          My Achievements & Awards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transform transition duration-300 hover:shadow-xl"
              data-aos="zoom-in"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {achievement.title}
              </h3>
              <p className="text-lg text-gray-300 mb-4">{achievement.year}</p>
              <p className="text-gray-200">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
