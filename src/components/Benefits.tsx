import { Vegan, Organic, CrueltyFree } from "./Icons";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { OrganicShape } from "./OrganicShape";
import { TextureOverlay } from "./TextureOverlay";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Button } from "./ui/button";
import { BadgeCheck } from "lucide-react";

const Benefits = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-sage/20 to-cream relative overflow-hidden">
      {/* Texture overlay */}
      <TextureOverlay variant="paper" opacity="medium" />
      
      {/* Organic shapes */}
      <OrganicShape 
        variant="blob3" 
        color="bg-white/40" 
        size="xl" 
        className="-left-32 -bottom-20" 
      />
      <OrganicShape 
        variant="blob1" 
        color="bg-terracotta-dark/15" 
        size="md" 
        className="top-20 right-10" 
      />
      <OrganicShape 
        variant="wave" 
        color="bg-sage-dark/20" 
        size="lg" 
        className="bottom-10 right-0" 
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-walnut">Our Commitment</h2>
            <p className="text-walnut-light max-w-2xl mx-auto text-lg">
              Clean beauty products crafted with care and respect for you and the planet
            </p>
            <Separator className="w-24 h-1 bg-terracotta-dark mx-auto mt-8" />
          </div>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <AnimateOnScroll 
            animation="fade-right" 
            delay={100}
            className="lg:mt-8"
          >
            <Card className="overflow-hidden backdrop-blur-sm bg-white/90 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group border-l-4 border-l-terracotta-dark">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-terracotta-dark to-terracotta/50"></div>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-terracotta/30 to-terracotta-dark/70 rounded-full shadow-inner p-3 group-hover:scale-110 transition-transform duration-300">
                    <Vegan className="w-8 h-8 text-terracotta-darker" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-xl font-bold text-walnut">Vegan</h3>
                      <HoverCard>
                        <HoverCardTrigger>
                          <BadgeCheck className="w-5 h-5 text-terracotta-dark" />
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80 bg-white/95 shadow-lg border border-terracotta-dark/20">
                          <p className="text-sm font-medium text-walnut-light">Certified by Vegan Society and PETA's Beauty Without Bunnies program</p>
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                    <p className="text-walnut-light mt-3 font-medium">
                      Our products are 100% vegan and never tested on animals, with purely plant-based ingredients from sustainable sources. We're committed to ethical beauty that respects all living beings.
                    </p>
                    <Button variant="ghost" className="mt-4 text-terracotta-dark hover:bg-terracotta-dark/10 hover:text-terracotta-darker p-0 h-auto font-bold">
                      Learn more
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimateOnScroll>
          
          <AnimateOnScroll 
            animation="fade-up" 
            delay={200} 
            className="lg:mt-16"
          >
            <Card className="overflow-hidden backdrop-blur-sm bg-white/90 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group border-l-4 border-l-sage-dark">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sage-dark to-sage/50"></div>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-sage/30 to-sage-dark/70 rounded-full shadow-inner p-3 group-hover:scale-110 transition-transform duration-300">
                    <Organic className="w-8 h-8 text-sage-darker" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-xl font-bold text-walnut">Organic</h3>
                      <HoverCard>
                        <HoverCardTrigger>
                          <BadgeCheck className="w-5 h-5 text-sage-dark" />
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80 bg-white/95 shadow-lg border border-sage-dark/20">
                          <p className="text-sm font-medium text-walnut-light">Ingredients certified by USDA Organic and COSMOS Organic standards</p>
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                    <p className="text-walnut-light mt-3 font-medium">
                      We use certified organic ingredients sourced directly from trusted farms around the world. Our partnerships ensure the highest quality ingredients that are free from harmful pesticides and chemicals.
                    </p>
                    <Button variant="ghost" className="mt-4 text-sage-dark hover:bg-sage-dark/10 hover:text-sage-darker p-0 h-auto font-bold">
                      Learn more
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimateOnScroll>
          
          <AnimateOnScroll 
            animation="fade-left" 
            delay={300} 
            className="lg:mt-24 md:col-span-2 lg:col-span-1"
          >
            <Card className="overflow-hidden backdrop-blur-sm bg-white/90 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group border-l-4 border-l-coral">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-coral to-coral/50"></div>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-coral/30 to-coral-dark/70 rounded-full shadow-inner p-3 group-hover:scale-110 transition-transform duration-300">
                    <CrueltyFree className="w-8 h-8 text-coral-dark" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-xl font-bold text-walnut">Cruelty-Free</h3>
                      <HoverCard>
                        <HoverCardTrigger>
                          <BadgeCheck className="w-5 h-5 text-coral" />
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80 bg-white/95 shadow-lg border border-coral/30">
                          <p className="text-sm font-medium text-walnut-light">Certified by Leaping Bunny Program and PETA's Beauty Without Bunnies</p>
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                    <p className="text-walnut-light mt-3 font-medium">
                      We're proudly certified cruelty-free, never testing on animals at any stage of product development. We believe beauty should never come at the cost of suffering.
                    </p>
                    <Button variant="ghost" className="mt-4 text-coral-dark hover:bg-coral/10 hover:text-coral-dark p-0 h-auto font-bold">
                      Learn more
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
