
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Plus } from "lucide-react";

const PaymentMethods = () => {
  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
        <CardDescription>
          Manage your payment methods and view your billing history
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 mb-6">
          <div className="p-4 border rounded-lg flex justify-between items-center bg-white/80 backdrop-blur-sm">
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
          
          <div className="p-4 border rounded-lg flex justify-between items-center bg-white/80 backdrop-blur-sm">
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
  );
};

export default PaymentMethods;
