import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `New Inquiry from 4 Serve Website:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nLocation: ${formData.location}\nService Needed: ${formData.service}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/97317123456?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "We'll respond to your inquiry shortly!",
    });
    
    setFormData({
      name: "",
      phone: "",
      email: "",
      location: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get Your <span className="text-primary">Free Estimate</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact us today for a consultation and free quote on your shade project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  name="location"
                  placeholder="Location in Bahrain *"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  name="service"
                  placeholder="Service Needed (e.g., Car Parking Shade)"
                  value={formData.service}
                  onChange={handleChange}
                  className="h-12"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full text-lg">
                Send Inquiry via WhatsApp
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Phone</h3>
                  <p className="text-muted-foreground">+973 1712 3456</p>
                  <p className="text-muted-foreground">+973 3312 3456</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground">info@4serve.bh</p>
                  <p className="text-muted-foreground">projects@4serve.bh</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Location</h3>
                  <p className="text-muted-foreground">Building 123, Road 456</p>
                  <p className="text-muted-foreground">Manama, Kingdom of Bahrain</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Working Hours</h3>
                  <p className="text-muted-foreground">Saturday - Thursday: 7:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground">Friday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
