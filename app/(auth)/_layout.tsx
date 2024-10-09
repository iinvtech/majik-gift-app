import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "@/constants/Colors";

const AuthLayout = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <Slot />
      </SafeAreaView>
      <StatusBar backgroundColor={"#D3AFC9"} />
    </>
  );
};

export default AuthLayout;
