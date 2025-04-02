import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ChevronDown, MoveUpRight } from "lucide-react";
import { faqs } from "../constants/FaqsConstants";

const FAQSection = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Get the current URL path

  const isContactPage = window.location.pathname === "/contact";

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="text-white sm:p-0 md:p-12 lg:p-0 sm:py-6 mt-15 sm:mt-15 md:mt-15 lg:mt-16">
      {/* FAQ Section */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-4xl lg:text-6xl font-bold text-center lg:text-start">
          Frequently Asked <span className="text-[#f46000]">Questions</span>
        </h2>

        <div className="mt-6 space-y-4">
          {(showAll ? faqs : faqs.slice(0, 5)).map((faq, index) => (
            <div
              key={index}
              className="bg-[#1c1c1c] p-4 rounded-xl cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">{faq.question}</p>
                <ChevronDown
                  className={`transition-transform ${
                    openIndex === index
                      ? "rotate-180 text-[#f46000]"
                      : "text-white"
                  }`}
                />
              </div>
              {openIndex === index && faq.answer && (
                <p className="mt-2 text-gray-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* See More / See Less Button */}
        {!showAll && (
          <button
            className="w-full flex justify-center mt-4 text-[#f46000] font-bold hover:underline"
            onClick={() => setShowAll(true)}
          >
            See More
          </button>
        )}
        {showAll && (
          <button
            className="w-full flex justify-center mt-4 text-[#f46000] font-bold hover:underline"
            onClick={() => setShowAll(false)}
          >
            See Less
          </button>
        )}
      </div>

      {/* Collaborate Section */}
      {!isContactPage && (
        <div
          className="max-w-5xl mx-auto mt-10 bg-[#1c1c1c] p-4 md:p-10 rounded-xl relative transition-all duration-300 group hover:bg-[#f46000] cursor-pointer"
          onClick={() => navigate("/contact")}
        >
          <h2 className="text-5xl font-bold transition-colors duration-300 group-hover:text-white">
            Let’s{" "}
            <span className="text-[#f46000] transition-colors duration-300 group-hover:text-white">
              collaborate
            </span>
          </h2>
          <p className="mt-4 text-gray-300 group-hover:text-white">
            Unlock the potential of your product with expert design and
            development services. Let’s collaborate to create user-centered
            solutions that not only meet your goals but also delight your users.
          </p>
          <button className="absolute top-6 right-6 bg-[#f46000] p-3 rounded-full transition-all duration-300 group-hover:bg-white">
            <MoveUpRight className="text-white transition-colors duration-300 group-hover:text-[#f46000]" />
          </button>
        </div>
      )}
    </div>
  );
};

export default FAQSection;
