"use client"
import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import manImage from "@/public/img/man.png"; // Ensure this path is correct
import Social from "@/components/client/social";

export default function Home() {
  const [text, setText] = useState("I am a developer");

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) =>
        prevText === "I am a developer" ? "I am a programmer" : "I am a developer"
      );
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-200 dark:bg-gray-600 overflow-hidden flex items-center justify-center">
      {/* Full-Page Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-right"
        style={{
          backgroundImage: `url(${manImage.src})`, // Use .src for Next.js image optimization
          backgroundSize: 'contain', // Change this to 'contain' if you want the image to be contained
          backgroundPosition: 'right', 
          zIndex: 1, 
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      {/* Center Content */}
      <div className="flex flex-col items-center text-center p-6 z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
          John Doe
        </h1>
        <p className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8">
          {text}
        </p>
      </div>

        <Social/>
   
    </div>
  );
}
