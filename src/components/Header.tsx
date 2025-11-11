import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X, Search } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import SearchDialog from "@/components/SearchDialog";

interface Book {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

interface HeaderProps {
  books: Book[];
  onBookClick: (bookId: number) => void;
}

const Header = ({ books, onBookClick }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
              About Us
            </button>
            <button
              onClick={() => scrollToSection('contact-section')}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Contact Us
            </button>
          </nav>

          {/* Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
              className="w-9 h-9"
            >
              <Search className="h-5 w-5 text-foreground" />
              <span className="sr-only">Search stories</span>
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
              className="w-9 h-9"
            >
              <Search className="h-5 w-5 text-foreground" />
            </Button>
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
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
              About Us
            </button>
            <button
              onClick={() => scrollToSection('contact-section')}
              className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors font-medium"
            >
              Contact Us
            </button>
          </nav>
        )}
      </div>

      <SearchDialog
        books={books}
        open={isSearchOpen}
        onOpenChange={setIsSearchOpen}
        onBookSelect={onBookClick}
      />
    </header>
  );
};

export default Header;
