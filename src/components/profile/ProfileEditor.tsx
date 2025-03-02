
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, User } from "lucide-react";
import { useForm } from "react-hook-form";

interface ProfileEditorProps {
  onSubmit: (data: any) => void;
  onCancel: () => void;
  defaultValues: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
}

const ProfileEditor = ({ onSubmit, onCancel, defaultValues }: ProfileEditorProps) => {
  const form = useForm({
    defaultValues,
  });

  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
      <CardHeader>
        <CardTitle>Edit Profile</CardTitle>
        <CardDescription>
          Update your personal information
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <div className="flex items-center border rounded-md overflow-hidden">
                      <span className="px-3 py-2 bg-slate-100">
                        <User className="h-5 w-5 text-slate-500" />
                      </span>
                      <Input className="border-0" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <div className="flex items-center border rounded-md overflow-hidden">
                      <span className="px-3 py-2 bg-slate-100">
                        <Phone className="h-5 w-5 text-slate-500" />
                      </span>
                      <Input className="border-0" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <div className="flex items-center border rounded-md overflow-hidden">
                      <span className="px-3 py-2 bg-slate-100">
                        <MapPin className="h-5 w-5 text-slate-500" />
                      </span>
                      <Input className="border-0" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex gap-3">
              <Button 
                type="submit" 
                className="flex-1 bg-secondary hover:bg-secondary/90"
              >
                Save Changes
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                className="flex-1"
                onClick={onCancel}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ProfileEditor;
