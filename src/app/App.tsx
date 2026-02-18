import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PainSection } from "./components/PainSection";
import { ProcessSection } from "./components/ProcessSection";
import { ServicesSection } from "./components/ServicesSection";
import { PackagesSection } from "./components/PackagesSection";
import { SocialProofSection } from "./components/SocialProofSection";
import { FAQSection } from "./components/FAQSection";
import { LeadCaptureForm } from "./components/LeadCaptureForm";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <PainSection />
        <ProcessSection />
        <ServicesSection />
        <PackagesSection />
        <SocialProofSection />
        <FAQSection />
        <LeadCaptureForm />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
