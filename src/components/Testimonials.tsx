import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Ahmed Al-Khalifa",
    role: "Property Manager",
    company: "Bahrain Commercial Complex",
    rating: 5,
    text: "Outstanding work on our parking shade installation. The team was professional, efficient, and delivered exactly what we needed. Highly recommended!",
  },
  {
    name: "Sarah Mohammed",
    role: "Operations Director",
    company: "Al-Majd Trading",
    rating: 5,
    text: "We've worked with 4 Serve on multiple projects. Their attention to detail and quality of materials is unmatched. Great service and competitive pricing.",
  },
  {
    name: "Khalid Hassan",
    role: "Facilities Manager",
    company: "Government Sector",
    rating: 5,
    text: "The tensile structures they installed have withstood Bahrain's extreme weather perfectly. Excellent craftsmanship and after-sales support.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in border-border"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="pt-4 border-t border-border">
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
