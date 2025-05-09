
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import logo from "../assets/logo.jpeg";
const useTypewriter = (text: string, speed: number) => {
  const [currentText, setCurrentText] = useState<string>("");
  const [isFinished, setIsFinished] = useState<boolean>(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setCurrentText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setIsFinished(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return { currentText, isFinished };
};

export default function Hero1() {
  const { currentText: firstPart, isFinished: firstPartFinished } = useTypewriter("Hii, I am ", 100);
  const { currentText: secondPart } = useTypewriter(firstPartFinished ? "AAkanksha Kumari" : "", 100);

  return (
    <div
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-center h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white"
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-800 to-purple-900 opacity-10 animate-[pulse_8s_ease-in-out_infinite]"
      ></div>
      <div className="absolute top-4 left-4 md:top-8 md:left-8">
        <Image 
          src={logo} 
          alt="Logo" 
          className="h-12 w-12 md:h-16 md:w-16 lg:h-[7rem] lg:w-[7rem] rounded-full"
        />
      </div>
      

      <div className="relative z-10 text-center md:text-left md:w-1/2 px-6 ">
      
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {firstPart}
          <span className="text-yellow-400">{secondPart}</span>
        </h1>

        <p className="text-lg md:text-xl mb-6 leading-relaxed mt-8">
          A <span className="font-semibold text-yellow-400">Full Stack Developer</span> passionate about transforming
          ideas into impactful digital solutions. From intuitive front-end designs to scalable back-end systems, I craft
          seamless user experiences with creativity and precision. Let’s build something{" "}
          <span className="font-semibold text-yellow-400">extraordinary</span> together.
        </p>

        <div className="flex gap-4 justify-center md:justify-start">
          <Link
            href="#portfolio"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-yellow-300 hover:scale-105 transition-transform"
          >
            View Projects
          </Link>
          <Link
            href="https://drive.google.com/file/d/1DVl7gD7TYbDE4Ca_RmAueMqop2SFAAdH/view?usp=drive_link"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-blue-400 hover:scale-105 transition-transform"
          >
            View Resume
          </Link>
        </div>
      </div>

    </div>
  );
}
