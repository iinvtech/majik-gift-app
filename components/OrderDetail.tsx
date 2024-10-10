import sizer from "@/constants/sizer";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Typography from "./Typography";
import Flex from "./Flex";

const OrderDetail = ({ item }) => {
  return (
    <View style={styles.main}>
      <View
        style={{
          backgroundColor:
            item?.status === "Pending"
              ? "#FAC80047"
              : item?.status === "Cancelled"
              ? "#C200004D"
              : "#00A10547",
          padding: sizer.moderateScale(4),
          alignSelf: "flex-start",
          marginTop: sizer.moderateVerticalScale(2),
        }}
      >
        <Typography color={item.statusColor} size={14} bold>
          {item.status}
        </Typography>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginTop: sizer.moderateVerticalScale(16),
        }}
      >
        <View style={{ flex: 0.4 }}>
          <Typography size={12}>Name</Typography>
          <Typography size={12} mT={2}>
            Quantity
          </Typography>
          <Typography size={12} mT={2}>
            Date
          </Typography>
          <Typography size={12} mT={2}>
            Shipping
          </Typography>
          <Typography size={12} mT={2}>
            Payment Method
          </Typography>
        </View>

        <View style={{ flex: 0.3 }}>
          <Typography size={12} light>
            {item.productName}
          </Typography>
          <Typography size={12} light mT={2}>
            {item.quantity}
          </Typography>
          <Typography size={12} light mT={2}>
            {item.orderDate}
          </Typography>
          <Typography size={12} light mT={2}>
            {item.shippingAddress}
          </Typography>
          <Typography size={12} light mT={2}>
            {item.paymentMethod}
          </Typography>
        </View>

        <View
          style={{
            flex: 0.3,
          }}
        >
          <item.Icon />
        </View>
      </View>

      <Flex alignItems="center" justifyContent="space-between">
        <Typography color={"#9C90C2"} size={14} bold>
          $55.00
        </Typography>

        <Typography size={10} light>
          oct 10,2024
        </Typography>
      </Flex>
    </View>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  main: {
    // width: sizer.moderateScale(380),
    height: sizer.moderateVerticalScale(200),
    marginBottom: sizer.moderateVerticalScale(18),
    paddingHorizontal: sizer.moderateScale(12),
    paddingVertical: sizer.moderateVerticalScale(14),
    borderWidth: 1,
    borderColor: "#DBDBDB",
  },
});
