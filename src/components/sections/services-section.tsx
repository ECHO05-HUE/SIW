import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { FadeInOnScroll } from "../animations/fade-in-on-scroll";

const services = [
  {
    title: "Home Theater Installation",
    description: "Transform your living space into an immersive cinematic paradise. We specialize in designing and installing custom home theater systems that deliver breathtaking visuals and heart-pounding audio, perfectly calibrated for your room.",
    image: "https://picsum.photos/800/600?random=1",
    aiHint: "home cinema room",
    features: [
      "Custom 4K/8K Projector & Screen Setup",
      "Dolby Atmos & DTS:X Surround Sound",
      "Smart Home Integration & Control",
      "Acoustic Room Analysis & Treatment",
      "Comfortable, Stylish Cinema Seating",
    ],
  },
  {
    title: "Commercial AV Solutions",
    description: "Elevate your business environment with our professional audio-visual solutions. From crystal-clear conference room audio to dynamic digital signage and multi-zone sound systems for restaurants and retail, we deliver reliability and performance.",
    image: "https://picsum.photos/800/600?random=2",
    aiHint: "modern boardroom",
    features: [
      "Video Conferencing & Presentation Systems",
      "Multi-Zone Audio for Retail & Hospitality",
      "Digital Signage & Video Walls",
      "PA Systems for Public & Corporate Spaces",
      "Ongoing System Maintenance & Support",
    ],
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
          <div className="space-y-20">
            {services.map((service, index) => (
              <FadeInOnScroll key={service.title} delay={index * 150}>
                <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                  <div className={`relative aspect-video w-full rounded-lg overflow-hidden shadow-lg ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      data-ai-hint={service.aiHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-headline text-3xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground text-lg">{service.description}</p>
                    <ul className="space-y-3 pt-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>
    </FadeInOnScroll>
  );
}
