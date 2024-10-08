import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { baseOpacity, COLORS } from "@/constants/Colors";
import { Flex, Typography } from "@/components";
import sizer from "@/constants/sizer";

const Button = ({
  label = "Submit",
  mT = 0,
  mB = 0,
  onPress = () => {},
  bgColor = COLORS.primary,
  textColor = COLORS.black,
  height = 50,
  width = 0,
  radius = 8,
  textStyles = {},
  btnStyles = {},
  disabled = false,
  Icon = <></>,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.main,
        {
          marginTop: sizer.moderateVerticalScale(mT),
          marginBottom: sizer.moderateVerticalScale(mB),
          backgroundColor: bgColor,
          height: sizer.moderateVerticalScale(height),
          borderRadius: radius,
        },
        btnStyles,
        width && { width: width },
        disabled && { backgroundColor: COLORS.greyV3 },
      ]}
      activeOpacity={baseOpacity}
    >
      <Flex gap={11}>
        {Icon && Icon}
        <Typography medium style={{ color: textColor, ...textStyles }}>
          {label}
        </Typography>
      </Flex>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    justifyContent: "center",
  },
});
