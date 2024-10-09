import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { ActivityIndicator } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "@/constants/Colors";
import { Button } from "@/components";
import { LogoSvg } from "@/assets";

const index = () => {
  const [fontsLoaded] = useFonts({
    LibreBodoni: require("../assets/fonts/static/LibreBodoni-Regular.ttf"),
    LibreBodoniBold: require("../assets/fonts/static/LibreBodoni-Bold.ttf"),
    LibreBodoniMedium: require("../assets/fonts/static/LibreBodoni-Medium.ttf"),
    Lato: require("../assets/fonts/Lato-Regular.ttf"),
    LatoBold: require("../assets/fonts/Lato-Bold.ttf"),
    LatoLight: require("../assets/fonts/Lato-Light.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loaderCont}>
        <ActivityIndicator size={40} color={COLORS.primary} />
      </View>
    );
  }

  const isLoggedIn = false;

  if (isLoggedIn) {
    return <Redirect href="/(tabs)" />;
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <LogoSvg />
        <View style={{ width: 200 }}>
          <Button
            label="Navigate to login"
            onPress={() => {
              router.navigate("/(auth)");
            }}
          />
        </View>
      </SafeAreaView>
      <StatusBar backgroundColor={COLORS.primary} />
    </>
  );
};

export default index;

const styles = StyleSheet.create({
  loaderCont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
