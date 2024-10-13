import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {sizer} from '../../helpers';
import {COLORS} from '../../../globals';
import Typography from '../Typography';
import Button from '../Button';
import {BlackStarSvg, Stars} from '../../assets';

const ScrollableCard = () => {
  return (
    <View style={styles.main}>
      <View
        style={{
          position: 'absolute',
          top: sizer.moderateVerticalScale(10),
          right: sizer.moderateScale(16),
        }}>
        <BlackStarSvg />
      </View>

      <View
        style={{
          position: 'absolute',
          top: sizer.moderateVerticalScale(10),
          left: sizer.moderateScale(16),
        }}>
        <BlackStarSvg width={8} height={8} />
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: sizer.moderateVerticalScale(10),
          right: sizer.moderateScale(110),
        }}>
        <BlackStarSvg width={9} height={9} />
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Typography size={24} bold fontType="secondary">
            Antique Bowl
          </Typography>

          <Typography mT={6} light>
            Singing Bowl
          </Typography>

          <Button
            label="Buy Now"
            height={24}
            width={100}
            Icon={<Stars width={11} height={11} />}
            mT={21}
            textSize={14}
            gap={3}
            bgColor={COLORS.secondary}
          />
        </View>

        <Image
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/4591/8e7c/3d83301ad33d6ad48685bc7ad2a91283?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AzwACm9MM-giVm93vim-B6VjXgtPQfG0bTc9fsxI2vOgIQsiGbV4Gjlj4UTzPdYZVP6U3lfv~i~1diuIE-w6zZPPwuwunL4CwkUyu1HYYqJjM0r5LEOpyrQLs-q6UeAt-692JKekhFltVaKhq7-x3D5t6lbPEEoyQUvqYG5QxCwUeW-f4JeXwFraAtcB47aF4FTdenoAYJUKUPP57jhUMkm79xmTFYbF0KLxgzFOYdzPu1Pyn7WMxYm7QgbXeil1e1tqdSJTi5SjxAuei4YoGeHkm5ZI6zoIOwMxhUug6Ejtx5ye~tQdvElIp9BxtRSssR-o3hPwDFY9rE6HQFnyFQ__',
          }}
          width={100}
          height={110}
        />
      </View>
    </View>
  );
};

export default ScrollableCard;

const styles = StyleSheet.create({
  main: {
    marginTop: sizer.moderateVerticalScale(24),
    height: sizer.moderateVerticalScale(151),
    borderRadius: 19,
    padding: 20,
    backgroundColor: COLORS.primary,
  },
});
