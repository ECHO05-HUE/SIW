
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { FadeInOnScroll } from "../animations/fade-in-on-scroll";
import { Button } from "../ui/button";

export default function ContactSection() {
  return (
    <FadeInOnScroll>
      <section id="contact" className="w-full py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight">Contact Us</h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto text-lg">
              Ready to start your project or have a question about sound system installation in Ajmer? We're here to help. Reach out via phone, email, or WhatsApp.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-8">
               <div className="space-y-6">
                 <h3 className="font-headline text-2xl font-bold">Contact Information</h3>
                 <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Our Location</p>
                    <p className="text-muted-foreground">Jaipur, Rajasthan, India</p>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Email Address</p>
                    <a href="mailto:akshay.primeaudiosolution@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">akshay.primeaudiosolution@gmail.com</a>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                   <div className="p-3 bg-secondary rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Phone Number</p>
                    <a href="tel:+919828802930" className="text-muted-foreground hover:text-primary transition-colors">+91 98288 02930</a>
                  </div>
                </div>
                <Button asChild size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white">
                  <a href="https://wa.me/919828802930" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-6 w-6" />
                    Chat on WhatsApp
                  </a>
                </Button>
               </div>
            </div>
            <div className="w-full rounded-lg overflow-hidden border-2 border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825681144!2d75.650472249129!3d26.8854479192663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1716912345678"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Acoustica Vista Location in Jaipur"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </FadeInOnScroll>
  );
}
