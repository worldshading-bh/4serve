import parkingShade from "@/assets/parking-shade.jpg";
import outdoorShade from "@/assets/outdoor-shade.jpg";
import tentInstallation from "@/assets/tent-installation.jpg";
import steelFabrication from "@/assets/steel-fabrication.jpg";
import maintenance from "@/assets/maintenance.jpg";
import heroShade from "@/assets/hero-shade.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    image: parkingShade,
    title: "Commercial Parking Shade",
    category: "Car Parking",
  },
  {
    image: outdoorShade,
    title: "Outdoor Tensile Structure",
    category: "Tensile Shade",
  },
  {
    image: tentInstallation,
    title: "Event Tent Installation",
    category: "Tent Services",
  },
  {
    image: steelFabrication,
    title: "Custom Steel Framework",
    category: "Steel Fabrication",
  },
  {
    image: maintenance,
    title: "Shade Maintenance Project",
    category: "Maintenance",
  },
  {
    image: heroShade,
    title: "Large Scale Installation",
    category: "Commercial",
  },
];

const ProjectGallery = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful shade installations across Bahrain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-sm font-semibold text-primary mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Link to="/projects">
            <Button size="lg" className="gap-2">
              View All Projects
              <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
