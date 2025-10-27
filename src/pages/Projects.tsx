import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import parkingShade from "@/assets/parking-shade.jpg";
import outdoorShade from "@/assets/outdoor-shade.jpg";
import tentInstallation from "@/assets/tent-installation.jpg";
import steelFabrication from "@/assets/steel-fabrication.jpg";
import maintenance from "@/assets/maintenance.jpg";
import heroShade from "@/assets/hero-shade.jpg";

const projects = [
  {
    image: heroShade,
    title: "Grand Mall Parking Facility",
    category: "Commercial",
    description: "Large-scale car parking shade installation covering 200+ vehicles at a major shopping complex in Manama.",
    details: "3-month project | Steel & Tensile Fabric | 2,500 sqm coverage"
  },
  {
    image: parkingShade,
    title: "Residential Villa Complex",
    category: "Residential",
    description: "Custom parking shades for a luxury villa development providing elegant protection for resident vehicles.",
    details: "6-week project | Multiple Units | Custom Design"
  },
  {
    image: outdoorShade,
    title: "School Playground Coverage",
    category: "Educational",
    description: "Tensile shade structures creating safe outdoor play areas protected from sun and weather.",
    details: "Government Project | UV-Resistant Fabric | Safety Certified"
  },
  {
    image: tentInstallation,
    title: "Corporate Event Setup",
    category: "Event",
    description: "Professional tent installation for large corporate gathering with complete weather protection.",
    details: "3-day setup | 500+ capacity | Full event coverage"
  },
  {
    image: steelFabrication,
    title: "Industrial Warehouse Canopy",
    category: "Industrial",
    description: "Heavy-duty steel fabrication and shade installation for industrial loading area.",
    details: "Industrial Grade | Custom Fabrication | High-load bearing"
  },
  {
    image: maintenance,
    title: "Hotel Pool Area Renovation",
    category: "Hospitality",
    description: "Maintenance and upgrade of existing shade structures at a 5-star hotel facility.",
    details: "Renovation Project | Premium Materials | Minimal Disruption"
  },
  {
    image: parkingShade,
    title: "Government Building Complex",
    category: "Government",
    description: "Multi-phase shade installation project for government ministry parking facilities.",
    details: "6-month project | Multiple Locations | Compliance Standards"
  },
  {
    image: outdoorShade,
    title: "Beachfront Restaurant",
    category: "Commercial",
    description: "Elegant tensile shade sails creating comfortable outdoor dining space by the sea.",
    details: "Coastal Installation | Wind-Resistant | Architectural Design"
  },
  {
    image: tentInstallation,
    title: "National Day Exhibition",
    category: "Event",
    description: "Large-scale temporary tent structures for national celebration event.",
    details: "National Event | 1,000+ capacity | Quick Installation"
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our portfolio of successful shade installations across Bahrain. Over 500 projects completed with excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-primary-foreground">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="inline-block px-3 py-1 bg-primary rounded-full text-xs font-semibold mb-3">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-primary-foreground/90 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {project.description}
                    </p>
                    <p className="text-xs text-primary-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                      {project.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Project Statistics</h2>
            <p className="text-lg text-muted-foreground">Our track record speaks for itself</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Total Projects</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Government Projects</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="text-5xl font-bold text-primary mb-2">300+</div>
              <div className="text-muted-foreground">Commercial Clients</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Completion Rate</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Projects;
