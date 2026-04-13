import React, { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { typography } from "@/styles/typography";

type Size = keyof typeof typography.heading.sizes;
type Color = keyof typeof typography.heading.colors;
type Weight = keyof typeof typography.heading.weight;
type Transform = keyof typeof typography.heading.transform;
type Spacing = keyof typeof typography.heading.spacing;

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement> {
  as?: ElementType;
  size?: Size;
  color?: Color;
  weight?: Weight;
  transform?: Transform;
  spacing?: Spacing;
}

export const Heading = React.forwardRef<
  HTMLHeadingElement,
  HeadingProps
>(
  (
    {
      className,
      as: Component = "h2",
      size = "base",
      color = "default",
      weight = "medium",
      transform = "normal",
      spacing = "default",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          typography.heading.base,
          typography.heading.sizes[size],
          typography.heading.colors[color],
          typography.heading.weight[weight],
          typography.heading.transform[transform],
          typography.heading.spacing[spacing],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = "Heading";
export default Heading;