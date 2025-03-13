
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader, Clock } from "lucide-react";

interface WaitingForWorkerProps {
  service: any;
  task: string;
  onWorkerFound: (worker: any) => void;
}

const WaitingForWorker = ({ service, task, onWorkerFound }: WaitingForWorkerProps) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  
  // Simulate waiting for a worker to accept the job
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);
    
    // Simulate a worker accepting after a random time between 5-15 seconds
    const workerResponseTime = Math.floor(Math.random() * 10000) + 5000;
    const workerTimer = setTimeout(() => {
      // Mock worker data
      const worker = {
        id: "w1",
        name: "Alex Johnson",
        photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
        rating: 4.8,
        jobsCompleted: 143,
        expertise: service.title,
        certificates: [
          { id: "cert1", name: "Certified Electrician", issuer: "National Electric Association", year: 2020 },
          { id: "cert2", name: "Advanced Troubleshooting", issuer: "Technical Training Institute", year: 2021 }
        ],
        reviews: [
          { id: "rev1", customer: "Sarah M.", rating: 5, comment: "Alex fixed my electrical issue quickly and professionally. Highly recommend!", date: "2023-10-15" },
          { id: "rev2", customer: "David K.", rating: 4, comment: "Good service, arrived on time and got the job done.", date: "2023-09-22" },
          { id: "rev3", customer: "Jennifer L.", rating: 5, comment: "Excellent work! Alex explained everything clearly and solved our problem.", date: "2023-08-05" }
        ],
        location: {
          lat: 40.7128,
          lng: -74.0060,
          estimatedArrival: "25 minutes"
        }
      };
      
      onWorkerFound(worker);
    }, workerResponseTime);
    
    return () => {
      clearInterval(timer);
      clearTimeout(workerTimer);
    };
  }, [onWorkerFound, service.title]);
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-lg max-w-md mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-2xl">Finding a {service.title} Expert</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-center">
          <Loader className="w-16 h-16 text-secondary animate-spin" />
        </div>
        
        <p className="text-lg text-slate-700">
          We're searching for available professionals in your area who can help with:
        </p>
        
        <div className="bg-secondary/10 p-4 rounded-lg">
          <p className="font-medium text-secondary">{task}</p>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-slate-500">
          <Clock className="w-5 h-5" />
          <span>Searching for {formatTime(elapsedTime)}</span>
        </div>
        
        <p className="text-sm text-slate-500">
          A notification has been sent to qualified professionals in your area. 
          The first available expert will be assigned to your request.
        </p>
      </CardContent>
    </Card>
  );
};

export default WaitingForWorker;
