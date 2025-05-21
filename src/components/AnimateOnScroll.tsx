import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { HTMLAttributes, ReactNode } from "react";

interface AnimateOnScrollProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  animation?: 
    | "fade-up" 
    | "fade-down" 
    | "fade-left" 
    | "fade-right" 
    | "scale-up" 
    | "scale-down";
  delay?: number;
  className?: string;
}

export const AnimateOnScroll = ({
  children,
  animation = "fade-up",
  delay = 0,
  className,
  ...props
}: AnimateOnScrollProps) => {
  const { ref, isVisible } = useScrollAnimation();
  
  const getAnimationClass = () => {
    switch (animation) {
      case "fade-up":
        return "translate-y-10 opacity-0";
      case "fade-down":
        return "-translate-y-10 opacity-0";
      case "fade-left":
        return "translate-x-10 opacity-0";
      case "fade-right":
        return "-translate-x-10 opacity-0";
      case "scale-up":
        return "scale-95 opacity-0";
      case "scale-down":
        return "scale-105 opacity-0";
      default:
        return "opacity-0";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "translate-y-0 translate-x-0 scale-100 opacity-100" : getAnimationClass(),
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
};