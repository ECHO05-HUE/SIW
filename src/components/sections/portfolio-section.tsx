"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeInOnScroll } from "../animations/fade-in-on-scroll";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Luxury Villa Cinema",
    category: "Home Theaters",
    image: "/portfolio-1.jpg",
    aiHint: "luxury cinema",
    description: "A state-of-the-art private cinema with Dolby Atmos sound and a 4K laser projector."
  },
  {
    title: "Corporate Boardroom AV",
    category: "Commercial Sound",
    image: "/portfolio-2.jpg",
    aiHint: "corporate boardroom",
    description: "Integrated video conferencing and presentation system for a Fortune 500 company."
  },
  {
    title: "Studio Acoustic Paneling",
    category: "Acoustics",
    image: "/portfolio-3.jpg",
    aiHint: "recording studio",
    description: "Custom-designed acoustic panels for a professional music recording studio."
  },
  {
    title: "Minimalist Media Room",
    category: "Home Theaters",
    image: "/portfolio-4.jpg",
    aiHint: "media room",
    description: "A clean and modern media room with in-wall speakers and a hidden projector screen."
  },
  {
    title: "Restaurant Multi-Zone Audio",
    category: "Commercial Sound",
    image: "/portfolio-5.jpg",
    aiHint: "restaurant audio",
    description: "A seamless multi-zone audio system for an upscale dining establishment."
  },
  {
    title: "Home Recording Booth",
    category: "Acoustics",
    image: "/portfolio-6.jpg",
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
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight">Our Portfolio</h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto text-lg">
              We take pride in our craftsmanship. Explore a selection of our recently completed projects.
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
                        alt={`Portfolio project: ${project.title}`}
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
          <DialogContent className="max-w-4xl w-full p-0 !gap-0 bg-transparent border-0">
            {selectedProject && (
              <div className="relative aspect-video">
                 <Image
                    src={selectedProject.image}
                    alt={`Full screen view of portfolio project: ${selectedProject.title}`}
                    data-ai-hint={selectedProject.aiHint}
                    fill
                    className="object-contain"
                  />
                  {/* The DialogTitle is required for accessibility but we can hide it visually */}
                  <DialogTitle className="sr-only">{selectedProject.title}</DialogTitle>
                  <DialogDescription className="sr-only">{selectedProject.description}</DialogDescription>
              </div>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSelectedProject(null)}
              className="absolute -top-2 -right-2 rounded-full h-8 w-8 bg-black/50 text-white hover:bg-black/75 hover:text-white z-10"
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
