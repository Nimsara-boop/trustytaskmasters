
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ChevronRight, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Confirmation = () => {
  const navigate = useNavigate();
  
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
        
        <div className="container max-w-2xl pt-24 pb-16">
          <Card className="bg-white/95 backdrop-blur-sm shadow-lg text-center">
            <CardHeader>
              <div className="mx-auto bg-green-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Service Request Confirmed!</CardTitle>
              <CardDescription>
                Your service has been scheduled. A service provider will be assigned shortly.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg">
                <div className="flex justify-between items-center border-b pb-3 mb-3">
                  <span className="text-slate-600">Service Type</span>
                  <span className="font-semibold">HVAC Repair</span>
                </div>
                <div className="flex justify-between items-center border-b pb-3 mb-3">
                  <span className="text-slate-600">Date & Time</span>
                  <span className="font-semibold">July 20, 2023 · Morning</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Service Address</span>
                  <span className="font-semibold">123 Main St, Anytown</span>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg text-left">
                <p className="text-blue-700 flex items-start">
                  <span className="mr-2 mt-1">ℹ️</span>
                  <span>
                    You will receive a notification when a service provider is assigned to your request. 
                    You can also check the status of your service in your profile.
                  </span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={() => navigate('/profile')}
                className="w-full sm:w-auto bg-secondary hover:bg-secondary/90"
              >
                View in Profile
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/')}
                className="w-full sm:w-auto"
              >
                Return to Home
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
