import { useState, useEffect } from "react";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useCart } from "./../contexts/CartContext";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/80 backdrop-blur-md shadow-md py-2" 
        : "bg-cream/60 backdrop-blur-sm py-4 shadow-sm"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl md:text-3xl font-serif font-bold bg-gradient-to-r from-terracotta-dark to-terracotta bg-clip-text text-transparent"
          >
            Terra Pura
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Products', 'Blog', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                to="/" 
                className={cn(
                  "text-sm font-medium transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-terracotta-dark after:transition-all hover:after:w-full",
                  isScrolled 
                    ? "text-gray-700 hover:text-terracotta" 
                    : "text-walnut hover:text-terracotta-dark"
                )}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className={cn(
                "rounded-full hover:bg-cream/80",
                !isScrolled && "bg-cream/40 hover:bg-cream/70"
              )}
            >
              <Search size={20} className="text-gray-700" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className={cn(
                "rounded-full hover:bg-cream/80 relative",
                !isScrolled && "bg-cream/40 hover:bg-cream/70"
              )}
              onClick={handleCartOpen}
            >
              <ShoppingCart size={20} className="text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-terracotta to-coral-vivid text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className={cn(
              "md:hidden rounded-full hover:bg-cream/80",
              !isScrolled && "bg-cream/40 hover:bg-cream/70"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-100 absolute w-full shadow-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link to="/" className="text-sm font-medium py-2 hover:text-terracotta transition-colors">Products</Link>
                <Link to="/" className="text-sm font-medium py-2 hover:text-terracotta transition-colors">Blog</Link>
                <Link to="/" className="text-sm font-medium py-2 hover:text-terracotta transition-colors">About</Link>
                <Link to="/" className="text-sm font-medium py-2 hover:text-terracotta transition-colors">Contact</Link>
                <div className="flex items-center space-x-4 pt-2 border-t border-gray-100">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-cream/80">
                    <Search size={20} className="text-gray-700" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="rounded-full hover:bg-cream/80 relative"
                    onClick={handleCartOpen}
                  >
                    <ShoppingCart size={20} className="text-gray-700" />
                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-terracotta to-coral-vivid text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {cartCount}
                    </span>
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;