import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import FAQSection from "../components/FAQSection";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      user_name: form.name,
      user_email: form.email,
      message: form.message,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_USER_ID
      );
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSuccess(false);
    }

    setIsSending(false);
  };

  return (
    <div className="max-w-5xl flex flex-col items-start justify-start">
      <section className="flex flex-col items-start justify-start h-auto bg-[#111] md:px-6 lg:px-0 py-6 md:py-0 lg:py-0 lg:mt-20">
        <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-white text-center mb-6 lg:text-start">
          Let’s Create Something <span className="text-[#f46000]">Amazing</span>
        </h1>

        <div className="bg-[#1c1c1c] rounded-xl p-6 w-full max-w-5xl shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="text-gray-400 text-sm">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="p-3 rounded-lg bg-[#2c2c2c] text-white focus:outline-none focus:ring-2 focus:ring-[#f46000]"
            />

            <label className="text-gray-400 text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Your@email.com"
              className="p-3 rounded-lg bg-[#2c2c2c] text-white focus:outline-none focus:ring-2 focus:ring-[#f46000]"
            />

            <label className="text-gray-400 text-sm">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              rows="4"
              className="p-3 rounded-lg bg-[#2c2c2c] text-white focus:outline-none focus:ring-2 focus:ring-[#f46000]"
            />

            <button
              type="submit"
              className="flex justify-center w-full bg-[#f46000] text-white py-3 rounded-lg font-medium hover:bg-[#d94d00] transition duration-300"
              disabled={isSending}
            >
              {isSending ? (
                <div className="loading">
                  <svg width="32px" height="24px">
                    <polyline
                      points="0.157 12, 7 12, 11 24, 21.5 0, 25 12, 32 12"
                      id="back"
                    ></polyline>
                    <polyline
                      points="0.157 12, 7 12, 11 24, 21.5 0, 25 12, 32 12"
                      id="front"
                    ></polyline>
                  </svg>
                </div>
              ) : (
                "Send"
              )}
            </button>
          </form>

          {success !== null && (
            <p
              className={`text-center mt-4 ${
                success ? "text-green-400" : "text-red-400"
              }`}
            >
              {success
                ? "Message sent successfully!"
                : "Failed to send message. Try again!"}
            </p>
          )}
        </div>
      </section>

      <FAQSection />
    </div>
  );
};

export default Contact;
