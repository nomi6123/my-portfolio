// src/components/Privacy.js

import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6" >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p className="text-gray-300">
            Welcome to [Your Portfolio Website]. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
          <p className="text-gray-300">
            We may collect personal information such as your name, email address, and other contact details when you interact with our website. Additionally, we collect non-personal information like browser type, operating system, and browsing behavior through cookies and similar technologies.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>To provide and maintain our website.</li>
            <li>To notify you about changes or updates.</li>
            <li>To improve user experience based on your feedback.</li>
            <li>To monitor website usage and trends.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
          <p className="text-gray-300">
            We implement various security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">5. Third-Party Services</h2>
          <p className="text-gray-300">
            We may employ third-party services to enhance our website's functionality. These third parties have their own privacy policies, and we encourage you to review them.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">6. Your Consent</h2>
          <p className="text-gray-300">
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">7. Changes to This Policy</h2>
          <p className="text-gray-300">
            We may update our Privacy Policy from time to time. Any changes will be posted on this page, and the updated policy will be effective immediately upon posting.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
          <p className="text-gray-300">
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:your.email@example.com" className="text-blue-400 underline">your.email@example.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
