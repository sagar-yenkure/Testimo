import { faqs } from "@/constants";

const PricingFaq = () => {
  return (
    <div className="text-center py-14">
      <h3 className="text-2xl font-bold text-gray-900 mb-12">
        Frequently asked questions
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {faqs?.map((faq, index) => (
          <div key={index} className="text-left">
            <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingFaq;
