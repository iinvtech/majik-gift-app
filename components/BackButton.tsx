import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-paper";

import { Flex, Typography } from "@/components";
import { BackIcon, NotificationIcon } from "@/assets";
import { baseOpacity, paddingHorizontal } from "@/constants/Colors";
import sizer from "@/constants/sizer";
import { router } from "expo-router";
import { ReactNode } from "react";

interface HeaderProps {
  backBtn?: boolean;
  title?: string;
  Icon?: ReactNode;
}
const BackButton: React.FC<HeaderProps> = ({ title, Icon }) => {
  return (
    <View style={styles.main}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        style={{ flex: 1 }}
      >
        <Flex gap={8}>
          <TouchableOpacity
            activeOpacity={baseOpacity}
            onPress={() => {
              router.back();
            }}
          >
            <BackIcon />
          </TouchableOpacity>
          {title && <Typography>{title}</Typography>}
        </Flex>

        {Icon && <Icon />}
      </Flex>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  main: {
    height: sizer.moderateScale(63),
    elevation: 8,
    backgroundColor: "#fff",
    paddingHorizontal: paddingHorizontal,
    marginHorizontal: -paddingHorizontal,
  },
});
