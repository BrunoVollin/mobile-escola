import React from "react";
import { DefaultTheme } from "react-native-paper";
import { ThemeProvider } from "styled-components";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#F0F0F7",
    primary: "#005AFF",
    secondaryContainer: 'transparent',
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

type ThemeProps = {
  children: React.ReactNode;
};

const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
