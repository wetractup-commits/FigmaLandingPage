import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "./ui/button";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="h-14 w-14 rounded-full bg-green-500 p-0 shadow-lg hover:bg-green-600 hover:shadow-xl transition-all"
        onClick={() => {
          window.open("https://wa.me/971501234567", "_blank");
        }}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-16 right-0 mb-2 hidden whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm text-white shadow-lg group-hover:block">
        Chat with us on WhatsApp
      </div>
    </div>
  );
}
