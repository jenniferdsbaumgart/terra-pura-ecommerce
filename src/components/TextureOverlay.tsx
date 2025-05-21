import { cn } from "@/lib/utils";

interface TextureOverlayProps {
  variant?: "grain" | "noise" | "paper" | "dots";
  opacity?: "light" | "medium" | "dark";
  className?: string;
}

export const TextureOverlay = ({
  variant = "grain",
  opacity = "light",
  className
}: TextureOverlayProps) => {
  const opacityClass = {
    light: "opacity-[0.03]",
    medium: "opacity-[0.07]",
    dark: "opacity-[0.12]"
  };
  
  const getTextureStyle = () => {
    switch (variant) {
      case "grain":
        return `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;
      case "noise":
        return `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.7' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;
      case "paper":
        return `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.4' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;
      case "dots":
        return `radial-gradient(#000 1px, transparent 1px)`;
      default:
        return "";
    }
  };
  
  const backgroundSize = variant === "dots" ? "20px 20px" : "200px 200px";
  
  return (
    <div 
      className={cn(
        "absolute inset-0 pointer-events-none mix-blend-overlay z-10",
        opacityClass[opacity],
        className
      )}
      style={{ 
        backgroundImage: getTextureStyle(),
        backgroundSize
      }}
    />
  );
};