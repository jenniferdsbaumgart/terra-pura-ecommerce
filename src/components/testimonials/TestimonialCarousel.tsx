import { useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import TestimonialCard from "./TestimonialCard";
import { Testimonial } from "@/types/testimonial";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <AnimateOnScroll animation="scale-up" delay={200}>
      <Carousel
        opts={{
          loop: true,
        }}
        className="w-full max-w-5xl mx-auto"
        setApi={(api) => {
          api?.on('select', () => {
            setActiveIndex(api.selectedScrollSnap());
          });
        }}
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="flex items-center justify-center mt-8 gap-2">
          <CarouselPrevious className="relative transform-none static bg-white border-terracotta text-terracotta hover:bg-terracotta hover:text-white" />
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  activeIndex === index ? "bg-terracotta" : "bg-gray-300"
                }`}
                onClick={() => handleDotClick(index)}
              ></button>
            ))}
          </div>
          <CarouselNext className="relative transform-none static bg-white border-terracotta text-terracotta hover:bg-terracotta hover:text-white" />
        </div>
      </Carousel>
    </AnimateOnScroll>
  );
};

export default TestimonialCarousel;