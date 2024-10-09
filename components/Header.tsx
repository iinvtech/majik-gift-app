import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-paper";

import { Flex, Typography } from "@/components";
import { BackIcon, NotificationIcon } from "@/assets";
import { baseOpacity, paddingHorizontal } from "@/constants/Colors";
import sizer from "@/constants/sizer";
import { router } from "expo-router";

interface HeaderProps {
  backBtn?: boolean;
}
const Header: React.FC<HeaderProps> = ({ backBtn }) => {
  return (
    <View style={styles.main}>
      {backBtn ? (
        <Flex alignItems="center" style={{ flex: 1 }}>
          <TouchableOpacity
            activeOpacity={baseOpacity}
            onPress={() => {
              router.back();
            }}
          >
            <BackIcon />
          </TouchableOpacity>
        </Flex>
      ) : (
        <Flex alignItems="center" justifyContent="center" style={{ flex: 1 }}>
          <Avatar.Image
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/1eb1/b334/e13d23c353c9d4b8ee1fc406955b01dc?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NuKCWZze8sz4E5eZgMXhPBTCtHlvdW2lWQbPPPalENXqpkffH9i2wd9VrcTTnu3lAFcFtPChVDNdUxz39K6v1An9uWyeod5TLkHkDRMPmdsZqzpUj61QPGiOsMdkpvneih5~4KRdVoWpYN-fWx3qndTYnqJ2jjBl~K6bLEZyLLIijrjppYYRhWJeNAN6IBcTdLAfHarusyQWs8G-04pN9M--Quk56r57fGa7MkETk0K61xPP7CrXNvbFqUbhjflnLTr7mwX7iepSguPD~kO0slH21eDhg2r8drCMCMkGuYqR35jJGk8IPnZUC4a7MxYR8QgAv3UUMn1HZbA0IE3eGg__",
            }}
            size={42}
          />
          <View
            style={{
              justifyContent: "center",
              flex: 1,
              marginLeft: sizer.moderateScale(12),
            }}
          >
            <Typography size={12} fontType="secondary" letterSpacing={1} bold>
              Welcome 👋🏼{" "}
            </Typography>
            <Typography size={12}>Johnson Michele</Typography>
          </View>

          <NotificationIcon width={24} height={24} />
        </Flex>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  main: {
    height: sizer.moderateScale(63),
    elevation: 8,
    backgroundColor: "#fff",
    paddingHorizontal: paddingHorizontal,
  },
});
