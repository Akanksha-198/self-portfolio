// "use client";

// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { FaBriefcase } from "react-icons/fa";

// export default function Experience() {
//   const experiences = [
//     {
//       role: "Front-End Developer Intern",
//       company: "Apna Consultant",
//       duration: "December 2024 - February 2025",
//       description:
//         "Developed responsive user interfaces using Next.js and Tailwind CSS,  optimized performance, and collaborated with the design team.",
//       link: "https://drive.google.com/file/d/1LpPtB8ndkWErVXOeRop8_KnsEKYQFNtM/view?usp=sharing",
//     },
//   ];

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div id="experience" className="text-white py-20 px-4 ">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-5xl font-extrabold text-yellow-300 mb-16 text-center justify-center">
//           My Experience
//         </h2>
//         <div className="flex justify-center items-center">
//         {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center "> */}
//         <div className=" w-[5rem] sm:w-full">
//           {experiences.map((exp, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 rounded-lg shadow-md p-6 hover:scale-105 transform transition duration-300 hover:shadow-xl border-2 border-gray-500"
//               data-aos="zoom-in"
//             >
//               <div className="flex items-center mb-4">
//                 <FaBriefcase className="text-blue-400 text-3xl mr-4 cursor-pointer" onClick={() => window.open(exp.link)} />
//                 <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-300 cursor-pointer" onClick={() => window.open(exp.link)}>
//                   {exp.role}
//                 </h3>
//               </div>
//               <h4 className="text-xl text-yellow-300 mb-2 cursor-pointer" onClick={() => window.open("https://apnaconsultant.in/")}>
//                 {exp.company}
//               </h4>
//               <p className="text-md text-gray-400 mb-4">{exp.duration}</p>
//               <div className="text-gray-300 text-md">{exp.description}</div>
//             </div>
//           ))}
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      role: "Front-End Developer Intern",
      company: "Apna Consultant",
      duration: "December 2024 - February 2025",
      description:
        "Developed responsive user interfaces using Next.js and Tailwind CSS, optimized performance, and collaborated with the design team.",
      link: "https://drive.google.com/file/d/1LpPtB8ndkWErVXOeRop8_KnsEKYQFNtM/view?usp=sharing",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="experience" className="text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-yellow-300 mb-16 text-center">
          My Experience
        </h2>
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-md p-6 hover:scale-105 transform transition duration-300 hover:shadow-xl border-2 border-gray-500"
                data-aos="zoom-in"
              >
                <div className="flex items-center mb-4">
                  <FaBriefcase className="text-blue-400 text-3xl mr-4 cursor-pointer" onClick={() => window.open(exp.link)} />
                  <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-300 cursor-pointer" onClick={() => window.open(exp.link)}>
                    {exp.role}
                  </h3>
                </div>
                <h4 className="text-xl text-yellow-300 mb-2 cursor-pointer" onClick={() => window.open("https://apnaconsultant.in/")}>
                  {exp.company}
                </h4>
                <p className="text-md text-gray-400 mb-4">{exp.duration}</p>
                <div className="text-gray-300 text-md">{exp.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}