
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Zap, Smartphone, Home, Thermometer } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
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

  const handleCardClick = (service: any, index: number) => {
    // Pass the service title and name of the icon instead of the component itself
    const serviceData = {
      title: service.title,
      description: service.description,
      price: service.price,
      iconName: service.icon.name || "Wrench" // Fallback to "Wrench" if name is undefined
    };
    
    navigate('/service-tasks', { 
      state: { 
        service: serviceData,
        tasks: service.specifics 
      } 
    });
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

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow bg-white/10 backdrop-blur-sm border-white/20 cursor-pointer hover:scale-105 transition-transform"
              onClick={() => handleCardClick(service, index)}
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
      </div>
    </section>
  );
};

export default Services;
