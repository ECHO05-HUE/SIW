"use client";

import { AcousticaLogo } from "@/components/icons";
import { cn } from "@/lib/utils";
import React, from 'react';
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);


  React.useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  const NavLinks = ({ inSheet = false }: { inSheet?: boolean }) => (
    <>
      {navLinks.map((link) => (
        <Button 
          key={link.href} 
          variant="link" 
          asChild 
          className={cn(inSheet ? "text-lg" : "text-base", "text-foreground hover:text-primary")}
          onClick={inSheet ? handleLinkClick : undefined}
        >
          <a href={link.href}>
            {link.label}
          </a>
        </Button>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        hasScrolled ? "bg-background/80 border-b border-border/50 backdrop-blur-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <AcousticaLogo className="h-10 w-10 text-primary" />
          <span className="font-headline text-2xl font-bold">Prime Audio Solution</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          <NavLinks />
           <Button asChild className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground">
             <a href="#contact">Get a Quote</a>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pt-20">
              <nav className="flex flex-col items-center gap-6">
                <NavLinks inSheet />
                 <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={handleLinkClick}>
                    <a href="#contact">Get a Quote</a>
                 </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
