import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import {
  BackButton,
  Container,
  EventDetailFooter,
  EventReview,
  Flex,
  Header,
  LightWorker,
  Typography,
} from "@/components";
import { NotificationIcon, Star } from "@/assets";
import sizer from "@/constants/sizer";
import { COLORS, paddingHorizontal } from "@/constants/Colors";

const EventDetail = () => {
  return (
    <Container>
      <BackButton Icon={NotificationIcon} />

      <ScrollView style={{ marginHorizontal: -paddingHorizontal }}>
        <View>
          <Image
            source={require("@/assets/images/event-detail-header-img.png")}
          />
          <View style={styles.discountBadge}>
            <Typography size={10}>20% Off</Typography>
          </View>
        </View>

        <View style={{ paddingHorizontal: paddingHorizontal }}>
          <Flex mT={28} alignItems="center" justifyContent="space-between">
            <Typography size={24} fontType="secondary">
              Event Namess
            </Typography>

            <Flex gap={5} alignItems="center">
              <Star />
              <Typography size={15}>4.9</Typography>
              <Typography size={12} color="#A6A6A6">
                (99 Reviews)
              </Typography>
            </Flex>
          </Flex>

          <Flex alignItems="center" mT={14}>
            <Typography size={12}>1,050 </Typography>
            <Typography size={12} color="#A6A6A6">
              {" "}
              people are joined
            </Typography>
          </Flex>

          <Typography
            light
            size={12}
            mT={22}
            letterSpacing={0.1}
            LineHeight={20}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            mattis, felis sit amet mattis vehicula, neque diam posuere nibh, at
            interdum est dui nec diam. Pellentesque et mi risus. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Aliquam ultrices dignissim elementum. Nunc ullamcorper
            nulla a mattis aliquet. Ut molestie justo.
          </Typography>

          <Typography mT={27}>Schedule</Typography>

          <Flex mT={10} gap={6} alignItems="center">
            <Typography size={14}>Date:</Typography>
            <Typography size={12} light>
              Oct 10,2024
            </Typography>
          </Flex>

          <Flex mT={10} gap={6} alignItems="center">
            <Typography size={14}>Day:</Typography>
            <Typography size={12} light>
              Tuesday
            </Typography>
          </Flex>

          <Flex mT={10} gap={6} alignItems="center">
            <Typography size={14}>Time:</Typography>
            <Typography size={12} light>
              09:00 am
            </Typography>
          </Flex>

          <Flex mT={10} gap={6} alignItems="center">
            <Typography size={14}>Venue:</Typography>
            <Typography size={12} light>
              Zoom
            </Typography>
          </Flex>

          <Typography mT={22} size={14} letterSpacing={0.1}>
            Lightworkers
          </Typography>

          <Flex style={{ flex: 1 }} mT={15}>
            <View style={{ flex: 0.5 }}>
              <LightWorker />
            </View>
            <View style={{ flex: 0.5 }}>
              <LightWorker />
            </View>
          </Flex>

          <Flex style={{ flex: 1 }} mT={10}>
            <View style={{ flex: 0.5 }}>
              <LightWorker />
            </View>
            <View style={{ flex: 0.5 }}>
              <LightWorker />
            </View>
          </Flex>

          <Typography mT={22}>Reviews</Typography>

          <EventReview />
          <EventReview />
        </View>
      </ScrollView>

      <EventDetailFooter />
    </Container>
  );
};

export default EventDetail;

const styles = StyleSheet.create({
  headerView: {
    height: sizer.moderateVerticalScale(319),
    backgroundColor: COLORS.secondary,
  },
  discountBadge: {
    backgroundColor: COLORS.primary,
    position: "absolute",
    padding: sizer.moderateScale(4),
    alignSelf: "flex-start",
    marginTop: sizer.moderateVerticalScale(2),
    top: sizer.moderateVerticalScale(24),
    right: sizer.moderateScale(24),
  },
});
