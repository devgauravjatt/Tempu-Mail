import { cn } from "@/lib/utils";
import React from "react";

const variants = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-border hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  destructive: "bg-destructive text-white hover:bg-destructive/80",
};

const sizes = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-base",
  lg: "h-12 px-6 text-lg",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "md", isLoading, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={isLoading}
        className={cn(
          "inline-flex items-center justify-center font-medium rounded-xl transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="animate-spin h-5 w-5 border-2 border-t-transparent rounded-full mr-2" />
        ) : null}

        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
