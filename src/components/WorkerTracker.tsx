
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Navigation } from "lucide-react";

interface WorkerTrackerProps {
  worker: any;
}

const WorkerTracker = ({ worker }: WorkerTrackerProps) => {
  const [currentLocation, setCurrentLocation] = useState(worker.location);
  const [timeRemaining, setTimeRemaining] = useState(25); // starting with 25 mins
  
  // Simulate the worker approaching
  useEffect(() => {
    const interval = setInterval(() => {
      // Update time remaining
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
      
      // Simulate movement
      setCurrentLocation(prev => ({
        ...prev,
        estimatedArrival: `${timeRemaining - 1} minutes`
      }));
    }, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, [timeRemaining]);
  
  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center">
          <MapPin className="w-6 h-6 text-red-500 mr-2" />
          Worker Location
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-slate-100 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Navigation className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-medium">{worker.name} is on the way</span>
            </div>
            <div className="flex items-center text-slate-600">
              <Clock className="w-4 h-4 mr-1" />
              <span>{currentLocation.estimatedArrival}</span>
            </div>
          </div>
        </div>
        
        <div className="h-64 bg-slate-200 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <p className="text-slate-500 mb-2">Map view will be displayed here</p>
            <Button variant="outline" size="sm">
              <MapPin className="mr-1" /> Open in Maps
            </Button>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-2 border-t">
          <div>
            <p className="font-medium">Estimated arrival</p>
            <p className="text-slate-600">{currentLocation.estimatedArrival}</p>
          </div>
          <Button variant="outline" size="sm">
            Contact Worker
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkerTracker;
