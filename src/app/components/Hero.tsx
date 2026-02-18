import { Button } from "./ui/button";
import { CheckCircle2, Building2, Globe2, Users } from "lucide-react";

export function Hero() {
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
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            Start Your UAE Business Without{" "}
            <span className="text-blue-600">Confusion or Delays</span>
          </h1>

          {/* Subheadline */}
          <p className="mb-8 text-lg text-gray-600 md:text-xl">
            End-to-end company formation, compliance, visas, and growth support — 
            handled by a registered UAE corporate services firm.
          </p>

          {/* CTAs */}
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="w-full bg-blue-600 hover:bg-blue-700 sm:w-auto"
              onClick={() => scrollToSection("contact")}
            >
              Get Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => {
                // Simulate download
                alert("Cost guide download starting... (Demo mode)");
              }}
            >
              Download Cost Guide
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-sm font-medium text-gray-900">
                Registered UAE Firm
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-sm font-medium text-gray-900">
                Mainland, Freezone & Offshore
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-sm font-medium text-gray-900">
                5+ Businesses Assisted
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                <Globe2 className="h-6 w-6 text-orange-600" />
              </div>
              <p className="text-sm font-medium text-gray-900">
                All Emirates Covered
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
