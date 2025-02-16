import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Wrench, Zap, Smartphone, Home, Thermometer } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "General Repairs",
      description: "Plumbing, electrical, and general maintenance for your home",
      specifics: ["Leaky faucets", "Door repairs", "Window maintenance", "Cabinet fixes"]
    },
    {
      icon: Smartphone,
      title: "Electronics",
      description: "Phone, computer, and other electronic device repairs",
      specifics: ["Screen replacement", "Battery issues", "Software problems", "Hardware upgrades"]
    },
    {
      icon: Home,
      title: "Appliances",
      description: "Major home appliance repairs and maintenance",
      specifics: ["Refrigerator repairs", "Washing machine fixes", "Dishwasher maintenance", "Dryer services"]
    },
    {
      icon: Thermometer,
      title: "HVAC",
      description: "Air conditioning, heating, and ventilation services",
      specifics: ["AC repairs", "Heating system fixes", "Duct cleaning", "Thermostat installation"]
    },
    {
      icon: Zap,
      title: "Electrical",
      description: "Full electrical services from repairs to installations",
      specifics: ["Wiring repairs", "Circuit breaker fixes", "Light installation", "Safety inspections"]
    },
  ];

  return (
    <section id="services" className="py-20 bg-transparent backdrop-blur-sm">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-slate-100 max-w-2xl mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
            Professional repair services for all your needs, delivered by verified experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <service.icon className="w-8 h-8 text-secondary mb-2" />
                <CardTitle className="text-slate-800">{service.title}</CardTitle>
                <CardDescription className="text-slate-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.specifics.map((specific, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                      {specific}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
