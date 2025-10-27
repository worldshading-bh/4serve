import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Car, Tent, Warehouse, Wrench, Building2, Shield, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import parkingShade from "@/assets/parking-shade.jpg";
import outdoorShade from "@/assets/outdoor-shade.jpg";
import tentInstallation from "@/assets/tent-installation.jpg";
import steelFabrication from "@/assets/steel-fabrication.jpg";
import maintenance from "@/assets/maintenance.jpg";

const services = [
  {
    icon: Car,
    title: "Car Parking Shades",
    description: "Protect your vehicles from Bahrain's harsh sun and weather conditions with our premium car parking shade structures.",
    image: parkingShade,
    features: [
      "UV-resistant fabric materials",
      "Durable steel framework",
      "Custom sizes and designs",
      "Residential & commercial options",
      "Weather-resistant coatings",
      "Quick installation"
    ]
  },
  {
    icon: Shield,
    title: "Outdoor Shade Sails",
    description: "Modern and stylish tensile shade sails that provide excellent protection while enhancing your outdoor spaces.",
    image: outdoorShade,
    features: [
      "Contemporary architectural design",
      "Multiple color options",
      "High-grade shade fabric",
      "Wind and rain resistant",
      "Garden & patio coverage",
      "Custom configurations"
    ]
  },
  {
    icon: Warehouse,
    title: "Tensile Structures",
    description: "Large-scale tensile membrane structures for commercial projects, public spaces, and architectural applications.",
    image: outdoorShade,
    features: [
      "Engineered structural design",
      "Large span coverage",
      "Architectural aesthetics",
      "Durable membrane materials",
      "Weather analysis included",
      "Professional installation"
    ]
  },
  {
    icon: Tent,
    title: "Tent Installation",
    description: "Professional tent setup and installation for events, exhibitions, and temporary coverage requirements.",
    image: tentInstallation,
    features: [
      "Event & exhibition tents",
      "Temporary structures",
      "Various sizes available",
      "Quick setup & removal",
      "Weather-proof materials",
      "Complete event coverage"
    ]
  },
  {
    icon: Building2,
    title: "Steel Fabrication",
    description: "Custom steel fabrication services for shade structure frameworks, support systems, and construction projects.",
    image: steelFabrication,
    features: [
      "Custom metalwork",
      "High-quality steel materials",
      "Precise fabrication",
      "Structural engineering",
      "Corrosion-resistant coating",
      "Quality assurance testing"
    ]
  },
  {
    icon: Wrench,
    title: "Repair & Maintenance",
    description: "Comprehensive maintenance and repair services to extend the life of your shade structures.",
    image: maintenance,
    features: [
      "Regular maintenance plans",
      "Emergency repairs",
      "Fabric replacement",
      "Structural inspections",
      "Cleaning services",
      "Extended warranty options"
    ]
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive shade solutions tailored to meet your specific needs. From design consultation to installation and maintenance, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-8 left-8">
                        <service.icon className="w-16 h-16 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 w-full">
                  <Card className="border-border shadow-lg">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      
                      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link to="/contact">
                        <Button size="lg" className="w-full md:w-auto">
                          Request Quote
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today for a free consultation and quote on your shade project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="text-lg px-8">
                  Get Free Estimate
                </Button>
              </Link>
              <a href="tel:+97317123456">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;
