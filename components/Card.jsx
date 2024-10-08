import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import sizer from "@/constants/sizer";
import Flex from "./Flex";
import Typography from "./Typography";

const Card = ({ mT = 0 }) => {
  return (
    <View
      style={[
        styles.main,
        { marginTop: sizer.moderateVerticalScale(mT), marginBottom: 10 },
      ]}
    >
      <Image
        source={require("../assets/images/card.png")}
        style={{
          objectFit: "contain",
        //   width: sizer.moderateScale(151),
        width: "100%",
          height: sizer.moderateVerticalScale(144),
          marginTop: sizer.moderateVerticalScale(5),
        }}
      />

      <View
        style={{
          paddingHorizontal: sizer.moderateScale(6),
          paddingBottom: sizer.moderateScale(6),
          marginTop: sizer.moderateVerticalScale(10),
        }}
      >
        <Flex justifyContent="space-between">
          <Typography size={14}>Antique Bowl</Typography>
          <Flex gap={2}>
            <Image source={require("../assets/images/star.png")} />
            <Typography size={10}>4.9</Typography>
          </Flex>
        </Flex>

        <Flex
          justifyContent="space-between"
          alignItems="center"
          style={{ marginTop: sizer.moderateVerticalScale(13) }}
        >
          <Typography size={14} bold>
            $330.00
          </Typography>
          <Typography size={10} color="#8B8B8B">
            $500.00
          </Typography>
        </Flex>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  main: {
    width: sizer.moderateVerticalScale(163),
    height: sizer.moderateVerticalScale(220),
    backgroundColor: "#fff",
    elevation: 4,
  },
});
