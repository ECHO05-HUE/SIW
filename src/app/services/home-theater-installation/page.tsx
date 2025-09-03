
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from "next/image";
import { CheckCircle2, Zap } from "lucide-react";
import { FadeInOnScroll } from "@/components/animations/fade-in-on-scroll";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ContactSection from '@/components/sections/contact-section';
import { Card } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home Theater & Cinema Installation in Ajmer | Dolby Atmos",
  description: "Expert home theater installation in Ajmer. We offer custom home cinema design, Dolby Atmos & Dolby Digital surround sound setup, and affordable home theater solutions.",
  keywords: [
    'home theater installation in Ajmer',
    'Dolby Atmos installation in Ajmer',
    'Dolby digital installation in Ajmer',
    'surround sound setup in Ajmer',
    'home cinema installation in Ajmer',
    'living room home theater setup Ajmer',
    'small room home theater installation in Ajmer',
    'affordable home theater setup in Ajmer',
    'Ajmer home theater service',
  ],
};


const service = {
    title: "Home Theater Installation",
    description: "Experience the ultimate entertainment with our home theater installation in Ajmer. We specialize in custom home theater design and installation in Ajmer, ensuring your movies, music, and gaming come alive with cinema-quality sound and visuals.",
    image: "/service-home-theater.jpg",
    alt: "A professional home theater system with a large projector screen and ambient lighting in Ajmer.",
    aiHint: "home cinema room",
    offerings: [
      "Custom design for home cinema installation in Ajmer, featuring 4K & 8K projectors and large screens.",
      "Expert installation of immersive surround sound systems, including Dolby Digital (5.1, 7.1) and Dolby Atmos (5.1.2, 7.1.4, 9.1.2) for a true cinematic experience.",
      "Installation of high-fidelity tower speakers, bookshelf speakers, in-wall/in-ceiling speakers, and powerful subwoofers.",
      "Smart home integration for seamless control of your audio-visual system via mobile apps and voice commands.",
      "Professional, hidden wiring for an elegant and clean living room home theater setup in Ajmer.",
      "Complete room solutions, including cinema-style recliner seating, ambient lighting, and full acoustic analysis with soundproofing.",
    ],
    forWhom: [
        "Families looking for affordable home theater setup in Ajmer",
        "Homeowners in flats, villas, or bungalows who want small room home theater installation in Ajmer",
        "Movie lovers, gamers, and music enthusiasts wanting surround sound setup in Ajmer",
        "Interior designers & architects needing custom audio system setup in Ajmer",
        "Anyone searching for Ajmer home theater service or best sound system installer in Ajmer",
    ],
};

const whyChooseUs = [
    "17+ years of experience in home theater installation in Ajmer & sound system installation in Ajmer",
    "Expertise in Dolby Atmos installation in Ajmer and Dolby digital installation in Ajmer",
    "End-to-end solutions: design, setup, repair, and maintenance",
    "Trusted for hall sound system setup in Ajmer, marriage hall sound system Ajmer, and more",
    "Recognized as the best sound system installer in Ajmer",
];

const relevantProjects = [
    {
        title: "Luxury Villa Cinema",
        category: "Home Theaters",
        image: "/portfolio-1.jpg",
        alt: "A luxury private home cinema installation in Ajmer with plush seating.",
        aiHint: "luxury cinema",
        description: "A state-of-the-art private cinema with Dolby Atmos sound and a 4K laser projector."
    },
    {
        title: "Minimalist Media Room",
        category: "Home Theaters",
        image: "/portfolio-4.jpg",
        alt: "A minimalist media room with in-wall speakers and a hidden projector screen.",
        aiHint: "media room",
        description: "A clean and modern media room with in-wall speakers and a hidden projector screen."
    }
];


export default function HomeTheaterInstallationPage() {
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
          
          <FadeInOnScroll>
                <div className="mt-24 md:mt-32">
                     <div className="text-center mb-12">
                        <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight">
                            Related Projects
                        </h2>
                     </div>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {relevantProjects.map((project, index) => (
                             <Card key={index} className="overflow-hidden group h-full flex flex-col border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-primary/20 bg-background/30">
                                <div className="relative aspect-[4/3] w-full">
                                    <Image
                                        src={project.image}
                                        alt={project.alt}
                                        data-ai-hint={project.aiHint}
                                        width={800}
                                        height={600}
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="font-headline text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-muted-foreground text-sm flex-grow">{project.description}</p>
                                </div>
                             </Card>
                        ))}
                     </div>
                </div>
            </FadeInOnScroll>

        </div>
      </section>
    </FadeInOnScroll>
      <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
