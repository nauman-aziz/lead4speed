import React, { useState } from 'react';

// FAQItem.jsx
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-2 flex justify-between items-center focus:outline-none"
      >
        <h3 className="font-medium">{question}</h3>
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && <p className="px-4 py-2">{answer}</p>}
    </div>
  );
};

// FAQsSection.jsx
export default function FAQsSection() {
  return (
    <div className="w-full max-w-3xl mx-auto my-8 p-8 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Still Have Questions?
      </h2>
      <p className="text-xl mb-8 text-center">
        Don’t Worry, We Got You Covered
      </p>
      <FAQItem
        question="How do I get started?"
        answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <FAQItem
        question="What If I am brand new?"
        answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <FAQItem
        question="How many leads should I expect per day?"
        answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <FAQItem
        question="Are there any part-time callers available?"
        answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <FAQItem
        question="What is candidates screening?"
        answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
    </div>
  );
}