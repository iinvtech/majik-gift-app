import React from "react";
import { Text, TextStyle } from "react-native";
import sizer from "../constants/sizer";

interface TypographyProps {
  children: React.ReactNode;
  color?: string;
  bold?: boolean;
  medium?: boolean;
  light?: boolean;
  size?: number;
  mT?: number;
  mB?: number;
  textAlign?: TextStyle["textAlign"];
  LineHeight?: number;
  numberOfLines?: number;
  ellipsizeMode?: "head" | "middle" | "tail" | "clip";
  letterSpacing?: number;
  underline?: boolean;
  style?: TextStyle;
  fontFamily?: string;
  fontFamily2?: string;
  fontType?: "primary" | "secondary";
}

const Typography: React.FC<TypographyProps> = ({
  children,
  color = "#000",
  bold = false,
  medium = false,
  light = false,
  size = 16,
  mT = 0,
  mB = 0,
  textAlign = "left",
  LineHeight,
  numberOfLines,
  ellipsizeMode,
  letterSpacing,
  underline = false,
  style = {},
  fontFamily = "LibreBodoni",
  fontFamily2 = "Lato",
  fontType = "primary",
}) => {
  const selectedFontFamily = fontType === "primary" ? fontFamily2 : fontFamily;

  const styledText: TextStyle = {
    color: color,
    fontSize: sizer.fontScale(size),
    marginTop: sizer.moderateVerticalScale(mT),
    marginBottom: sizer.moderateVerticalScale(mB),
    textAlign: textAlign,
    lineHeight: LineHeight,
    letterSpacing: letterSpacing,
    textDecorationLine: underline ? "underline" : undefined,
    fontFamily: bold
      ? `${selectedFontFamily}Bold`
      : medium
      ? `${selectedFontFamily}-Medium`
      : light
      ? `${selectedFontFamily}-Light`
      : selectedFontFamily,
    ...style,
  };

  return (
    <Text
      style={styledText}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    >
      {children}
    </Text>
  );
};

export default Typography;
