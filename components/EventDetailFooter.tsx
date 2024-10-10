import { StyleSheet, View } from "react-native";

import { COLORS, paddingHorizontal } from "@/constants/Colors";
import { Typography, Button } from "./";
import { Stars } from "@/assets";
import sizer from "@/constants/sizer";

const EventDetailFooter = () => {
  return (
    <View style={styles.main}>
      <Typography size={20} bold fontType="secondary">
        $300.00
      </Typography>
      <Button label="Buy Ticket" Icon={<Stars />} width={133} height={42} />
    </View>
  );
};

export default EventDetailFooter;

const styles = StyleSheet.create({
  main: {
    height: sizer.moderateVerticalScale(70),
    backgroundColor: COLORS.white,
    elevation: 10,
    marginHorizontal: -paddingHorizontal,
    paddingHorizontal: paddingHorizontal,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginTop:5
  },
});
