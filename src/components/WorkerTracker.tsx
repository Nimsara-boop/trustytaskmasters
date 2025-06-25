
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Navigation } from "lucide-react";
import QRScanner from "./QRScanner";

interface WorkerTrackerProps {
  worker: any;
  onQRScanned: () => void;
}

const WorkerTracker = ({ worker, onQRScanned }: WorkerTrackerProps) => {
  const [currentLocation, setCurrentLocation] = useState(worker.location);
  const [timeRemaining, setTimeRemaining] = useState(25); // starting with 25 mins
  const [showQRScanner, setShowQRScanner] = useState(false);
  
  // Simulate the worker approaching
  useEffect(() => {
    const interval = setInterval(() => {
      // Update time remaining
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          // Show QR scanner when worker arrives
          setShowQRScanner(true);
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

  const handleQRScanComplete = () => {
    setShowQRScanner(false);
    onQRScanned();
  };
  
  return (
    <>
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
                <span className="font-medium">
                  {timeRemaining > 0 ? `${worker.name} is on the way` : `${worker.name} has arrived!`}
                </span>
              </div>
              <div className="flex items-center text-slate-600">
                <Clock className="w-4 h-4 mr-1" />
                <span>
                  {timeRemaining > 0 ? currentLocation.estimatedArrival : "Arrived"}
                </span>
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
              <p className="font-medium">
                {timeRemaining > 0 ? "Estimated arrival" : "Status"}
              </p>
              <p className="text-slate-600">
                {timeRemaining > 0 ? currentLocation.estimatedArrival : "Worker has arrived"}
              </p>
            </div>
            <Button variant="outline" size="sm">
              Contact Worker
            </Button>
          </div>

          {timeRemaining === 0 && (
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-green-800 font-medium text-center">
                🎉 Your worker has arrived! They will show you a QR code to scan.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <QRScanner 
        isOpen={showQRScanner}
        onClose={() => setShowQRScanner(false)}
        onScanComplete={handleQRScanComplete}
      />
    </>
  );
};

export default WorkerTracker;
