import Link from "next/link";
import Image from "next/image";
import blogImage from "@/public/img/man.png";
import { blogs } from "@/data/blog";
export default function BlogPage() {
  

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 min-h-screen">
   
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 uppercase text-gray-800">Blog</h1>
        <div className="w-full h-1 bg-gray-300 mx-auto rounded-full"></div>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((post, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col justify-between"
          >
         
            <div className="relative h-48 w-full mb-4">
              <Image
                src={blogImage}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>

          
          
            <h2 className="text-2xl font-semibold hover:text-gray-900 mb-2 dark:hover:text-blue-100 transition-colors">
              <Link href={`blog/${post.id}`}>
                <span className="cursor-pointer">{post.title}</span>
              </Link>
            </h2>

            {/* Blog Description */}
            <p className="text-sm text-gray-700 dark:text-gray-400">
              {post.shortDes.split(" ").slice(0, 25).join(" ")}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
