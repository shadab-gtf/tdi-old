import React, { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { typography } from "@/styles/typography";

type Size = keyof typeof typography.paragraph.sizes;
type Color = keyof typeof typography.paragraph.colors;
type Weight = keyof typeof typography.paragraph.weight;

export interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement> {
  as?: ElementType;
  size?: Size;
  color?: Color;
  weight?: Weight;
}

export const Paragraph = React.forwardRef<
  HTMLParagraphElement,
  ParagraphProps
>(
  (
    {
      className,
      as: Component = "p",
      size = "base",
      color = "default",
      weight = "normal",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          typography.paragraph.base,
          typography.paragraph.sizes[size],
          typography.paragraph.colors[color],
          typography.paragraph.weight[weight],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Paragraph.displayName = "Paragraph";
export default Paragraph;