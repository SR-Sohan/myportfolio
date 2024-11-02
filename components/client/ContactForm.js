"use client"
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 dark:text-gray-200">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-lg w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-200">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-lg w-full"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="phone" className="block text-gray-700 dark:text-gray-200">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-lg w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-gray-700 dark:text-gray-200">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-lg w-full"
            required
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="block text-gray-700 dark:text-gray-200">Message</label>
        <textarea
          name="message"
          id="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-lg w-full"
          required
        />
      </div>

      <button type="submit" className="mt-4 w-full bg-gray-800 dark:bg-blue-600 hover:bg-gray-600 text-white font-bold py-2 rounded-lg">Send Message</button>
    </form>
  );
}
