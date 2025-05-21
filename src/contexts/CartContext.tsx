import { createContext, useContext, useState, ReactNode } from 'react';
import { useToast } from "@/hooks/use-toast";

export interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: string;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();

  const addItem = (product: Omit<CartItem, 'quantity'>) => {
    setItems(currentItems => {
      // Check if item already exists in cart
      const existingItemIndex = currentItems.findIndex(item => item.id === product.id);
      
      if (existingItemIndex > -1) {
        // Item exists, increment quantity
        const newItems = [...currentItems];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + 1
        };
        
        toast({
          title: "Item quantity updated",
          description: `${product.name} quantity increased to ${newItems[existingItemIndex].quantity}`,
        });
        
        return newItems;
      } else {
        // Item doesn't exist, add new item with quantity 1
        toast({
          title: "Item added to cart",
          description: `${product.name} has been added to your cart`,
        });
        
        return [...currentItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeItem = (id: number) => {
    setItems(currentItems => {
      const itemToRemove = currentItems.find(item => item.id === id);
      if (itemToRemove) {
        toast({
          title: "Item removed",
          description: `${itemToRemove.name} has been removed from your cart`,
        });
      }
      
      return currentItems.filter(item => item.id !== id);
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    
    setItems(currentItems => {
      return currentItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      );
    });
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
    });
  };

  // Calculate cart count (total number of items)
  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  // Calculate cart total price
  const cartTotal = items.reduce((total, item) => {
    // Extract numeric value from price string (remove $ and any other non-numeric characters)
    const priceValue = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
    return total + (priceValue * item.quantity);
  }, 0).toFixed(2);

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      cartCount,
      cartTotal,
      isCartOpen,
      setIsCartOpen
    }}>
      {children}
    </CartContext.Provider>
  );
};
