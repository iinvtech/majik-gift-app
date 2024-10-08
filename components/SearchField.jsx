import React from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import sizer from "@/constants/sizer";

const SearchField = () => {
  return (
    <View style={styles.main}>
      <TextInput style={styles.inputStyles} placeholder="Search" />
      <TouchableOpacity activeOpacity={0.6} style={styles.imageView}>
        <Image source={require("../assets/images/search.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({
  main: {
    height: sizer.moderateVerticalScale(46),
    marginTop: sizer.moderateVerticalScale(26),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputStyles: {
    borderWidth: sizer.moderateScale(0.5),
    borderRadius: 25,
    overflow: "hidden",
    paddingHorizontal: sizer.moderateScale(25),
    width: "84%",
  },
  imageView: {
    borderWidth: sizer.moderateScale(0.5),
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    width: "14%",
  },
});
