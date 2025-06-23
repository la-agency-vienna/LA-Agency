'use client';

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-normal ring-offset-background transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 tracking-wide uppercase",
  {
    variants: {
      variant: {
        default: "bg-[var(--brand-accent-primary)] text-[var(--brand-white)] border border-[var(--brand-accent-primary)] hover:bg-transparent hover:text-[var(--brand-accent-primary)]",
        secondary: "bg-transparent text-[var(--brand-text-primary)] border border-[var(--brand-accent-primary)] hover:bg-[var(--brand-accent-primary)] hover:text-[var(--brand-white)]",
        ghost: "text-[var(--brand-text-primary)] hover:text-[var(--brand-accent-primary)] relative",
        outline: "border border-[var(--brand-accent-primary)] bg-transparent text-[var(--brand-accent-primary)] hover:bg-[var(--brand-accent-primary)] hover:text-[var(--brand-white)]",
        link: "text-[var(--brand-accent-primary)] underline-offset-4 hover:underline",
        minimal: "text-[var(--brand-text-primary)] hover:text-[var(--brand-accent-primary)] relative",
      },
      size: {
        default: "",
        sm: "",
        lg: "",
        xl: "",
        icon: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    // Add the underline effect for ghost and minimal variants
    const ghostClasses = variant === "ghost" || variant === "minimal" ? 
      "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[var(--brand-accent-primary)] after:transition-all after:duration-500 hover:after:w-full" : "";
    
    // Responsive sizing based on size prop
    const responsiveStyles: React.CSSProperties = {
      letterSpacing: '0.1em',
      fontWeight: 400,
      fontSize: size === 'sm' ? 'clamp(0.75rem, 1.5vw, 0.875rem)' :
                size === 'lg' ? 'clamp(1rem, 2.5vw, 1.125rem)' :
                size === 'xl' ? 'clamp(1.125rem, 3vw, 1.25rem)' :
                'clamp(0.875rem, 2vw, 1rem)',
      height: size === 'sm' ? 'clamp(2.25rem, 4vw, 2.5rem)' :
              size === 'lg' ? 'clamp(3rem, 5vw, 3.5rem)' :
              size === 'xl' ? 'clamp(3.5rem, 6vw, 4rem)' :
              size === 'icon' ? 'clamp(2.25rem, 4vw, 2.5rem)' :
              'clamp(2.75rem, 4.5vw, 3rem)',
      padding: size === 'icon' ? '0' : 
               size === 'sm' ? 'clamp(0.5rem, 1vw, 0.75rem) clamp(1.5rem, 3vw, 2rem)' :
               size === 'lg' ? 'clamp(1rem, 2vw, 1.25rem) clamp(3rem, 5vw, 4rem)' :
               size === 'xl' ? 'clamp(1.25rem, 2.5vw, 1.5rem) clamp(4rem, 6vw, 5rem)' :
               'clamp(0.75rem, 1.5vw, 1rem) clamp(2rem, 4vw, 3rem)',
      width: size === 'icon' ? 'clamp(2.25rem, 4vw, 2.5rem)' : 'auto',
      ...style
    };
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), ghostClasses, className)}
        ref={ref}
        style={responsiveStyles}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants }; 