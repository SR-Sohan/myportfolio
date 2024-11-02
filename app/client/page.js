"use client";
import Image from "next/image";
import blogImage from "@/public/img/man.png";

const clients = [
  {
    id: 1,
    name: "John Doe",
    image: blogImage,
    comment: "This is a great service! Highly recommend.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: blogImage,
    comment: "Absolutely wonderful experience!",
  },
  {
    id: 3,
    name: "Alice Johnson",
    image: blogImage,
    comment: "Top-notch quality and customer service!",
  },
  // Add more client data as needed
];

export default function ClientPage() {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200">
      <h2 className="text-3xl font-bold mb-8 text-center">What My Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex flex-col items-center p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-transform transform hover:scale-105"
          >
            <Image
              src={client.image}
              alt={client.name}
              width={80}
              height={80}
              className="rounded-full mb-4"
            />
            <h3 className="font-semibold text-xl mb-2">{client.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">{client.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
