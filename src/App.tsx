
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import CartDrawer from "@/components/CartDrawer";
import AppRoutes from "./AppRoutes";
import { LazyMotion, domAnimation } from "framer-motion";

const queryClient = new QueryClient();

const App = () => (
  <LazyMotion features={domAnimation}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <CartProvider>
            <Toaster />
            <Sonner />
            <CartDrawer />
            <AppRoutes />
          </CartProvider>
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </LazyMotion>
);

export default App;
