import {Image, ScrollView, StyleSheet, View} from 'react-native';

import {
  BackButton,
  Container,
  EventDetailFooter,
  EventReview,
  Flex,
  Typography,
} from '../../components';

import {sizer} from '../../helpers';
import {COLORS, paddingHorizontal} from '../../../globals';
import {NotificationIcon, Star} from '../../assets';
import {useNavigation} from '@react-navigation/native';
const hexToRGBA = (hex, opacity) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const EventDetail = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <BackButton Icon={NotificationIcon} />

      <ScrollView style={{marginHorizontal: -paddingHorizontal}}>
        <View>
          <Image
            source={require('../../assets/images/event-detail-header-img.png')}
          />
          <View style={styles.discountBadge}>
            <Typography size={10}>20% Off</Typography>
          </View>

          <Flex
            style={{
              height: sizer.moderateVerticalScale(60),
              width: sizer.moderateScale(250),
              bottom: sizer.moderateVerticalScale(28),
              left: sizer.moderateScale(60),
              position: 'absolute',
              paddingHorizontal: sizer.moderateScale(4),
              backgroundColor: hexToRGBA(COLORS.secondary, 0.7),
              borderRadius: 6,
            }}
            alignItems="center"
            justifyContent="space-between">
            <View
              style={{
                backgroundColor: hexToRGBA(COLORS.white, 0.8),
                borderRadius: 6,
                padding: 3,
              }}>
              <Image
                source={{
                  uri: 'https://s3-alpha-sig.figma.com/img/4591/8e7c/3d83301ad33d6ad48685bc7ad2a91283?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AzwACm9MM-giVm93vim-B6VjXgtPQfG0bTc9fsxI2vOgIQsiGbV4Gjlj4UTzPdYZVP6U3lfv~i~1diuIE-w6zZPPwuwunL4CwkUyu1HYYqJjM0r5LEOpyrQLs-q6UeAt-692JKekhFltVaKhq7-x3D5t6lbPEEoyQUvqYG5QxCwUeW-f4JeXwFraAtcB47aF4FTdenoAYJUKUPP57jhUMkm79xmTFYbF0KLxgzFOYdzPu1Pyn7WMxYm7QgbXeil1e1tqdSJTi5SjxAuei4YoGeHkm5ZI6zoIOwMxhUug6Ejtx5ye~tQdvElIp9BxtRSssR-o3hPwDFY9rE6HQFnyFQ__',
                }}
                style={{width: 45, height: 45}}
              />
            </View>

            <View
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                borderRadius: 6,
                padding: 3,
              }}>
              <Image
                source={{
                  uri: 'https://s3-alpha-sig.figma.com/img/4591/8e7c/3d83301ad33d6ad48685bc7ad2a91283?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AzwACm9MM-giVm93vim-B6VjXgtPQfG0bTc9fsxI2vOgIQsiGbV4Gjlj4UTzPdYZVP6U3lfv~i~1diuIE-w6zZPPwuwunL4CwkUyu1HYYqJjM0r5LEOpyrQLs-q6UeAt-692JKekhFltVaKhq7-x3D5t6lbPEEoyQUvqYG5QxCwUeW-f4JeXwFraAtcB47aF4FTdenoAYJUKUPP57jhUMkm79xmTFYbF0KLxgzFOYdzPu1Pyn7WMxYm7QgbXeil1e1tqdSJTi5SjxAuei4YoGeHkm5ZI6zoIOwMxhUug6Ejtx5ye~tQdvElIp9BxtRSssR-o3hPwDFY9rE6HQFnyFQ__',
                }}
                style={{width: 45, height: 45, opacity: 0.6}}
              />
            </View>

            <View
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.3)',

                borderRadius: 6,
                padding: 3,
              }}>
              <Image
                source={{
                  uri: 'https://s3-alpha-sig.figma.com/img/4591/8e7c/3d83301ad33d6ad48685bc7ad2a91283?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AzwACm9MM-giVm93vim-B6VjXgtPQfG0bTc9fsxI2vOgIQsiGbV4Gjlj4UTzPdYZVP6U3lfv~i~1diuIE-w6zZPPwuwunL4CwkUyu1HYYqJjM0r5LEOpyrQLs-q6UeAt-692JKekhFltVaKhq7-x3D5t6lbPEEoyQUvqYG5QxCwUeW-f4JeXwFraAtcB47aF4FTdenoAYJUKUPP57jhUMkm79xmTFYbF0KLxgzFOYdzPu1Pyn7WMxYm7QgbXeil1e1tqdSJTi5SjxAuei4YoGeHkm5ZI6zoIOwMxhUug6Ejtx5ye~tQdvElIp9BxtRSssR-o3hPwDFY9rE6HQFnyFQ__',
                }}
                style={{width: 45, height: 45, opacity: 0.6}}
              />
            </View>

            <View
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.3)',

                borderRadius: 6,
                padding: 3,
              }}>
              <Image
                source={{
                  uri: 'https://s3-alpha-sig.figma.com/img/4591/8e7c/3d83301ad33d6ad48685bc7ad2a91283?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AzwACm9MM-giVm93vim-B6VjXgtPQfG0bTc9fsxI2vOgIQsiGbV4Gjlj4UTzPdYZVP6U3lfv~i~1diuIE-w6zZPPwuwunL4CwkUyu1HYYqJjM0r5LEOpyrQLs-q6UeAt-692JKekhFltVaKhq7-x3D5t6lbPEEoyQUvqYG5QxCwUeW-f4JeXwFraAtcB47aF4FTdenoAYJUKUPP57jhUMkm79xmTFYbF0KLxgzFOYdzPu1Pyn7WMxYm7QgbXeil1e1tqdSJTi5SjxAuei4YoGeHkm5ZI6zoIOwMxhUug6Ejtx5ye~tQdvElIp9BxtRSssR-o3hPwDFY9rE6HQFnyFQ__',
                }}
                style={{width: 45, height: 45, opacity: 0.6}}
              />
            </View>

            <View
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.3)',

                borderRadius: 6,
                padding: 3,
              }}>
              <Image
                source={{
                  uri: 'https://s3-alpha-sig.figma.com/img/4591/8e7c/3d83301ad33d6ad48685bc7ad2a91283?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AzwACm9MM-giVm93vim-B6VjXgtPQfG0bTc9fsxI2vOgIQsiGbV4Gjlj4UTzPdYZVP6U3lfv~i~1diuIE-w6zZPPwuwunL4CwkUyu1HYYqJjM0r5LEOpyrQLs-q6UeAt-692JKekhFltVaKhq7-x3D5t6lbPEEoyQUvqYG5QxCwUeW-f4JeXwFraAtcB47aF4FTdenoAYJUKUPP57jhUMkm79xmTFYbF0KLxgzFOYdzPu1Pyn7WMxYm7QgbXeil1e1tqdSJTi5SjxAuei4YoGeHkm5ZI6zoIOwMxhUug6Ejtx5ye~tQdvElIp9BxtRSssR-o3hPwDFY9rE6HQFnyFQ__',
                }}
                style={{width: 45, height: 45, opacity: 0.6}}
              />
            </View>
          </Flex>
        </View>

        <View style={{paddingHorizontal: paddingHorizontal}}>
          <Flex mT={28} alignItems="center" justifyContent="space-between">
            <Typography size={24} fontType="secondary">
              Event Names
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
              {' '}
              people are joined
            </Typography>
          </Flex>

          <Typography
            light
            size={12}
            mT={22}
            letterSpacing={0.1}
            LineHeight={20}>
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

          <Flex style={{flex: 1}}>
            <Flex alignItems="center" mT={15} gap={9} style={{flex: 0.5}}>
              <Image source={require('../../assets/images/lightworker.png')} />
              <View>
                <Typography size={12}>Cherly</Typography>
                <Typography size={12} light>
                  Host
                </Typography>
              </View>
            </Flex>

            <Flex alignItems="center" mT={15} gap={9} style={{flex: 0.5}}>
              <Image source={require('../../assets/images/lightworker.png')} />
              <Typography size={12}>Benjamin Graham </Typography>
            </Flex>
          </Flex>

          <Typography mT={22}>Reviews</Typography>

          <EventReview />
          <EventReview />
        </View>
      </ScrollView>

      <EventDetailFooter
        btnText="Order"
        onPress={() => {
          navigation.navigate('OrderSummary');
        }}
      />
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
    position: 'absolute',
    padding: sizer.moderateScale(4),
    alignSelf: 'flex-start',
    marginTop: sizer.moderateVerticalScale(2),
    top: sizer.moderateVerticalScale(24),
    right: sizer.moderateScale(24),
  },
});
