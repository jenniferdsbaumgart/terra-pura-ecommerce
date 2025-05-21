import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import ProductQuiz from "@/components/ProductQuiz";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      <Hero />
      <AnimateOnScroll animation="fade-up">
        <FeaturedProducts />
      </AnimateOnScroll>
      <Benefits />
      <AnimateOnScroll animation="fade-up">
        <ProductQuiz />
      </AnimateOnScroll>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;