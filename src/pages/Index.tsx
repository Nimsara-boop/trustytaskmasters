
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background with gradient */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-main-gradient" />
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
