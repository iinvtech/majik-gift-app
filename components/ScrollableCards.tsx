import { StyleSheet, Text, View } from "react-native";
import React from "react";
import sizer from "@/constants/sizer";

const ScrollableCards = () => {
  return (
    <View style={styles.main}>
      <Text>ScrollableCards</Text>
    </View>
  );
};

export default ScrollableCards;

const styles = StyleSheet.create({
  main: {
    marginTop: sizer.moderateVerticalScale(24),
    // width: sizer.moderateScale(380),
    height: sizer.moderateVerticalScale(151),
    borderRadius: 19,
    backgroundColor: "#9C90C2",
  },
});
