import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const AuthLayout = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <Stack>
          <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
      <StatusBar backgroundColor={"#D3AFC9"} />
    </>
  );
};

export default AuthLayout;
