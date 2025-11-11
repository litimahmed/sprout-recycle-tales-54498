import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero-section')}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-eco-green to-eco-blue flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Eco Heroes</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('stories-section')}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Stories
            </button>
            <button
              onClick={() => scrollToSection('about-section')}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('parents-section')}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              For Parents
            </button>
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('stories-section')}
              className="bg-eco-green hover:bg-eco-green/90 text-white font-semibold"
            >
              Start Reading
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-3 border-t border-border">
            <button
              onClick={() => scrollToSection('stories-section')}
              className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors font-medium"
            >
              Stories
            </button>
            <button
              onClick={() => scrollToSection('about-section')}
              className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('parents-section')}
              className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors font-medium"
            >
              For Parents
            </button>
            <Button
              onClick={() => scrollToSection('stories-section')}
              className="w-full bg-eco-green hover:bg-eco-green/90 text-white font-semibold"
            >
              Start Reading
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
