"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeInOnScroll } from "../animations/fade-in-on-scroll";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Luxury Villa Cinema",
    category: "Home Theaters",
    image: "https://picsum.photos/800/600",
    alt: "A luxury private home cinema installation in Ajmer with plush seating.",
    aiHint: "luxury cinema",
    description: "A state-of-the-art private cinema with Dolby Atmos sound and a 4K laser projector."
  },
  {
    title: "Corporate Boardroom AV",
    category: "Commercial Sound",
    image: "https://picsum.photos/800/601",
    alt: "Corporate boardroom in Ajmer with a seamless commercial audio-visual setup.",
    aiHint: "corporate boardroom",
    description: "Integrated video conferencing and presentation system for a Fortune 500 company."
  },
  {
    title: "Studio Acoustic Paneling",
    category: "Acoustics",
    image: "https://picsum.photos/800/602",
    alt: "Acoustic panels providing sound treatment in a professional recording studio.",
    aiHint: "recording studio",
    description: "Custom-designed acoustic panels for a professional music recording studio."
  },
  {
    title: "Minimalist Media Room",
    category: "Home Theaters",
    image: "https://picsum.photos/800/603",
    alt: "A minimalist media room with in-wall speakers and a hidden projector screen.",
    aiHint: "media room",
    description: "A clean and modern media room with in-wall speakers and a hidden projector screen."
  },
  {
    title: "Restaurant Multi-Zone Audio",
    category: "Commercial Sound",
    image: "https://picsum.photos/800/604",
    alt: "An upscale restaurant with a multi-zone commercial sound system.",
    aiHint: "restaurant audio",
    description: "A seamless multi-zone audio system for an upscale dining establishment."
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

type Project = typeof projects[0];
type Category = "All" | "Home Theaters" | "Commercial Sound" | "Acoustics";

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeTab === "All"
    ? projects
    : projects.filter(p => p.category === activeTab);

  const categories: Category[] = ["All", "Home Theaters", "Commercial Sound", "Acoustics"];

  return (
    <FadeInOnScroll>
      <section id="portfolio" className="w-full py-24 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight">Our Work</h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto text-lg">
              We take pride in our craftsmanship. Explore a selection of our recently completed sound system and home theater installations in Ajmer.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as Category)} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mx-auto max-w-2xl mb-12">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
              ))}
            </TabsList>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <FadeInOnScroll key={index} delay={index * 100}>
                  <Card 
                    className="overflow-hidden group h-full flex flex-col border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-primary/20 bg-background/30 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.alt}
                        data-ai-hint={project.aiHint}
                        width={800}
                        height={600}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-4">
                        <Badge variant="secondary">{project.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6 flex-grow flex flex-col">
                       <h3 className="font-headline text-xl font-bold mb-2">{project.title}</h3>
                       <p className="text-muted-foreground text-sm flex-grow">{project.description}</p>
                    </CardContent>
                  </Card>
                </FadeInOnScroll>
              ))}
            </div>
          </Tabs>
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl w-full p-0 !gap-0 bg-background/90 backdrop-blur-sm border-0">
             <DialogHeader className="sr-only">
                <DialogTitle>{selectedProject?.title}</DialogTitle>
                <DialogDescription>{selectedProject?.description}</DialogDescription>
            </DialogHeader>
            {selectedProject && (
              <div className="relative max-h-[90vh] w-full">
                 <Image
                    src={selectedProject.image}
                    alt={selectedProject.alt}
                    data-ai-hint={selectedProject.aiHint}
                    width={1200}
                    height={800}
                    className="object-contain w-full h-full max-h-[calc(90vh-4rem)]"
                  />
              </div>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-2 rounded-full h-8 w-8 bg-black/50 text-white hover:bg-black/75 hover:text-white z-10"
              aria-label="Close image preview"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogContent>
        </Dialog>
      </section>
    </FadeInOnScroll>
  );
}
