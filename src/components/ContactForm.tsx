"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    setIsClient(true);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Successfully added!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error saving data:", error);
      alert("An error occurred while saving your message.");
    }
  };

  if (!isClient) {
    return null; // or a loading placeholder
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl w-full md:w-2/3 lg:w-[70%] transform transition-all duration-300"
      {...(isClient ? { 'data-aos': "zoom-in" } : {})}
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-300 font-bold mb-2 text-lg"
        >
          Your Name
        </label>
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-inner"
            required
          />
          <span className="absolute top-3 right-3 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 14l-4-4m0 0l-4 4m4-4v12"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-300 font-bold mb-2 text-lg "
        >
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-inner"
          required
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-gray-300 font-bold mb-2 text-lg"
        >
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={4}
          className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-inner"
          required
        ></textarea>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white font-bold py-3 px-6 rounded-lg hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg flex items-center"
        >
          <span>Send Message</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2 2m-2-2v8m6 4H6a2 2 0 01-2-2V6a2 2 0 012-2h7m8 10v4m0 0l-4-4m4 4L14 14"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
