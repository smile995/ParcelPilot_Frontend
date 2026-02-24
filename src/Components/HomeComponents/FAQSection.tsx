const FAQSection = () => {
  const faqs = [
    {
      id: 1,
      question: "How long does delivery usually take?",
      answer:
        "Delivery typically takes 24–72 hours depending on location. Express delivery options are available in selected cities.",
    },
    {
      id: 2,
      question: "Can I track my parcel in real-time?",
      answer:
        "Yes, our live tracking system allows you to monitor your parcel from pickup to final delivery.",
    },
    {
      id: 3,
      question: "Do you offer cash on delivery service?",
      answer:
        "Yes, we provide secure cash-on-delivery service nationwide with guaranteed product safety.",
    },
    {
      id: 4,
      question: "What areas do you cover?",
      answer:
        "We provide nationwide delivery with home delivery available in all major districts.",
    },
    {
      id: 5,
      question: "What if my parcel gets delayed?",
      answer:
        "You will receive real-time updates. Our support team is available 24/7 to assist you.",
    },
  ];

  return (
    <section className="py-8 px-4 md:px-10 ">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-bold text-[#03373D]">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-4">
            Everything you need to know about our delivery services — no secret
            logistics magic involved 😉
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="collapse collapse-plus bg-white rounded-xl 
              shadow-md border transition-all duration-300"
            >
              <input type="radio" name="faq-accordion" />

              {/* Question */}
              <div
                className="collapse-title  font-semibold text-[#03373D] bg-white  rounded-xl"
              >
                {faq.question}
              </div>

              {/* Answer */}
              <div className="collapse-content text-gray-700">
                <p className="pt-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
