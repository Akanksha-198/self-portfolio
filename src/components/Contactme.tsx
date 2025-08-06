// "use client";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";






// export default function Contact() {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div
//       id="contact"
//       className="py-16 px-6 md:px-12 lg:px-20 w-full"
//     >
//       <div className="max-w-7xl mx-auto">
//         <h2
//           className="text-4xl md:text-5xl font-extrabold text-yellow-400 text-center mb-12"
//           data-aos="fade-up"
//         >
//           Get in Touch
//         </h2>
//         <div className="flex justify-center">
//           {/* <form
//             action="#"
//             method="POST"
//             className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl w-full md:w-2/3 lg:w-[70%] transform transition-all duration-300"
//             data-aos="zoom-in"
//           >
//             <div className="mb-4">
//               <label
//                 htmlFor="name"
//                 className="block text-gray-300 font-bold mb-2 text-lg"
//               >
//                 Your Name
//               </label>
//               <div className="relative">
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-inner"
//                   required
//                 />
//                 <span className="absolute top-3 right-3 text-gray-400">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M16 14l-4-4m0 0l-4 4m4-4v12"
//                     />
//                   </svg>
//                 </span>
//               </div>
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="email"
//                 className="block text-gray-300 font-bold mb-2 text-lg "
//               >
//                 Your Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-inner"
//                 required
//               />
//             </div>

//             <div className="mb-6">
//               <label
//                 htmlFor="message"
//                 className="block text-gray-300 font-bold mb-2 text-lg"
//               >
//                 Your Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={4}
//                 className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-inner"
//                 required
//               ></textarea>
//             </div>

//             <div className="flex justify-center">
//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white font-bold py-3 px-6 rounded-lg hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg flex items-center h-[1.2rem]"
//               >
//                 <span>Send Message</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 ml-2"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M10 14l2-2m0 0l2 2m-2-2v8m6 4H6a2 2 0 01-2-2V6a2 2 0 012-2h7m8 10v4m0 0l-4-4m4 4L14 14"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </form> */}
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import { useEffect } from "react";
import AOS from "aos";
import Link from "next/link";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="contact"
      className="py-16 px-6 md:px-12 lg:px-20 w-full"
    >
      <div className="max-w-7xl mx-auto">
        {/* <h2
          className="text-4xl md:text-5xl font-extrabold text-yellow-400 text-center mb-12"
          data-aos="fade-up"
        >
          Get in Touch
        </h2> */}
        <div className="flex justify-center">
          <div 
            className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300"
            data-aos="zoom-in"
          >
            <p className="text-center text-white text-lg">
              My email: <Link href="mailto:akanksha198@gmail.com"   target="_blank"
  rel="noopener noreferrer" className="text-yellow-400 hover:underline">akanksha198@gmail.com</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
