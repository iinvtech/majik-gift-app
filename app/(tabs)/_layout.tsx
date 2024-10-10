import { Tabs } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { COLORS, Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { HomeFocusedTab, HomeOutlinedTab } from "@/assets";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <StatusBar backgroundColor={COLORS.primary} />
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
            headerShown: false,
            tabBarStyle: {
              height: 70,
              paddingBottom: 10,
            },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Home",
              tabBarIcon: ({ color, focused }) =>
                focused ? <HomeFocusedTab /> : <HomeOutlinedTab />,
            }}
          />
          <Tabs.Screen
            name="search"
            options={{
              title: "Search",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={focused ? "code-slash" : "code-slash-outline"}
                  color={color}
                />
              ),
            }}
          />

          <Tabs.Screen
            name="wishlist"
            options={{
              title: "wishlist",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={focused ? "code-slash" : "code-slash-outline"}
                  color={color}
                />
              ),
            }}
          />

          <Tabs.Screen
            name="profile"
            options={{
              title: "Profile",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name={focused ? "code-slash" : "code-slash-outline"}
                  color={color}
                />
              ),
            }}
          />
        </Tabs>
      </SafeAreaView>
    </>
  );
}
