import Image from "next/image";
import profilePic from "@/public/img/ab2.webp"; 

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 min-h-screen bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200">
      
      {/* Image Section */}
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
        <Image
          src={profilePic}
          alt="Personal Image"
          className="border-4 border-gray-300 dark:border-gray-700 shadow-lg"
          width={350}
          height={550}
          objectFit="cover"
        />
      </div>

      {/* Information Section */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold mb-2">John Doe</h1>
        <p className="text-lg mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&rsquo;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        
        {/* Basic Info */}
        <ul className="space-y-2">
          <li><strong>Age:</strong> 30</li>
          <li><strong>Phone:</strong> {"+123 456 789"}</li>
          <li><strong>Email:</strong> {"johndoe@example.com"}</li>
          <li><strong>Address:</strong> {"1234 Street, City, Country"}</li>
        </ul>

        {/* Download CV Button */}
        <a
          href="/path/to/cv.pdf"
          download
          className="mt-6 inline-block px-6 py-2 rounded-full bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors duration-300"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}
