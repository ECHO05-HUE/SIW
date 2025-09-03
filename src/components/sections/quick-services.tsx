
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Film, Building, Waves, ArrowRight } from "lucide-react";
import { FadeInOnScroll } from "../animations/fade-in-on-scroll";
import Link from "next/link";

const services = [
  {
    icon: <Film className="h-10 w-10 text-primary" />,
    title: "Home Theater Installation",
    description: "Custom cinema rooms with 4K projectors, Dolby Atmos, and smart home integration.",
    link: "/services/home-theater-installation",
  },
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: "Commercial AV Solutions",
    description: "Professional sound systems for offices, restaurants, halls, and live events.",
    link: "/services/commercial-av-solutions",
  },
  {
    icon: <Waves className="h-10 w-10 text-primary" />,
    title: "Acoustic Treatment",
    description: "Soundproofing and acoustic paneling for recording studios, offices, and homes.",
    link: "/services/acoustic-treatment",
  },
];

export default function QuickServices() {
  return (
    <FadeInOnScroll>
      <section id="services" className="w-full py-24 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight">Our Core Services</h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto text-lg">
              We deliver exceptional audio-visual experiences in Ajmer through three specialized areas of expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <FadeInOnScroll key={index} delay={index * 100}>
                <Link href={service.link} className="h-full">
                  <Card className="h-full flex flex-col items-center text-center p-8 bg-background/50 border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer group">
                    <div className="p-4 bg-secondary rounded-full mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                      {service.icon}
                    </div>
                    <CardHeader className="p-0">
                      <CardTitle className="font-headline text-2xl font-bold mb-3">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                    <div className="mt-6 text-lg font-semibold text-primary group-hover:underline flex items-center">
                        Learn More <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Card>
                </Link>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>
    </FadeInOnScroll>
  );
}
