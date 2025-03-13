
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, CheckCircle, MapPin, Star, UserCheck, X, Shield } from "lucide-react";

interface WorkerProfileProps {
  worker: any;
  onAccept: () => void;
  onReject: () => void;
  onRequestSupervisor: () => void;
}

const WorkerProfile = ({ worker, onAccept, onReject, onRequestSupervisor }: WorkerProfileProps) => {
  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center justify-between">
          <span>Worker Found</span>
          <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full flex items-center">
            <CheckCircle className="w-4 h-4 mr-1" /> Available Now
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Worker basic info */}
        <div className="flex items-center gap-4">
          <Avatar className="w-20 h-20 border-2 border-secondary">
            <AvatarImage src={worker.photo} />
            <AvatarFallback>{worker.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-xl font-semibold">{worker.name}</h3>
            <div className="flex items-center mt-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="ml-1 font-medium">{worker.rating}</span>
              <span className="mx-2 text-slate-400">•</span>
              <span className="text-sm text-slate-600">{worker.jobsCompleted} jobs completed</span>
            </div>
            <div className="mt-1 text-sm text-slate-600">
              <span className="font-medium">{worker.expertise} Specialist</span>
            </div>
          </div>
        </div>
        
        {/* Certificates */}
        <div>
          <h4 className="text-sm uppercase tracking-wide text-slate-500 mb-2 flex items-center">
            <Award className="w-4 h-4 mr-1" /> Professional Certificates
          </h4>
          <div className="space-y-2">
            {worker.certificates.map((cert: any) => (
              <div key={cert.id} className="bg-slate-50 p-3 rounded-lg">
                <div className="font-medium">{cert.name}</div>
                <div className="text-sm text-slate-500">
                  {cert.issuer} • {cert.year}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Reviews */}
        <div>
          <h4 className="text-sm uppercase tracking-wide text-slate-500 mb-2 flex items-center">
            <UserCheck className="w-4 h-4 mr-1" /> Customer Reviews
          </h4>
          <div className="space-y-3 max-h-60 overflow-y-auto">
            {worker.reviews.map((review: any) => (
              <div key={review.id} className="border-b border-slate-100 pb-3">
                <div className="flex justify-between">
                  <span className="font-medium">{review.customer}</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-slate-300'}`} 
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-1">{review.comment}</p>
                <div className="text-xs text-slate-400 mt-1">{review.date}</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <div className="flex w-full gap-2">
          <Button 
            onClick={onAccept} 
            className="flex-1 bg-green-600 hover:bg-green-700"
          >
            <CheckCircle className="mr-2" /> Accept Worker
          </Button>
          <Button 
            onClick={onReject} 
            variant="outline" 
            className="flex-1 text-red-600 border-red-200 hover:bg-red-50"
          >
            <X className="mr-2" /> Request Different Worker
          </Button>
        </div>
        <Button 
          onClick={onRequestSupervisor} 
          variant="outline" 
          className="w-full text-blue-600 border-blue-200 hover:bg-blue-50"
        >
          <Shield className="mr-2" /> Request Supervisor Oversight
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WorkerProfile;
