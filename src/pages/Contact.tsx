import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactSection from "@/components/ContactSection";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to start your shade project? Contact us today for a free consultation and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="p-6 rounded-lg bg-card border border-border text-center hover:shadow-lg transition-shadow animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Call Us</h3>
              <a href="tel:+97317123456" className="text-muted-foreground hover:text-primary">
                +973 1712 3456
              </a>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Email Us</h3>
              <a href="mailto:info@4serve.bh" className="text-muted-foreground hover:text-primary">
                info@4serve.bh
              </a>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Visit Us</h3>
              <p className="text-muted-foreground text-sm">
                Manama, Bahrain
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Working Hours</h3>
              <p className="text-muted-foreground text-sm">
                Sat-Thu: 7AM-6PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* Map Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4">Find Us on Map</h2>
              <p className="text-lg text-muted-foreground">
                Visit our office in Manama, Kingdom of Bahrain
              </p>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57745.14820446935!2d50.556141!3d26.225453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49af9c7e7d3a23%3A0x1c3f4c2c3e7d3a23!2sManama%2C%20Bahrain!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="4 Serve Location Map"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
