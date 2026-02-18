import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    activity: "",
    budget: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your backend
    console.log("Form submitted:", formData);
    alert(
      "Thank you! We'll send you a personalized estimate within 24 hours. (Demo mode)"
    );
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      activity: "",
      budget: "",
    });
  };

  return (
    <section id="contact" className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Get Your Free UAE Business Setup Estimate
            </h2>
            <p className="text-lg text-gray-600">
              Receive a personalized breakdown based on your activity and goals.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm"
          >
            <div className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+971 50 123 4567"
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="activity">Business Activity *</Label>
                <Select
                  value={formData.activity}
                  onValueChange={(value) =>
                    setFormData({ ...formData, activity: value })
                  }
                >
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="Select your business activity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="trading">Trading</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="tech">Technology/IT</SelectItem>
                    <SelectItem value="marketing">Marketing/Media</SelectItem>
                    <SelectItem value="real-estate">Real Estate</SelectItem>
                    <SelectItem value="food">Food & Beverage</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="budget">Budget Range *</Label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) =>
                    setFormData({ ...formData, budget: value })
                  }
                >
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="Select your budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-10k">Under AED 10,000</SelectItem>
                    <SelectItem value="10k-20k">AED 10,000 - 20,000</SelectItem>
                    <SelectItem value="20k-30k">AED 20,000 - 30,000</SelectItem>
                    <SelectItem value="30k-plus">AED 30,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Request Free Estimate
              </Button>

              <p className="text-center text-xs text-gray-500">
                We respect your privacy. Your information is secure and will
                never be shared.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
