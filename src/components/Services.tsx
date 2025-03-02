
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Wrench, Zap, Smartphone, Home, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const navigate = useNavigate();
  
  const services = [
    {
      icon: Wrench,
      title: "General Repairs",
      description: "Plumbing, electrical, and general maintenance for your home",
      specifics: ["Leaky faucets", "Door repairs", "Window maintenance", "Cabinet fixes"],
      price: "From $50"
    },
    {
      icon: Smartphone,
      title: "Electronics",
      description: "Phone, computer, and other electronic device repairs",
      specifics: ["Screen replacement", "Battery issues", "Software problems", "Hardware upgrades"],
      price: "From $40"
    },
    {
      icon: Home,
      title: "Appliances",
      description: "Major home appliance repairs and maintenance",
      specifics: ["Refrigerator repairs", "Washing machine fixes", "Dishwasher maintenance", "Dryer services"],
      price: "From $65"
    },
    {
      icon: Thermometer,
      title: "HVAC",
      description: "Air conditioning, heating, and ventilation services",
      specifics: ["AC repairs", "Heating system fixes", "Duct cleaning", "Thermostat installation"],
      price: "From $75"
    },
    {
      icon: Zap,
      title: "Electrical",
      description: "Full electrical services from repairs to installations",
      specifics: ["Wiring repairs", "Circuit breaker fixes", "Light installation", "Safety inspections"],
      price: "From $60"
    },
  ];

  const handleServiceSelect = (index: number) => {
    setSelectedService(index);
  };

  const handleRequestService = () => {
    if (selectedService !== null) {
      navigate('/request', { state: { service: services[selectedService] } });
    }
  };

  return (
    <section id="services" className="py-20 bg-transparent backdrop-blur-sm">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose a Service</h2>
          <p className="text-slate-100 max-w-2xl mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
            Professional repair services for all your needs, delivered by verified experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-lg transition-shadow bg-white/10 backdrop-blur-sm border-white/20 cursor-pointer ${selectedService === index ? 'ring-2 ring-secondary' : ''}`}
              onClick={() => handleServiceSelect(index)}
            >
              <CardHeader className="p-4">
                <service.icon className="w-8 h-8 text-secondary mb-2" />
                <CardTitle className="text-slate-800 text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-slate-600 text-sm mb-2">{service.description}</p>
                <p className="text-secondary font-semibold">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={handleRequestService} 
            className="px-8 py-6 text-lg bg-secondary hover:bg-secondary/90"
            disabled={selectedService === null}
          >
            Request Service
          </Button>
        </div>

        {selectedService !== null && (
          <div className="mt-8 bg-white/10 backdrop-blur-sm border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              {services[selectedService].title} Details
            </h3>
            <ul className="space-y-2">
              {services[selectedService].specifics.map((specific, idx) => (
                <li key={idx} className="flex items-center text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                  {specific}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
