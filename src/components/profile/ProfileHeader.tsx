
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, MapPin, Phone, Settings } from "lucide-react";

interface ProfileHeaderProps {
  setEditing: (editing: boolean) => void;
}

const ProfileHeader = ({ setEditing }: ProfileHeaderProps) => {
  return (
    <Card className="md:w-1/3 bg-white/95 backdrop-blur-sm shadow-lg">
      <CardHeader className="text-center">
        <Avatar className="w-24 h-24 mx-auto">
          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <CardTitle className="mt-4">John Doe</CardTitle>
        <CardDescription>Member since May 2023</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center">
            <Phone className="w-5 h-5 text-slate-500 mr-3" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-slate-500 mr-3" />
            <span>123 Main St, Anytown, USA</span>
          </div>
          <div className="flex items-center">
            <CreditCard className="w-5 h-5 text-slate-500 mr-3" />
            <span>Payment methods: 2</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full" onClick={() => setEditing(true)}>
          <Settings className="w-4 h-4 mr-2" />
          Edit Profile
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileHeader;
