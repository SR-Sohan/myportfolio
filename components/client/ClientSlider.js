import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Include Swiper styles
import { Pagination } from 'swiper'; // Import the module if needed
import Image from "next/image";

const ClientSlider = () => {
  const clients = [
    {
      id: 1,
      comment: "This service was amazing! Highly recommend.",
      name: "John Doe",
      image: "/images/client1.jpg",
    },
    {
      id: 2,
      comment: "Fantastic experience! Will definitely return.",
      name: "Jane Smith",
      image: "/images/client2.jpg",
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      pagination={{ clickable: true }}
      modules={[Pagination]} // Registering Pagination
      loop={true}
    >
      {clients.map((client) => (
        <SwiperSlide key={client.id}>
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg">
            <p className="text-gray-800 dark:text-gray-200 text-lg mb-4">
              {client.comment}
            </p>
            <div className="flex items-center">
              <div className="w-20 h-20 overflow-hidden rounded-full mr-4">
                <Image src={client.image} alt={client.name} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {client.name}
              </h3>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ClientSlider;
