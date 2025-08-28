import { AcousticaLogo } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="w-full py-6 mt-24 border-t border-border/50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <AcousticaLogo className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-semibold">Acoustica Vista</span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Acoustica Vista. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
