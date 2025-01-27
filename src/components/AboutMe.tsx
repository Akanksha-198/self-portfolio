
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import me2 from "@/assets/me1.jpeg";
import Link from "next/link";

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById("about");
    if (aboutSection) observer.observe(aboutSection);

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, []);

  return (
    <div id="about" className="py-24 px-6 md:px-12 lg:px-20 bg-gray-900 pb-[8rem]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className={`flex justify-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
          <Image
            src={me2}
            alt="Akanksha Kumari"
            className="rounded-xl shadow-xl w-80 h-80 md:w-[450px] md:h-[490px] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>

        <div className={`transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-8 transition-colors duration-300 ease-in-out hover:text-yellow-300">
            About Me
          </h2>
          <div className="space-y-6">
            <p className={`text-lg text-gray-300 leading-relaxed transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Hi, I&#39;m<span className="text-blue-400 font-semibold">Akanksha Kumari</span>, a passionate front-end developer with a knack for creating intuitive and visually appealing web interfaces. My expertise spans:
            </p>
            <ul className={`list-disc list-inside text-gray-300 space-y-2 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <li>HTML5, CSS3, and JavaScript (ES6+)</li>
              <li>Modern frameworks like React and Next.js</li>
              <li>Styling with Tailwind CSS and SASS</li>
              <li>Version control with Git and GitHub</li>
            </ul>
            <p className={`text-lg text-gray-300 leading-relaxed transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Currently, I&#39;m expanding my horizons by delving into backend development. I&#39;m learning:
            </p>
            <ul className={`list-disc list-inside text-gray-300 space-y-2 transition-all duration-700 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <li>Node.js and Express.js for server-side programming</li>
              <li>MongoDB for database management</li>
              <li>RESTful API design and implementation</li>
            </ul>
            <p className={`text-lg text-gray-300 leading-relaxed transition-all duration-700 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              My goal is to become a versatile full-stack developer, capable of crafting end-to-end solutions that not only meet but exceed user expectations.
            </p>
          </div>
          <Link
            href="#resume"
            className={`inline-block bg-blue-500 text-white px-8 py-3 rounded-lg font-medium mt-8 transition-all duration-500 ease-in-out hover:bg-blue-400 hover:shadow-lg transform hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
