
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Wrench, Zap, Smartphone, Home, Thermometer, Plus } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const ServiceTasks = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { service, tasks } = location.state || {};
  const [selectedTask, setSelectedTask] = useState<string | null>(null);
  const [otherTask, setOtherTask] = useState("");
  const [showOtherInput, setShowOtherInput] = useState(false);

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
    // Pass the selected task or the custom "other" task to the worker assignment page
    const taskToRequest = selectedTask === "other" ? otherTask : selectedTask;
    navigate('/worker-assignment', { 
      state: { 
        service, 
        selectedTask: taskToRequest 
      } 
    });
  };

  const handleTaskClick = (task: string) => {
    if (task === "other") {
      setShowOtherInput(true);
    } else {
      setShowOtherInput(false);
    }
    setSelectedTask(task);
  };

  // Combine regular tasks with the "Other" option
  const allTasks = [...tasks, "Other (specify your repair need)"];

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
                {allTasks.map((task: string, idx: number) => (
                  <div 
                    key={idx} 
                    className={`p-4 border rounded-lg ${selectedTask === (idx === tasks.length ? "other" : task) 
                      ? "bg-secondary/20 border-secondary" 
                      : "bg-white/80 hover:bg-slate-100/80"} 
                      backdrop-blur-sm cursor-pointer transition-colors`}
                    onClick={() => handleTaskClick(idx === tasks.length ? "other" : task)}
                  >
                    <div className="flex items-center">
                      <span className={`w-2 h-2 ${selectedTask === (idx === tasks.length ? "other" : task) 
                        ? "bg-secondary" 
                        : "bg-slate-400"} rounded-full mr-3`} />
                      <p className="text-slate-700">{task}</p>
                      {idx === tasks.length && <Plus className="w-4 h-4 ml-2 text-slate-500" />}
                    </div>
                  </div>
                ))}
              </div>
              
              {showOtherInput && (
                <div className="mb-6">
                  <Input
                    placeholder="Please specify your repair need"
                    value={otherTask}
                    onChange={(e) => setOtherTask(e.target.value)}
                    className="border-secondary"
                  />
                </div>
              )}
              
              <div className="flex justify-center">
                <Button 
                  onClick={handleRequestService}
                  className="px-8 py-6 text-lg bg-secondary hover:bg-secondary/90"
                  disabled={!selectedTask || (selectedTask === "other" && !otherTask)}
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
