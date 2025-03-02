
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceItem {
  id: string;
  service: string;
  date: string;
  time: string;
  status: string;
  price: string;
}

interface ServiceHistoryProps {
  services: ServiceItem[];
  filter?: "Completed" | "Scheduled";
}

const ServiceHistory = ({ services, filter }: ServiceHistoryProps) => {
  const filteredServices = filter ? services.filter(s => s.status === filter) : services;
  const title = filter === "Scheduled" ? "Upcoming Services" : "Service History";
  const description = filter === "Scheduled" 
    ? "View and manage your scheduled services" 
    : "View all your past services and their details";

  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredServices.map((service) => (
            <div 
              key={service.id} 
              className="p-4 border rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
            >
              <div>
                <h3 className="font-semibold">{service.service}</h3>
                <div className="text-sm text-slate-600">
                  {new Date(service.date).toLocaleDateString()} · {service.time}
                </div>
                <div className="text-xs text-slate-500">Order #{service.id}</div>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-semibold">{service.price}</span>
                <span className={`px-2 py-1 ${service.status === "Completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"} text-xs rounded-full`}>
                  {service.status}
                </span>
                {service.status === "Scheduled" && (
                  <Button variant="outline" size="sm" className="mt-2">
                    Reschedule
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceHistory;
