
import { ArrowRight, Shield, Star, Wrench } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container max-w-6xl animate-fadeIn">
        <div className="text-center mb-12">
          <span className="px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium inline-block mb-4">
            Trusted by thousands of customers
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Professional Repair Services,
            <br />
            <span className="text-secondary">Guaranteed</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Connect with verified repair experts who arrive fully equipped and ready to solve your problems.
          </p>
          <button className="px-8 py-4 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors inline-flex items-center gap-2 shadow-lg hover:shadow-xl">
            Book a Service
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: Shield,
              title: "Verified Experts",
              description: "All repair workers are thoroughly vetted and certified",
            },
            {
              icon: Wrench,
              title: "Fully Equipped",
              description: "Workers arrive with all necessary tools and equipment",
            },
            {
              icon: Star,
              title: "Satisfaction Guaranteed",
              description: "3-month warranty on all completed repairs",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <feature.icon className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
