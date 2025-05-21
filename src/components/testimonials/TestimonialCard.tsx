import { Star } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Testimonial } from "@/types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="bg-white rounded-xl shadow-sm p-8 relative">
        <div className="absolute -top-4 left-8 bg-terracotta text-white p-2 rounded-full">
          <svg 
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M10 11L7 15H5C4.44772 15 4 14.5523 4 14V10C4 9.44772 4.44772 9 5 9H9C9.55228 9 10 9.44772 10 10V11ZM19 11L16 15H14C13.4477 15 13 14.5523 13 14V10C13 9.44772 13.4477 9 14 9H18C18.5523 9 19 9.44772 19 10V11Z"
              fill="currentColor"
            />
          </svg>
        </div>
        
        <div className="flex mb-4 mt-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < testimonial.rating ? "text-terracotta fill-terracotta" : "text-gray-300"}
            />
          ))}
        </div>
        
        <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
        
        <div className="flex items-center">
          {testimonial.image && (
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img 
                src={testimonial.image} 
                alt={testimonial.author}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div>
            <p className="font-medium text-gray-900">— {testimonial.author}</p>
            {testimonial.role && (
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            )}
          </div>
        </div>
      </div>
      
      {testimonial.product && (
        <div className="bg-cream rounded-xl p-6 md:p-8">
          <h3 className="font-serif font-medium mb-3">Product Used:</h3>
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
              <AspectRatio ratio={1/1}>
                <img 
                  src={testimonial.product.image} 
                  alt={testimonial.product.name} 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
            <div>
              <h4 className="font-medium">{testimonial.product.name}</h4>
              <p className="text-sm text-gray-600 mt-1">Natural Skincare</p>
              <a href="#products" className="text-terracotta text-sm mt-2 inline-block hover:underline">
                View Product
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;