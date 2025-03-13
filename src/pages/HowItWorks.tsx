
import React from "react";
import Navbar from "@/components/Navbar";
import HowItWorks from "@/components/HowItWorks";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background with gradient */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-main-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-4 pt-24 pb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-md">How It Works</h1>
            <p className="text-xl max-w-2xl mx-auto text-white drop-shadow-md">
              Our simple process connects you with skilled professionals in just a few steps.
            </p>
          </div>
          <HowItWorks />
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
