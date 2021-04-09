// import { colors, mediaQuery } from "@styles/styles";
import { css } from "styled-components";

export const fontFamily = {
  open: "'Open Sans', sans-serif",
  poppins: "'Poppins', sans-serif",
  raleway: "'Raleway', sans-serif",
};

export const colors = {
  black: "#0E1116",
  white: "#fff",
  darkGray: "#303947",
  lightGray: "#D1D8E2",
  gray: "#b3bccb",
  darkPrimary: "#007d53",
  primary: "#1bb385",
  danger: "#D0463C",
};

// font-family: 'Open Sans', sans-serif;
// - 400i, 400, 700
// font-family: 'Poppins', sans-serif;
// - 200, 400, 700
// font-family: 'Raleway', sans-serif;

const sizeScreen = {
  xxs: "320px",
  xs: "414px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
};

export const devicesSize = {
  xxs: `(max-width: ${sizeScreen.xxs})`,
  xs: `(max-width: ${sizeScreen.xs})`,
  sm: `(max-width: ${sizeScreen.sm})`,
  md: `(max-width: ${sizeScreen.md})`,
  lg: `(max-width: ${sizeScreen.lg})`,
  xl: `(max-width: ${sizeScreen.xl})`,
  xxl: `(max-width: ${sizeScreen.xxl})`,
};

export const textFont = (
  family = fontFamily.open,
  size = "1.6rem",
  weight = 400,
  color = colors.black,
  italic = false
) => {
  return css`
    font-family: ${family};
    font-size: ${size};
    font-weight: ${weight};
    font-style: ${italic ? "italic" : "normal"};
    color: ${color};
  `;
};

export const mediaQuery = (size, value) => {
  return `@media screen and ${devicesSize[size]}{
    ${value}
  }`;
};
