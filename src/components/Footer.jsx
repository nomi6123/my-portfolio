import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSending(true);
    const serviceID = "service_g19u2fx"; // replace with your EmailJS service ID
    const templateID = "template_npm5hif"; // replace with your EmailJS template ID
    const publicKey = "YYKxrDH-ip98y3LFc"; // replace with your EmailJS public key

    const templateParams = {
      email,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSubmitted(true);
        setError("");
        setEmail("");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setError("Failed to send the subscription. Please try again later.");
      })
      .finally(() => {
        setIsSending(false);
        // Reset the success message after 3 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      });
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="mx-auto md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Noman</h3>
            <p className="text-gray-400">
              Front-end Developer based in Pakistan, specializing in web and
              software development.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form
              onSubmit={handleSubmit}
              className="flex justify-center items-center"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Write your Email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className={`bg-gradient-to-r from-green-500 to-blue-500 py-2 px-4 rounded-r-lg ${
                  isSending ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Subscribe"}
              </button>
            </form>
            {submitted && (
              <p className="text-green-400 mt-4" aria-live="polite">
                Thank you for subscribing!
              </p>
            )}
            {error && (
              <p className="text-red-500 mt-4" aria-live="polite">
                {error}
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center flex-col md:flex-row border-t border-gray-500">
          <p className="text-gray-400">
            &copy;{new Date().getFullYear()} Noman. All rights reserved
          </p>
          <div className="space-x-4 flex my-4 md:my-0">
            <a
              href="https://web.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/923328664048?text=Hello%20there!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-gray-400 hover:text-white"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="/privacy" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-white">
              Terms of Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
