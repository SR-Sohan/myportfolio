import { blogs } from "@/data/blog";
import Image from "next/image";
import blogImage from "@/public/img/ab2.webp";
import SingleBlogContent from "@/components/client/SingleBlogContent";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}

export default function SingleBlogStaticPage({ params: { id } }) {
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="p-8 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center">{blog.title}</h1>
      <div className="relative w-full h-80 mb-8">
        <Image
          src={blogImage}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Render the Client Component */}
      <SingleBlogContent description={blog.description} />
    </div>
  );
}
