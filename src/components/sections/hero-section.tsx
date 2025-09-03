"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image-main.jpg"
          alt="Professional home cinema and sound system installation in Ajmer by Acoustica Vista"
          data-ai-hint="home theater"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="container relative z-10 p-4 mt-auto mb-20 md:mb-32 text-center">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
          Home Theater & Sound System Installation in Ajmer
        </h1>
        <p className="mt-6 text-xl md:text-2xl max-w-4xl mx-auto text-muted-foreground">
          We deliver unparalleled quality with professional cinema, Dolby Atmos, and complete audio system setup in Ajmer, from breathtaking home theaters to crystal-clear commercial sound.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="text-lg py-7 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full sm:w-auto">
            <a href="#services">
              Explore Services
              <MoveRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg py-7 px-8 border-2 font-semibold w-full sm:w-auto">
             <a href="#contact">Request a Quote</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
