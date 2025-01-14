import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const spinnerVariants = cva(
  "inline-block animate-spin rounded-full border-[3px] border-current border-t-transparent",
  {
    variants: {
      variant: {
        default: "text-primary",
        secondary: "text-foreground",
      },
      size: {
        default: "size-6",
        sm: "size-4",
        lg: "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, variant, size = undefined, ...props }, ref) => {
    return (
      <div
        className={cn(spinnerVariants({ variant, size, className }))}
        aria-label="loading"
        ref={ref}
        {...props}
      />
    );
  },
);

Spinner.displayName = "Spinner";

export { Spinner, spinnerVariants };
