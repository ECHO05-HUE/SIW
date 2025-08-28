"use client";

import { AcousticaLogo } from "@/components/icons";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from 'react';
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
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = () => (
    <>
      {navLinks.map((link) => (
        <a key={link.href} href={link.href} className="transition-colors hover:text-primary">
          {link.label}
        </a>
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
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <AcousticaLogo className="h-8 w-8 text-primary" />
          <span className="font-headline text-xl font-bold">Acoustica Vista</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <NavLinks />
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col items-center gap-6 mt-8 text-lg font-medium">
                <NavLinks />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
