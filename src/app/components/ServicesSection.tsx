import {
  Building,
  FileText,
  Calculator,
  Landmark,
  Rocket,
} from "lucide-react";
import { Button } from "./ui/button";

export function ServicesSection() {
  const services = [
    {
      title: "Business Setup & Licensing",
      description: "Mainland, Freezone, Offshore.",
      icon: Building,
      features: [
        "License selection & registration",
        "Trade name approval",
        "Initial approvals & documents",
        "Free zone vs mainland consultation",
      ],
    },
    {
      title: "Visas & Government Services",
      description: "Investor visas, employee visas, PRO support.",
      icon: FileText,
      features: [
        "Investor & partner visas",
        "Employee visa processing",
        "PRO services",
        "Emirates ID assistance",
      ],
    },
    {
      title: "Accounting & Compliance",
      description: "VAT, bookkeeping, payroll, governance.",
      icon: Calculator,
      features: [
        "VAT registration & filing",
        "Bookkeeping & financial reporting",
        "Payroll management",
        "Corporate tax compliance",
      ],
    },
    {
      title: "Banking & Advisory",
      description: "Banking assistance, office solutions, strategy.",
      icon: Landmark,
      features: [
        "Corporate account opening",
        "Virtual office solutions",
        "Business strategy consulting",
        "Growth advisory",
      ],
    },
    {
      title: "Digital Launch Support",
      description: "Landing pages, branding, marketing setup.",
      icon: Rocket,
      features: [
        "Website & landing page design",
        "Brand identity creation",
        "Digital marketing strategy",
        "Social media setup",
      ],
    },
  ];

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
    <section id="services" className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Core Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive support for every stage of your business journey
            </p>
          </div>

          <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-600 hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 transition-colors group-hover:bg-blue-600">
                    <Icon className="h-6 w-6 text-blue-600 transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => scrollToSection("contact")}
            >
              Start My Business Setup
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
