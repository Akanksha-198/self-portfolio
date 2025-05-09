"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFileAlt, FaDownload } from "react-icons/fa";
import Link from "next/link";

export default function Resume() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="resume" className="py-16 px-6 md:px-12 lg:px-20 w-full ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-500 mb-8 flex items-center justify-center"
          data-aos="fade-up"
        >
          <FaFileAlt className="mr-4 text-yellow-400" />
          My Resume
        </h2>
        <p className="text-lg text-gray-300 mb-10" data-aos="fade-up">
          View my professional experience and qualifications.
        </p>
        <div 
          className="w-full max-w-xl mx-auto bg-gray-800 rounded-xl p-8 shadow-lg transform transition duration-500 hover:shadow-2xl"
          data-aos="zoom-in"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-300">
              Akanksha Kumari
            </h3>
            <span className="text-cyan-400">Full Stack Developer</span>
          </div>
          <hr className="border-gray-600 mb-6" />
          <p className="text-gray-300 mb-6">
            Passionate developer with expertise in modern web technologies and a strong foundation in computer science.
          </p>
          <Link
            href="https://drive.google.com/file/d/1DVl7gD7TYbDE4Ca_RmAueMqop2SFAAdH/view?usp=drive_link"  
            download="Akanksha_Kumari_Resume.pdf"
            className="inline-flex items-center text-blue-400 hover:text-cyan-300 transition duration-300"
            data-aos="fade-up"
          >
            <FaDownload className="mr-2" />
            <span className="border-b border-blue-400 hover:border-cyan-300">
              Download Full Resume (PDF)
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
