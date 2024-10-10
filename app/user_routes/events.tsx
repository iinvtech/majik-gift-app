import { StyleSheet } from "react-native";

import { BackButton, Card, Container, Flex, SearchField } from "@/components";
import { FilterIcon, NotificationIcon } from "@/assets";

const Events = () => {
  return (
    <Container>
      <BackButton title="Events" Icon={NotificationIcon} />
      <SearchField Icon={FilterIcon} />

      <Flex justifyContent="space-between" mT={24} style={{ flexWrap: "wrap" }}>
        <Card description mT={24}/>
        <Card description />
        <Card description />
        <Card description />
      </Flex>
    </Container>
  );
};

export default Events;

const styles = StyleSheet.create({});
