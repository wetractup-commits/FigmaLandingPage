import { Quote, Star } from "lucide-react";

export function SocialProofSection() {
  const testimonials = [
    {
      name: "Ahmed Al Mansoori",
      role: "E-commerce Entrepreneur",
      content:
        "The team made setting up my Freezone company so easy. Within 2 weeks, I had my license and visa. Highly recommend!",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Digital Marketing Agency Owner",
      content:
        "Professional, transparent, and efficient. They handled everything from registration to banking. Worth every dirham.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Tech Startup Founder",
      content:
        "Starting a business in Dubai seemed overwhelming until I found this team. They guided me through every step with patience and expertise.",
      rating: 5,
    },
  ];

  const stats = [
    { number: "500+", label: "Businesses Launched" },
    { number: "7+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Industries Served" },
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Trusted by Entrepreneurs Across the UAE
            </h2>
            <p className="text-lg text-gray-600">
              Real results from real businesses
            </p>
          </div>

          {/* Stats */}
          <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold text-blue-600">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative rounded-xl bg-gray-50 p-6 shadow-sm"
              >
                <Quote className="mb-4 h-8 w-8 text-blue-600 opacity-50" />
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-4 text-sm text-gray-700">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Office Info */}
          <div className="mt-12 rounded-xl bg-blue-50 p-8 text-center">
            <p className="mb-2 font-semibold text-gray-900">
              Registered Corporate Services Provider
            </p>
            <p className="text-sm text-gray-600">
              Office 123, Business Bay, Dubai, UAE | License No. 12345678
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
