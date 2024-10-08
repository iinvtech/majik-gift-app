import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const AuthLayout = () => {
  return (
      <>
      <StatusBar backgroundColor={"#D3AFC9"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <Stack>
          <Stack.Screen name="sign-in" options={{ headerShown: false }} />
          <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </>
  );
};

export default AuthLayout;
