
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";

const Index = () => {
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
        <Hero />
        <Services />
        <HowItWorks />
      </div>
    </div>
  );
};

export default Index;
