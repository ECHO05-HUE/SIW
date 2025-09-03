import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { FadeInOnScroll } from "../animations/fade-in-on-scroll";

const services = [
  {
    title: "Home Theater Installation",
    description: "Transform your living space into a cinematic paradise with our expert home theater installation in Ajmer. We design and install custom systems, offering full Dolby Atmos and Dolby Digital surround sound setup to deliver breathtaking visuals and heart-pounding audio for any room size.",
    image: "https://picsum.photos/800/600",
    alt: "A professional home theater system with a large projector screen and ambient lighting in Ajmer.",
    aiHint: "home cinema room",
    features: [
      "Custom 4K/8K Projector & Screen Setup",
      "Dolby Atmos & DTS:X Surround Sound Installation",
      "Affordable & Low-Cost Home Theater Setups",
      "Soundproofing & Acoustic Room Analysis",
      "Living Room & Small Room Theater Solutions",
    ],
  },
  {
    title: "Commercial & Event Audio Solutions",
    description: "Elevate your business or event with our professional audio-visual solutions in Ajmer. From crystal-clear conference room systems to dynamic sound for marriage halls, restaurants, and auditoriums, we deliver reliability, performance, and expert PA system installation.",
    image: "https://picsum.photos/800/601",
    alt: "A modern boardroom with integrated commercial AV solutions for presentations.",
    aiHint: "modern boardroom",
    features: [
      "Conference & Boardroom AV Systems",
      "Restaurant & Hall Sound System Setup",
      "Auditorium & Stage Sound Installation",
      "DJ and PA System Installation",
      "Ongoing System Maintenance & Support",
    ],
  },
  {
    title: "Acoustic Treatment & Soundproofing",
    description: "Unlock the true potential of your space with our expert acoustic treatment services in Ajmer. We analyze your room's acoustics and apply tailored soundproofing and paneling solutions to eliminate echo, reverb, and unwanted noise for pristine sound quality.",
    image: "https://picsum.photos/800/602",
    alt: "A recording studio wall covered with professional acoustic treatment panels.",
    aiHint: "acoustic panels",
    features: [
      "Professional Room Acoustic Analysis",
      "Custom-Fabricated Absorption Panels",
      "Bass Traps and Diffuser Installation",
      "Complete Soundproofing for Walls, Floors & Ceilings",
      "Solutions for Studios, Hi-Fi Rooms & Commercial Spaces",
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
              We offer a range of specialized services for home and commercial audio-visual needs in Ajmer, focusing on precision, quality, and excellence.
            </p>
          </div>
          <div className="space-y-20">
            {services.map((service, index) => (
              <FadeInOnScroll key={service.title} delay={index * 150}>
                <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                  <div className={`relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                    <Image
                      src={service.image}
                      alt={service.alt}
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
