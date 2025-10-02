import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center font-bold text-xl animate-glow">
              A
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Axdox
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors ${isActive('/services') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
            >
              About
            </Link>
            <Link to="/contact">
              <Button className="bg-gradient-hero hover:opacity-90 transition-opacity">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border/50">
            <Link 
              to="/" 
              className={`block transition-colors ${isActive('/') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`block transition-colors ${isActive('/services') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`block transition-colors ${isActive('/about') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-gradient-hero hover:opacity-90 transition-opacity">
                Contact Us
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
