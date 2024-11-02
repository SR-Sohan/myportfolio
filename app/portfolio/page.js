import Image from "next/image";
import portfolioImage from "@/public/img/man.png"; 
import Link from "next/link";


export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Project One",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "A responsive web project using HTML, CSS, and JavaScript.",
      image: portfolioImage, 
      link: "https://example.com/project-one",
    },
    {
      title: "Project Two",
      tech: ["React", "Node.js", "Express"],
      description: "A full-stack application with React and Node.js.",
      image: portfolioImage,
      link: "https://example.com/project-two",
    },
    {
      title: "Project Three",
      tech: ["PHP", "MySQL", "Bootstrap"],
      description: "A dynamic website built with PHP and MySQL.",
      image: portfolioImage,
      link: "https://example.com/project-three",
    },
  ];

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">Portfolio</h1>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col justify-between"
          >
            {/* Portfolio Image */}
            <div className="relative h-48 w-full mb-4">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>

            {/* Card Title */}
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm font-semibold rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">
              {item.description}
            </p>

            {/* Project Link */}
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block text-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-2 px-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              View Project
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
