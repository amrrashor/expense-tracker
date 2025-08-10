import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "../../../lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-[0.75rem] text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary/100 text-black shadow-xs hover:bg-primary/70 ",
        secondary:
          "border bg-transparent text-foreground border-divider hover:bg-stroke  hover:text-white",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-primary bg-transparent text-primary shadow-xs  dark:bg-input/30 dark:border-primary hover:bg-primary/10 hover:text-white",
        ghost:
          "border border-transparent text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-300",
        link: "text-primary underline-offset-4 hover:underline",
        chip: "bg-chip text-foreground",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-10 rounded-lg gap-1 px-5 has-[>svg]:px-4",
        lg: "h-12  px-6 has-[>svg]:px-4  font-medium",
        icon: "size-9",
        xs: "h-7 px-3 rounded-lg flex  items-center justify-center has-[>svg]:px-3 has-[>svg]:gap-1 ",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
