import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
// Update the path below if your CartContext is located elsewhere

import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const { 
    items, 
    removeItem, 
    updateQuantity, 
    cartTotal, 
    isCartOpen, 
    setIsCartOpen,
    cartCount 
  } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full max-w-sm sm:max-w-md flex flex-col h-full">
        <SheetHeader className="border-b pb-4">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-xl font-serif flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              Your Cart ({cartCount})
            </SheetTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </SheetHeader>

        {items.length > 0 ? (
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto py-4">
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.id} className="flex py-4 border-b">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border bg-cream/50">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div className="flex justify-between text-sm font-medium text-gray-900">
                        <h3 className="font-serif">{item.name}</h3>
                        <p className="ml-4 font-medium text-terracotta-dark">{item.price}</p>
                      </div>
                      <div className="flex items-end justify-between flex-1 text-sm">
                        <div className="flex items-center border rounded-md">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="p-1 hover:bg-gray-100 rounded-l-md"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-2 py-1 min-w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-100 rounded-r-md"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button
                          type="button"
                          className="text-rose-500 hover:text-rose-600 flex items-center gap-1"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" /> Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                <p>Subtotal</p>
                <p className="font-semibold text-terracotta-dark">${cartTotal}</p>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Shipping and taxes calculated at checkout.
              </p>
              <Link to="/checkout">
                <Button 
                  className="w-full bg-terracotta-dark hover:bg-terracotta-darker text-white"
                  onClick={() => setIsCartOpen(false)}
                >
                  Checkout
                </Button>
              </Link>
              <div className="mt-2 flex justify-center text-sm text-gray-500">
                <button
                  type="button"
                  className="font-medium text-terracotta-dark hover:text-terracotta"
                  onClick={() => setIsCartOpen(false)}
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center flex-1 p-8">
            <ShoppingBag className="h-16 w-16 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 text-center">Your cart is empty</h3>
            <p className="text-gray-500 text-center mt-1 max-w-xs">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Button 
              className="mt-6 bg-terracotta-dark hover:bg-terracotta-darker text-white"
              onClick={() => setIsCartOpen(false)}
            >
              Continue Shopping
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;