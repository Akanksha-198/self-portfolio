import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-10 mt-16 ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Quick Links */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="#home" className="hover:text-blue-400">Home</Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-blue-400">About</Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-blue-400">Projects</Link>
              </li>
              <li>
                <Link  href="mailto:kakanksha198@gmail.com" className="hover:text-blue-400">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="text-center mb-8 md:mb-0">
            <h3 className="text-white font-semibold text-xl mb-4">Follow Me</h3>
            <div className="flex justify-center space-x-6 text-gray-300">
            
              <Link
                href="https://www.linkedin.com/in/akanksha-kumari-799876267"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={32} />
              </Link>
              <Link
                href="https://github.com/Akanksha-198"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
                aria-label="GitHub"
              >
                <FaGithub size={32} />
              </Link>
             
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 mt-8 text-center">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Akanksha Kumari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
