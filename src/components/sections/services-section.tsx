import Image from "next/image";
import { CheckCircle2, Zap } from "lucide-react";
import { FadeInOnScroll } from "../animations/fade-in-on-scroll";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const services = [
  {
    title: "🎬 Home Theater Installation in Ajmer",
    description: "Experience the ultimate entertainment with our home theater installation in Ajmer. We specialize in custom home theater design and installation in Ajmer, ensuring your movies, music, and gaming come alive with cinema-quality sound and visuals.",
    image: "https://picsum.photos/800/600",
    alt: "A professional home theater system with a large projector screen and ambient lighting in Ajmer.",
    aiHint: "home cinema room",
    offerings: [
      "4K & 8K projectors with big screen setup for home cinema installation in Ajmer",
      "Dolby Atmos installation in Ajmer & Dolby digital installation in Ajmer (5.1, 7.1, 9.1)",
      "Smart home integration with mobile app & voice control",
      "Hidden wiring and elegant living room home theater setup in Ajmer",
      "Cinema-style recliner seating & lighting solutions",
      "Room acoustic analysis and home soundproofing and theater installation in Ajmer",
    ],
    forWhom: [
        "Families looking for affordable home theater setup in Ajmer",
        "Homeowners in flats, villas, or bungalows who want small room home theater installation in Ajmer",
        "Movie lovers, gamers, and music enthusiasts wanting surround sound setup in Ajmer",
        "Interior designers & architects needing custom audio system setup in Ajmer",
        "Anyone searching for Ajmer home theater service or best sound system installer in Ajmer",
    ],
  },
  {
    title: "🏢 Commercial AV Solutions – Sound System Installation in Ajmer",
    description: "We provide professional sound system installation in Ajmer for offices, schools, restaurants, auditoriums, and events. Our team ensures reliable, high-quality audio system setup in Ajmer that meets every commercial need.",
    image: "https://picsum.photos/800/601",
    alt: "A modern boardroom with integrated commercial AV solutions for presentations.",
    aiHint: "modern boardroom",
    offerings: [
      "Multi-zone audio for restaurant sound system installation in Ajmer",
      "Conference room sound system in Ajmer with video conferencing setup",
      "PA system installation in Ajmer for schools, hospitals & government halls",
      "Auditorium sound system installation in Ajmer with stage lighting integration",
      "Stage sound system installation in Ajmer for cultural events & functions",
      "DJ sound system installation in Ajmer for parties & weddings",
      "Hall sound system setup in Ajmer for community spaces and marriage venues",
      "Annual maintenance contracts for long-term support",
    ],
    forWhom: [
        "Offices & corporate boardrooms needing professional audio system setup in Ajmer",
        "Restaurants, cafes & hotels requiring background music & announcements",
        "Marriage hall sound system in Ajmer for weddings & receptions",
        "Schools, colleges & coaching centers needing PA system installation in Ajmer",
        "Auditoriums & theatres needing powerful surround sound setup in Ajmer",
        "Gyms & fitness centers needing energetic sound system installation in Ajmer",
        "Religious places (temples, mosques) for clear announcements",
        "Event organizers requiring professional sound installation in Ajmer for large gatherings",
        "Anyone searching for sound system installer near me Ajmer",
    ],
  },
  {
    title: "🎶 Acoustic Treatment Services – Ajmer Sound System Repair and Installation",
    description: "Even the best home theater installation in Ajmer or sound system installation in Ajmer won’t perform properly without the right acoustic environment. That’s why we provide professional sound installation in Ajmer with advanced acoustic treatment.",
    image: "https://picsum.photos/800/602",
    alt: "A recording studio wall covered with professional acoustic treatment panels.",
    aiHint: "acoustic panels",
    offerings: [
      "Acoustic analysis & custom home theater design and installation in Ajmer",
      "Sound absorption panels, bass traps & diffusers for low cost home theater setup in Ajmer",
      "Complete home soundproofing and theater installation in Ajmer",
      "Acoustic design for small room home theater installation in Ajmer & music studios",
      "Noise control solutions for offices, schools & restaurants",
    ],
    forWhom: [
        "Recording studios & podcasters – for professional quality audio",
        "Home theater owners who want the best surround sound setup in Ajmer",
        "Office & conference halls requiring echo-free sound",
        "Schools & coaching centers wanting clear classroom audio",
        "Religious places & meditation centers needing peaceful sound",
        "Clients looking for Ajmer sound system repair and installation with acoustic upgrades",
    ],
  },
];

const whyChooseUs = [
    "17+ years of experience in home theater installation in Ajmer & sound system installation in Ajmer",
    "Expertise in Dolby Atmos installation in Ajmer and Dolby digital installation in Ajmer",
    "End-to-end solutions: design, setup, repair, and maintenance",
    "Trusted for hall sound system setup in Ajmer, marriage hall sound system Ajmer, and more",
    "Recognized as the best sound system installer in Ajmer",
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
                <div className={`grid md:grid-cols-2 gap-12 items-start ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                  <div className={`relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                    <Image
                      src={service.image}
                      alt={service.alt}
                      data-ai-hint={service.aiHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                    <h3 className="font-headline text-3xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground text-lg">{service.description}</p>
                    
                    <div>
                        <h4 className="font-headline text-xl font-semibold mb-3">✅ What We Offer</h4>
                        <ul className="space-y-3">
                        {service.offerings.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="font-headline text-xl font-semibold mb-3">✅ Who It’s For</h4>
                        <ul className="space-y-3">
                        {service.forWhom.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                            </li>
                        ))}
                        </ul>
                    </div>

                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>

          <FadeInOnScroll>
            <div className="mt-24 md:mt-32">
                <Card className="bg-background/50 border-2 border-primary/20 shadow-xl">
                    <CardHeader className="items-center">
                        <CardTitle className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight text-center">
                           ⚡ Why Choose Prime Audio Solution?
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg">
                           {whyChooseUs.slice(0, 3).map((item, index) => (
                                 <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                                    <Zap className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                 </div>
                           ))}
                        </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg mt-6">
                           {whyChooseUs.slice(3).map((item, index) => (
                                 <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                                    <Zap className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                 </div>
                           ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
          </FadeInOnScroll>

        </div>
      </section>
    </FadeInOnScroll>
  );
}
