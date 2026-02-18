import { Phone, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false); // Close menu after navigation
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <span className="text-lg font-bold text-white"> ICS </span>
              </div>
              <span className="hidden font-semibold text-gray-900 md:block">
                Corporate Services
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("packages")}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Packages
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Right Side - Phone & CTA */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+971501234567"
              className="hidden lg:flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
            >
              
              
            </a>
            <Button
              onClick={() => scrollToSection("contact")}
              className="hidden sm:flex bg-blue-600 hover:bg-blue-700"
            >
              Book Consultation
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white py-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("services")}
                className="px-4 py-2 text-left text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("packages")}
                className="px-4 py-2 text-left text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                Packages
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="px-4 py-2 text-left text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-4 py-2 text-left text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                Contact
              </button>
              <div className="px-4 pt-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Book Consultation
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}