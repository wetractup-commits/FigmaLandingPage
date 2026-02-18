import { Lightbulb, FileCheck, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

export function ProcessSection() {
  const steps = [
    {
      number: "1",
      title: "Plan",
      description: "Consultation & activity assessment.",
      icon: Lightbulb,
      color: "blue",
    },
    {
      number: "2",
      title: "Register",
      description: "Licensing, approvals, visas, PRO.",
      icon: FileCheck,
      color: "green",
    },
    {
      number: "3",
      title: "Stabilise & Grow",
      description: "Compliance, banking, advisory & digital launch.",
      icon: TrendingUp,
      color: "purple",
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
    <section id="process" className="bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              A Structured 3-Step Setup Process
            </h2>
          </div>

          <div className="mb-12 grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const colorClasses = {
                blue: "bg-blue-600",
                green: "bg-green-600",
                purple: "bg-purple-600",
              };

              return (
                <div
                  key={index}
                  className="relative rounded-xl bg-white p-8 shadow-md transition-shadow hover:shadow-lg"
                >
                  <div
                    className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${
                      colorClasses[step.color as keyof typeof colorClasses]
                    }`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="mb-2 flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-900">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-base text-gray-600">
                    {step.description}
                  </p>
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
              Speak to an Advisor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
