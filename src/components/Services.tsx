import { Car, Tent, Warehouse, Wrench, Building2, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import parkingShade from "@/assets/parking-shade.jpg";
import outdoorShade from "@/assets/outdoor-shade.jpg";
import tentInstallation from "@/assets/tent-installation.jpg";
import steelFabrication from "@/assets/steel-fabrication.jpg";
import maintenance from "@/assets/maintenance.jpg";

const services = [
  {
    icon: Car,
    title: "Car Parking Shades",
    description: "Durable and stylish car parking shade solutions for residential, commercial, and government facilities.",
    image: parkingShade,
  },
  {
    icon: Shield,
    title: "Outdoor Shade Sails",
    description: "Modern tensile shade structures that provide protection and aesthetic appeal to outdoor spaces.",
    image: outdoorShade,
  },
  {
    icon: Warehouse,
    title: "Tensile Structures",
    description: "Custom-designed tensile membrane structures for large-scale commercial and public projects.",
    image: outdoorShade,
  },
  {
    icon: Tent,
    title: "Tent Installation",
    description: "Professional tent setup for events, exhibitions, and temporary coverage needs of any size.",
    image: tentInstallation,
  },
  {
    icon: Building2,
    title: "Steel Fabrication",
    description: "High-quality steel framework and custom metalwork for shade structures and construction projects.",
    image: steelFabrication,
  },
  {
    icon: Wrench,
    title: "Repair & Maintenance",
    description: "Comprehensive maintenance and repair services to keep your shade structures in perfect condition.",
    image: maintenance,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete shade solutions tailored to your needs. From design to installation and maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in border-border hover:border-primary/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <service.icon className="w-10 h-10 text-primary" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
