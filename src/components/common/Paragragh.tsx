import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {}

export const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          "text-base font-serif text-[var(--paragraph)] mx-auto mb-6",
          className
        )}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph";

export default Paragraph;