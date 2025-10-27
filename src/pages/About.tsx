import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Award, Users, Target, Shield } from "lucide-react";
import heroShade from "@/assets/hero-shade.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src={heroShade} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-primary">4 Serve</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Bahrain's leading shade installation company with over 10 years of excellence in delivering quality shade solutions
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2013, 4 Serve has grown to become Bahrain's most trusted name in shade installation and maintenance. What started as a small team with a vision to provide quality shade solutions has evolved into a comprehensive service provider serving residential, commercial, and government sectors across the Kingdom.
                </p>
                <p>
                  Our journey has been built on a foundation of quality craftsmanship, customer satisfaction, and continuous innovation. We've completed over 500 projects, from small residential installations to large-scale commercial developments, each one reinforcing our commitment to excellence.
                </p>
                <p>
                  Today, we pride ourselves on being more than just a shade installation company. We're partners in creating comfortable, protected spaces that enhance the quality of life for people throughout Bahrain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality First</h3>
              <p className="text-muted-foreground">
                We never compromise on the quality of materials or workmanship
              </p>
            </div>

            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
              <p className="text-muted-foreground">
                Your satisfaction and comfort are our top priorities
              </p>
            </div>

            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Staying ahead with the latest techniques and materials
              </p>
            </div>

            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Reliability</h3>
              <p className="text-muted-foreground">
                Delivering on our promises, every single time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="text-5xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
