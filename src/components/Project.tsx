"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ztake from "@/assets/ztake.png"
import Image from "next/image";
import myntra from "@/assets/myntra.png"
import currency from "@/assets/currency.png"
import social from "@/assets/social.png"
import climate from "@/assets/climate.png"
import news from "@/assets/news.png"


export default function Portfolio() {
  const projects = [
    {
      title: "Ztake Clone",
      description: "A clone of the Ztake website built using React and Tailwind CSS.",
      link: "https://github.com/Akanksha-198/ztakeClone",
      image: ztake, 
    },
    {
      title: "Myntra Clone",
      description: "A replica of the Myntra e-commerce platform with product filtering.",
      link: "https://github.com/Akanksha-198/Myntra_Clone",
      image: myntra
    },
    {
      title: "Weather App",
      description: "A weather forecasting app using APIs for real-time updates.",
      link: "https://github.com/Akanksha-198/weather-forecasting",
      image: climate
    },
    {
      title: "Social Media Site",
      description: "A social media platform built with React and Redux.",
      link: "https://github.com/Akanksha-198/Social-Media-site",
      image:social
    },
    {
      title: "News Reporting App",
  description: "A web application that provides real-time news updates from various categories using APIs. Users can filter news by topics and regions.",
  
      link: "https://github.com/Akanksha-198",
      image:news
    },
    {
      title: " Currency-Converter",
      description: " A web app for quick and accurate currency conversion using real-time exchange rates.",
      link: "https://github.com/Akanksha-198/Currency-Converter",
      image:currency
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="portfolio" className="py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-16"
          data-aos="fade-up"
        >
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
             
             <div className="h-40 bg-cover bg-center relative p-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="rounded-2xl px-3"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-5">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
