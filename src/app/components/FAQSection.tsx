import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "How long does the business setup process take?",
      answer:
        "The timeline varies depending on the type of license and jurisdiction. Typically, Freezone companies can be set up in 5-10 business days, while Mainland companies may take 2-3 weeks. We provide you with a detailed timeline during the consultation.",
    },
    {
      question: "What are the total costs involved?",
      answer:
        "Total costs depend on your business activity, jurisdiction (Mainland vs Freezone), visa requirements, and additional services. Our packages start from AED 5,999 and include all government fees, service charges, and support. We provide a transparent breakdown before you commit.",
    },
    {
      question: "Can I open a bank account easily?",
      answer:
        "We assist with corporate bank account opening and have established relationships with major UAE banks. While we can't guarantee approval (as banks have their own criteria), we prepare all documentation and guide you through the process to maximize success rates.",
    },
    {
      question: "Do I need a physical office?",
      answer:
        "It depends on your business type and jurisdiction. Freezone companies often include a desk space or virtual office. Mainland companies typically require a physical office or Ejari. We offer flexible office solutions including virtual offices, co-working spaces, and dedicated offices.",
    },
    {
      question: "What if I'm currently outside the UAE?",
      answer:
        "No problem! We can handle most of the setup remotely. You'll need to visit the UAE for final document signing, Emirates ID, and bank account opening (typically 3-5 days). We coordinate everything to minimize your time commitment.",
    },
    {
      question: "Are there any hidden charges?",
      answer:
        "Absolutely not. We believe in complete transparency. All costs are outlined upfront in our proposal, including government fees, service charges, and any optional add-ons. There are no surprise fees.",
    },
    {
      question: "What's the difference between Mainland and Freezone?",
      answer:
        "Mainland companies can trade directly with the UAE market and are not restricted by location. Freezone companies offer 100% foreign ownership, zero corporate tax for qualifying activities, and easy setup, but have some trading restrictions. We help you choose based on your business goals.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about UAE business setup
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border bg-white px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
