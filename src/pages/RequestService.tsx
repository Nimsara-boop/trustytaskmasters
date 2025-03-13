
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, MapPin, Wrench, CheckCircle, Zap, Smartphone, Home, Thermometer } from "lucide-react";
import Navbar from "@/components/Navbar";

const RequestService = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [serviceData, setServiceData] = useState<any>(null);
  const [selectedTask, setSelectedTask] = useState<string | null>(null);
  
  useEffect(() => {
    if (location.state?.service) {
      setServiceData(location.state.service);
      if (location.state.selectedTask) {
        setSelectedTask(location.state.selectedTask);
      }
    } else {
      navigate('/');
    }
  }, [location, navigate]);

  const form = useForm({
    defaultValues: {
      address: "",
      date: "",
      time: "",
      notes: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Service requested:", { 
      service: serviceData, 
      task: selectedTask,
      ...data 
    });
    // Here you would typically submit to your backend
    navigate("/confirmation");
  };

  if (!serviceData) return null;

  // Get the correct icon component
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

  const ServiceIcon = getIconComponent(serviceData.iconName);

  return (
    <div className="min-h-screen relative">
      {/* Background with overlay */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-slow-pan opacity-30"
          style={{
            backgroundImage: "url('/photo-1519389950473-47ba0277781c')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-700 to-slate-200" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        <div className="container max-w-4xl pt-24 pb-16">
          <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Request {serviceData.title}</CardTitle>
              <CardDescription>Fill in the details to request your service</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="flex items-center p-4 bg-slate-100 rounded-lg mb-6">
                    <ServiceIcon className="w-10 h-10 text-secondary mr-4" />
                    <div>
                      <h3 className="font-semibold text-lg">{serviceData.title}</h3>
                      <p className="text-slate-600">{serviceData.price}</p>
                      {selectedTask && (
                        <div className="flex items-center text-secondary mt-1">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          <span className="text-sm">{selectedTask}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Address</FormLabel>
                        <FormControl>
                          <div className="flex items-center border rounded-md overflow-hidden">
                            <span className="px-3 py-2 bg-slate-100">
                              <MapPin className="h-5 w-5 text-slate-500" />
                            </span>
                            <Input placeholder="Enter your address" className="border-0" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Date</FormLabel>
                          <FormControl>
                            <div className="flex items-center border rounded-md overflow-hidden">
                              <span className="px-3 py-2 bg-slate-100">
                                <Calendar className="h-5 w-5 text-slate-500" />
                              </span>
                              <Input type="date" className="border-0" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Time</FormLabel>
                          <FormControl>
                            <div className="flex items-center border rounded-md overflow-hidden">
                              <span className="px-3 py-2 bg-slate-100">
                                <Clock className="h-5 w-5 text-slate-500" />
                              </span>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <SelectTrigger className="border-0 w-full">
                                  <SelectValue placeholder="Select a time" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                                  <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                                  <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Notes</FormLabel>
                        <FormControl>
                          <Input placeholder="Any specific details we should know?" {...field} />
                        </FormControl>
                        <FormDescription>
                          Optional: Provide any details that might help the service provider
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90">
                    Request Service
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RequestService;
