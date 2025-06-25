
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScanQrCode, X } from "lucide-react";

interface QRScannerProps {
  isOpen: boolean;
  onClose: () => void;
  onScanComplete: () => void;
}

const QRScanner = ({ isOpen, onClose, onScanComplete }: QRScannerProps) => {
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
      onScanComplete();
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">Scan QR Code</DialogTitle>
        </DialogHeader>
        <Card className="border-0 shadow-none">
          <CardContent className="pt-6">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-48 h-48 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                  {isScanning ? (
                    <div className="text-center">
                      <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-2"></div>
                      <p className="text-sm text-gray-600">Scanning...</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <ScanQrCode className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Point camera at QR code</p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-lg font-medium">Worker has arrived!</p>
                <p className="text-gray-600">Scan the QR code shown by your worker to view work details and pricing</p>
              </div>
              
              <div className="flex gap-3">
                <Button 
                  onClick={handleScan} 
                  className="flex-1"
                  disabled={isScanning}
                >
                  <ScanQrCode className="w-4 h-4 mr-2" />
                  {isScanning ? "Scanning..." : "Start Scan"}
                </Button>
                <Button variant="outline" onClick={onClose}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default QRScanner;
