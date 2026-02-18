import { Check, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function PackagesSection() {
  const packages = [
    {
      name: "Starter Launch Package",
      price: "AED 5,999",
      description: "Perfect for testing the market",
      idealFor: "Solo entrepreneurs & startups",
      features: [
        "Business license registration",
        "Trade name approval",
        "Initial approvals",
        "1 visa quota",
        "Basic PRO services",
        "Email support",
      ],
      highlighted: false,
    },
    {
      name: "Launch & Support Package",
      price: "AED 12,999",
      description: "Our most popular choice",
      idealFor: "Growing businesses",
      features: [
        "Everything in Starter",
        "Up to 3 visa quotas",
        "Corporate bank account assistance",
        "VAT registration",
        "3 months compliance support",
        "Priority phone support",
        "Office address (virtual)",
      ],
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Complete Setup + Digital Launch",
      price: "AED 24,999",
      description: "Complete business foundation",
      idealFor: "Serious entrepreneurs",
      features: [
        "Everything in Launch & Support",
        "Up to 5 visa quotas",
        "Professional website/landing page",
        "Brand identity package",
        "Marketing strategy consultation",
        "6 months compliance support",
        "Dedicated account manager",
        "Co-working space access",
      ],
      highlighted: false,
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
    <section id="packages" className="bg-gray-900 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Transparent Packages for Every Stage
            </h2>
            <p className="text-lg text-gray-300">
              No hidden fees. Clear pricing. Real value.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative flex flex-col rounded-2xl p-8 transition-transform hover:scale-105 ${
                  pkg.highlighted
                    ? "bg-blue-600 shadow-2xl ring-4 ring-blue-400"
                    : "bg-white shadow-lg"
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                      <Star className="mr-1 h-3 w-3 fill-current" />
                      {pkg.badge}
                    </Badge>
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`mb-2 text-2xl font-bold ${
                      pkg.highlighted ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className={`mb-4 text-sm ${
                      pkg.highlighted ? "text-blue-100" : "text-gray-600"
                    }`}
                  >
                    {pkg.description}
                  </p>
                  <div className="mb-2">
                    <span
                      className={`text-4xl font-bold ${
                        pkg.highlighted ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {pkg.price}
                    </span>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      pkg.highlighted
                        ? "border-blue-200 text-white"
                        : "border-blue-600 text-blue-600"
                    }
                  >
                    {pkg.idealFor}
                  </Badge>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check
                        className={`h-5 w-5 flex-shrink-0 ${
                          pkg.highlighted ? "text-white" : "text-green-600"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          pkg.highlighted ? "text-white" : "text-gray-700"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className={
                    pkg.highlighted
                      ? "bg-white text-blue-600 hover:bg-gray-100"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }
                  onClick={() => scrollToSection("contact")}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
