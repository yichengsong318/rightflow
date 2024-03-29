module.exports = {
  theme: {
    container: {
      center: true
    },
    screens: {
      smMax: { max: "640px" },
      mdMax: { max: "768px" },
      lgMax: { max: "1024px" },
      xlMax: { max: "1280px" },
      xxlMax: { max: "1440px" },
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      xxl: "1440px"
      // => @media (min-width: 1440px) { ... }
    },
    transitionProperty: {
      // defaults to these values
      none: "none",
      all: "all",
      color: "color",
      bg: "background-color",
      border: "border-color",
      colors: ["color", "background-color", "border-color"],
      opacity: "opacity",
      transform: "transform"
    },
    transitionDuration: {
      // defaults to these values
      default: "250ms",
      "0": "0ms",
      "100": "100ms",
      "250": "250ms",
      "500": "500ms",
      "750": "750ms",
      "1000": "1000ms"
    },
    transitionTimingFunction: {
      // defaults to these values
      default: "ease",
      linear: "linear",
      ease: "ease",
      "ease-in": "ease-in",
      "ease-out": "ease-out",
      "ease-in-out": "ease-in-out"
    },
    transitionDelay: {
      // defaults to these values
      default: "0ms",
      "0": "0ms",
      "100": "100ms",
      "250": "250ms",
      "500": "500ms",
      "750": "750ms",
      "1000": "1000ms"
    },
    willChange: {
      // defaults to these values
      auto: "auto",
      scroll: "scroll-position",
      contents: "contents",
      opacity: "opacity",
      transform: "transform"
    },
    extend: {}
  },
  variants: {
    // all the following default to ["responsive"]
    transitionProperty: ["responsive"],
    transitionDuration: ["responsive"],
    transitionTimingFunction: ["responsive"],
    transitionDelay: ["responsive"],
    willChange: ["responsive"]
  },
  plugins: [require("tailwindcss-transitions")()]
};
