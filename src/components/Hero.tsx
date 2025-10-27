import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-shade.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/20 rounded-full backdrop-blur-sm">
            <span className="text-primary-foreground font-semibold text-sm">
              10+ Years of Excellence in Bahrain
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Bahrain's Trusted Shade Experts
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            We Build, Repair & Maintain All Types of Shades
          </p>
          
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl">
            Professional shade installation services including car parking shades, tensile structures, 
            outdoor sails, tents, and custom steel fabrication across Bahrain.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button size="lg" className="gap-2 text-lg px-8 py-6">
                Get Free Estimate
                <ArrowRight size={20} />
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 bg-background/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary hover:text-primary-foreground"
              >
                View Services
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap gap-8 text-primary-foreground/80">
            <div>
              <div className="text-3xl font-bold text-primary-foreground">500+</div>
              <div className="text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-foreground">10+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-foreground">100%</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
