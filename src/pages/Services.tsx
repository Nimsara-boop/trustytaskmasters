
import React from "react";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background image with overlay */}
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
        <div className="container mx-auto px-4 pt-24 pb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-md">Our Services</h1>
            <p className="text-xl max-w-2xl mx-auto text-white drop-shadow-md">
              Find the right service for your needs. Our professional fixers are ready to help with any repair or maintenance job.
            </p>
          </div>
          <Services />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
