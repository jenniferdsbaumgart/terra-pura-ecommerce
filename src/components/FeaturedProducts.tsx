import { Button } from "@/components/ui/button";
import { useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { LeafyGreen, Plus, Heart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  tag?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Rosehip Facial Serum",
    price: "$42.00",
    image: "https://images.unsplash.com/photo-1571937544778-3ad68aa84a36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "face",
    tag: "bestseller"
  },
  {
    id: 2,
    name: "Clay Purifying Mask",
    price: "$38.00",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "face",
    tag: "new"
  },
  {
    id: 3,
    name: "Aloe Hydration Cream",
    price: "$45.00",
    image: "https://images.unsplash.com/photo-1616740794225-63e524d43ec7?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "moisturizer",
  },
  {
    id: 4,
    name: "Vitamin C Toner",
    price: "$36.00",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "toner",
  },
  {
    id: 5,
    name: "Chamomile Eye Cream",
    price: "$32.00",
    image: "https://images.unsplash.com/photo-1608248597202-9cbaecd4aafc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "eye",
  },
  {
    id: 6,
    name: "Shea Body Butter",
    price: "$28.00",
    image: "https://images.unsplash.com/photo-1608248597205-25692d98791b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "body",
  },
];

const categories = ["all", "face", "moisturizer", "toner", "eye", "body"];

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { addItem } = useCart();
  
  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-white to-cream/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-walnut to-walnut-light bg-clip-text text-transparent">
              Featured Products
            </h2>
            <p className="text-walnut-light max-w-lg">
              Discover our bestselling formulas crafted with pure, natural ingredients
            </p>
          </div>
          
          <div className="flex overflow-x-auto scrollbar-none gap-2 mt-6 md:mt-0 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all font-medium ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-terracotta to-terracotta-dark text-white shadow-md"
                    : "bg-cream text-walnut-light hover:bg-terracotta/10"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {filteredProducts.map((product, index) => (
              <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div 
                  className="h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-none h-full overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all group">
                    <CardContent className="p-0 h-full">
                      <div className="overflow-hidden rounded-t-xl aspect-square relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {product.tag && (
                          <div className={`absolute top-3 right-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium ${
                            product.tag === 'bestseller' ? 'text-sage-darker' : 'text-coral-dark'
                          }`}>
                            {product.tag}
                          </div>
                        )}
                        <div className="absolute top-3 left-3">
                          <Button 
                            size="icon" 
                            variant="ghost" 
                            className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white w-8 h-8"
                          >
                            <Heart size={16} className="text-terracotta-dark" />
                          </Button>
                        </div>
                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Button 
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm text-walnut hover:bg-white/100 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg font-medium rounded-full"
                            size="sm"
                          >
                            Quick View
                          </Button>
                        </div>
                      </div>
                      <div className="p-5 flex flex-col gap-2 bg-white">
                        <div className="flex items-center gap-1">
                          <LeafyGreen className="text-sage-vivid h-4 w-4" />
                          <span className="text-xs text-sage-darker font-medium">100% Natural</span>
                        </div>
                        <h3 className="font-serif text-lg font-medium text-walnut group-hover:text-terracotta-dark transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-terracotta-dark font-semibold">{product.price}</p>
                        <Button 
                          className="w-full mt-2 bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-dark hover:to-terracotta-darker text-white flex items-center justify-center gap-2 group"
                          onClick={() => handleAddToCart(product)}
                        >
                          <Plus size={16} className="group-hover:rotate-90 transition-transform duration-300" />
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-6">
            <CarouselPrevious className="static relative transform-none bg-white hover:bg-terracotta hover:text-white text-terracotta border-terracotta rounded-full transition-colors" />
            <CarouselNext className="static relative transform-none bg-white hover:bg-terracotta hover:text-white text-terracotta border-terracotta rounded-full transition-colors" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedProducts;