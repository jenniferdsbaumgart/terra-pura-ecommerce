import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface OrganicShapeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "blob1" | "blob2" | "blob3" | "wave";
  color?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export const OrganicShape = ({
  variant = "blob1",
  color = "bg-terracotta/10",
  size = "lg",
  className,
  ...props
}: OrganicShapeProps) => {
  
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
    xl: "w-[30rem] h-[30rem]"
  };
  
  const variantClasses = {
    blob1: "rounded-[63% 37% 54% 46% / 55% 48% 52% 45%]",
    blob2: "rounded-[41% 59% 45% 55% / 33% 56% 44% 67%]",
    blob3: "rounded-[73% 27% 59% 41% / 56% 30% 70% 44%]",
    wave: "rounded-[25% 75% 26% 74% / 53% 30% 70% 47%]"
  };
  
  return (
    <div 
      className={cn(
        sizeClasses[size],
        variantClasses[variant],
        color,
        "animate-slow-spin absolute blur-3xl opacity-50 pointer-events-none z-0",
        className
      )}
      {...props}
    />
  );
};