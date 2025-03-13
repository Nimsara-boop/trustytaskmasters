import React from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
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
            <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-md">About DamnItFixIt</h1>
            <p className="text-xl max-w-2xl mx-auto text-white drop-shadow-md">
              Learn more about our mission to connect customers with skilled repair professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-primary">Our Story</h2>
                <p className="text-slate-700 mb-4">
                  FindAFixer was founded in 2023 with a simple mission: make home repairs and maintenance 
                  hassle-free for everyone. We noticed that finding reliable professionals for various 
                  repair needs was often challenging and time-consuming.
                </p>
                <p className="text-slate-700">
                  Our platform bridges the gap between customers and skilled professionals, creating a 
                  marketplace that values quality, transparency, and convenience above all else.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-primary">Our Values</h2>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-2">✓</span>
                    <span><strong>Quality:</strong> We rigorously vet all service providers to ensure top-notch service.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-2">✓</span>
                    <span><strong>Reliability:</strong> Timely service and clear communication are our priorities.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-2">✓</span>
                    <span><strong>Transparency:</strong> No hidden fees or surprises—just clear pricing and expectations.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent font-bold mr-2">✓</span>
                    <span><strong>Customer-First:</strong> Your satisfaction drives everything we do.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white/95 backdrop-blur-sm shadow-lg md:col-span-2">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-primary">The FindAFixer Difference</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-accent">Verified Professionals</h3>
                    <p className="text-slate-700">
                      Every service provider undergoes thorough background checks and skill verification.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-accent">Satisfaction Guarantee</h3>
                    <p className="text-slate-700">
                      If you're not happy with the service, we'll make it right or refund your payment.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-accent">Smart Matching</h3>
                    <p className="text-slate-700">
                      Our system pairs you with professionals who specialize in exactly what you need.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
