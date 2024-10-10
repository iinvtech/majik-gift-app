import React from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import sizer from "@/constants/sizer";
import { router } from "expo-router";
import { SearchIcon } from "@/assets";

const SearchField = ({ mT = 26, Icon = SearchIcon }) => {
  return (
    <View style={[styles.main, { marginTop: sizer.moderateVerticalScale(mT) }]}>
      <TextInput style={styles.inputStyles} placeholder="Search" />
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          router.push("/user_routes/events");
        }}
        style={styles.imageView}
      >
        <Icon />
      </TouchableOpacity>
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({
  main: {
    height: sizer.moderateVerticalScale(46),
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
