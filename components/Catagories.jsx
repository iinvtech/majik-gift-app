import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import sizer from "@/constants/sizer";
import Flex from "./Flex";
import Typography from "./Typography";

const Catagories = ({ mT = 0 }) => {
  return (
    <View style={[styles.main, { marginTop: sizer.moderateVerticalScale(mT) }]}>
      <View style={styles.circle}>
        <Image source={require("../assets/images/workshop.png")} />
      </View>

      <Typography size={10} textAlign="center" mT={7}>
        Classes & Workshops
      </Typography>
    </View>
  );
};

export default Catagories;

const styles = StyleSheet.create({
  main: {
    width: sizer.moderateScale(56),
    alignItems: "center",
  },
  circle: {
    width: sizer.moderateScale(53),
    height: sizer.moderateScale(53),
    borderRadius: 100,
    backgroundColor: "#D3AFC9",
    alignItems: "center",
    justifyContent: "center",
  },
});
