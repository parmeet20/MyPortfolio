"use client";
import React, { useState } from "react";

const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setEmail("");
        setMessage("");
      } else {
        const data = await response.json();
        setStatus(`Error: ${data.message}`);
      }
    } catch (error) {
      setStatus("Error sending message.");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Contact Me</h1>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700"
            required
            placeholder="test@email.com"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700"
            rows={4}
            required
            placeholder="Message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-4 flex items-center py-3 my-4 w-full text-center rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
        >
          Send Message
        </button>

        {status && <p className="mt-4 text-center">{status}</p>}
      </form>
    </div>
  );
};

export default ContactPage;
