
export interface TestimonialProduct {
  name: string;
  image: string;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role?: string;
  image?: string;
  rating: number;
  product?: TestimonialProduct;
}
