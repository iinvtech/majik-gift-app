import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator } from "react-native-paper";
import { useFonts } from "expo-font";

import {
  Card,
  Catagories,
  Container,
  Header,
  HorizontalFlatlist,
  ScrollableCards,
  SearchField,
  Typography,
} from "@/components";
import { ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function HomeScreen() {
  let [fontsLoaded] = useFonts({
    LibreBodoni: require("./../../assets/fonts/static/LibreBodoni-Regular.ttf"),
    LibreBodoniBold: require("./../../assets/fonts/static/LibreBodoni-Bold.ttf"),
    LibreBodoniMedium: require("./../../assets/fonts/static/LibreBodoni-Medium.ttf"),
    Lato: require("./../../assets/fonts/Lato-Regular.ttf"),
    LatoBold: require("./../../assets/fonts/Lato-Bold.ttf"),
    LatoLight: require("./../../assets/fonts/Lato-Light.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <>
      <StatusBar backgroundColor={"#D3AFC9"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <Header />
        <ScrollView>
          <Container>
            <SearchField />
            <ScrollableCards />
            <Typography fontType="secondary" mT={24} size={18} bold>
              Catagories
            </Typography>

            <HorizontalFlatlist
              data={[1, 2, 3, 4, 5, 6]}
              renderItem={({ item }) => <Catagories mT={30} />}
              contentContainerStyle={{ gap: 20 }}
            />

            <Typography fontType="secondary" mT={24} size={18}>
              Most Popular 🔥
            </Typography>

            <HorizontalFlatlist
              data={[1, 2, 3]}
              renderItem={({ item }) => <Card mT={30} />}
              contentContainerStyle={{ gap: 20 }}
            />

            <Typography fontType="secondary" mT={24} size={18}>
              Upcoming Events
            </Typography>

            <HorizontalFlatlist
              data={[1, 2, 3]}
              renderItem={({ item }) => <Card mT={30} />}
              contentContainerStyle={{ gap: 20 }}
            />
          </Container>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
