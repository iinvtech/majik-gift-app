import sizer from "./sizer";

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};

export const COLORS = {
  primary: "#D3AFC9",
  secondary: "#9C90C2",
  white: "#FFFFFF",
  whiteV1: "#F5F5F5",
  whiteV2: "#F2F2F2",
  black: "#000",
  blackV1: "#49454F",
  blackV2: "#1D1B20",
  grey: "#4C4C4C",
  greyV1: "#79747E",
  greyV2: "#464646",
  greyV3: "#DBDBDB",
  greyV4: "#8593A8",
  greyV5: "#DEDEDE",
  border: "#F3F3F3",
  danger: "#B3261E",
  greyBg: "#CBCBCB",
};

export const baseOpacity = 0.6;

export const paddingHorizontal = sizer.moderateScale(25);
