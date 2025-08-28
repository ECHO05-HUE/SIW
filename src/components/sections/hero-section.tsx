"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Modern home theater"
          data-ai-hint="home theater"
          fill
          className="object-cover"
          style={{ transform: `translateY(${offsetY * 0.4}px)` }}
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 p-4">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight drop-shadow-lg">
          Crafting Immersive Audio-Visual Experiences
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
          From breathtaking home cinemas to crystal-clear commercial sound systems, Acoustica Vista delivers unparalleled quality and precision.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="#services">Explore Our Services</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
             <a href="#contact">Request a Quote</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
