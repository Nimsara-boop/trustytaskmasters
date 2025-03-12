
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Wrench, Zap, Smartphone, Home, Thermometer } from "lucide-react";

const ServiceTasks = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { service, tasks } = location.state || {};

  if (!service) {
    navigate('/services');
    return null;
  }

  // Map icon names to actual icon components
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Wrench": return Wrench;
      case "Zap": return Zap;
      case "Smartphone": return Smartphone;
      case "Home": return Home;
      case "Thermometer": return Thermometer;
      default: return Wrench; // Default fallback
    }
  };

  const IconComponent = getIconComponent(service.iconName);

  const handleRequestService = () => {
    navigate('/request', { state: { service } });
  };

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-slow-pan opacity-30"
          style={{
            backgroundImage: "url('/photo-1519389950473-47ba0277781c')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-700 to-slate-200" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <div className="container max-w-4xl pt-24 pb-16">
          <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-4">
                <IconComponent className="w-8 h-8 text-secondary" />
                {service.title} Tasks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <div className="space-y-4 mb-8">
                {tasks.map((task: string, idx: number) => (
                  <div key={idx} className="p-4 border rounded-lg bg-white/80 backdrop-blur-sm">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3" />
                      <p className="text-slate-700">{task}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <Button 
                  onClick={handleRequestService}
                  className="px-8 py-6 text-lg bg-secondary hover:bg-secondary/90"
                >
                  Request This Service
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServiceTasks;
