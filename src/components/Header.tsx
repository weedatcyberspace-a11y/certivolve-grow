import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CP</span>
            </div>
            <span className="text-2xl font-bold text-gradient">CertifyPro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('programs')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Programs
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('instructors')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Instructors
            </button>
            <button 
              onClick={() => scrollToSection('enrollment')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Pricing
            </button>
            <Button 
              onClick={() => scrollToSection('enrollment')}
              className="btn-hero"
            >
              Enroll Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-foreground"></div>
              <div className="w-6 h-0.5 bg-foreground"></div>
              <div className="w-6 h-0.5 bg-foreground"></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('programs')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Programs
              </button>
              <button 
                onClick={() => scrollToSection('benefits')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection('instructors')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Instructors
              </button>
              <button 
                onClick={() => scrollToSection('enrollment')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Pricing
              </button>
              <Button 
                onClick={() => scrollToSection('enrollment')}
                className="btn-hero w-full"
              >
                Enroll Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;