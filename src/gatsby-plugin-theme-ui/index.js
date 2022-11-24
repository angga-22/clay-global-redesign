import { theme as defaultTheme } from "@thepuzzlers/pieces";
import { Breakpoints } from "../helper/breakpoints";


export default {
  config: {
    initialColorModeName: 'light',
  },
  rawColors: {
    primary: '#07c',
    modes: {
      light: { primary: '#07c' },
      dark: { primary: '#242827' }
    }
  },
  colors: {
    primary: "#FFFCF9",
    secondary: "#212129",
    text: "#2E2E2E",
    background: "#FFFCF9",
    white: "#fff",
    footer: "#fCF5DE",
    banner: "#070569",
    modes: {
      dark: {
        text: '#fff',
        background: '#242827',
        primary: '#0cf',
      }
    }
  },
  fonts: {
    label: "Quincy CF",
    body: "Cera Round Pro",
  },
  fontWeights: {
    ceraBold: 700,
    quincyBold: 800,
    normal: "normal",
  },
  lineHeights: {
    body: 1,
    heading: 1.2,
  },
  letterSpacings: {
    normal: "0",
    wide: "0.25em",
  },
  text: {
    h2: {
      color: "text",
      lineHeight: "125%",
      fontFamily: "label",
      fontWeight: "normal",
      fontSize: ["40px", "50px", "38px", "51px", "56px", "55px"],
    },
    highlight: {
      color: "text",
      lineHeight: "125%",
      fontWeight: "900",
      fontSize: ["40px", "50px", "38px", "51px", "56px", "55px"],
    },
    h3: {
      color: "text",
      fontFamily: "label",
      fontWeight: "normal",
      fontSize: ["32px", "42px", "28px", "40px", "40px", "68px"],
      lineHeight: "125%",
    },
    h4: {
      color: "text",
      fontFamily: "label",
      fontWeight: "normal",
      lineHeight: "125%",
      fontSize: ["32px", "42px", "28px", "40px", "40px", "43px"],
    },
    h5: {
      color: "text",
      fontFamily: "label",
      fontWeight: "normal",
      lineHeight: "125%",
      fontSize: ["22px", "28px", "22px", "26px", "26px", "28px"],
    },
    paragraph: {
      color: "text",
      fontFamily: "body",
      lineHeight: "175%",
      fontWeight: "normal",
      fontSize: ["18px", "22px", "18px", "20px", "20px", "20px"],
    },
    smallParagraph: {
      color: "text",
      fontFamily: "body",
      lineHeight: "175%",
      fontWeight: "normal",
      fontSize: ["16px", "20px", "16px", "16px", "18px", "18px"],
    },

    button: {
      lineHeights: "175%",
      fontWeight: "ceraBold",
      fontSize: ["18px", "20px", "18px", "18px", "18px", "20px"],
      fontFamily: "body",
    },
  },
  breakpoints: [
    //phone portrait was the first value in container, total value is 6 for each container
    Breakpoints.phonePortraitXl,
    Breakpoints.phoneLandscape,
    Breakpoints.tabletPortrait,
    Breakpoints.tabletLandscape,
    Breakpoints.desktop,
  ],
  grids: defaultTheme.grids,
  forms: {
    label: {
      fontSize: "14px",
      fontFamily: "body",
      lineHeight: "125%",
      fontWeight: "normal",
    },
    input: {
      fontFamily: "body",
      fontWeight: "ceraBold",
      fontSize: "20px",
      paddingLeft: "0",
      color: "text",
      border: "none",
      outline: "none",
      mb: ["50px", "50px", "32px", "50px", "50px"],
      // background: `url(${underlineInactive})`,
      backgroundPosition: "bottom",
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      "&:focus": {
        // background: `url(${underlineActive})`,
        backgroundPosition: "bottom",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      },
    },
  },
  buttons: {
    primary: {
      variant: "text.button",
      color: "text",
      display: "inline-block",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      height: "100%",
      width: "100%",
      textAlign: "center",
      borderRadius: "12px",
      cursor: "pointer",
      backgroundColor: "white",
      border: "1px solid white",
      transition: "all 2s ease-out",
      "&:hover": {
        backgroundColor: "white",
        mask: "none",
        transition: "all 2s",
      },
    },
    darkMode: {
      variant: "text.button",
      color: "text",
      display: "inline-block",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      height: "30px",
      width: "fit-content",
      textAlign: "center",
      borderRadius: "12px",
      cursor: "pointer",
      backgroundColor: "#e8ce4c",
      border: "none",
      transition: "all 2s ease-out",
      fontSize: '13px',
      fontWeight: '500',
      "&:hover": {
        backgroundColor: "#e8ce4c",
        mask: "none",
        transition: "all 2s",
      },
    }
  },
  styles: {
    root: {
      margin: "0",
      padding: "0",
      boxSizing: "border-box",
      backgroundColor: "background",
    },
  },
};
