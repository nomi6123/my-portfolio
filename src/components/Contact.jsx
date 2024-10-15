import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaRegAddressCard } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to track form submission status
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Email validation function
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);

    // Validate form fields
    if (formData.name && formData.email && formData.message) {
      if (!validateEmail(formData.email)) {
        setError("Please enter a valid email address.");
        console.log("Invalid email format.");
        return;
      }

      // EmailJS configuration using environment variables
      const serviceID = "service_g19u2fx";
      const templateID = "template_npm5hif";
      const publicKey = "YYKxrDH-ip98y3LFc";

      // Log environment variables for debugging
      console.log("Service ID:", serviceID);
      console.log("Template ID:", templateID);
      console.log("Public Key:", publicKey);

      // Check if the environment variables are properly set
      if (!serviceID || !templateID || !publicKey) {
        setError("Email service is not properly configured.");
        console.error("Missing EmailJS configuration.");
        return;
      }

      setIsSending(true);

      emailjs
        .send(serviceID, templateID, formData, publicKey)
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            // Clear form
            setFormData({
              name: "",
              email: "",
              message: "",
            });

            // Set submission status
            setSubmitted(true);
            setError("");
            setIsSending(false);

            // Message disappears after 3 seconds
            setTimeout(() => {
              setSubmitted(false);
            }, 3000);
          },
          (err) => {
            console.error("FAILED...", err);
            setError("Failed to send the message. Please try again later.");
            setIsSending(false);
          }
        )
        .catch((err) => {
          console.error("ERROR:", err);
          console.log("EmailJS Error Response:", err.text); // Log error response
          setError("An unexpected error occurred. Please try again.");
          setIsSending(false);
        });
    } else {
      setError("Please fill in all fields before submitting.");
      console.log("Form fields missing.");
    }
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact With Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3
              className="text-3xl font-bold text-transparent bg-clip-text
            bg-gradient-to-r from-green-400 to-blue-500 mb-4"
            >
              Let's Talk
            </h3>
            <p>
              I'm open to discussing web development projects or partnership opportunities.
            </p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block mr-2 text-green-400" />
              <a href="mailto:codewithnoman6123@gmail.com" className="hover:underline">
                Mail me
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block mr-2 text-green-400" />
              <span>+923328664048</span>
            </div>
            <div className="mb-4">
              <FaRegAddressCard className="inline-block mr-2 text-green-400" />
              <span>Post Office Sial, Wadhy Wali District Bhakkar</span>
            </div>
          </div>

          <div className="flex-1 w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Write your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Write your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  rows="5"
                  placeholder="Write your Message"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className={`bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-2 rounded-full transform transition-transform duration-300 hover:scale-105 ${
                  isSending ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSending ? "Sending..." : "Send"}
              </button>
            </form>
            {submitted && (
              <p className="text-green-400 mt-4" aria-live="polite">
                Your message has been sent successfully!
              </p>
            )}
            {error && (
              <p className="text-red-500 mt-4" aria-live="polite">
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
