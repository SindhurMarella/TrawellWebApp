import React from 'react'

function FAQ() {
  const faqs = [
    {
      question: "How do I book a trip?",
      answer: "You can book a trip through our website by selecting your desired destination and following the booking process. Alternatively, you can contact our customer service team for assistance."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our encrypted payment system."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Our standard cancellation policy allows for full refunds up to 30 days before your trip. Cancellations within 30 days may be subject to fees. Please refer to your specific booking terms for details."
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ