import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { ContactForm } from "./contact-form";
import { FadeInOnScroll } from "../animations/fade-in-on-scroll";
import { Button } from "../ui/button";

export default function ContactSection() {
  return (
    <FadeInOnScroll>
      <section id="contact" className="w-full py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Get in Touch</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear from you. Reach out to us for a free consultation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline">Contact Form</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
            <div className="space-y-8">
              <Card>
                <CardContent className="pt-6 space-y-4">
                   <h3 className="font-headline text-xl font-semibold">Our Information</h3>
                   <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Jaipur Office</p>
                      <p className="text-muted-foreground">Malviya Nagar, Jaipur, Rajasthan, 302017</p>
                    </div>
                  </div>
                   <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <a href="mailto:contact@acousticavista.com" className="hover:text-primary">contact@acousticavista.com</a>
                  </div>
                   <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <a href="tel:+919876543210" className="hover:text-primary">+91 987 654 3210</a>
                  </div>
                </CardContent>
              </Card>

              <div className="aspect-video w-full rounded-lg overflow-hidden border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113994.0993952763!2d75.7025255433594!3d26.885141600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Acoustica Vista Location in Jaipur"
                ></iframe>
              </div>

              <Button asChild size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white">
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </FadeInOnScroll>
  );
}
