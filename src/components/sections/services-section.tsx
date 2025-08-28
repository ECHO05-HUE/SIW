import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Building2, Waves } from 'lucide-react';
import Image from "next/image";
import { FadeInOnScroll } from "../animations/fade-in-on-scroll";

const services = [
  {
    icon: <Monitor className="h-8 w-8 text-primary" />,
    title: "Home Theater Systems",
    description: "Bespoke home theaters with immersive surround sound and crystal-clear 4K projection, tailored to your space.",
    image: "https://picsum.photos/600/401",
    aiHint: "home cinema",
  },
  {
    icon: <Building2 className="h-8 w-8 text-primary" />,
    title: "Commercial AV Solutions",
    description: "Reliable audio & video for boardrooms, retail, and hospitality. Enhance communication and customer experience.",
    image: "https://picsum.photos/600/402",
    aiHint: "office audio",
  },
  {
    icon: <Waves className="h-8 w-8 text-primary" />,
    title: "Acoustic Treatments",
    description: "Optimize your room's sound with our analysis and custom treatments, eliminating echo for perfect audio clarity.",
    image: "https://picsum.photos/600/403",
    aiHint: "acoustic panels",
  },
];

export default function ServicesSection() {
  return (
    <FadeInOnScroll>
      <section id="services" className="w-full py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight">What We Do</h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto text-lg">
              We offer a range of specialized services to meet your audio-visual needs with precision and excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <FadeInOnScroll key={service.title} delay={index * 150}>
                <Card className="h-full flex flex-col bg-card shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 border-border">
                  <div className="relative aspect-video w-full rounded-t-lg overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        data-ai-hint={service.aiHint}
                        fill
                        className="object-cover"
                      />
                  </div>
                  <CardHeader className="flex-row items-center gap-4">
                    <div className="bg-secondary p-3 rounded-lg">
                      {service.icon}
                    </div>
                    <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
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
