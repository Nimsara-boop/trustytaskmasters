
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
    <section id="services" className="py-20 bg-white">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Professional repair services for all your needs, delivered by verified experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="w-8 h-8 text-secondary mb-2" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.specifics.map((specific, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                      {specific}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
            Meet Our Expert Fixers
          </h3>
          
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder.svg" alt="John Smith" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <CardTitle className="text-xl mb-1">John Smith</CardTitle>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < 4 ? "fill-accent text-accent" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-sm text-slate-600 ml-2">4.0 (127 reviews)</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Certified Electrician", "10+ Years Experience", "Master Plumber"].map(
                    (qualification, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-secondary/10 text-secondary text-sm rounded-full"
                      >
                        {qualification}
                      </span>
                    )
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Specializing in electrical repairs and plumbing services. Available for emergency
                repairs 24/7. Fully equipped with professional-grade tools and backed by our
                3-month service warranty.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
