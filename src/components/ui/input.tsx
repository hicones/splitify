import * as React from "react";
import { IconType } from "react-icons";

import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  icon?: IconType; // Propriedade para o ícone com tipagem IconType
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon: Icon, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex items-center h-12 w-full rounded-lg bg-foreground px-3 py-1 text-base shadow-sm focus-visible:outline-none focus-within:ring-2 transition-all ring-primary disabled:cursor-not-allowed ",
          className,
        )}
      >
        {Icon && <Icon className="mr-2 text-text-primary size-4" />}
        <input
          type={type}
          ref={ref}
          className="w-full bg-transparent border-0 placeholder:text-text-secondary text-text-primary focus:ring-0 outline-0 md:text-sm"
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
