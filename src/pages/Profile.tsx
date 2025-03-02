
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ServiceHistory from "@/components/profile/ServiceHistory";
import PaymentMethods from "@/components/profile/PaymentMethods";
import ProfileEditor from "@/components/profile/ProfileEditor";
import { mockServiceHistory } from "@/data/mockServiceHistory";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const [editing, setEditing] = useState(false);
  
  const defaultValues = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, Anytown, USA",
  };

  const onSubmit = (data: any) => {
    console.log("Profile updated:", data);
    setEditing(false);
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
        
        <div className="container max-w-6xl pt-24 pb-16">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Profile Summary Card */}
            <ProfileHeader setEditing={setEditing} />
            
            {/* Main Content Area */}
            <div className="md:w-2/3">
              <Tabs defaultValue="service-history">
                <TabsList className="bg-white/50 backdrop-blur-sm w-full mb-6">
                  <TabsTrigger value="service-history">Service History</TabsTrigger>
                  <TabsTrigger value="upcoming">Upcoming Services</TabsTrigger>
                  <TabsTrigger value="payment">Payment Methods</TabsTrigger>
                  {editing && <TabsTrigger value="edit-profile">Edit Profile</TabsTrigger>}
                </TabsList>
                
                <TabsContent value="service-history">
                  <ServiceHistory services={mockServiceHistory} filter="Completed" />
                </TabsContent>
                
                <TabsContent value="upcoming">
                  <ServiceHistory services={mockServiceHistory} filter="Scheduled" />
                </TabsContent>
                
                <TabsContent value="payment">
                  <PaymentMethods />
                </TabsContent>
                
                {editing && (
                  <TabsContent value="edit-profile">
                    <ProfileEditor 
                      onSubmit={onSubmit} 
                      onCancel={() => setEditing(false)} 
                      defaultValues={defaultValues} 
                    />
                  </TabsContent>
                )}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
