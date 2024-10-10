import { COLORS } from "@/constants/Colors";
import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OtherScreensLayout() {
  return (
    <>
      <StatusBar backgroundColor={COLORS.primary} />
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <Slot screenOptions={{ headerShown: false }} />
      </SafeAreaView>
    </>
  );
}
