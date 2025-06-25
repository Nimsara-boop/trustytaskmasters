
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Clock, DollarSign, CheckCircle, User, Wrench } from "lucide-react";

interface PreReceiptProps {
  worker: any;
  service: any;
  task: any;
  onApprove: () => void;
  onReject: () => void;
}

const PreReceipt = ({ worker, service, task, onApprove, onReject }: PreReceiptProps) => {
  const estimatedTime = "2-3 hours";
  const estimatedCost = 145;
  const serviceFee = 15;
  const totalCost = estimatedCost + serviceFee;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
            Work Details & Estimate
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Worker Info */}
          <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg">
            <img 
              src={worker.photo} 
              alt={worker.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold">{worker.name}</p>
              <p className="text-sm text-gray-600">Verified Professional</p>
            </div>
            <div className="ml-auto flex items-center">
              <span className="text-yellow-500">★</span>
              <span className="ml-1 font-semibold">{worker.rating}</span>
            </div>
          </div>

          {/* Service Details */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Wrench className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <p className="font-semibold">{service.name}</p>
                <p className="text-gray-600">{task.name}</p>
                <p className="text-sm text-gray-500 mt-1">{task.description}</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Time Estimate */}
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-semibold">Estimated Time</p>
                <p className="text-sm text-gray-600">Based on current assessment</p>
              </div>
            </div>
            <span className="text-xl font-bold text-blue-600">{estimatedTime}</span>
          </div>

          {/* Cost Breakdown */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Labor & Materials</span>
              <span className="font-semibold">${estimatedCost}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Service Fee</span>
              <span className="font-semibold">${serviceFee}</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between text-lg">
              <span className="font-semibold flex items-center">
                <DollarSign className="w-5 h-5 mr-1" />
                Total Estimate
              </span>
              <span className="text-2xl font-bold text-green-600">${totalCost}</span>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> This is an estimate based on initial assessment. 
              Final cost may vary depending on actual work required. You'll be notified of any changes before additional work begins.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button 
              onClick={onApprove} 
              className="flex-1 bg-green-600 hover:bg-green-700"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Approve & Start Work
            </Button>
            <Button 
              variant="outline" 
              onClick={onReject}
              className="flex-1"
            >
              Request Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PreReceipt;
