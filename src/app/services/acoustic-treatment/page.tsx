
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

const service = {
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
    title: "Studio Acoustic Paneling",
    category: "Acoustics",
    image: "https://picsum.photos/800/602",
    alt: "Acoustic panels providing sound treatment in a professional recording studio.",
    aiHint: "recording studio",
    description: "Custom-designed acoustic panels for a professional music recording studio."
  },
  {
    title: "Home Recording Booth",
    category: "Acoustics",
    image: "https://picsum.photos/800/605",
    alt: "A compact home studio with acoustic treatment for professional recording.",
    aiHint: "home studio",
    description: "A compact, soundproofed recording booth for a voice-over artist's home studio."
  },
];


export default function AcousticTreatmentPage() {
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
                                        fill
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
