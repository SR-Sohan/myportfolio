// app/contact/page.js
import ContactForm from '@/components/client/ContactForm';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="p-6 bg-gray-200 dark:bg-gray-600 min-h-screen">
       <h2 className="text-3xl font-bold mb-8 text-center">How to Contact Me</h2>
      
      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="flex flex-col items-center p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-transform transform hover:scale-105">
          <FaPhoneAlt className="text-4xl text-blue-500 mb-2" />
          <h3 className="font-semibold text-xl mb-1">Phone</h3>
          <p className="text-gray-600 dark:text-gray-300">+1 (234) 567-890</p>
        </div>
        <div className="flex flex-col items-center p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-transform transform hover:scale-105">
          <FaEnvelope className="text-4xl text-blue-500 mb-2" />
          <h3 className="font-semibold text-xl mb-1">Email</h3>
          <p className="text-gray-600 dark:text-gray-300">email@example.com</p>
        </div>
        <div className="flex flex-col items-center p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-transform transform hover:scale-105">
          <FaMapMarkerAlt className="text-4xl text-blue-500 mb-2" />
          <h3 className="font-semibold text-xl mb-1">Location</h3>
          <p className="text-gray-600 dark:text-gray-300">123 Street, City, Country</p>
        </div>
      </div>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
