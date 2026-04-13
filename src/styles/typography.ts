export const typography = {
  paragraph: {
    base: "font-serif leading-snug",
    sizes: {
      xs: "text-xs",
      sm: "text-xs md:text-sm",
      base: "text-sm md:text-base !text-[#424242]",
      lg: "text-lg md:text-xl",
    },
    colors: {
      default: "text-gray-400",
      muted: "text-gray-500",
      dark: "!text-black",
      light: "text-gray-300",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
      light:"font-light"
    },
    
  },

  heading: {
    base: "font-serif",
    sizes: {
      xs:"text-base",
      sm: "text-base md:text-lg",
      base: "text-xl md:text-2xl",
      lg: "text-lg sm:text-xl md:text-2xl",   
      xl: "text-2xl md:text-4xl",
      xxl: "text-3xl md:text-5xl",
      custom: "text-lg md:text-xl",     
    },

    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },

    colors: {
      default: "text-black",
      muted: "text-gray-600",
      accent: "!text-accent",
    },

    transform: {
      normal: "",
      uppercase: "uppercase",
    },

    spacing: {
      default: "mb-5",
      none: "mb-0",
    },
  },
};