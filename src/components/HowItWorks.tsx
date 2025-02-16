import { Share2, Star, FileCheck, MapPin, Bell, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileCheck,
      title: "1. Report Your Problem",
      description: "Describe your issue and upload photos if needed. Select the type of repair service required.",
      details: "Our smart system categorizes your problem and matches it with qualified fixers."
    },
    {
      icon: MapPin,
      title: "2. Get Matched",
      description: "We find available certified fixers in your area based on their proximity settings.",
      details: "Fixers receive notifications for jobs within their chosen service radius."
    },
    {
      icon: Star,
      title: "3. Review & Confirm",
      description: "View the assigned fixer's profile, including ratings, certifications, and past work.",
      details: "All fixers maintain a minimum 4-star rating and valid certifications."
    },
    {
      icon: Bell,
      title: "4. Track Your Service",
      description: "Get real-time updates on your fixer's arrival time and service progress.",
      details: "Rate and review the service upon completion."
    }
  ];

  const verificationSteps = [
    {
      icon: Shield,
      title: "Fixer Verification",
      points: [
        "Background checks and identity verification",
        "Professional certification validation",
        "Skills assessment and testing",
        "Customer ratings and reviews monitoring",
        "Regular performance evaluations"
      ]
    },
    {
      icon: Share2,
      title: "Service Area Management",
      points: [
        "Fixers set their preferred service radius",
        "Real-time availability updates",
        "Automatic job matching based on location",
        "Priority notifications for nearby jobs",
        "Flexible schedule management"
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-transparent backdrop-blur-sm">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">How It Works</h2>
          <p className="text-slate-700 max-w-2xl mx-auto">
            A simple, transparent process to get your repairs done by verified professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <step.icon className="w-8 h-8 text-secondary mb-2" />
                <CardTitle className="text-slate-800 text-lg">{step.title}</CardTitle>
                <CardDescription className="text-slate-600">{step.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-700">{step.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {verificationSteps.map((section, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <section.icon className="w-8 h-8 text-secondary mb-2" />
                <CardTitle className="text-slate-800">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 mt-2 mr-2 bg-secondary rounded-full" />
                      <span className="text-slate-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
