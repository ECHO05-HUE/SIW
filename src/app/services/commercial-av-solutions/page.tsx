import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from "next/image";
import { CheckCircle2, Zap } from "lucide-react";
import { FadeInOnScroll } from "@/components/animations/fade-in-on-scroll";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const service = {
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
  };

const whyChooseUs = [
    "17+ years of experience in home theater installation in Ajmer & sound system installation in Ajmer",
    "Expertise in Dolby Atmos installation in Ajmer and Dolby digital installation in Ajmer",
    "End-to-end solutions: design, setup, repair, and maintenance",
    "Trusted for hall sound system setup in Ajmer, marriage hall sound system Ajmer, and more",
    "Recognized as the best sound system installer in Ajmer",
];

export default function CommercialAVPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
      <FadeInOnScroll>
      <section id="services" className="w-full py-24 md:py-32">
        <div className="container mx-auto px-4">
            <Button asChild variant="outline" className="mb-8">
                <Link href="/#services">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Services
                </Link>
            </Button>
          <div className="space-y-20">
                <FadeInOnScroll>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg">
                        <Image
                        src={service.image}
                        alt={service.alt}
                        data-ai-hint={service.aiHint}
                        fill
                        className="object-cover"
                        />
                    </div>
                    <div className="space-y-4">
                        <h1 className="font-headline text-3xl md:text-4xl font-bold">{service.title}</h1>
                        <p className="text-muted-foreground text-lg">{service.description}</p>
                    </div>
                    </div>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h3 className="font-headline text-2xl font-semibold mb-4">What We Offer</h3>
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
                            <h3 className="font-headline text-2xl font-semibold mb-4">Who It’s For</h3>
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
                </FadeInOnScroll>
          </div>

          <FadeInOnScroll>
            <div className="mt-24 md:mt-32">
                <div className="text-center mb-12">
                     <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight">
                       ⚡ Why Choose Acoustica Vista?
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg">
                   {whyChooseUs.map((item, index) => (
                         <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border/50 shadow-sm transition-all hover:shadow-primary/20 hover:-translate-y-1">
                            <div className="p-2 bg-primary/10 rounded-full">
                               <Zap className="h-7 w-7 text-primary flex-shrink-0" />
                            </div>
                            <span>{item}</span>
                         </div>
                   ))}
                </div>
            </div>
          </FadeInOnScroll>

        </div>
      </section>
    </FadeInOnScroll>
      </main>
      <Footer />
    </div>
  );
}
