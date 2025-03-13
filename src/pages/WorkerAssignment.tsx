
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import WaitingForWorker from "@/components/WaitingForWorker";
import WorkerProfile from "@/components/WorkerProfile";
import WorkerTracker from "@/components/WorkerTracker";
import { useToast } from "@/hooks/use-toast";

const WorkerAssignment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { service, selectedTask } = location.state || {};
  
  const [status, setStatus] = useState<"waiting" | "worker_found" | "accepted">("waiting");
  const [worker, setWorker] = useState<any>(null);
  
  useEffect(() => {
    if (!service || !selectedTask) {
      navigate('/services');
    }
  }, [service, selectedTask, navigate]);
  
  const handleWorkerFound = (foundWorker: any) => {
    setWorker(foundWorker);
    setStatus("worker_found");
    toast({
      title: "Worker Found!",
      description: `${foundWorker.name} has accepted your service request.`,
    });
  };
  
  const handleAcceptWorker = () => {
    setStatus("accepted");
    toast({
      title: "Worker Accepted",
      description: `You've accepted ${worker.name}. They're on their way!`,
    });
  };
  
  const handleRejectWorker = () => {
    toast({
      title: "Looking for a different worker",
      description: "We'll find another qualified professional for you.",
    });
    setStatus("waiting");
    setWorker(null);
    
    // Simulate finding another worker faster (3-8 seconds)
    setTimeout(() => {
      const newWorker = {
        ...worker,
        id: "w2",
        name: "Maria Rodriguez",
        photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
        rating: 4.9,
      };
      setWorker(newWorker);
      setStatus("worker_found");
      toast({
        title: "New Worker Found!",
        description: `${newWorker.name} has accepted your service request.`,
      });
    }, Math.random() * 5000 + 3000);
  };
  
  const handleRequestSupervisor = () => {
    toast({
      title: "Supervisor Requested",
      description: "A supervisor will oversee this job at no additional cost.",
      variant: "default",
    });
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
        
        <div className="container max-w-4xl pt-24 pb-16">
          {status === "waiting" && service && selectedTask && (
            <WaitingForWorker 
              service={service} 
              task={selectedTask} 
              onWorkerFound={handleWorkerFound} 
            />
          )}
          
          {status === "worker_found" && worker && (
            <WorkerProfile 
              worker={worker} 
              onAccept={handleAcceptWorker} 
              onReject={handleRejectWorker} 
              onRequestSupervisor={handleRequestSupervisor} 
            />
          )}
          
          {status === "accepted" && worker && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white text-center mb-6">
                Your service is confirmed!
              </h2>
              <WorkerTracker worker={worker} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkerAssignment;
