import { StyleSheet, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import sizer from "@/constants/sizer";
import { COLORS } from "@/constants/Colors";

interface ContainerProps {
  children: ReactNode;
  style?: ViewStyle;
}

const Container: React.FC<ContainerProps> = ({ children, style }) => {
  return <View style={[styles.main, style]}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: sizer.moderateScale(25),
    backgroundColor: COLORS.white,
    flex: 1,
  },
});
