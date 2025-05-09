"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ztake from "@/assets/ztake.png"
import Image from "next/image";
import myntra from "@/assets/myntra.png"
import lumeweb from "@/assets/lumeweb.png"
import foodie from "@/assets/foodie.png"
import currency from "@/assets/currency.png"
import social from "@/assets/social.png"
import climate from "@/assets/climate.png"
import news from "@/assets/news.png"
import Link from "next/link";

export default function Portfolio() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

 
  const projects = [
  {
    title: "Foodie",
    description: "A full-stack food delivery app. It includes user authentication, restaurant listings, a cart, and real-time order tracking.",
    link: "https://github.com/Akanksha-198/Currency-Converter",
    image: foodie,
  },
  {
    title: "LumeWeb",
    description: "A full-stack digital agency website. Features include dynamic service pages, contact forms, and client showcases.",
    link: "https://github.com/Akanksha-198/Currency-Converter",
    image: lumeweb,
  },
  {
    title: "Ztake Clone",
    description: "A clone of the Ztake website, built using React and Tailwind CSS.",
    link: "https://github.com/Akanksha-198/ztakeClone",
    image: ztake,
  },
  {
    title: "Weather App",
    description: "A weather forecasting app that uses APIs for real-time updates.",
    link: "https://github.com/Akanksha-198/weather-forecasting",
    image: climate,
  },
  {
    title: "News Reporting App",
    description: "A web application that provides real-time news updates from various categories using APIs. Users can filter news by topic and region.",
    link: "https://github.com/Akanksha-198",
    image: news,
  },
  {
    title: "Currency-Converter",
    description: "A web app for quick and accurate currency conversions using real-time exchange rates.",
    link: "https://github.com/Akanksha-198/Currency-Converter",
    image: currency,
  },
];
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayedProjects = isSmallScreen ? projects.slice(0, 3) : projects;

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
          {displayedProjects.map((project, index) => (
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
        <div className="flex justify-center mt-10">
          <Link href="https://github.com/Akanksha-198" className="bg-yellow-400 text-black px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-yellow-300 hover:scale-105 transition-transform">
            View More Projects
          </Link>
        </div>
      </div>
    </div>
  );
}