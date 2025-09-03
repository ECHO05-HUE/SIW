import { AcousticaLogo } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="w-full py-8 mt-24 bg-card border-t border-border/20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <AcousticaLogo className="h-9 w-9 text-primary" />
          <span className="font-headline text-xl font-semibold">Prime Audio Solution</span>
        </div>
        <p className="text-sm text-muted-foreground text-center md:text-right">
          &copy; {new Date().getFullYear()} Prime Audio Solution. All rights reserved. <br />
          Crafting immersive audio-visual experiences in Ajmer.
        </p>
      </div>
    </footer>
  );
}
