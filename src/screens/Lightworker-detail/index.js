import {Image, ScrollView, StyleSheet, View} from 'react-native';

import {
  BackButton,
  Container,
  EventDetailFooter,
  EventReview,
  Flex,
  Typography,
} from '../../components';
import {
  MessageIcon,
  NotificationIcon,
  Star,
  VideoCallIcon,
  ZoomMeetingIcon,
} from '../../assets';
import {COLORS, paddingHorizontal} from '../../../globals';
import {sizer} from '../../helpers';

const LightworkerDetail = () => {
  return (
    <Container>
      <BackButton Icon={NotificationIcon} />
      <ScrollView style={{marginHorizontal: -paddingHorizontal}}>
        <View
          style={{
            height: sizer.moderateVerticalScale(319),
            backgroundColor: COLORS.secondary,
            paddingTop: sizer.moderateVerticalScale(38),
          }}>
          <View
            style={{
              width: sizer.moderateScale(250),
              height: sizer.moderateVerticalScale(281),
              backgroundColor: '#EBE7DC',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/a9bd/f675/11a94eaa4ddf55f662ca173c195c402a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NsrBGWpSH75bfwl4Hc~~t~GEjaxQzDpG-ftaFJDl0haU5e0R45SAEjsil8xuHBpADLepfieLkYPRtNBXR0RwMl-5Cn3jmhoh79mtnDB1GBw944MZPAdobwNcYP39Dxn0V3vUdRhyUOP6gEjZ~An2G-NR1R9qO3IH0Ktz4HCGxSNbt9jRFuXLzbhuaZFPTmX39kUudescEyy0sZIGyjRemwiKjhtIIXR8NPiQbvsuA7Fcn8r0n9qnGspVBfzNf-16ZBx31aSgjPPvEbPHvYFyfBbWMJ-WO8Efr8xzIKzW9cc7KIp8tnEC0uX5Sa-rkXDT1xAWWZyPWBwuMcvbHLp0-Q__',
              }}
              style={{width: 236, height: 259, justifyContent: 'center'}}
            />
          </View>

          <Flex
            style={{
              width: sizer.moderateScale(260),
              height: sizer.moderateVerticalScale(40),
              backgroundColor: COLORS.primary,
              position: 'absolute',
              bottom: sizer.moderateScale(-20),
              left: sizer.moderateScale(49),
              alignItems: 'center',
              justifyContent: 'center',
            }}
            gap={51}>
            <VideoCallIcon />
            <ZoomMeetingIcon />
            <MessageIcon />
          </Flex>

          <View
            style={{
              width: sizer.moderateScale(60),
              height: sizer.moderateVerticalScale(32),
              backgroundColor: COLORS.primary,
              position: 'absolute',
              top: sizer.moderateScale(24),
              right: sizer.moderateScale(23),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Typography size={14}>On Sale</Typography>
          </View>
        </View>
        <View style={{paddingHorizontal: paddingHorizontal, marginTop: 67}}>
          <Typography size={24} fontType="secondary">
            Richo
          </Typography>

          <Flex gap={5} mT={18} alignItems="center">
            <Star />
            <Typography size={15}>4.9</Typography>
            <Typography size={12} color="#A6A6A6">
              (99 Reviews)
            </Typography>
          </Flex>

          <Typography
            light
            size={12}
            mT={22}
            letterSpacing={0.1}
            LineHeight={20}>
            Animal Healing Practitioner - Divine Gateway, led by an Animal
            Healing Practitioner, is a sanctuary dedicated to providing
            compassionate healing for animals. With a deep understanding of
            animal energy and wellness, we offer tailored healing sessions to
            address physical, emotional, and behavioral issues. Cheryl’s
            approach combines gentle techniques to restore balance and vitality
            to your beloved pets. Experience the transformative power of animal
            healing at Divine Gateway, where every session is guided by love and
            respect for all creatures great and small.
          </Typography>
          
          <EventReview />
          <EventReview />
        </View>
      </ScrollView>
      <EventDetailFooter />
    </Container>
  );
};

export default LightworkerDetail;

const styles = StyleSheet.create({});
