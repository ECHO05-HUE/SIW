"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeInOnScroll } from "../animations/fade-in-on-scroll";

const projects = [
  {
    title: "Luxury Villa Cinema",
    category: "Home Theaters",
    image: "https://picsum.photos/600/400?random=1",
    aiHint: "luxury cinema",
  },
  {
    title: "Corporate Boardroom AV",
    category: "Commercial Sound",
    image: "https://picsum.photos/600/400?random=2",
    aiHint: "corporate boardroom",
  },
  {
    title: "Studio Acoustic Paneling",
    category: "Acoustics",
    image: "https://picsum.photos/600/400?random=3",
    aiHint: "recording studio",
  },
  {
    title: "Minimalist Media Room",
    category: "Home Theaters",
    image: "https://picsum.photos/600/400?random=4",
    aiHint: "media room",
  },
  {
    title: "Restaurant Multi-Zone Audio",
    category: "Commercial Sound",
    image: "https://picsum.photos/600/400?random=5",
    aiHint: "restaurant audio",
  },
  {
    title: "Home Recording Booth",
    category: "Acoustics",
    image: "https://picsum.photos/600/400?random=6",
    aiHint: "home studio",
  },
];

type Category = "All" | "Home Theaters" | "Commercial Sound" | "Acoustics";

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<Category>("All");

  const filteredProjects = activeTab === "All"
    ? projects
    : projects.filter(p => p.category === activeTab);

  const categories: Category[] = ["All", "Home Theaters", "Commercial Sound", "Acoustics"];

  return (
    <FadeInOnScroll>
      <section id="portfolio" className="w-full py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Work</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              We take pride in our craftsmanship. Explore a selection of our recently completed projects.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as Category)} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mx-auto max-w-2xl">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
              ))}
            </TabsList>
            
            <AnimatePresence>
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredProjects.map((project, index) => (
                    <FadeInOnScroll key={index} delay={index * 100}>
                      <Card className="overflow-hidden group h-full flex flex-col">
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            data-ai-hint={project.aiHint}
                            width={600}
                            height={400}
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="font-headline">{project.title}</CardTitle>
                          <Badge variant="secondary" className="w-fit">{project.category}</Badge>
                        </CardHeader>
                      </Card>
                    </FadeInOnScroll>
                  ))}
                </motion.div>
            </AnimatePresence>
          </Tabs>
        </div>
      </section>
    </FadeInOnScroll>
  );
}

// Dummy components for framer-motion since it's not in the project
const AnimatePresence: React.FC<{children: React.ReactNode}> = ({ children }) => <>{children}</>;
const motion = {
  div: React.forwardRef<HTMLDivElement, {children: React.ReactNode; className: string}>(({children, className}, ref) => (
    <div ref={ref} className={className}>{children}</div>
  )),
};
motion.div.displayName = 'motion.div';
