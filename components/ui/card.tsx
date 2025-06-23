import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, style, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-white/5 backdrop-blur-md border border-white/10 shadow-xl transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl",
      className
    )}
    style={{ 
      borderRadius: '6px', 
      padding: 'clamp(1.5rem, 4vw, 2rem)',
      ...style 
    }}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, style, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col p-0", className)}
    style={{ 
      gap: 'clamp(0.5rem, 1vw, 0.75rem)',
      paddingBottom: 'clamp(1rem, 2vw, 1.5rem)',
      ...style
    }}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, style, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-bold text-center leading-none tracking-tight",
      className
    )}
    style={{
      fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
      ...style
    }}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, style, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-white/70 text-center", className)}
    style={{
      fontSize: 'clamp(0.875rem, 2vw, 1rem)',
      ...style
    }}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, style, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-center", className)}
    style={{
      paddingTop: 'clamp(1rem, 2vw, 1.5rem)',
      ...style
    }}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }; 