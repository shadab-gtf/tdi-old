import React, { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    /**
     * The HTML element or component to render.
     * Specifies the semantic HTML tag (h1, h2, h3, h4, h5, h6). Defaults to 'h2'.
     */
    as?: ElementType;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ className, as: Component = "h2", children, ...props }, ref) => {
        return (
            <Component
                ref={ref}
                className={cn(
                    "font-serif tracking-tight text-[var(--foreground)]",
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