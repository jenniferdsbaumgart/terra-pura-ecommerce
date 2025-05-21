import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { OrganicShape } from "./OrganicShape";
import { TextureOverlay } from "./TextureOverlay";
import TestimonialCarousel from "./testimonials/TestimonialCarousel";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Texture overlay */}
      <TextureOverlay variant="grain" opacity="light" />
      
      {/* Organic shape backgrounds */}
      <OrganicShape 
        variant="blob1" 
        color="bg-sage/20" 
        className="top-20 right-[10%]"
      />
      <OrganicShape 
        variant="blob2" 
        color="bg-terracotta/10" 
        className="bottom-20 left-[5%]"
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read about the experiences of those who have made Terra Pura part of their daily routine
            </p>
          </div>
        </AnimateOnScroll>
        
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
};

export default Testimonials;