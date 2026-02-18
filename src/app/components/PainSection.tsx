import { HelpCircle, FileQuestion, Ban, AlertTriangle, Clock } from "lucide-react";

export function PainSection() {
  const painPoints = [
    {
      icon: HelpCircle,
      text: "Unsure which license to choose",
    },
    {
      icon: FileQuestion,
      text: "Visa and documentation confusion",
    },
    {
      icon: Ban,
      text: "Bank account rejections",
    },
    {
      icon: AlertTriangle,
      text: "Unexpected compliance penalties",
    },
    {
      icon: Clock,
      text: "Delayed approvals",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-12 text-3xl font-bold text-gray-900 md:text-4xl">
            Starting a Business in the UAE Can Feel Overwhelming
          </h2>

          <div className="mb-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={index} className="flex flex-col items-center gap-3 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                    <Icon className="h-8 w-8 text-red-600" />
                  </div>
                  <p className="text-base font-medium text-gray-700">
                    {point.text}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="text-lg font-medium text-gray-900">
            We simplify the process and guide you step by step.
          </p>
        </div>
      </div>
    </section>
  );
}
