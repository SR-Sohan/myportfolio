"use client"; // Ensure this is a client component
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Social() {
  return (
    <div className="hidden md:block fixed right-10 top-1/2 transform -translate-y-1/2 space-y-4 text-gray-700 dark:text-gray-300">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full transition duration-300">
        <FaFacebook size={30} className="hover:text-blue-600" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full transition duration-300">
        <FaGithub size={30} className="hover:text-gray-900 dark:hover:text-white" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full transition duration-300">
        <FaTwitter size={30} className="hover:text-blue-500" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full transition duration-300">
        <FaLinkedin size={30} className="hover:text-blue-700" />
      </a>
    </div>
  );
}
