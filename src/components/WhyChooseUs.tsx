import { Award, Clock, Shield, Users, Wrench, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "We use only the highest quality materials and proven construction techniques for lasting durability.",
  },
  {
    icon: Shield,
    title: "Weather Resistant",
    description: "Our shade structures are designed to withstand Bahrain's harsh climate conditions year-round.",
  },
  {
    icon: Clock,
    title: "Fast Installation",
    description: "Efficient project execution with minimal disruption to your daily operations and schedules.",
  },
  {
    icon: Users,
    title: "Local Expertise",
    description: "10+ years serving Bahrain with deep understanding of local requirements and regulations.",
  },
  {
    icon: Wrench,
    title: "Full Maintenance",
    description: "Comprehensive after-sales support and maintenance services to keep your shades in perfect condition.",
  },
  {
    icon: TrendingUp,
    title: "Custom Solutions",
    description: "Tailored designs that perfectly match your specific requirements, space, and aesthetic preferences.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">4 Serve</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for professional shade solutions in Bahrain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 animate-fade-in">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Completed Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
