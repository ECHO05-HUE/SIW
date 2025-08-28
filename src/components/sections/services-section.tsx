import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Volume2, Building, Waves } from 'lucide-react';
import Image from "next/image";
import { FadeInOnScroll } from "../animations/fade-in-on-scroll";

const services = [
  {
    icon: <Volume2 className="h-10 w-10 text-primary" />,
    title: "Home Theater Installation",
    description: "Experience cinema-quality audio and video in the comfort of your home. We design and install bespoke home theaters tailored to your space and budget.",
    image: "https://picsum.photos/600/401",
    aiHint: "home cinema",
  },
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: "Commercial Sound Systems",
    description: "From restaurants to boardrooms, we provide crystal-clear, reliable audio solutions that enhance your business environment and communication.",
    image: "https://picsum.photos/600/402",
    aiHint: "office audio",
  },
  {
    icon: <Waves className="h-10 w-10 text-primary" />,
    title: "Acoustic Treatment",
    description: "Optimize your space for sound. We analyze and treat rooms to eliminate echo and reverb, ensuring perfect audio clarity for any application.",
    image: "https://picsum.photos/600/403",
    aiHint: "acoustic panels",
  },
];

export default function ServicesSection() {
  return (
    <FadeInOnScroll>
      <section id="services" className="w-full py-24 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Services</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              We offer a range of specialized services to meet your audio-visual needs with precision and excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInOnScroll key={service.title} delay={index * 150}>
                <Card className="h-full flex flex-col text-center items-center shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300">
                  <CardHeader className="items-center">
                    <div className="bg-primary/10 p-4 rounded-full">
                      {service.icon}
                    </div>
                    <CardTitle className="font-headline pt-4">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-4">
                      <Image
                        src={service.image}
                        alt={service.title}
                        data-ai-hint={service.aiHint}
                        width={600}
                        height={400}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>
    </FadeInOnScroll>
  );
}
