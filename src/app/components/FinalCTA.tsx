import { Button } from "./ui/button";
import { Phone, MessageCircle } from "lucide-react";

export function FinalCTA() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Ready to Start Your UAE Business the Right Way?
          </h2>
          <p className="mb-8 text-lg text-blue-100">
            Join hundreds of successful entrepreneurs who chose us as their
            trusted partner
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="w-full bg-white text-blue-600 hover:bg-gray-100 sm:w-auto"
              onClick={() => scrollToSection("contact")}
            >
              Book Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-white text-white hover:bg-blue-700 sm:w-auto"
              onClick={() => {
                window.open("https://wa.me/971501234567", "_blank");
              }}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-white text-white hover:bg-blue-700 sm:w-auto"
              onClick={() => {
                window.location.href = "tel:+971501234567";
              }}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
