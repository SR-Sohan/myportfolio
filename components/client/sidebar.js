"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import backgroundImage from "@/public/img/download.jpeg";

export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Toggle Button - only shown on small screens when sidebar is closed */}
      <div className="md:hidden fixed top-4 left-4 z-20">
        {!isMenuOpen && (
          <button
            onClick={toggleMenu}
            className="text-gray-800 dark:text-gray-200 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            <FiMenu size={24} />
          </button>
        )}
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:relative top-0 left-0 h-screen bg-white z-50 dark:bg-gray-900 text-black dark:text-white p-4 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6 md:translate-x-0`}
      >
        <Link href="/" onClick={closeMenu}>
          <h2
            className="mt-4 md:mt-20 text-4xl md:text-[120px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800 text-center"
            style={{
              backgroundImage: `url(${backgroundImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            MH
          </h2>
        </Link>

        {/* Menu Links */}
        <ul className="space-y-4 pt-4 md:pt-20 text-center">
          <li>
            <Link href="/" onClick={closeMenu} className="hover:bg-gray-200 block dark:hover:bg-gray-700 p-2 rounded">Home</Link>
          </li>
          <li>
            <Link href="/about" onClick={closeMenu} className="hover:bg-gray-200 block dark:hover:bg-gray-700 p-2 rounded">About</Link>
          </li>
          <li>
            <Link href="/portfolio" onClick={closeMenu} className="hover:bg-gray-200 block dark:hover:bg-gray-700 p-2 rounded">Portfolio</Link>
          </li>
          <li>
            <Link href="/blog" onClick={closeMenu} className="hover:bg-gray-200 block dark:hover:bg-gray-700 p-2 rounded">Blog</Link>
          </li>
          <li>
            <Link href="/client" onClick={closeMenu} className="hover:bg-gray-200 block dark:hover:bg-gray-700 p-2 rounded">Client</Link>
          </li>
          <li>
            <Link href="/contact" onClick={closeMenu} className="hover:bg-gray-200 block dark:hover:bg-gray-700 p-2 rounded">Contact</Link>
          </li>
        </ul>

        {/* Close Button on Full-Page Overlay (only visible on small screens) */}
        {isMenuOpen && (
          <button
            onClick={toggleMenu}
            className="md:hidden absolute top-4 right-4 text-gray-800 dark:text-gray-200 text-2xl focus:outline-none"
          >
            &times;
          </button>
        )}
      </div>
    </>
  );
}
