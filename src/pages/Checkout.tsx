import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Trash2, CreditCard, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { items, removeItem, updateQuantity, cartTotal, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order processing
    setOrderPlaced(true);
    clearCart();
    toast({
      title: "Order placed successfully!",
      description: "Your order has been placed and will be processed shortly.",
    });
    
    // Redirect to home after 3 seconds
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 pt-28 pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white p-8 rounded-lg shadow-sm border flex flex-col items-center justify-center py-16">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4 text-center">Thank You for Your Order!</h1>
              <p className="text-gray-600 text-center max-w-md mb-8">
                Your order has been placed successfully. We'll send you an email confirmation shortly.
              </p>
              <Button onClick={() => navigate('/')} className="bg-terracotta-dark hover:bg-terracotta-darker text-white">
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 pt-28 pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Button onClick={() => navigate('/')} className="bg-terracotta-dark hover:bg-terracotta-darker text-white">
                Start Shopping
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 pt-28 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="bg-cream/50 p-6 rounded-lg">
                <h2 className="text-xl font-serif font-semibold mb-4">Order Summary</h2>
                <div className="space-y-4 mb-6 max-h-96 overflow-auto">
                  {items.map(item => (
                    <div key={item.id} className="flex items-center gap-4 py-2 border-b">
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-600">
                          Qty: {item.quantity} × {item.price}
                        </p>
                      </div>
                      <div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-rose-500 hover:text-rose-600 hover:bg-rose-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${cartTotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>$5.00</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                    <span>Total</span>
                    <span className="text-terracotta-dark">${(parseFloat(cartTotal) + 5).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkout Form */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="text-xl font-serif font-semibold mb-6">Shipping Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required className="mt-1" />
                  </div>
                </div>
                <div className="mt-4">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" required className="mt-1" />
                </div>
                <div className="mt-4">
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" required className="mt-1" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input id="state" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="zip">Zip Code</Label>
                    <Input id="zip" required className="mt-1" />
                  </div>
                </div>

                <h2 className="text-xl font-serif font-semibold mt-8 mb-6">Payment Information</h2>
                <div>
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input id="cardName" required className="mt-1" />
                </div>
                <div className="mt-4 relative">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <div className="relative">
                    <Input 
                      id="cardNumber" 
                      required 
                      className="mt-1 pl-10" 
                      placeholder="**** **** **** ****"
                    />
                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-4">
                  <div>
                    <Label htmlFor="expiry">Expiration Date</Label>
                    <Input id="expiry" required className="mt-1" placeholder="MM/YY" />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" required className="mt-1" placeholder="***" />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full mt-8 bg-terracotta-dark hover:bg-terracotta-darker text-white font-medium text-lg py-6"
                >
                  Place Order - ${(parseFloat(cartTotal) + 5).toFixed(2)}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;