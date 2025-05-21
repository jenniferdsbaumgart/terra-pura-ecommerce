import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Check, ChevronLeft, ChevronRight, ShoppingBag, RefreshCcw } from "lucide-react";

interface QuizQuestion {
  question: string;
  options: string[];
}

const questions: QuizQuestion[] = [
  {
    question: "What's your skin type?",
    options: ["Dry", "Oily", "Combination", "Sensitive", "Normal"],
  },
  {
    question: "What's your main skin concern?",
    options: ["Fine lines & wrinkles", "Blemishes", "Dryness", "Dullness", "Redness"],
  },
  {
    question: "How would you describe your skincare routine?",
    options: ["Minimal", "Basic", "Moderate", "Extensive"],
  },
];

const recommendationsByType = {
  "Dry": [
    {
      name: "Argan Moisture Cream",
      description: "Rich hydration for dry skin",
      image: "https://images.unsplash.com/photo-1608248543583-83ee8c3cd09c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Rejuvenating Night Oil",
      description: "Overnight restoration for parched skin",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
  ],
  "Oily": [
    {
      name: "Clay Purifying Mask",
      description: "Weekly detox for oily skin",
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Balancing Toner",
      description: "Controls excess oil production",
      image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
  ],
  "Combination": [
    {
      name: "Multi-Zone Face Serum",
      description: "Targeted care for different facial zones",
      image: "https://images.unsplash.com/photo-1608248597202-9cbaecd4aafc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Pore Refining Solution",
      description: "Balances T-zone while hydrating dry areas",
      image: "https://images.unsplash.com/photo-1607602674383-62c5b03cc275?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
  ],
  "Sensitive": [
    {
      name: "Soothing Aloe Cream",
      description: "Gentle formula for sensitive skin",
      image: "https://images.unsplash.com/photo-1608248543583-83ee8c3cd09c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Calming Face Mist",
      description: "Instant relief for irritation",
      image: "https://images.unsplash.com/photo-1608248597205-25692d98791b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
  ],
  "Normal": [
    {
      name: "Rosehip Facial Serum",
      description: "Maintains healthy skin balance",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Daily Protective Moisturizer",
      description: "All-day hydration and protection",
      image: "https://images.unsplash.com/photo-1608248543583-83ee8c3cd09c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
  ],
};

const ProductQuiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { toast } = useToast();
  
  const handleNext = () => {
    if (step < questions.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setStep(step + 1);
        setIsAnimating(false);
      }, 300);
    } else {
      setShowResults(true);
      toast({
        title: "Quiz Complete!",
        description: "We've found your perfect products based on your answers.",
      });
    }
  };
  
  const handlePrevious = () => {
    if (step > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setStep(step - 1);
        setIsAnimating(false);
      }, 300);
    }
    if (showResults) {
      setShowResults(false);
    }
  };
  
  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[step] = answer;
    setAnswers(newAnswers);
  };
  
  const isCurrentQuestionAnswered = () => {
    return !!answers[step];
  };
  
  const resetQuiz = () => {
    setStep(0);
    setAnswers([]);
    setShowResults(false);
    toast({
      title: "Quiz Reset",
      description: "Let's find your perfect products!",
    });
  };

  const getRecommendedProducts = () => {
    // Use the first answer (skin type) to determine recommendations
    const skinType = answers[0];
    return recommendationsByType[skinType as keyof typeof recommendationsByType] || recommendationsByType["Normal"];
  };

  const productRecommendations = getRecommendedProducts();

  return (
    <section className="py-20 bg-cream/70">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-terracotta/10 rounded-lg mb-4">
              <Check className="w-6 h-6 text-terracotta-darker mr-2" />
              <span className="text-terracotta-darker font-medium">Personalized Recommendations</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Find Your Perfect Product</h2>
            <p className="text-gray-600">
              Answer a few questions and we'll recommend the perfect Terra Pura products for your unique skin
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {!showResults ? (
              <div className={`p-8 transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
                {/* Progress bar */}
                <div className="w-full bg-gray-100 h-3 rounded-full mb-8">
                  <div 
                    className="bg-walnut h-3 rounded-full transition-all relative"
                    style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                  >
                    <span className="absolute right-0 -top-7 text-xs font-medium text-walnut">
                      {step + 1}/{questions.length}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-serif mb-6">{questions[step].question}</h3>
                
                <div className="mb-8">
                  <Select
                    value={answers[step] || ""}
                    onValueChange={handleAnswer}
                  >
                    <SelectTrigger className="w-full border-2 border-gray-200 focus:border-terracotta-dark focus:ring-2 focus:ring-terracotta-dark focus:ring-offset-2">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      {questions[step].options.map((option) => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={step === 0}
                    className="border-terracotta-dark text-terracotta-darker font-medium hover:bg-terracotta/10 focus:ring-2 focus:ring-terracotta-darker focus:ring-offset-2 flex items-center gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </Button>
                  
                  <Button
                    onClick={handleNext}
                    disabled={!isCurrentQuestionAnswered()}
                    className="bg-walnut hover:bg-walnut-dark text-white font-medium focus:ring-2 focus:ring-walnut focus:ring-offset-2 disabled:bg-gray-400 flex items-center gap-2"
                  >
                    {step === questions.length - 1 ? "See Results" : "Next"}
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="p-8 text-center">
                <div className="mb-6 inline-block bg-walnut/20 p-4 rounded-full">
                  <Check className="w-12 h-12 text-walnut" />
                </div>
                
                <h3 className="text-2xl font-serif font-medium mb-3">Your Personalized Recommendations</h3>
                <p className="text-gray-600 mb-8">Based on your skin profile, we've selected the perfect products for you!</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {productRecommendations.map((product, index) => (
                    <div key={index} className="bg-cream/50 p-5 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 duration-300">
                      <div className="relative">
                        <img 
                          src={product.image}
                          alt={product.name} 
                          className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <div className="absolute top-3 right-3 bg-terracotta-darker text-white text-xs px-3 py-1 rounded-full">
                          Recommended
                        </div>
                      </div>
                      <h4 className="font-medium font-serif text-lg">{product.name}</h4>
                      <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                      <Button className="w-full bg-walnut hover:bg-walnut-dark text-white font-medium focus:ring-2 focus:ring-walnut focus:ring-offset-2 group flex items-center justify-center gap-2">
                        <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        Add to Cart
                      </Button>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={resetQuiz}
                    className="border-terracotta-dark text-terracotta-darker font-medium hover:bg-terracotta/10 focus:ring-2 focus:ring-terracotta-darker focus:ring-offset-2 flex items-center gap-2"
                  >
                    <RefreshCcw className="w-4 h-4" />
                    Retake Quiz
                  </Button>
                  
                  <Button
                    className="bg-walnut hover:bg-walnut-dark text-white font-medium focus:ring-2 focus:ring-walnut focus:ring-offset-2 flex items-center gap-2"
                  >
                    Shop Recommendations
                    <ShoppingBag className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          <p className="text-sm text-gray-500 text-center mt-6">
            Your answers help us find the best products for your skin's unique needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductQuiz;