import { ScrollView } from "react-native";

import {
  Card,
  Catagories,
  Container,
  Header,
  HorizontalFlatlist,
  SearchField,
  Typography,
} from "@/components";

export default function HomeScreen() {
  return (
    <ScrollView>
      <Container>
        <Header />
        <SearchField />
        {/* <ScrollableCards /> */}
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
  );
}
