import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
  {
    variants: {
      variant: {
        primary:
          "bg-walnut-700 text-cream-50 shadow-soft hover:bg-walnut-800 hover:shadow-lift hover:-translate-y-0.5",
        gold:
          "bg-gold-sheen bg-[length:200%_auto] text-charcoal-900 shadow-gold hover:bg-[position:right_center] hover:-translate-y-0.5",
        whatsapp:
          "bg-[#1FA855] text-white shadow-soft hover:bg-[#178a44] hover:-translate-y-0.5 hover:shadow-lift",
        outline:
          "border border-walnut-300/70 bg-transparent text-walnut-700 hover:border-teak hover:text-teak-600 hover:bg-cream-100/60",
        ghost: "text-cream-50/90 hover:text-teak-200",
        light:
          "bg-cream-50 text-walnut-700 shadow-soft hover:-translate-y-0.5 hover:shadow-lift",
      },
      size: {
        sm: "h-10 px-5 text-xs",
        default: "h-12 px-7",
        lg: "h-14 px-9 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render styles onto the single child element (e.g. <a> or <Link>) instead of a <button>. */
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size, className }));

    // Slot behaviour: merge button styles/props onto the provided child element.
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{
        className?: string;
        [key: string]: unknown;
      }>;
      return React.cloneElement(child, {
        ...props,
        ...child.props,
        ref,
        className: cn(classes, child.props.className),
      });
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
