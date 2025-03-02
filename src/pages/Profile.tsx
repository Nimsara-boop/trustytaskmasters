
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Calendar, Clock, CreditCard, MapPin, Phone, Settings, User } from "lucide-react";
import Navbar from "@/components/Navbar";

const mockServiceHistory = [
  {
    id: "SR-1234",
    service: "General Repairs",
    date: "2023-05-10",
    time: "Morning",
    status: "Completed",
    price: "$85.00",
  },
  {
    id: "SR-1235",
    service: "Electronics",
    date: "2023-06-15",
    time: "Afternoon",
    status: "Completed",
    price: "$120.00",
  },
  {
    id: "SR-1236",
    service: "HVAC",
    date: "2023-07-20",
    time: "Evening",
    status: "Scheduled",
    price: "$150.00",
  },
];

const Profile = () => {
  const [editing, setEditing] = useState(false);
  
  const form = useForm({
    defaultValues: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      address: "123 Main St, Anytown, USA",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Profile updated:", data);
    setEditing(false);
  };

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
        
        <div className="container max-w-6xl pt-24 pb-16">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Profile Summary Card */}
            <Card className="md:w-1/3 bg-white/95 backdrop-blur-sm shadow-lg">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <CardTitle className="mt-4">John Doe</CardTitle>
                <CardDescription>Member since May 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-slate-500 mr-3" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-slate-500 mr-3" />
                    <span>123 Main St, Anytown, USA</span>
                  </div>
                  <div className="flex items-center">
                    <CreditCard className="w-5 h-5 text-slate-500 mr-3" />
                    <span>Payment methods: 2</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" onClick={() => setEditing(true)}>
                  <Settings className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </CardFooter>
            </Card>
            
            {/* Main Content Area */}
            <div className="md:w-2/3">
              <Tabs defaultValue="service-history">
                <TabsList className="bg-white/50 backdrop-blur-sm w-full mb-6">
                  <TabsTrigger value="service-history">Service History</TabsTrigger>
                  <TabsTrigger value="upcoming">Upcoming Services</TabsTrigger>
                  <TabsTrigger value="payment">Payment Methods</TabsTrigger>
                  {editing && <TabsTrigger value="edit-profile">Edit Profile</TabsTrigger>}
                </TabsList>
                
                <TabsContent value="service-history">
                  <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
                    <CardHeader>
                      <CardTitle>Service History</CardTitle>
                      <CardDescription>
                        View all your past services and their details
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {mockServiceHistory.filter(s => s.status === "Completed").map((service) => (
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
                              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                                {service.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="upcoming">
                  <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
                    <CardHeader>
                      <CardTitle>Upcoming Services</CardTitle>
                      <CardDescription>
                        View and manage your scheduled services
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {mockServiceHistory.filter(s => s.status === "Scheduled").map((service) => (
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
                              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                {service.status}
                              </span>
                              <Button variant="outline" size="sm" className="mt-2">
                                Reschedule
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="payment">
                  <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
                    <CardHeader>
                      <CardTitle>Payment Methods</CardTitle>
                      <CardDescription>
                        Manage your payment methods and view your billing history
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mb-6">
                        <div className="p-4 border rounded-lg flex justify-between items-center">
                          <div className="flex items-center">
                            <CreditCard className="w-8 h-8 text-slate-700 mr-4" />
                            <div>
                              <h3 className="font-semibold">Visa ending in 4242</h3>
                              <div className="text-sm text-slate-600">Expires 05/25</div>
                            </div>
                          </div>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            Default
                          </span>
                        </div>
                        
                        <div className="p-4 border rounded-lg flex justify-between items-center">
                          <div className="flex items-center">
                            <CreditCard className="w-8 h-8 text-slate-700 mr-4" />
                            <div>
                              <h3 className="font-semibold">Mastercard ending in 5555</h3>
                              <div className="text-sm text-slate-600">Expires 08/26</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <Button className="w-full">
                        <CreditCard className="w-4 h-4 mr-2" />
                        Add Payment Method
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {editing && (
                  <TabsContent value="edit-profile">
                    <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
                      <CardHeader>
                        <CardTitle>Edit Profile</CardTitle>
                        <CardDescription>
                          Update your personal information
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Form {...form}>
                          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Full Name</FormLabel>
                                  <FormControl>
                                    <div className="flex items-center border rounded-md overflow-hidden">
                                      <span className="px-3 py-2 bg-slate-100">
                                        <User className="h-5 w-5 text-slate-500" />
                                      </span>
                                      <Input className="border-0" {...field} />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email Address</FormLabel>
                                  <FormControl>
                                    <Input {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone Number</FormLabel>
                                  <FormControl>
                                    <div className="flex items-center border rounded-md overflow-hidden">
                                      <span className="px-3 py-2 bg-slate-100">
                                        <Phone className="h-5 w-5 text-slate-500" />
                                      </span>
                                      <Input className="border-0" {...field} />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="address"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Address</FormLabel>
                                  <FormControl>
                                    <div className="flex items-center border rounded-md overflow-hidden">
                                      <span className="px-3 py-2 bg-slate-100">
                                        <MapPin className="h-5 w-5 text-slate-500" />
                                      </span>
                                      <Input className="border-0" {...field} />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <div className="flex gap-3">
                              <Button 
                                type="submit" 
                                className="flex-1 bg-secondary hover:bg-secondary/90"
                              >
                                Save Changes
                              </Button>
                              <Button 
                                type="button" 
                                variant="outline" 
                                className="flex-1"
                                onClick={() => setEditing(false)}
                              >
                                Cancel
                              </Button>
                            </div>
                          </form>
                        </Form>
                      </CardContent>
                    </Card>
                  </TabsContent>
                )}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
