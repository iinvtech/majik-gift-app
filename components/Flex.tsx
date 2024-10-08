import { StyleSheet, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";

interface FlexProps {
  children: ReactNode;
  alignItems?: "flex-start" | "center" | "flex-end" | "stretch";
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-between";
  gap?: number;
  flexDirection?: "row" | "column";
  style?: ViewStyle;
}

const Flex: React.FC<FlexProps> = ({
  children,
  alignItems = "flex-start",
  justifyContent = "flex-start",
  gap = 0,
  flexDirection = "row",
  style,
}) => {
  return (
    <View
      style={[
        styles.main,
        {
          alignItems: alignItems,
          gap: gap,
          justifyContent: justifyContent,
          flexDirection: flexDirection,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Flex;

const styles = StyleSheet.create({
  main: {
    // flex: 1,
    flexDirection: "row",
    // backgroundColor: "#fff",
  },
});
