import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ArrowDown, Leaf, ShoppingBag } from "lucide-react";
import { OrganicShape } from "./OrganicShape";
import { TextureOverlay } from "./TextureOverlay";
import { motion } from "framer-motion";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="min-h-screen relative flex flex-col md:flex-row overflow-hidden bg-gradient-to-r from-cream to-cream-dark">
      {/* Glass shapes in background */}
      <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-sage-light/30 to-sage/10 blur-xl" />
      <div className="absolute bottom-[15%] right-[15%] w-80 h-80 rounded-full bg-gradient-to-tr from-terracotta-light/20 to-terracotta/5 blur-xl" />
      
      {/* Organic shape backgrounds */}
      <OrganicShape 
        variant="blob1" 
        color="bg-sage-vivid/10" 
        className="left-[5%] top-[10%] z-0"
      />
      <OrganicShape 
        variant="blob2" 
        color="bg-terracotta-vivid/10" 
        className="right-[10%] bottom-[20%] z-0"
      />
      
      {/* Content Side */}
      <div className="w-full bg-gradient-to-b from-cream/20 to-amber-900/40 md:w-1/2 flex items-center justify-center p-8 md:p-16 relative z-10">
        <TextureOverlay variant="grain" opacity="light" />
        <motion.div 
          className="max-w-xl"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.span 
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sage-vivid/50 to-sage/60 text-sage-darker px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Leaf size={14} className="text-sage-darker" />
            100% Natural Ingredients
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="font-serif text-4xl md:text-6xl py-2 font-bold mb-6 leading-tight bg-gradient-to-r from-walnut to-walnut-light bg-clip-text text-transparent"
          >
            Natural Beauty<br /> for Every Skin
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8 text-walnut-light"
          >
            Vegan, sustainable skincare made with<br className="hidden md:block" /> nature's finest ingredients
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              className="bg-gradient-to-r from-terracotta-darker/20 to-terracotta-vivid/30 hover:from-terracotta-darker hover:to-terracotta-dark text-white px-8 py-6 text-lg rounded-md ease-in-out transition-all hover:shadow-lg group"
            >
              <ShoppingBag size={18} className="mr-2 group-hover:scale-110 transition-transform" />
              Shop Now
            </Button>
            
            <Button 
              variant="outline" 
              className="border-2 border-terracotta-dark text-terracotta-darker hover:bg-terracotta-dark hover:text-white px-8 py-6 text-lg rounded-md ease-in-out transition-all hover:shadow-md"
            >
              Learn More
            </Button>
          </motion.div>
          
          <motion.a 
            variants={itemVariants}
            href="#products" 
            className="flex items-center gap-2 text-walnut hover:text-terracotta-dark mt-16 transition-colors group"
          >
            <span>Explore our products</span>
            <ArrowDown className="transition-transform group-hover:translate-y-1" />
          </motion.a>
        </motion.div>
      </div>
      
      {/* Image Side with Overlapping Products */}
      <div 
        className="w-full md:w-1/2 min-h-[40vh] md:min-h-screen relative overflow-hidden"
      >
        <motion.div 
          className="absolute inset-0 bg-cover bg-center z-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506003094589-53954a26283f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></motion.div>
        
        <TextureOverlay variant="paper" opacity="medium" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent md:bg-gradient-to-l"></div>
        
        <motion.div 
          className="absolute bottom-10 md:bottom-24 -left-12 md:left-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 12 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="bg-white/70 backdrop-blur-md p-5 rounded-lg shadow-lg max-w-xs border border-white/50">
            <img 
              src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Clay Mask" 
              className="w-16 h-16 object-cover rounded-md" 
            />
            <h3 className="font-serif text-sm font-medium mt-2 text-walnut">Clay Purifying Mask</h3>
            <div className="flex items-center justify-between mt-1">
              <span className="text-terracotta-dark font-semibold">$38.00</span>
              <span className="bg-sage-vivid/20 text-sage-darker text-xs px-2 py-1 rounded-full font-medium">Bestseller</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute top-20 md:top-32 -right-12 md:right-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: -12 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="bg-white/70 backdrop-blur-md p-5 rounded-lg shadow-lg max-w-xs border border-white/50">
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Rosehip Serum" 
              className="w-16 h-16 object-cover rounded-md" 
            />
            <h3 className="font-serif text-sm font-medium mt-2 text-walnut">Rosehip Facial Serum</h3>
            <div className="flex items-center justify-between mt-1">
              <span className="text-terracotta-dark font-semibold">$42.00</span>
              <span className="bg-coral-vivid/20 text-coral-dark text-xs px-2 py-1 rounded-full font-medium">New</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;